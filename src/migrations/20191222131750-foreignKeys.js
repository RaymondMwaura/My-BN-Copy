module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([
    queryInterface.addConstraint('users', {
      type: 'FOREIGN KEY',
      fields: ['lineManagerId'],
      name: 'users_linemanagerid_fkey',
      references: {
        table: 'users',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    }),
    queryInterface.addConstraint('hotels', {
      type: 'FOREIGN KEY',
      fields: ['userId'],
      name: 'hotels_userId_fkey',
      references: {
        table: 'users',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    }),
    queryInterface.addConstraint('hotels', {
      type: 'FOREIGN KEY',
      fields: ['locationId'],
      name: 'hotels_locationId_fkey',
      references: {
        table: 'locations',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    }),
    queryInterface.addConstraint('trips', {
      type: 'FOREIGN KEY',
      name: 'trips_hotelId_fkey',
      fields: ['hotelId'],
      allowNull: true,
      references: {
        table: 'hotels',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    }),
    queryInterface.addConstraint('trips', {
      type: 'FOREIGN KEY',
      name: 'trips_userId_fkey',
      fields: ['userId'],
      references: {
        table: 'users',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    }),
    queryInterface.addConstraint('trips', {
      type: 'FOREIGN KEY',
      fields: ['requestId'],
      name: 'trips_requestId_fkey',
      references: {
        table: 'requests',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    }),
    queryInterface.addConstraint('bookings', {
      type: 'FOREIGN KEY',
      fields: ['userId'],
      name: 'bookings_userId_fkey',
      allowNull: true,
      references: {
        table: 'users',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    }),
    queryInterface.addConstraint('bookings', {
      type: 'FOREIGN KEY',
      fields: ['hotelId'],
      name: 'bookings_hotelId_fkey',
      allowNull: true,
      references: {
        table: 'hotels',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    }),
    queryInterface.addConstraint('bookings', {
      type: 'FOREIGN KEY',
      name: 'bookings_roomId_fkey',
      fields: ['roomId'],
      allowNull: true,
      references: {
        table: 'rooms',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    }),
    queryInterface.addConstraint('bookings', {
      type: 'FOREIGN KEY',
      fields: ['tripId'],
      name: 'bookings_tripId_fkey',
      allowNull: true,
      references: {
        table: 'trips',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    }),
    queryInterface.addConstraint('requests', {
      type: 'FOREIGN KEY',
      name: 'requests_userId_fkey',
      fields: ['userId'],
      references: {
        table: 'users',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    }),
    queryInterface.addConstraint('comments', {
      type: 'FOREIGN KEY',
      name: 'comments_requestId_fkey',
      fields: ['requestId'],
      references: {
        table: 'requests',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    }),
    queryInterface.addConstraint('comments', {
      type: 'FOREIGN KEY',
      fields: ['userId'],
      name: 'comments_userId_fkey',
      references: {
        table: 'users',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    }),
    queryInterface.addConstraint('conversations', {
      type: 'FOREIGN KEY',
      fields: ['userId'],
      name: 'conversations_userId_fkey',
      references: {
        table: 'users',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    }),
    queryInterface.addConstraint('ratings', {
      type: 'FOREIGN KEY',
      name: 'ratings_userId_fkey',
      fields: ['userId'],
      references: {
        table: 'users',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    }),
    queryInterface.addConstraint('ratings', {
      type: 'FOREIGN KEY',
      name: 'ratings_hotelId_fkey',
      fields: ['hotelId'],
      references: {
        table: 'hotels',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    }),
    queryInterface.removeColumn(
      'trips',
      'leavingFrom'
    ),
    queryInterface.removeColumn(
      'trips',
      'goingTo'
    ),
    queryInterface.addColumn(
      'trips',
      'leavingFrom',
      {
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        onUpdate: 'cascade',
        references: {
          model: 'locations',
          key: 'id',
        },
      }
    ),
    queryInterface.addColumn(
      'trips',
      'goingTo',
      {
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        onUpdate: 'cascade',
        references: {
          model: 'locations',
          key: 'id',
        },
      }
    ),
  ]),

  down: (queryInterface) => Promise.all([
    queryInterface.removeConstraint('users', 'users_linemanagerid_fkey'),
    queryInterface.removeConstraint('hotels', 'hotels_userId_fkey'),
    queryInterface.removeConstraint('hotels', 'hotels_locationId_fkey'),
    queryInterface.removeConstraint('trips', 'trips_hotelId_fkey'),
    queryInterface.removeConstraint('trips', 'trips_requestId_fkey'),
    queryInterface.removeConstraint('trips', 'trips_userId_fkey'),
    queryInterface.removeConstraint('bookings', 'bookings_userId_fkey'),
    queryInterface.removeConstraint('bookings', 'bookings_hotelId_fkey'),
    queryInterface.removeConstraint('bookings', 'bookings_roomId_fkey'),
    queryInterface.removeConstraint('bookings', 'bookings_tripId_fkey'),
    queryInterface.removeConstraint('requests', 'requests_userId_fkey'),
    queryInterface.removeConstraint('comments', 'comments_requestId_fkey'),
    queryInterface.removeConstraint('comments', 'comments_userId_fkey'),
    queryInterface.removeConstraint('conversations', 'conversations_userId_fkey'),
    queryInterface.removeConstraint('ratings', 'ratings_userId_fkey'),
    queryInterface.removeConstraint('ratings', 'ratings_hotelId_fkey'),
    queryInterface.removeColumn('trips', 'leavingFrom'),
    queryInterface.removeColumn('trips', 'goingTo'),
  ])
};
