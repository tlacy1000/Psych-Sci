module.exports = function(sequelize, DataTypes) {
  var Speaker = sequelize.define("Speaker", {
    url: DataTypes.STRING
  });

  Speakers.associate = function(models) {
    // Associating Speaker with Research talk
    Image.hasMany(models.research, {
      onDelete: "cascade"
    });
  };

  return Speaker;
};
