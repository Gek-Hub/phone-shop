const { Brand } = require("../models/models");

class BrandController {
  static async create(req, res) {
    const { name } = req.body;
    const brand = await Brand.create({ name });
    //console.log(type,name);
    return res.json(brand);
  }
  static async getAll(req, res) {
    const brands = await Brand.findAll();
    // console.log( brands);
    return res.json(brands);
  }
}
module.exports = BrandController;
