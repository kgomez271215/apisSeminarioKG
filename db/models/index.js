const {Producto, ProductoSchema} = require('./productsModel');
const {Categoria, CategoriaSchema} = require('./categoriasModel');
const {Usuarios,UsuariosSchema} = require('./Compartidos/UsuariosModel');
const {DatosUsuario,DatosUsuarioSchema} = require('./Compartidos/DatosUsuariosModel');
const {Roles,RolesSchema} = require('./Compartidos/RolesModel');
const {Empresas,EmpresasSchema} = require('./Compartidos/EmpresasModel');
const {Sedes,SedesSchema} = require('./Compartidos/SedesModel');
const {TipoSedes,TipoSedesSchema} = require('./Compartidos/TipoSedesModel');
const {Servicios,ServiciosSchema} = require('./Compartidos/ServiciosModel');
const {ServiciosEmpresa,ServiciosEmpresaSchema} = require('./Compartidos/ServiciosEmpresaModel');
const {CorreosUsuario,CorreosUsuarioSchema} = require('./Compartidos/CorreosUsuarioModel');
const {TelefonosUsuario,TelefonosUsuarioSchema} = require('./Compartidos/TelefonosUsuarioModel');

function setupModels(sequelize){
  Categoria.init(CategoriaSchema, Categoria.config(sequelize));
  Producto.init(ProductoSchema, Producto.config(sequelize));

  Usuarios.init(UsuariosSchema, Usuarios.config(sequelize));
  DatosUsuario.init(DatosUsuarioSchema, DatosUsuario.config(sequelize));
  Roles.init(RolesSchema, Roles.config(sequelize));
  Empresas.init(EmpresasSchema, Empresas.config(sequelize));
  Sedes.init(SedesSchema, Sedes.config(sequelize));
  TipoSedes.init(TipoSedesSchema, TipoSedes.config(sequelize));
  Servicios.init(ServiciosSchema, Servicios.config(sequelize));
  ServiciosEmpresa.init(ServiciosEmpresaSchema, ServiciosEmpresa.config(sequelize));
  CorreosUsuario.init(CorreosUsuarioSchema, CorreosUsuario.config(sequelize));
  TelefonosUsuario.init(TelefonosUsuarioSchema, TelefonosUsuario.config(sequelize));

  //ejecucion de asociaciones
  Producto.associate(sequelize.models);
  Usuarios.associate(sequelize.models);
  Roles.associate(sequelize.models);
  DatosUsuario.associate(sequelize.models);
  Empresas.associate(sequelize.models);
  Sedes.associate(sequelize.models);
  TipoSedes.associate(sequelize.models);
  CorreosUsuario.associate(sequelize.models);
  TelefonosUsuario.associate(sequelize.models);

}


module.exports=setupModels;
