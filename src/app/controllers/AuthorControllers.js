import * as Yup from 'yup';
import Author from '../models/Author';

class AuthorController {
  async create(req, res) {
    try {
      const { ...data } = req.body;

      return res.status(201).json({});
    } catch (err) {
      return res.status(500).json({ err: 'erro' });
    }
  }
}

export default new AuthorController();
