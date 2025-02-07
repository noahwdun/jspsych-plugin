'use strict';

var jspsych = require('jspsych');

var version = "0.0.1";

const info = {
  name: "plugin-moving-dots-2",
  version,
  parameters: {
    /** Array of control change levels (e.g., 30%, 70%, 100%) */
    control_levels: {
      type: jspsych.ParameterType.INT,
      array: true,
      default: [30, 70, 100]
    },
    /** Number of dots to display on the screen */
    dot_count: {
      type: jspsych.ParameterType.INT,
      default: 10
    },
    /** Maximum initial distance from the center location for dots */
    max_initial_distance: {
      type: jspsych.ParameterType.INT,
      default: 100
    },
    /** Duration of the flash in milliseconds */
    flash_duration: {
      type: jspsych.ParameterType.INT,
      default: 200
    },
    /** Delay before the dot flashes in milliseconds */
    pre_flash_duration: {
      type: jspsych.ParameterType.INT,
      default: 2500
    },
    /** Duration of the post-flash in milliseconds */
    post_flash_duration: {
      type: jspsych.ParameterType.INT,
      default: 1500
    },
    /** Total duration of the trial in milliseconds */
    trial_duration: {
      type: jspsych.ParameterType.INT,
      default: 5e3
    },
    /** Initial level of control the mouse has over the dots (0-100) */
    initial_control_level: {
      type: jspsych.ParameterType.INT,
      default: 100
    },
    /** Change in the level of control of the flashing dot after it changes (0-100) */
    control_change_level: {
      type: jspsych.ParameterType.INT,
      default: 30
    },
    /** 2-dimensional array of mouse data for playback */
    playback: {
      type: jspsych.ParameterType.COMPLEX,
      array: true,
      default: [],
      params: {
        dx: {
          type: jspsych.ParameterType.INT
        },
        dy: {
          type: jspsych.ParameterType.INT
        },
        t: {
          type: jspsych.ParameterType.INT
        }
      }
    }
  },
  data: {
    /** Magnitude of the control change (e.g., 30, 70, 100) */
    control_change: {
      type: jspsych.ParameterType.INT
    }
  },
  // When you run build on your plugin, citations will be generated here based on the information in the CITATION.cff file.
  citations: "__CITATIONS__"
};
class MovingDots2Plugin {
  constructor(jsPsych) {
    this.jsPsych = jsPsych;
  }
  static {
    this.info = info;
  }
  trial(display_element, trial) {
    const canvas = document.createElement("canvas");
    canvas.width = 800;
    canvas.height = 600;
    display_element.appendChild(canvas);
    const ctx = canvas.getContext("2d");
    const dots = [];
    const flashIndex = 0;
    const controlChange = trial.control_change_level;
    let flashStartTime = null;
    let hasFlashed = false;
    let isFlashing = false;
    const data = [];
    let frame = 0;
    let startTime = Date.now();
    let dx = 0;
    let dy = 0;
    const initializeDots = () => {
      for (let i = 0; i < trial.dot_count; i++) {
        const angle = Math.random() * 2 * Math.PI;
        const distance = Math.random() * trial.max_initial_distance;
        dots.push({
          x: canvas.width / 2 + distance * Math.cos(angle),
          y: canvas.height / 2 + distance * Math.sin(angle),
          control: trial.initial_control_level
          // Initial control level
        });
      }
    };
    const renderDotsAndCross = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.moveTo(canvas.width / 2 - 10, canvas.height / 2);
      ctx.lineTo(canvas.width / 2 + 10, canvas.height / 2);
      ctx.moveTo(canvas.width / 2, canvas.height / 2 - 10);
      ctx.lineTo(canvas.width / 2, canvas.height / 2 + 10);
      ctx.strokeStyle = "black";
      ctx.lineWidth = 2;
      ctx.stroke();
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
    const mouseMoveListener = (e) => {
      dx = e.movementX;
      dy = e.movementY;
    };
    const doTheMath = (inputDX, inputDY, playbackDX, playbackDY, control) => {
      const epsilon = 1e-5;
      const mySpeed = Math.sqrt(Math.pow(inputDX, 2) + Math.pow(inputDY, 2)) + epsilon;
      const unitVector = { x: inputDX / mySpeed, y: inputDY / mySpeed };
      const playbackSpeed = Math.sqrt(
        Math.pow(playbackDX, 2) + Math.pow(playbackDY, 2)
      ) + epsilon;
      const playbackUnitVector = {
        x: playbackDX / playbackSpeed,
        y: playbackDY / playbackSpeed
      };
      const newDX = (control * unitVector.x + (1 - control) * playbackUnitVector.x) * mySpeed;
      const newDY = (control * unitVector.y + (1 - control) * playbackUnitVector.y) * mySpeed;
      return { newDX, newDY };
    };
    const updateDots = (vx, vy) => {
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
    const endTrial = () => {
      document.removeEventListener("mousemove", mouseMoveListener);
      display_element.innerHTML = "";
      this.jsPsych.finishTrial({
        control_change: controlChange,
        mouse_data: data
      });
    };
    const animate = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;
      if (elapsedTime >= trial.trial_duration) {
        endTrial();
        return;
      }
      if (isFlashing && currentTime - flashStartTime >= trial.flash_duration) {
        isFlashing = false;
        hasFlashed = true;
      }
      if (elapsedTime >= trial.pre_flash_duration && !isFlashing && !hasFlashed) {
        flashStartTime = Date.now();
        isFlashing = true;
        if (trial.initial_control_level === 100) {
          dots[flashIndex].control = dots[flashIndex].control - controlChange;
        } else if (trial.initial_control_level === 0) {
          dots[flashIndex].control = dots[flashIndex].control + controlChange;
        }
      }
      updateDots(dx, dy);
      renderDotsAndCross();
      data.push({ dx, dy, elapsedTime, frame });
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

module.exports = MovingDots2Plugin;
//# sourceMappingURL=index.cjs.map
