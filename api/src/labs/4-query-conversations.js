var couchbase = require('couchbase')
var cluster = new couchbase.Cluster('couchbase://localhost:8091/');
cluster.authenticate('admin', 'admin123');
var bucket = cluster.openBucket('platzi');

var N1qlQuery = couchbase.N1qlQuery;

const query = `
SELECT doc.*
FROM platzi AS doc
WHERE doc.type = "conversation" AND doc.rate >= $1 AND doc.rate <= $2;`;

const n1Query = N1qlQuery.fromString(query);

bucket.query(n1Query, [2,5], (err, rows) => {
  if (err) {
    console.error(err);
  } else {
    console.log(rows);
  }
});