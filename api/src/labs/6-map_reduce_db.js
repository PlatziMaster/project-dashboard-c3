var couchbase = require('couchbase');
var cluster = new couchbase.Cluster('couchbase://localhost:8091/');
cluster.authenticate('admin', 'admin123');
var bucket = cluster.openBucket('platzi');

var ViewQuery = couchbase.ViewQuery;

const viewQuery = ViewQuery.from('conversations', 'total_rates');

bucket.query(viewQuery, (err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log(result[0].value);
  }
});



// function (doc, meta) {
//   if (doc.type === 'conversation') {
//     emit(meta.id, doc.rate);
//   }
// }

// function (keys, values, rereduce) {
//   if (rereduce === false) {
//     return values.reduce(function(total, item) {
//       return total + item;
//     }, 0)
//   } else {
//     return values.reduce(function(total, item) {
//       return total + item;
//     }, 0)
//   }
// }