export enum ServicePropNames{
  Id = 'Id',
  Name = 'Name',
  Thumbnail = 'Thumbnail',
  Description = 'Description',
  MinPrice = 'MinPrice',
  MaxPrice = 'MaxPrice',
  SortOrder = 'SortOrder',
  ActiveFlag = 'ActiveFlag'
}

export interface IServiceModel{
  [ServicePropNames.Id]: number;
  [ServicePropNames.Name]: string;
  [ServicePropNames.Thumbnail]: string;
  [ServicePropNames.Description]: string;
  [ServicePropNames.MinPrice]: number;
  [ServicePropNames.MaxPrice]: number;
  [ServicePropNames.SortOrder]: number;
  [ServicePropNames.ActiveFlag]: boolean;
}

export const getDefaultServiceModel = (): IServiceModel => {
  return {
    Id: 0,
    Name: '',
    Thumbnail: '',
    Description: '',
    MinPrice: 0,
    MaxPrice: 0,
    SortOrder: 0,
    ActiveFlag: true
  };
}


export const dummyServices:IServiceModel[]=[
  {
    Id: 1,
    Name: 'Service 1',
    Thumbnail: 'https://via.placeholder.com/150',
    Description: 'Service 1 Description',
    MinPrice: 100,
    MaxPrice: 200,
    SortOrder: 1,
    ActiveFlag: true
  },
  {
    Id: 2,
    Name: 'Service 2',
    Thumbnail: 'https://via.placeholder.com/150',
    Description: 'Service 2 Description',
    MinPrice: 200,
    MaxPrice: 300,
    SortOrder: 2,
    ActiveFlag: true
  },
  {
    Id: 3,
    Name: 'Service 3',
    Thumbnail: 'https://via.placeholder.com/150',
    Description: 'Service 3 Description',
    MinPrice: 300,
    MaxPrice: 400,
    SortOrder: 3,
    ActiveFlag: true
  },
  {
    Id: 4,
    Name: 'Service 4',
    Thumbnail: 'https://via.placeholder.com/150',
    Description: 'Service 4 Description',
    MinPrice: 400,
    MaxPrice: 500,
    SortOrder: 4,
    ActiveFlag: true
  },
  {
    Id: 5,
    Name: 'Service 5',
    Thumbnail: 'https://via.placeholder.com/150',
    Description: 'Service 5 Description',
    MinPrice: 500,
    MaxPrice: 600,
    SortOrder: 5,
    ActiveFlag: true
  },
  {
    Id: 6,
    Name: 'Service 6',
    Thumbnail: 'https://via.placeholder.com/150',
    Description: 'Service 6 Description',
    MinPrice: 600,
    MaxPrice: 700,
    SortOrder: 6,
    ActiveFlag: true
  },
  {
    Id: 7,
    Name: 'Service 7',
    Thumbnail: 'https://via.placeholder.com/150',
    Description: 'Service 7 Description',
    MinPrice: 700,
    MaxPrice: 800,
    SortOrder: 7,
    ActiveFlag: true
  }
];
