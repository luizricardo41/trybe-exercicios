module.exports = (sequelize, DataTypes) => {
  const Plan = sequelize.define('Plan', {
    planId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    coverage: DataTypes.STRING,
    price: DataTypes.DOUBLE,
  }, {
    timestamps: false,
    tableNa,e: 'Plans',
    underscored: true,
  });

  Plan.associate = (models) => {
    Plan.hasMany(models.Patients, {
      foreignKey: 'plan_id', as: 'patients'
    });
  };

  return Plan;
};