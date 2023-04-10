module.exports = (sequelize, DataTypes) => {
    // 'User' é o nome da model
    const User = sequelize.define('User', {
      id: DataTypes.INTEGER,
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    },{
        tableName: 'users',
        // underscored transforma o displayName que está em camelCase em snakeize
        underscored: true,
        // timestamps na model, quando não uso as colunas createdAt e updatedAt
        timestamps: false,
    });
    User.associate = (models) => {
      User.hasMany(models.BlogPost, {
          foreignKey: 'user_id',
          as: 'blogPost',
      })
  }
      return User;
    }