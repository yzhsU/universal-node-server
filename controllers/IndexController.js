const path = require('path');

class IndexController {
  static async index(req, res) {
    const filePath = path.resolve(__dirname, '../views/index.vue');
    return res.sendFile(filePath);
  }
}
module.exports = IndexController;
