import * as Yup from 'yup';
import User from '../../app/models/User';

class UserController {
  async create(req, res) {
    try {
      const { id, name, email, password, admin } = req.body;

      const user = await User.create({ id, name, email, password, admin });

      return res
        .status(201)
        .json({ id, name, email, admin, token: user.tokenGenerate() });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ err: 'erro' });
    }
  }
}

export default new UserController();
