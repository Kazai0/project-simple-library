import Sequelize, { Model, Op } from 'sequelize';
import 'dotenv/config';

class Author extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        date: Sequelize.DATE,
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
        tableName: 'users',
      }
    );

    return this;
  }
  static associate(models) {
    this.hasMany(models.Book, {
      foreignKey: 'author_id',
      as: 'books',
    });
  }
}

export default Author;
