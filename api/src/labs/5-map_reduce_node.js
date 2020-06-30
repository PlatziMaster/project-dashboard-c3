const faker = require('faker');

const data = [];

for (let index = 0; index < 1000; index++) {
  const newDoc = {
    id: faker.random.uuid(),
    customer_id: faker.random.number(12),
    rate: faker.random.number(6),
    created_at: faker.date.between('2019-01-01', '2019-04-31'),
    type: 'conversation'
  };
  data.push(newDoc);

}

const rta = data.slice(0,500)
.map(item => item.rate)
.reduce((total, value) => total + value, 0);

const rta2 = data.slice(500,1000)
.map(item => item.rate)
.reduce((total, value) => total + value, 0);

console.log(rta);
console.log(rta2);

const total = [rta, rta2].reduce((total, value) => total + value, 0);
console.log(total);