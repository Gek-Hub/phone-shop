const ApiError = require("../errors/ApiError");
class UserControler {
  static async registration(req, res) {}
  static async login(req, res) {}
  static async check(req, res, next) {
    //res.json({message:"ALL WORKIN'!"});
    //const query = req.query;
    const { id } = req.query;
    if (!id) {
      return next(ApiError.badRequest("Не задан ID"));
    }
    res.json(id);
  }
}
module.exports = UserControler;
