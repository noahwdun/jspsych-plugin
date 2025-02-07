'use strict';

var jspsych = require('jspsych');

var version = "0.0.1";

const info = {
  name: "plugin-moving-dots-2",
  version,
  parameters: {
    /** Maximum initial distance from the center location for dots */
    max_initial_distance: {
      type: jspsych.ParameterType.INT,
      default: 45
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
    diode_heights: {
      type: jspsych.ParameterType.INT,
      array: true,
      default: [10, 70, 130, 190]
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
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
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
      for (let i = 0; i < 10; i++) {
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
        ctx.arc(dot.x, dot.y, 3.5, 0, 2 * Math.PI);
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
      document.exitPointerLock();
      canvas.removeEventListener("mousemove", mouseMoveListener);
      display_element.innerHTML = "";
      this.jsPsych.finishTrial({
        control_change: controlChange,
        mouse_data: data
      });
    };
    function renderSideBoxes(initialControl, controlChange2, isFlashing2, diodeHeights) {
      const box1 = document.createElement("div");
      const box2 = document.createElement("div");
      const box3 = document.createElement("div");
      const box4 = document.createElement("div");
      const label1 = document.createElement("div");
      const label2 = document.createElement("div");
      const label3 = document.createElement("div");
      const label4 = document.createElement("div");
      box1.style.position = "fixed";
      box1.style.bottom = `${diodeHeights[0]}px`;
      box1.style.right = "10px";
      box1.style.height = "5vh";
      box1.style.width = "5vh";
      box1.style.backgroundColor = "black";
      box2.style.position = "fixed";
      box2.style.bottom = `${diodeHeights[1]}px`;
      box2.style.right = "10px";
      box2.style.height = "5vh";
      box2.style.width = "5vh";
      box2.style.backgroundColor = "black";
      box3.style.position = "fixed";
      box3.style.bottom = `${diodeHeights[2]}px`;
      box3.style.right = "10px";
      box3.style.height = "5vh";
      box3.style.width = "5vh";
      box3.style.backgroundColor = "black";
      box4.style.position = "fixed";
      box4.style.bottom = `${diodeHeights[3]}px`;
      box4.style.right = "10px";
      box4.style.height = "5vh";
      box4.style.width = "5vh";
      box4.style.backgroundColor = isFlashing2 ? "white" : "black";
      if (isFlashing2) {
        box1.style.backgroundColor = initialControl === 100 ? "white" : "black";
        box2.style.backgroundColor = controlChange2 === 30 ? "white" : "black";
        box3.style.backgroundColor = controlChange2 === 70 ? "white" : "black";
      }
      label1.style.position = "fixed";
      label1.style.bottom = `${diodeHeights[0] + 35}px`;
      label1.style.right = "10px";
      label1.style.fontSize = "12px";
      label1.innerText = "initial";
      label2.style.position = "fixed";
      label2.style.bottom = `${diodeHeights[1] + 35}px`;
      label2.style.right = "10px";
      label2.style.fontSize = "12px";
      label2.innerText = "change1";
      label3.style.position = "fixed";
      label3.style.bottom = `${diodeHeights[2] + 35}px`;
      label3.style.right = "10px";
      label3.style.fontSize = "12px";
      label3.innerText = "change2";
      label4.style.position = "fixed";
      label4.style.bottom = `${diodeHeights[3] + 35}px`;
      label4.style.right = "10px";
      label4.style.fontSize = "12px";
      label4.innerText = "flash";
      document.body.appendChild(box1);
      document.body.appendChild(box2);
      document.body.appendChild(box3);
      document.body.appendChild(box4);
      document.body.appendChild(label1);
      document.body.appendChild(label2);
      document.body.appendChild(label3);
      document.body.appendChild(label4);
    }
    const animate = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;
      if (elapsedTime >= trial.pre_flash_duration + trial.post_flash_duration) {
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
      renderSideBoxes(trial.initial_control_level, trial.control_change_level, isFlashing, trial.diode_heights);
      updateDots(dx, dy);
      renderDotsAndCross();
      data.push({ dx, dy });
      dx = 0;
      dy = 0;
      frame++;
      requestAnimationFrame(animate);
    };
    initializeDots();
    renderDotsAndCross();
    canvas.requestPointerLock({ unadjustedMovement: false });
    canvas.addEventListener("mousemove", mouseMoveListener);
    animate();
  }
}

module.exports = MovingDots2Plugin;
//# sourceMappingURL=index.cjs.map
