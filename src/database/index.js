import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import Author from '../app/models/Author';
import Book from '../app/models/Book';
import Rent from '../app/models/Rent';
import User from '../app/models/User';
const models = [User, Author, Book, Rent];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();
