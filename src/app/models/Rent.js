import Sequelize, { Model, Op } from 'sequelize';

class Rent extends Model {
  static init(sequelize) {
    super.init(
      {
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
        tableName: 'rents',
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'id_user',
      as: 'user',
    });
    this.belongsTo(models.Book, {
      foreignKey: 'id_book',
      as: 'books',
    });
  }
}

export default Rent;
