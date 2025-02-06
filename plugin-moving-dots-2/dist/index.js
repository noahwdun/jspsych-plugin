import { ParameterType } from 'jspsych';

var version = "0.0.1";

const info = {
  name: "plugin-moving-dots-2",
  version,
  parameters: {
    /** Array of control change levels (e.g., 30%, 70%, 100%) */
    control_levels: {
      type: ParameterType.INT,
      array: true,
      default: [30, 70, 100]
    },
    /** Number of dots to display on the screen */
    dot_count: {
      type: ParameterType.INT,
      default: 10
    },
    /** Duration of the flash in milliseconds */
    flash_duration: {
      type: ParameterType.INT,
      default: 200
    },
    /** Total duration of the trial in milliseconds */
    trial_duration: {
      type: ParameterType.INT,
      default: 5e3
    },
    /** Initial level of control the mouse has over the dots (0-100) */
    initial_control_level: {
      type: ParameterType.INT,
      default: 100
    },
    /** Change in the level of control of the flashing dot after it changes (0-100) */
    control_change_level: {
      type: ParameterType.INT,
      default: 30
    },
    /** 2-dimensional array of mouse data for playback */
    playback: {
      type: ParameterType.OBJECT,
      array: true,
      default: []
    }
  },
  data: {
    /** Magnitude of the control change (e.g., 30, 70, 100) */
    control_change: {
      type: ParameterType.INT
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
    const INITIAL_DISTANCE_FROM_CENTER = 100;
    const dots = [];
    for (let i = 0; i < trial.dot_count; i++) {
      const angle = Math.random() * 2 * Math.PI;
      const distance = Math.random() * INITIAL_DISTANCE_FROM_CENTER;
      dots.push({
        x: canvas.width / 2 + distance * Math.cos(angle),
        y: canvas.height / 2 + distance * Math.sin(angle),
        control: trial.initial_control_level
        // Initial control level
      });
    }
    const flashIndex = 0;
    const controlChange = trial.control_change_level;
    const flashDelay = 2500 + Math.random() * 500;
    let flashStartTime = null;
    let hasFlashed = false;
    let controlModified = false;
    const data = [];
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
        if (flashStartTime && Date.now() - flashStartTime < trial.flash_duration) {
          ctx.fillStyle = index === flashIndex ? "red" : "black";
        } else {
          ctx.fillStyle = "black";
        }
        ctx.fill();
      });
    };
    let mouseX = 0, mouseY = 0, dx = 0, dy = 0;
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
    const updateDots = (vx, vy) => {
      dots.forEach((dot, index) => {
        if (index === flashIndex && hasFlashed) {
          dot.x += vx * (dot.control / 100);
          dot.y += vy * (dot.control / 100);
        } else {
          dot.x += vx * (dot.control / 100);
          dot.y += vy * (dot.control / 100);
        }
      });
    };
    let startTime = Date.now();
    const animate = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;
      const t = elapsedTime;
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
        data.push({ dx, dy, t });
        requestAnimationFrame(animate);
      } else {
        endTrial();
      }
    };
    animate();
    const endTrial = () => {
      display_element.innerHTML = "";
      this.jsPsych.finishTrial({
        control_change: controlChange,
        mouse_data: data
      });
    };
  }
}

export { MovingDots2Plugin as default };
//# sourceMappingURL=index.js.map
