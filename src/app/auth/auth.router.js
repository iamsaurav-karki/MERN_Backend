const router = require("express").Router();
const authCtrl = require("./auth.controller");
const multer = require("multer");
const fs = require("fs");
const memoryStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    let path = "./public/uploads/user";
    if (!fs.existSync(path)) {
      fs.mkdirSync(path, { recursive: true });
    }
    cb(null, path);
  },
});
const uploader = multer({
  storage: memoryStorage,
});

// Auth and Authorization routes start:

router.post("/register", authCtrl.register);
router.get("/verify-token/:token", authCtrl.VerifyToken);
router.post("/set-password/:token", authCtrl.SetPassword);

router.post("/Login", authCtrl.Login);
router.post("/forgot-password", authCtrl.forgotPassword);
router.get("/me", (req, res, next) => {}, authCtrl.SelfProfiling);
router.post("/logout", (req, res, next) => {}, authCtrl.Logout);

module.exports = router;
