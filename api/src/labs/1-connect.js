var couchbase = require('couchbase')
var cluster = new couchbase.Cluster('couchbase://localhost:8091/');
cluster.authenticate('admin', 'admin123');
var bucket = cluster.openBucket('platzi');

bucket.get('123', (err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log(result.value);
  }
});

const newDoc = {
  id: '1234',
  name: 'Zulema',
  lastName: 'Vicente Paca',
  type: 'person'
}

bucket.upsert(newDoc.id, newDoc, (err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log(result);
  }
});

bucket.delete(newDoc.id, (err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log(result);
  }
});

// function (doc, meta) {
//   if (doc.type === 'conversation') {
//     emit(doc.id, doc.rate);
//   }
// }

// function (keys, values, rereduce) {
//   if (rereduce) {
//     return values.reduce(function(count, value){
//       return count + value
//     }, 0);
//   } else {
//     return values.reduce(function(count, value){
//       return count + value
//     }, 0);
//   }
// }