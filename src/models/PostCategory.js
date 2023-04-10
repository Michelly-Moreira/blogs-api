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
        PostCategory.belongsToMany(models.BlogPost, {
            foreignKey: 'post_id',
            as: 'blogPost',
        })
    }

    PostCategory.associate = (models) => {
        PostCategory.belongsToMany(models.Category, {
            foreignKey: 'category_id',
            as: 'category',
        })
    }
    return PostCategory;
  };