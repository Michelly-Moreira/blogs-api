module.exports = (sequelize, DataTypes) => {
    // 'BlogPost' é o nome da model
    const BlogPost = sequelize.define('BlogPost', {
      id: DataTypes.INTEGER,
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      published: DataTypes.DATE,
      updated: DataTypes.STRING,
    },{
        tableName: 'blog_posts',
        // underscored transforma o displayName que está em camelCase em snakeize
        underscored: true,
        // timestamps na model, quando não uso as colunas createdAt e updatedAt
        timestamps: false,
    });
    BlogPost.associate = (models) => {
        BlogPost.belongsTo(models.User, {
            foreignKey: 'user_id',
            as: 'user',
        })
    }

    BlogPost.associate = (models) => {
        BlogPost.belongsToMany(models.PostCategory, {
            foreignKey: 'post_id',
            as: 'postCategory',
        })
    }

    return BlogPost;
  };