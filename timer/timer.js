const { EventEmitter } = require("events");

class Timer extends EventEmitter {
  #duration;

  constructor(duration) {
    super();
    this.#duration = duration;
  }

  start() {
    console.log("Timer started...");

    let reminder = this.#duration;

    this.on("timer-start", () => {
      console.log(`Timer remaning ${reminder} seconds`);
    });

    const finishTimer = () => {
      this.emit("timer-end");
      console.log("Timer ended");
    };

    const totalIteration = this.#duration * 100000000;

    for (let i = 0; i < totalIteration; ++i) {
      if (i % 100000000 === 0) {
        this.emit("timer-start");
        reminder--;
      }

      if (reminder <= 0) {
        finishTimer();
        break;
      }
    }
  }
}

module.exports = Timer;
