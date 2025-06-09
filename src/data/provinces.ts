// src/data/provincesData.ts

// Tipo para las bancas de una cámara (Diputados o Senadores)
export type ChamberBancas = {
  bancas: number;
  loseBancas: number;
  renewBancas?: number;
};
  
// Tipo para los datos de un partido
export type PartyData = { 
  deputies: ChamberBancas;
  senate?: ChamberBancas; // Opcional, ya que no todas las provincias tienen Senado
};

export type Party = {
  peronismo: PartyData,
  socialismo: PartyData, 
  centro: PartyData,
  liberalismo: PartyData,
}
  
// Tipo para una provincia
export type Province = {
  id: string;
  name: string;
  type?: string;
  x: number;
  y: number;
  date?: string;
  deputies: number;
  senators: number;
  population: number;
  parties: Party
};

// Colores de cada partido
export const partyColors: Record<keyof Party, string> = {
  peronismo: "sky",
  socialismo: "red",
  centro: "yellow",
  liberalismo: "purple",
};

// Orden fijo de los partidos
export const partyKeys: (keyof Party)[] = [
  "socialismo",
  "peronismo",
  "centro",
  "liberalismo",
];
  
  export const provinces: Province[] = [
    { 
        id: "argentina", 
        name: "Nación", 
        type: "national",
        x: 85, 
        y: 33, 
        date: "26 de octubre",
        deputies: 257, 
        senators: 72, 
        population: 35912841,
        parties: {
          peronismo: {
              deputies: {bancas: 110, loseBancas: 52},
              senate: {bancas: 39, loseBancas: 16}
          },
          socialismo: {
              deputies: {bancas: 5, loseBancas: 4},
              senate: {bancas: 0, loseBancas: 0}
          },
          centro: {
              deputies: {bancas: 103, loseBancas: 63},
              senate: {bancas: 27, loseBancas: 8}
          },
          liberalismo: {
              deputies: {bancas: 39, loseBancas: 8},
              senate: {bancas: 6, loseBancas: 0}
          }
        }  
    },
    { 
        id: "buenos-aires", 
        name: "Buenos Aires", 
        x: 60, 
        y: 43, 
        date: "7 de septiembre",
        deputies: 92, 
        senators: 46, 
        population: 13115144,
        parties: {
          peronismo: {
              deputies: {bancas: 37, loseBancas: 19},
              senate: {bancas: 21, loseBancas: 10}
          },
          socialismo: {
              deputies: {bancas: 2, loseBancas: 2},
              senate: {bancas: 0, loseBancas: 0}
          },
          centro: {
              deputies: {bancas: 40, loseBancas: 20},
              senate: {bancas: 17, loseBancas: 11}
          },
          liberalismo: {
              deputies: {bancas: 13, loseBancas: 5},
              senate: {bancas: 8, loseBancas: 2}
          }
        }  
    },
    {
      id: "caba",
      name: "Ciudad Autónoma de Buenos Aires",
      x: 70,
      y: 40,
      date: "18 de mayo",
      deputies: 60,
      senators: 0,
      population: 2528223,
      parties: {
        peronismo: { 
            deputies: { bancas: 20, loseBancas: 8, renewBancas: 10 } 
        },
        socialismo: { 
            deputies: { bancas: 4, loseBancas: 3, renewBancas: 1 } 
        },
        centro: { 
            deputies: { bancas: 25, loseBancas: 11, renewBancas: 8 } 
        },
        liberalismo: { 
            deputies: { bancas: 11, loseBancas: 8, renewBancas: 11 } 
        }
      }
    },
    {
      id: "catamarca",
      name: "Catamarca",
      x: 25,
      y: 19,
      date: "26 de octubre",
      deputies: 41,
      senators: 16,
      population: 340478,
      parties: {
        peronismo: {
          deputies: { bancas: 24, loseBancas: 13 },
          senate: { bancas: 14, loseBancas: 6 }
        },
        socialismo: {
          deputies: { bancas: 0, loseBancas: 0 },
          senate: { bancas: 0, loseBancas: 0 }
        },
        centro: {
          deputies: { bancas: 13, loseBancas: 8 },
          senate: { bancas: 2, loseBancas: 2 }
        },
        liberalismo: {
          deputies: { bancas: 4, loseBancas: 0 },
          senate: { bancas: 0, loseBancas: 0 }
        }
      }
    },
    {
      id: "chaco",
      name: "Chaco",
      x: 62,
      y: 17,
      date: "11 de mayo",
      deputies: 32,
      senators: 0,
      population: 1001910,
      parties: {
        peronismo: { deputies: { bancas: 17, loseBancas: 9, renewBancas: 8 } },
        socialismo: { deputies: { bancas: 0, loseBancas: 0, renewBancas: 0 } },
        centro: { deputies: { bancas: 15, loseBancas: 7, renewBancas: 4 } },
        liberalismo: { deputies: { bancas: 0, loseBancas: 0, renewBancas: 4 } }
      }
    },
    {
      id: "chubut",
      name: "Chubut",
      x: 25,
      y: 65,
      deputies: 27,
      senators: 0,
      population: 474701,
      parties: {
        peronismo: { deputies: { bancas: 7, loseBancas: 0 } },
        socialismo: { deputies: { bancas: 1, loseBancas: 0 } },
        centro: { deputies: { bancas: 17, loseBancas: 0 } },
        liberalismo: { deputies: { bancas: 2, loseBancas: 0 } }
      }
    },
    {
      id: "cordoba",
      name: "Córdoba",
      x: 42,
      y: 30,
      deputies: 70,
      senators: 0,
      population: 3063956,
      parties: {
        peronismo: { deputies: { bancas: 39, loseBancas: 0 }},
        socialismo: { deputies: { bancas: 1, loseBancas: 0 }},
        centro: { deputies: { bancas: 29, loseBancas: 0 }},
        liberalismo: { deputies: { bancas: 1, loseBancas: 0 }}
      }
    },
    {
      id: "corrientes",
      name: "Corrientes",
      x: 70,
      y: 22,
      date: "31 de agosto",
      deputies: 30,
      senators: 15,
      population: 933441,
      parties: {
        peronismo: {
          deputies: { bancas: 7, loseBancas: 1 },
          senate: { bancas: 4, loseBancas: 1 }
        },
        socialismo: {
          deputies: { bancas: 0, loseBancas: 0 },
          senate: { bancas: 0, loseBancas: 0 }
        },
        centro: {
          deputies: { bancas: 15, loseBancas: 9 },
          senate: { bancas: 7, loseBancas: 3 }
        },
        liberalismo: {
          deputies: { bancas: 8, loseBancas: 5 },
          senate: { bancas: 4, loseBancas: 1 }
        }
      }
    },
    {
      id: "entre-rios",
      name: "Entre Ríos",
      x: 65,
      y: 30,
      deputies: 34,
      senators: 17,
      population: 1144216,
      parties: {
        peronismo: {
          deputies: { bancas: 14, loseBancas: 0 },
          senate: { bancas: 9, loseBancas: 0 }
        },
        socialismo: {
          deputies: { bancas: 0, loseBancas: 0 },
          senate: { bancas: 0, loseBancas: 0 }
        },
        centro: {
          deputies: { bancas: 18, loseBancas: 0 },
          senate: { bancas: 8, loseBancas: 0 }
        },
        liberalismo: {
          deputies: { bancas: 2, loseBancas: 0 },
          senate: { bancas: 0, loseBancas: 0 }
        }
      }
    },
    {
      id: "formosa",
      name: "Formosa",
      x: 65,
      y: 12,
      date: "29 de junio",
      deputies: 30,
      senators: 0,
      population: 482733,
      parties: {
        peronismo: { deputies: { bancas: 22, loseBancas: 9 } },
        socialismo: { deputies: { bancas: 0, loseBancas: 0 } },
        centro: { deputies: { bancas: 8, loseBancas: 6 } },
        liberalismo: { deputies: { bancas: 0, loseBancas: 0 } }
      }
    },
    {
      id: "jujuy",
      name: "Jujuy",
      x: 30,
      y: 5,
      date: "11 de mayo",
      deputies: 48,
      senators: 0,
      population: 590695,
      parties: {
        peronismo: { deputies: { bancas: 12, loseBancas: 6, renewBancas: 3 } },
        socialismo: { deputies: { bancas: 3, loseBancas: 0, renewBancas: 2 } },
        centro: { deputies: { bancas: 33, loseBancas: 18, renewBancas: 12 } },
        liberalismo: { deputies: { bancas: 0, loseBancas: 0, renewBancas: 7 } }
      }
    },
    {
      id: "la-pampa",
      name: "La Pampa",
      x: 35,
      y: 48,
      deputies: 30,
      senators: 0,
      population: 300103,
      parties: {
        peronismo: { deputies: { bancas: 17, loseBancas: 0 } },
        socialismo: { deputies: { bancas: 0, loseBancas: 0 } },
        centro: { deputies: { bancas: 13, loseBancas: 0 } },
        liberalismo: { deputies: { bancas: 0, loseBancas: 0 } }
      }
    },
    {
      id: "la-rioja",
      name: "La Rioja",
      x: 25,
      y: 23,
      date: "26 de octubre",
      deputies: 36,
      senators: 0,
      population: 304344,
      parties: {
        peronismo: { deputies: { bancas: 32, loseBancas: 15 } },
        socialismo: { deputies: { bancas: 0, loseBancas: 0 } },
        centro: { deputies: { bancas: 2, loseBancas: 1 } },
        liberalismo: { deputies: { bancas: 2, loseBancas: 2 } }
      }
    },
    {
      id: "mendoza",
      name: "Mendoza",
      x: 20,
      y: 40,
      date: "26 de octubre",
      deputies: 48,
      senators: 38,
      population: 1494214,
      parties: {
        peronismo: {
          deputies: { bancas: 10, loseBancas: 7 },
          senate: { bancas: 10, loseBancas: 7 }
        },
        socialismo: {
          deputies: { bancas: 0, loseBancas: 0 },
          senate: { bancas: 0, loseBancas: 0 }
        },
        centro: {
          deputies: { bancas: 29, loseBancas: 17 },
          senate: { bancas: 20, loseBancas: 9 }
        },
        liberalismo: {
          deputies: { bancas: 9, loseBancas: 0 },
          senate: { bancas: 8, loseBancas: 3 }
        }
      }
    },
    {
      id: "misiones",
      name: "Misiones",
      x: 95,
      y: 17,
      date: "8 de junio",
      deputies: 40,
      senators: 0,
      population: 988884,
      parties: {
        peronismo: { deputies: { bancas: 29, loseBancas: 13, renewBancas: 12 } },
        socialismo: { deputies: { bancas: 0, loseBancas: 0 } },
        centro: { deputies: { bancas: 11, loseBancas: 7, renewBancas: 1 } },
        liberalismo: { deputies: { bancas: 0, loseBancas: 0, renewBancas: 7 } }
      }
    },
    {
      id: "neuquen",
      name: "Neuquén",
      x: 15,
      y: 48,
      deputies: 35,
      senators: 0,
      population: 553755,
      parties: {
        peronismo: { deputies: { bancas: 14, loseBancas: 0 } },
        socialismo: { deputies: { bancas: 2, loseBancas: 0 } },
        centro: { deputies: { bancas: 14, loseBancas: 0 } },
        liberalismo: { deputies: { bancas: 5, loseBancas: 0 } }
      }
    },
    {
      id: "rio-negro",
      name: "Río Negro",
      x: 35,
      y: 55,
      deputies: 46,
      senators: 0,
      population: 595737,
      parties: {
        peronismo: { deputies: { bancas: 20, loseBancas: 0 } },
        socialismo: { deputies: { bancas: 0, loseBancas: 0 } },
        centro: { deputies: { bancas: 24, loseBancas: 0 } },
        liberalismo: { deputies: { bancas: 2, loseBancas: 0 } }
      }
    },
    {
      id: "salta",
      name: "Salta",
      x: 43,
      y: 10,
      date: "11 de mayo",
      deputies: 60,
      senators: 23,
      population: 1090792,
      parties: {
        peronismo: {
          deputies: { bancas: 40, loseBancas: 19, renewBancas: 20 },
          senate: { bancas: 20, loseBancas: 10, renewBancas: 11 }
        },
        socialismo: {
          deputies: { bancas: 0, loseBancas: 0, renewBancas: 0 },
          senate: { bancas: 0, loseBancas: 0, renewBancas: 0 }
        },
        centro: {
          deputies: { bancas: 16, loseBancas: 9, renewBancas: 0 },
          senate: { bancas: 3, loseBancas: 2, renewBancas: 0 }
        },
        liberalismo: {
          deputies: { bancas: 4, loseBancas: 2, renewBancas: 10 },
          senate: { bancas: 0, loseBancas: 0, renewBancas: 1 }
        }
      }
    },
    {
      id: "san-juan",
      name: "San Juan",
      x: 20,
      y: 30,
      deputies: 36,
      senators: 0,
      population: 608857,
      parties: {
        peronismo: { deputies: { bancas: 23, loseBancas: 0 } },
        socialismo: { deputies: { bancas: 0, loseBancas: 0 } },
        centro: { deputies: { bancas: 12, loseBancas: 0 } },
        liberalismo: { deputies: { bancas: 1, loseBancas: 0 } }
      }
    },
    {
      id: "san-luis",
      name: "San Luis",
      x: 30,
      y: 40,
      date: "11 de mayo",
      deputies: 43,
      senators: 9,
      population: 421742,
      parties: {
        peronismo: {
          deputies: { bancas: 26, loseBancas: 22, renewBancas: 8 },
          senate: { bancas: 6, loseBancas: 3, renewBancas: 0 }
        },
        socialismo: {
          deputies: { bancas: 0, loseBancas: 0, renewBancas: 0 },
          senate: { bancas: 0, loseBancas: 0, renewBancas: 0 }
        },
        centro: {
          deputies: { bancas: 17, loseBancas: 1, renewBancas: 14 },
          senate: { bancas: 3, loseBancas: 1, renewBancas: 4 }
        },
        liberalismo: {
          deputies: { bancas: 0, loseBancas: 0, renewBancas: 0 },
          senate: { bancas: 0, loseBancas: 0, renewBancas: 0 }
        }
      }
    },
    {
      id: "santa-cruz",
      name: "Santa Cruz",
      x: 20,
      y: 82,
      deputies: 24,
      senators: 0,
      population: 265400,
      parties: {
        peronismo: { deputies: { bancas: 23, loseBancas: 0 } },
        socialismo: { deputies: { bancas: 0, loseBancas: 0 } },
        centro: { deputies: { bancas: 1, loseBancas: 0 } },
        liberalismo: { deputies: { bancas: 0, loseBancas: 0 } }
      }
    },
    {
      id: "santa-fe",
      name: "Santa Fe",
      x: 57,
      y: 28,
      deputies: 50,
      senators: 19,
      population: 2822834,
      parties: {
        peronismo: {
          deputies: { bancas: 13, loseBancas: 0 },
          senate: { bancas: 5, loseBancas: 0 }
        },
        socialismo: {
          deputies: { bancas: 0, loseBancas: 0 },
          senate: { bancas: 0, loseBancas: 0 }
        },
        centro: {
          deputies: { bancas: 28, loseBancas: 0 },
          senate: { bancas: 13, loseBancas: 0 }
        },
        liberalismo: {
          deputies: { bancas: 9, loseBancas: 0 },
          senate: { bancas: 1, loseBancas: 0 }
        }
      }
    },
    {
      id: "santiago-del-estero",
      name: "Santiago del Estero",
      x: 48,
      y: 20,
      date: "26 de octubre",
      deputies: 40,
      senators: 0,
      population: 813802,
      parties: {
        peronismo: { deputies: { bancas: 35, loseBancas: 35 } },
        socialismo: { deputies: { bancas: 0, loseBancas: 0 } },
        centro: { deputies: { bancas: 5, loseBancas: 5 } },
        liberalismo: { deputies: { bancas: 0, loseBancas: 0 } }
      }
    },
    {
      id: "tierra-del-fuego",
      name: "Tierra del Fuego",
      x: 29,
      y: 96,
      deputies: 15,
      senators: 0,
      population: 147997,
      parties: {
        peronismo: { deputies: { bancas: 8, loseBancas: 0 } },
        socialismo: { deputies: { bancas: 0, loseBancas: 0 } },
        centro: { deputies: { bancas: 2, loseBancas: 0 } },
        liberalismo: { deputies: { bancas: 5, loseBancas: 0 } }
      }
    },
    {
      id: "tucuman",
      name: "Tucumán",
      x: 32,
      y: 15,
      deputies: 49,
      senators: 0,
      population: 1321055,
      parties: {
        peronismo: { deputies: { bancas: 37, loseBancas: 0 } },
        socialismo: { deputies: { bancas: 0, loseBancas: 0 } },
        centro: { deputies: { bancas: 11, loseBancas: 0 } },
        liberalismo: { deputies: { bancas: 1, loseBancas: 0 } }
      }
    }
  ]