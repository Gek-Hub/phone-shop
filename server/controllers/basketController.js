const { Basket, BasketDevice, Device } = require("../models/models");

class BasketController {
  static async put(req, res) {
    const basket = await Basket.findOne({ where: { userId: req.user.id } });
    const { deviceId } = req.body;
    const basketDevice = await BasketDevice.create({
      basketId: basket.id,
      deviceId,
    });
    return res.json(basketDevice);
  }
  static async getAll(req, res) {
    const basket = await Basket.findOne({ where: { userId: req.user.id } });
    const basketDevices = await BasketDevice.findAll({
      where: { basketId: basket.id },
    });
    const devicesIds = basketDevices.map((d) => d.deviceId);
    const devices = await Device.findAll({ where: { id: devicesIds } });
    return res.json(devices);
  }
  static async deleteOne(req, res) {
    const basket = await Basket.findOne({ where: { userId: req.user.id } });
    const { deviceId } = req.body;
    const num = await BasketDevice.destroy({
      where: { deviceId, basketId: basket.id },
    });
    return res.json({ num });
  }
}
module.exports = BasketController; //
