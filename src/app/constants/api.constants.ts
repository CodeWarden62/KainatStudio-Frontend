const   operations={
  id: '/id',
  create: '/create',
  update: '/update',
  delete: '/delete',
  activate: '/activate',
  deactivate: '/deactivate',
}

export const ApiConstants = {

  service: {
    basePath: '/service',
    operations: operations,
  },
  gallery: {
    basePath: '/gallery',
    operations: operations,
  },
  auth: {
    basePath: '/Authentication',
    operations:{
      login: '/Login',
      logout: '/logout',
    },
  },
};
