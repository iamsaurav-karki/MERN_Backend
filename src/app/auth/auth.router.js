const router = require("express").Router();

// Auth and Authorization routes start:

router.post("/register", (req, res, next) => {
  try {
    //business logic
    let payload = req.body;
    res.json({
      result: payload,
    });
  } catch (excep) {
    next(excep);
    // next({ code: 400, message: "Validation failure" }); //next scope with two parameters is always for error handling.
  }
});
router.get("/verify-token/:token", (req, res, next) => {});
router.post("/set-password/:token", (req, res, next) => {});

router.post("/Login", (req, res, next) => {});
router.post("/forgot-password", (req, res, next) => {});
router.get(
  "/me",
  (req, res, next) => {},
  (req, res, next) => {}
);
router.post(
  "/logout",
  (req, res, next) => {},
  (req, res, next) => {}
);

module.exports = router;
