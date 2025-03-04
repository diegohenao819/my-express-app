const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');
const Book = require('./Book');

const Loan = sequelize.define('Loan', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
  bookId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Book,
      key: 'id',
    },
  },
  loanDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  returnDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
});


User.hasMany(Loan, { foreignKey: 'userId' });
Loan.belongsTo(User, { foreignKey: 'userId' });

Book.hasMany(Loan, { foreignKey: 'bookId' });
Loan.belongsTo(Book, { foreignKey: 'bookId' });

module.exports = Loan;
