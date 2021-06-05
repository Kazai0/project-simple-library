import Book from '../models/Book';
import User from '../models/User';

class BookController {
  async create(req, res) {
    try {
      console.log('aqui');
      const adminTrue = await User.scope('active').findOne({
        where: {
          id: req.params.admin_id,
          admin: true,
        },
      });

      if (!adminTrue) {
        return res
          .status(404)
          .json({ message: 'this user dont have permission ' });
      }

      const { ...data } = req.body;

      const book = await Book.create({
        ...data,
      });

      return res.status(201).json(book);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ err: 'erro' });
    }
  }
}

export default new BookController();
