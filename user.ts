const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());

interface User {
  id: string;
  name: string;
  cc: string;
  email: string;
  accountNumber: string;
  balance: number;
  birthDate: string;
  cel: string;
  address: string;
}

let  userDB = User[] = [{
  id: "1",
  name: "pepito",
  cc: "1234",
  email: "pepito@gmail.com",
  accountNumber: "89218289298",
  balance: 200000,
  amountTransaction: 0,
  birthDate: "01/01/1990",
  cel: "3001234567",
  address: "cll falsa # 123"
},
{
  id: "2",
  name: "fulanito",
  cc: "1234",
  email: "fulanito@gmail.com",
  accountNumber: "84657890876",
  balance: 9643460,
  amountTransaction: 0
  birthDate: "01/01/1989",
  cel: "3001234568",
  address: "cll falsa # 124"
}
];

app.get('/user', function (request, response) {
  response.json(userDB);
});

app.get('/user/:id', function (request, response) {
  const id = request.params.id;
  const result = userDB.filter(item => item.id === id);
  response.json(result);
});

app.post('/user', function (request, response) {
  const body = request.body;
  userDB.push(body);
  response.send('El usuario ha sido registrado');
});
app.put('/user/:id', function (request, response) {
  const id = request.params.id;
  const body = request.body;
  const customerIndex = userDB.findIndex(item => item.id === id);
  console.log("customerIndex", customerIndex);
  userDB[customerIndex] = body;
  response.send('Cliente actualizado correctamente');
});
app.put('/user/:amountTransaction', function (request, response) {
  const amountTransaction = request.params.amountTransaction;
  const body = request.body;
  const customerIndex = userDB.findIndex(item => item.balance === balance);
  console.log("customerIndex", customerIndex);
  userDB[customerIndex] = body-amountTransaction;
  response.send('Transacción realizada exitosamente, su nuevo saldo es: ' + balance);
});

app.delete('/user/:id', function (request, response) {
  const id = request.params.id;
  const result = userDB.filter(item => item.id !== id);
  userDB = result;
  response.json("Cliente eliminado correctamente");
});
app.listen(PORT, function () {
  console.log("La aplicación es está ejecutando en: https//localhost:" + PORT);
});