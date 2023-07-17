const { Brand } = require("../models/models");

class BrandController {
  static async create(req, res) {
    const { name } = req.body;
    const existBrand = await Brand.findOne({ where: { name } });
    if (existBrand) {
      return res.json({ message: `Brand ${name} уже существует` });
    }
    const brand = await Brand.create({ name });
    return res.json(brand);
  }
  static async getAll(req, res) {
    const brands = await Brand.findAll();
    return res.json(brands);
  }
}
module.exports = BrandController; //
