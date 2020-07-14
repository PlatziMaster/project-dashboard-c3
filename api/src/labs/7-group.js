var couchbase = require('couchbase');
var cluster = new couchbase.Cluster('couchbase://localhost:8091/');
cluster.authenticate('admin', 'admin123');
var bucket = cluster.openBucket('platzi');

var ViewQuery = couchbase.ViewQuery;

const viewQuery = ViewQuery.from('conversations', 'count_by_date')
.group_level(1);

bucket.query(viewQuery, (err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log(result);
  }
});

const viewQuery2 = ViewQuery.from('conversations', 'count_by_date')
.group_level(2);

bucket.query(viewQuery2, (err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log(result);
  }
});

const viewQuery3 = ViewQuery.from('conversations', 'count_by_date')
.group_level(3);

bucket.query(viewQuery3, (err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log(result);
  }
});


