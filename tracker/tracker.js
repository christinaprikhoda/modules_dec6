const { EventEmitter } = require("events");

class UserActionTracker extends EventEmitter {
  constructor() {
    super();
    this.actionCount = 0;
    this.maxActionLimit = 5;
  }

  logAction(action) {
    this.actionCount++

    this.emit("actionLogged", action)

    if(this.actionCount > this.maxActionLimit){
        this.emit("maxActions")
    }
  }

  getActionCount() {
    return this.actionCount;
  }
}

module.exports = UserActionTracker;
