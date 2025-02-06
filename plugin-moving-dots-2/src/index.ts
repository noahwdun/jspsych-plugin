
// !!!TO DO: modify timing of trial to be 5 seconds for purposes of playback file collection. fix bugs

import { JsPsych, JsPsychPlugin, ParameterType, TrialType } from "jspsych";

import { version } from "../package.json";

const info = <const>{
  name: "plugin-moving-dots-2",
  version: version,
  parameters: {
    /** Array of control change levels (e.g., 30%, 70%, 100%) */
    control_levels: {
      type: ParameterType.INT,
      array: true,
      default: [30, 70, 100],
    },
    /** Number of dots to display on the screen */
    dot_count: {
      type: ParameterType.INT,
      default: 10,
    },
    /** Duration of the flash in milliseconds */
    flash_duration: {
      type: ParameterType.INT,
      default: 200,
    },
    /** Total duration of the trial in milliseconds */
    trial_duration: {
      type: ParameterType.INT,
      default: 5000,
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
      type: ParameterType.OBJECT,
      array: true,
      default: [] as Array<{ dx: number; dy: number; t: number }>,
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

    //FIND THIS
    canvas.width = 800;
    canvas.height = 600;

    display_element.appendChild(canvas);
    const ctx = canvas.getContext("2d");

    const INITIAL_DISTANCE_FROM_CENTER = 100; // Set maximum distance from the center

    // Initialize dot positions and control levels
    const dots: { x: number; y: number; control: number }[] = [];
    for (let i = 0; i < trial.dot_count; i++) {
      const angle = Math.random() * 2 * Math.PI;
      const distance = Math.random() * INITIAL_DISTANCE_FROM_CENTER;
      dots.push({
        x: canvas.width / 2 + distance * Math.cos(angle),
        y: canvas.height / 2 + distance * Math.sin(angle),
        control: trial.initial_control_level, // Initial control level
      });
    }

    // Flash one dot and change its control level after a random delay
    const flashIndex = 0;
    const controlChange = trial.control_change_level;
    const flashDelay = 2500 + Math.random() * 500; // Random delay between 2500-3000 ms

    let flashStartTime: number | null = null;
    let hasFlashed = false;
    let controlModified = false;

    const data = [];
    let frame = 0;

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
        if (flashStartTime && Date.now() - flashStartTime < trial.flash_duration) {
          ctx.fillStyle = index === flashIndex ? "red" : "black";
        } else {
          ctx.fillStyle = "black";
        }
        ctx.fill();
      });
    };

    // Handle mouse/touchpad input
    let mouseX = 0,
      mouseY = 0,
      dx = 0,
      dy = 0;
    let isFirstMove = true;
    canvas.addEventListener("mousemove", (e) => {
      const newMouseX = e.offsetX;
      const newMouseY = e.offsetY;
      if (isFirstMove) {
        mouseX = newMouseX;
        mouseY = newMouseY;
        isFirstMove = false;
      } else {
        dx = newMouseX - mouseX;
        dy = newMouseY - mouseY;
        mouseX = newMouseX;
        mouseY = newMouseY;
      }
    });

    // Function to calculate new dx and dy
    const doTheMath = (inputDX: number, inputDY: number, playbackDX: number, playbackDY: number, control: number) => {
      const S = Math.sqrt(Math.pow(inputDX, 2) + Math.pow(inputDY, 2)) / Math.sqrt(Math.pow(playbackDX, 2) + Math.pow(playbackDY, 2));
      const newDX = (control * inputDX) + ((1 - control) * playbackDX * S);
      const newDY = (control * inputDY) + ((1 - control) * playbackDY * S);
      return { newDX, newDY };
    };

    // Update dot positions based on control
    const updateDots = (vx: number, vy: number) => {
      dots.forEach((dot, index) => {
        if (index === flashIndex && hasFlashed) {
          const { newDX, newDY } = doTheMath(vx, vy, trial.playback[frame].dx, trial.playback[frame].dy, dot.control / 100);
          dot.x += newDX;
          dot.y += newDY;
        } else {
          dot.x += vx * (trial.initial_control_level / 100); // Initial control level for other dots
          dot.y += vy * (trial.initial_control_level / 100);
        }
      });
    };

    // End trial
    const endTrial = () => {
      display_element.innerHTML = ""; // Clear the canvas
      this.jsPsych.finishTrial({
        control_change: controlChange,
        mouse_data: data,
      });
    };

    // Animation loop
    let startTime = Date.now();
    let lastFrameTime = startTime;
    const animate = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;
      const t = elapsedTime;
      lastFrameTime = currentTime;

      if (elapsedTime >= flashDelay && !flashStartTime) {
        flashStartTime = Date.now();
      }
      if (flashStartTime && Date.now() - flashStartTime >= trial.flash_duration) {
        hasFlashed = true;
        if (!controlModified) {
          if (trial.initial_control_level === 100) {
            dots[flashIndex].control = dots[flashIndex].control - controlChange;
          } else if (trial.initial_control_level === 0) {
            dots[flashIndex].control = dots[flashIndex].control + controlChange;
          }
          controlModified = true;
        }
      }
      if (flashStartTime && Date.now() - flashStartTime < 1500) {
        updateDots(dx, dy);
        renderDotsAndCross();
        data.push({ dx, dy, t, frame });
        frame++;
        requestAnimationFrame(animate);
      } else {
        endTrial();
      }
    };
    animate();
  }
}

export default MovingDots2Plugin;