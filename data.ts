interface IName {
  id: number;
  name: string;
  gender: EGender;
  popularity: EPopularity;
  length: ELength;
}

export enum EGender {
  GIRL = 'Girl',
  BOY = 'Boy',
  UNISEX = 'Unisex'
}

export enum EPopularity {
  TRENDY = 'Trendy',
  UNIQUE = 'Unique'
}

export enum ELength {
  SHORT = 'Short',
  LONG = 'Long',
  ALL = 'All'
}
export const names: IName[] = [
  {
    id: 1,
    name: 'Laith',
    gender: EGender.BOY,
    popularity: EPopularity.UNIQUE,
    length: ELength.SHORT
  },
  {
    id: 2,
    name: 'Jake',
    gender: EGender.BOY,
    popularity: EPopularity.TRENDY,
    length: ELength.SHORT
  },
  {
    id: 3,
    name: 'Lamelo',
    gender: EGender.BOY,
    popularity: EPopularity.UNIQUE,
    length: ELength.SHORT
  },
  {
    id: 4,
    name: 'Abraham',
    gender: EGender.BOY,
    popularity: EPopularity.TRENDY,
    length: ELength.LONG
  },
  {
    id: 5,
    name: 'Bartholomew',
    gender: EGender.BOY,
    popularity: EPopularity.UNIQUE,
    length: ELength.LONG
  },
  {
    id: 6,
    name: 'Noah',
    gender: EGender.BOY,
    popularity: EPopularity.TRENDY,
    length: ELength.SHORT
  },
  {
    id: 7,
    name: 'Benjamin',
    gender: EGender.BOY,
    popularity: EPopularity.TRENDY,
    length: ELength.LONG
  },
  {
    id: 8,
    name: 'William',
    gender: EGender.BOY,
    popularity: EPopularity.TRENDY,
    length: ELength.LONG
  },
  {
    id: 9,
    name: 'Lucus',
    gender: EGender.BOY,
    popularity: EPopularity.TRENDY,
    length: ELength.SHORT
  },
  {
    id: 10,
    name: 'Harrison',
    gender: EGender.BOY,
    popularity: EPopularity.UNIQUE,
    length: ELength.LONG
  },
  {
    id: 11,
    name: 'Selma',
    gender: EGender.BOY,
    popularity: EPopularity.UNIQUE,
    length: ELength.SHORT
  },
  {
    id: 12,
    name: 'Asher',
    gender: EGender.BOY,
    popularity: EPopularity.UNIQUE,
    length: ELength.SHORT
  },
  {
    id: 13,
    name: 'Tucker',
    gender: EGender.BOY,
    popularity: EPopularity.TRENDY,
    length: ELength.SHORT
  },

  {
    id: 14,
    name: 'Arya',
    gender: EGender.GIRL,
    popularity: EPopularity.UNIQUE,
    length: ELength.SHORT
  },
  {
    id: 15,
    name: 'Olivia',
    gender: EGender.GIRL,
    popularity: EPopularity.TRENDY,
    length: ELength.SHORT
  },
  {
    id: 16,
    name: 'Fay',
    gender: EGender.GIRL,
    popularity: EPopularity.UNIQUE,
    length: ELength.SHORT
  },
  {
    id: 17,
    name: 'Brooklyn',
    gender: EGender.GIRL,
    popularity: EPopularity.TRENDY,
    length: ELength.LONG
  },
  {
    id: 18,
    name: 'Genevieve',
    gender: EGender.GIRL,
    popularity: EPopularity.UNIQUE,
    length: ELength.LONG
  },
  {
    id: 19,
    name: 'Zoe',
    gender: EGender.GIRL,
    popularity: EPopularity.TRENDY,
    length: ELength.SHORT
  },
  {
    id: 20,
    name: 'Valentina',
    gender: EGender.GIRL,
    popularity: EPopularity.TRENDY,
    length: ELength.LONG
  },
  {
    id: 21,
    name: 'Josephine',
    gender: EGender.GIRL,
    popularity: EPopularity.TRENDY,
    length: ELength.LONG
  },
  {
    id: 22,
    name: 'Maya',
    gender: EGender.GIRL,
    popularity: EPopularity.TRENDY,
    length: ELength.SHORT
  },
  {
    id: 23,
    name: 'Everleigh',
    gender: EGender.GIRL,
    popularity: EPopularity.UNIQUE,
    length: ELength.LONG
  },
  {
    id: 24,
    name: 'Poppy',
    gender: EGender.GIRL,
    popularity: EPopularity.UNIQUE,
    length: ELength.SHORT
  },
  {
    id: 25,
    name: 'Maia',
    gender: EGender.GIRL,
    popularity: EPopularity.UNIQUE,
    length: ELength.SHORT
  },
  {
    id: 26,
    name: 'Ivy',
    gender: EGender.GIRL,
    popularity: EPopularity.TRENDY,
    length: ELength.SHORT
  },

  {
    id: 27,
    name: 'Jude',
    gender: EGender.UNISEX,
    popularity: EPopularity.UNIQUE,
    length: ELength.SHORT
  },
  {
    id: 28,
    name: 'Adrian',
    gender: EGender.UNISEX,
    popularity: EPopularity.TRENDY,
    length: ELength.SHORT
  },
  {
    id: 29,
    name: 'Sunny',
    gender: EGender.UNISEX,
    popularity: EPopularity.UNIQUE,
    length: ELength.SHORT
  },
  {
    id: 30,
    name: 'Channing',
    gender: EGender.UNISEX,
    popularity: EPopularity.TRENDY,
    length: ELength.LONG
  },
  {
    id: 31,
    name: 'Tennessee',
    gender: EGender.UNISEX,
    popularity: EPopularity.UNIQUE,
    length: ELength.LONG
  },
  {
    id: 32,
    name: 'Dallas',
    gender: EGender.UNISEX,
    popularity: EPopularity.TRENDY,
    length: ELength.SHORT
  },

  {
    id: 33,
    name: 'Zephyr',
    gender: EGender.UNISEX,
    popularity: EPopularity.UNIQUE,
    length: ELength.LONG
  },

  {
    id: 34,
    name: 'Teri',
    gender: EGender.UNISEX,
    popularity: EPopularity.TRENDY,
    length: ELength.SHORT
  }
];
