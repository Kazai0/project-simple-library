import Book from '../models/Book';
import Rent from '../models/Rent';

class RentController {
  async create(req, res) {
    try {
      const { ...data } = req.body;

      console.log(data.id_book);
      const book_rent = await Book.scope('active').findOne({
        where: {
          id: data.id_book,
          rented: false,
        },
      });

      if (!book_rent) {
        return res.status(404).json({ message: 'this book already rented' });
      }

      book_rent.update({
        rented: true,
      });

      const reted = await Rent.create({
        id_user: req.params.user_id,
        ...data,
      });

      return res.status(201).json(reted);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ err: 'erro' });
    }
  }
}

export default new RentController();
