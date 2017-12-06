
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('bears').del()
    .then(function () {
      // Inserts seed entries
      return knex('bears').insert([
        { zooId: 1, species: 'Grizzly', latinName: 'AlaskanBrown' },
        { zooId: 1, species: 'Polar', latinName: 'AlaskinPolar' },
        { zooId: 1, species: 'Black', latinName: 'AlaskanBlack' }
      ]);
    });
};
