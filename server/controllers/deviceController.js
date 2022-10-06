const uuid = require("uuid");
class DeviceController {
  static async create(req, res) {
    const { name, price, brandId, typeId, info } = req.body;
    const { img } = req.files;
    let fileName = uuid.v4();
  }
  static async getAll(req, res) {}
  static async getOne(req, res) {}
}
module.exports = DeviceController;
