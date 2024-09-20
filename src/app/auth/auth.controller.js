class AuthController {
  register = (req, res, next) => {
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
  };

  VerifyToken = (req, res, next) => {};
  SetPassword = (req, res, next) => {};
  Login = (req, res, next) => {};
  SelfProfiling = (req, res, next) => {};
  forgotPassword = (req, res, next) => {};
  Logout = (req, res, next) => {};
}
const authCtrl = new AuthController();
module.exports = authCtrl;
