var couchbase = require('couchbase')
var cluster = new couchbase.Cluster('couchbase://localhost:8091/');
cluster.authenticate('admin', 'admin123');
var bucket = cluster.openBucket('platzi');

var N1qlQuery = couchbase.N1qlQuery;

const query = `
SELECT doc.*
FROM platzi AS doc
WHERE doc.type = "person";`;

const n1Query = N1qlQuery.fromString(query);

bucket.query(n1Query, [], (err, rows) => {
  if (err) {
    console.error(err);
  } else {
    console.log(rows);
  }
});