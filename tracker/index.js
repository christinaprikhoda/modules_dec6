const UserActionTracker = require("./tracker");

const tracker = new UserActionTracker();

tracker.on("actionLogged", (action) => {
  console.log(`Action logged ${action}`);
});

tracker.on("maxActions", () => {
  console.log("Maximum actions extend");
});

tracker.logAction("login");
tracker.logAction("viewProfile");
tracker.logAction("logout");
tracker.logAction("login");
tracker.logAction("updateProfile");
tracker.logAction("lologoutgin");
