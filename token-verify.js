const jwt = require('jsonwebtoken');

const secret= '271215';

const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJSb290IiwiaWF0IjoxNjU2MjU4NDIxfQ.rD724GIO5iGAdydJ5_OEcBYRNA52fe7hmYtKfXoAqto';

function verifyToken(token,secret){
  return jwt.verify(token,secret);
}

const payload = verifyToken(token, secret);
console.log(payload);
