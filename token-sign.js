const jwt = require('jsonwebtoken');

const secret= '271215';

const payload = {
  sub: 1,
  role: 'Root'
}

function signToken(payload,secret){
  return jwt.sign(payload,secret);
}

const token = signToken(payload, secret);
console.log(token);
