var couchbase = require('couchbase');
const faker = require('faker');
var cluster = new couchbase.Cluster('couchbase://localhost:8091/');
cluster.authenticate('admin', 'admin123');
var bucket = cluster.openBucket('platzi');

for (let index = 0; index < 60; index++) {
  const newDoc = {
    id: faker.random.uuid(),
    customer_id: faker.random.number(12),
    rate: faker.random.number(6),
    created_at: faker.date.between('2020-03-01', '2020-08-18'),
    type: 'conversation'
  };
  bucket.upsert(newDoc.id, newDoc, (error, result) => {
    if (error) {
      console.error(error);
    } else {
      console.log(result);
    }
  });
}