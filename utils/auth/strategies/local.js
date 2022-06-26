const {Strategy} = require('passport-local');
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const UsuariosService = require('../../../services/Compartidos/UsuariosService');

const service = new UsuariosService();

const LocalStrategy = new Strategy( async (username,password,done)=>{
  try {
    const user = await service.findByEmail(username);
    if(!user){
      done(boom.unauthorized(),false);
    }

    const isMatch = await bcrypt.compare(password,user.passwd);
    if(!isMatch){
      done(boom.unauthorized(),false);
    }
    delete user.dataValues.passwd;
    done(null,user);
  } catch (error) {
    done(error,false);

  }
});

module.exports = LocalStrategy;
