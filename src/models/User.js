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
    });
  
    return User;
  };