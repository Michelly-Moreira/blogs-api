module.exports = (sequelize, DataTypes) => {
    // 'Category' é o nome da model
    const Category = sequelize.define('Category', {
      id: DataTypes.INTEGER,
      name: DataTypes.STRING,
    },{
        tableName: 'categories',// nome da tabela que foi definida em migration
        // timestamps na model, quando não uso as colunas createdAt e updatedAt
        timestamps: false,
    });

    Category.associate = (models) => {
      Category.belongsToMany(models.PostCategory, {
          foreignKey: 'category_id',
          as: 'postCategory',
      })
  }
  
    return Category;
  };