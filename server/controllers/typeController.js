const { Type } = require("../models/models");
const ApiError = require("../errors/ApiError");
class TypeControler {
  static async create(req, res) {
    const { name } = req.body;
    const existType = await Type.findOne({ where: { name } });
    if (existType) {
      return res.json({ message: `Type ${name} уже существует` });
    }
    const type = await Type.create({ name });
    //console.log(type,name);
    return res.json(type);
  }
  static async getAll(req, res) {
    const type = await Type.findAll();
    // console.log(type);
    return res.json(type);
  }
}
module.exports = TypeControler;
