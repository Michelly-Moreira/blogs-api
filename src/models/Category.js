module.exports = (sequelize, DataTypes) => {
    // 'Category' é o nome da model
    const category = sequelize.define('Category', {
      id: DataTypes.INTEGER,
      name: DataTypes.STRING,
    },{
        tableName: 'categories',
        // timestamps na model, quando não uso as colunas createdAt e updatedAt
        timestamps: false,
    });
  
    return category;
  };