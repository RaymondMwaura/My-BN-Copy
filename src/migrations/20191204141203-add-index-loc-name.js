module.exports = {
  up: (queryInterface) => queryInterface.addConstraint('hotels', {
    type: 'unique',
    name: 'loc_name_index',
    fields: ['locationId', 'street', 'name'],
  }),
  down: (migration) => {
    migration.sequelize.query('ALTER TABLE hotels DROP CONSTRAINT loc_name_index');
    return migration.removeIndex('hotels', 'loc_name_index');
  }
};
