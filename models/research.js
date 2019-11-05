module.exports = function(sequelize, DataTypes) {
  var Comment = sequelize.define("research", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  research.associate = function(models) {
    // I'm saying that a research talk should belong to a speaker
    //This may need to be modified later, specifically models.Speaker
    research.belongsTo(models.Speaker, {
      foreignKey: {
        allowNull: true
      }
    });
  };

  return Comment;
};
