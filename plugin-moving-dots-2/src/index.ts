// !!!TO DO: modify timing of trial to be 5 seconds for purposes of playback file collection. fix bugs

import { JsPsych, JsPsychPlugin, ParameterType, TrialType } from "jspsych";

import { version } from "../package.json";

const info = <const>{
  name: "plugin-moving-dots-2",
  version: version,
  parameters: {
    /** Number of dots to display on the screen */
    dot_count: {
      type: ParameterType.INT,
      default: 10,
    },
    /** Maximum initial distance from the center location for dots */
    max_initial_distance: {
      type: ParameterType.INT,
      default: 100,
    },
    /** Duration of the flash in milliseconds */
    flash_duration: {
      type: ParameterType.INT,
      default: 200,
    },
    /** Delay before the dot flashes in milliseconds */
    pre_flash_duration: {
      type: ParameterType.INT,
      default: 2500,
    },
    /** Duration of the post-flash in milliseconds */
    post_flash_duration: {
      type: ParameterType.INT,
      default: 1500,
    },
    /** Initial level of control the mouse has over the dots (0-100) */
    initial_control_level: {
      type: ParameterType.INT,
      default: 100,
    },
    /** Change in the level of control of the flashing dot after it changes (0-100) */
    control_change_level: {
      type: ParameterType.INT,
      default: 30,
    },
    /** 2-dimensional array of mouse data for playback */
    playback: {
      type: ParameterType.COMPLEX,
      array: true,
      default: [] as Array<{ dx: number; dy: number; t: number }>,
      params: {
        dx: {
          type: ParameterType.INT,
        },
        dy: {
          type: ParameterType.INT,
        },
        t: {
          type: ParameterType.INT,
        },
      },
    },
  },
  data: {
    /** Magnitude of the control change (e.g., 30, 70, 100) */
    control_change: {
      type: ParameterType.INT,
    },
  },
  // When you run build on your plugin, citations will be generated here based on the information in the CITATION.cff file.
  citations: "__CITATIONS__",
};

type Info = typeof info;

/**
 * **plugin-moving-dots-2**
 *
 * Handles moving series of dots that move at the same speed in response to user input; one dot will flash red and change control level. Implemented as part of an experiment for COGS-219; replicating the paper "Control Changes the Way We Look at the World" by Wen & Haggard.
 *
 * @author Ollie & Noah
 * @see {@link /plugin-moving-dots-2/README.md}
 */
class MovingDots2Plugin implements JsPsychPlugin<Info> {
  static info = info;

  constructor(private jsPsych: JsPsych) {}

