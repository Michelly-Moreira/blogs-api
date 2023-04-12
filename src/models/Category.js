module.exports = (sequelize, DataTypes) => {
    // 'Category' é o nome da model
    const Category = sequelize.define('Category', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, },
      name: DataTypes.STRING,
    },{
        tableName: 'categories',// nome da tabela que foi definida em migration
        // timestamps na model, quando não uso as colunas createdAt e updatedAt
        timestamps: false,
    });
    return Category;
  };