export interface IServiceModel{
  id: number;
  name: string;
  minPrice: number;
  maxPrice: number;
  status: 'Active'|'Inactive';  // active/inactive
  thumbnail: string; //url
}

export const getDefaultServiceModel = (): IServiceModel => {
  return {
    id: 0,
    name: '',
    minPrice: 0,
    maxPrice: 0,
    status: 'Active',
    thumbnail: ''
  };
}


export const dummyServices:IServiceModel[]=[
  {
    id:1,
    name:'Service 1',
    thumbnail:'https://via.placeholder.com/150',
    minPrice:10,
    maxPrice:20,
    status:'Active'
  },
  {
    id:2,
    name:'Service 2',
    thumbnail:'https://via.placeholder.com/150',

    minPrice:10,
    maxPrice:20,
    status:'Active'
  },
  {
    id:3,
    name:'Service 3',
    thumbnail:'https://via.placeholder.com/150',

    minPrice:10,
    maxPrice:20,
    status:'Active'
  },
  {
    id:4,
    name:'Service 4',
    thumbnail:'https://via.placeholder.com/150',

    minPrice:10,
    maxPrice:20,
    status:'Active'
  },
  {
    id:1,
    name:'Service 1',
    thumbnail:'https://via.placeholder.com/150',

    minPrice:10,
    maxPrice:20,
    status:'Active'
  },
  {
    id:2,
    name:'Service 2',
    thumbnail:'https://via.placeholder.com/150',

    minPrice:10,
    maxPrice:20,
    status:'Active'
  },
  {
    id:3,
    name:'Service 3',
    thumbnail:'https://via.placeholder.com/150',

    minPrice:10,
    maxPrice:20,
    status:'Active'
  },
  {
    id:4,
    name:'Service 4',
    thumbnail:'https://via.placeholder.com/150',

    minPrice:10,
    maxPrice:20,
    status:'Active'
  }
];
