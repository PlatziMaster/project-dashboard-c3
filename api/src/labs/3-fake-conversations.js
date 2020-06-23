var couchbase = require('couchbase');
const faker = require('faker');
var cluster = new couchbase.Cluster('couchbase://localhost:8091/');
cluster.authenticate('admin', 'admin123');
var bucket = cluster.openBucket('platzi');

for (let index = 0; index < 50; index++) {
  const newDoc = {
    id: faker.random.uuid(),
    customer_id: faker.random.number(12),
    rate: faker.random.number(6),
    created_at: faker.date.between('2019-01-01', '2019-04-31'),
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