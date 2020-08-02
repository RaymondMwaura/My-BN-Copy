module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('trips', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    userId: {
      type: Sequelize.INTEGER
    },
    hotelId: {
      allowNull: true,
      type: Sequelize.INTEGER
    },
    type: {
      type: Sequelize.ENUM,
      allowNull: false,
      defaultValue: 'one way',
      values: [
        'one way',
        'return'
      ]
    },
    leavingFrom: {
      type: Sequelize.STRING
    },
    goingTo: {
      type: Sequelize.STRING
    },
    travelDate: {
      type: Sequelize.DATE
    },
    returnDate: {
      type: Sequelize.DATE
    },
    reason: {
      type: Sequelize.STRING
    },
    requestId: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }),
  down: (queryInterface) => Promise.all([
    queryInterface.sequelize.query('DROP TYPE IF EXISTS enum_trips_type CASCADE'),
    queryInterface.dropTable('trips'),
  ]),
};
