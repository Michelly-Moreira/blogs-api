module.exports = (sequelize, DataTypes) => {
    // 'PostCategory' é o nome da model
    const PostCategory = sequelize.define('PostCategory', {
      postId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
    },{
        tableName: 'posts_categories',
        // underscored transforma o displayName que está em camelCase em snakeize
        underscored: true,
        // timestamps na model, quando não uso as colunas createdAt e updatedAt
        timestamps: false,
    });

    PostCategory.associate = (models) => {
        models.Category.belongsToMany(models.BlogPost, {
          as: 'category',
          through: PostCategory,
          foreignKey: 'categoryId', // se refere ao id de Category na tabela de `posts_categories`
          otherKey: 'postId', // se refere a outra chave de `posts_categories`
        });
        models.BlogPost.belongsToMany(models.Category, {
          as: 'categories',
          through: PostCategory,
          foreignKey: 'postId',
          otherKey: 'categoryId',
        });
      };
    return PostCategory;
  };