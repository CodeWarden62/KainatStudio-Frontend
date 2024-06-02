export enum ControllerNames {
  Service = 'service',
  Gallery = 'gallery',
}
type TBaseOperations = {
  id: string;
  create: string;
  update: string;
  delete: string;
};
type TCustomEndpoints = {
  [key: string]: string;
};

type TControllerEndpoints = {
  [key in ControllerNames]: {
    basePath: string;
    customEndpoints?: TCustomEndpoints;
  };
};
type TApiConstants = {
  operations: TBaseOperations;
  controllers: TControllerEndpoints;
};

export const ApiConstants: TApiConstants = {
  operations: {
    id: '/id',
    create: '/create',
    update: '/update',
    delete: '/delete',
  },
  controllers: {
    service: {
      basePath: '/service',
      customEndpoints: {
        activate: '/activate',
        deactivate: '/deactivate',
      },
    },
    gallery: {
      basePath: '/gallery',
    },
  },
};
