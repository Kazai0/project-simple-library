import Book from '../models/Book';
import User from '../models/User';

class BookController {
  async create(req, res) {
    try {
      const severalBooks = [];
      const books = req.body.books;

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

      books.forEach((books) => {
        severalBooks.push({
          ...books,
        });
      });
      await Book.bulkCreate(severalBooks);

      return res.status(201).json(severalBooks);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ err: 'erro' });
    }
  }
}

export default new BookController();
