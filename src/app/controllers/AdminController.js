import User from '../models/User';

class AdminController {
  async index(req, res) {
    try {
      const admin = await User.scope('active').findAll({
        where: {
          admin: true,
        },
        attributes: ['id', 'name', 'email'],
      });

      console.log(admin);

      return res.status(201).json(admin);
    } catch (err) {
      return res.status(500).json({ err: 'erro' });
    }
  }
}

export default new AdminController();
