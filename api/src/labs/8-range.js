var couchbase = require('couchbase');
var cluster = new couchbase.Cluster('couchbase://localhost:8091/');
cluster.authenticate('admin', 'admin123');
var bucket = cluster.openBucket('platzi');

var ViewQuery = couchbase.ViewQuery;

const viewQuery = ViewQuery.from('conversations', 'count_by_date')
.group_level(2)
.range([2019, 1, 1],[2019, 3, 18]);

bucket.query(viewQuery, (err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log(result);
  }
});