  trial(display_element: HTMLElement, trial: TrialType<Info>) {
    // Create a canvas to display the dots
    const canvas = document.createElement("canvas");

    // Change canvas size to window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    display_element.appendChild(canvas);
    const ctx = canvas.getContext("2d");

    // Initialize dot positions and control levels
    const dots: { x: number; y: number; control: number }[] = [];

    // Flash one dot and change its control level after a random delay
    const flashIndex = 0;
    const controlChange = trial.control_change_level;

    let flashStartTime: number | null = null;
    let hasFlashed = false;
    let isFlashing = false;

    const data = [];
    let frame = 0;

    let startTime = Date.now();
    let lastFrameTime = startTime;

    // Handle mouse/touchpad input
    let dx = 0;
    let dy = 0;

    let isFirstMove = true;


    function sidebox(control, change) {
      if (control == 100) {
        document.getElementById("box1").style.backgroundColor = "black";
      } else {
        document.getElementById("box1").style.backgroundColor = "black";
      }
      if (change == 100) {
        document.getElementById("box2").style.backgroundColor = "black";
        document.getElementById("box3").style.backgroundColor = "black";
      } else if (change == 70) {
        document.getElementById("box2").style.backgroundColor = "white";
        document.getElementById("box3").style.backgroundColor = "black";
      } else {
        document.getElementById("box2").style.backgroundColor = "black";
        document.getElementById("box3").style.backgroundColor = "white";
      }
    }

    const initializeDots = () => {
      for (let i = 0; i < trial.dot_count; i++) {
        const angle = Math.random() * 2 * Math.PI;
        const distance = Math.random() * trial.max_initial_distance;
        dots.push({
          x: canvas.width / 2 + distance * Math.cos(angle),
          y: canvas.height / 2 + distance * Math.sin(angle),
          control: trial.initial_control_level, // Initial control level
        });
      }
    };

    // Render dots, cross, and control value
    const renderDotsAndCross = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Render cross at the center
      ctx.beginPath();
      ctx.moveTo(canvas.width / 2 - 10, canvas.height / 2);
      ctx.lineTo(canvas.width / 2 + 10, canvas.height / 2);
      ctx.moveTo(canvas.width / 2, canvas.height / 2 - 10);
      ctx.lineTo(canvas.width / 2, canvas.height / 2 + 10);
      ctx.strokeStyle = "black";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Render dots
      dots.forEach((dot, index) => {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 5, 0, 2 * Math.PI);
        if (isFlashing) {
          ctx.fillStyle = index === flashIndex ? "red" : "black";
        } else {
          ctx.fillStyle = "black";
        }
        ctx.fill();
      });
    };

    const mouseMoveListener = (e: MouseEvent) => {
      dx = e.movementX;
      dy = e.movementY;
    };

    // Function to calculate new dx and dy
    const doTheMath = (
      inputDX: number,
      inputDY: number,
      playbackDX: number,
      playbackDY: number,
      control: number
    ) => {

      const epsilon = 0.00001; // a small constant to prevent division by zero

      // get magnitude of mouse vector
      const mySpeed = Math.sqrt(Math.pow(inputDX, 2) + Math.pow(inputDY, 2)) + epsilon;
      
      // get unit vector of mouse vector
      const unitVector = { x: inputDX / mySpeed, y: inputDY / mySpeed };

      // get magnitude of playback vector
      const playbackSpeed = Math.sqrt(
        Math.pow(playbackDX, 2) + Math.pow(playbackDY, 2)
      ) + epsilon;

      // get unit vector of playback vector
      const playbackUnitVector = {
        x: playbackDX / playbackSpeed,
        y: playbackDY / playbackSpeed,
      };

      // blend the two vectors based on control
      // if control is 1 (100%), use only the mouse vector
      // if control is 0, use only the playback vector

      const newDX = (control * unitVector.x + (1 - control) * playbackUnitVector.x) * mySpeed;
      const newDY = (control * unitVector.y + (1 - control) * playbackUnitVector.y) * mySpeed;
      
      return { newDX, newDY };
    };

    // Update dot positions based on control
    const updateDots = (vx: number, vy: number) => {
      dots.forEach((dot) => {
        const { newDX, newDY } = doTheMath(
          vx,
          vy,
          trial.playback[frame].dx,
          trial.playback[frame].dy,
          dot.control / 100
        );
        dot.x += newDX;
        dot.y += newDY;
      });
    };

    // End trial
    const endTrial = () => {
      document.removeEventListener("mousemove", mouseMoveListener);
      display_element.innerHTML = ""; // Clear the canvas
      this.jsPsych.finishTrial({
        control_change: controlChange,
        mouse_data: data,
      });
    };

    const animate = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;

      lastFrameTime = currentTime;

      // working backwards from the end of the trial
      
      // check if the trial is over
      if(elapsedTime >= trial.pre_flash_duration + trial.post_flash_duration) {
        endTrial();
        return;
      }

      // check if we are switching to the post-flash period
      if (isFlashing && currentTime - flashStartTime >= trial.flash_duration) {
        isFlashing = false;
        hasFlashed = true;
      }

      // check if it is time to flash
      if (elapsedTime >= trial.pre_flash_duration && !isFlashing && !hasFlashed) {
        flashStartTime = Date.now();
        isFlashing = true;
        if (trial.initial_control_level === 100) {
          dots[flashIndex].control = dots[flashIndex].control - controlChange;
        } else if (trial.initial_control_level === 0) {
          dots[flashIndex].control = dots[flashIndex].control + controlChange;
        }
      }
      // run the next loop of the animation
      updateDots(dx, dy);
      renderDotsAndCross();
      sidebox(trial.initial_control_level, trial.control_change_level);
      data.push({ dx, dy });
      dx = 0;
      dy = 0;
      frame++;
      requestAnimationFrame(animate);
    };

    initializeDots();
    renderDotsAndCross();
    document.addEventListener("mousemove", mouseMoveListener);
    animate();
  }
}

export default MovingDots2Plugin;
