import Sequelize, { Model, Op } from 'sequelize';
import 'dotenv/config';

class Book extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        date: Sequelize.DATE,
        isbt: Sequelize.STRING,
        rented: Sequelize.BOOLEAN,
        deleted_at: Sequelize.DATE,
      },
      {
        defaultScope: {
          where: {},
        },
        scopes: {
          deleted: {
            where: {
              deleted_at: { [Op.ne]: null },
            },
          },
          active: {
            where: {
              deleted_at: null,
            },
          },
        },
        sequelize,
        tableName: 'books',
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Author, { foreignKey: 'author_id', as: 'author' });
  }
}

export default Book;
