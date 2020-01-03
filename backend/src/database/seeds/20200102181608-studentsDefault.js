module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'students',
      [
        {
          name: 'Junior Fernandes',
          email: 'juniorfernandes@oi.com.br',
          age: 32,
          weight: 81.8,
          height: 182,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Laiz Peradeles',
          email: 'laizperadeles@oi.com.br',
          age: 29,
          weight: 69.0,
          height: 184,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Fred Fernandes',
          email: 'fredfernandes@oi.com.br',
          age: 39,
          weight: 92.1,
          height: 180,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Leandro Pontes',
          email: 'leandropontes@oi.com.br',
          age: 22,
          weight: 75.3,
          height: 179,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('students', null, {});
  },
};
