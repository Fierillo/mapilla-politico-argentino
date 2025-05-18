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
    ucr: PartyData,
    pro: PartyData,
    liberales: PartyData
  }
  
  // Tipo para una provincia
  export type Province = {
    id: string;
    name: string;
    x: number;
    y: number;
    date?: string;
    deputies: number;
    senators: number;
    population: number;
    parties: Party
  };
  
  export const provinces: Province[] = [
    { 
        id: "buenos-aires", 
        name: "Buenos Aires", 
        x: 60, 
        y: 43, 
        date: "7 de septiembre",
        deputies: 92, 
        senators: 46, 
        population: 17541141,
        parties: {
          peronismo: {
              deputies: {bancas: 37, loseBancas: 19},
              senate: {bancas: 21, loseBancas: 10}
          },
          ucr: {
              deputies: {bancas: 27, loseBancas: 12},
              senate: {bancas: 8, loseBancas: 7}
          },
          pro: {
              deputies: {bancas: 13, loseBancas: 8},
              senate: {bancas: 9, loseBancas: 4}
          },
          liberales: {
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
      population: 3075646,
      parties: {
        peronismo: { 
            deputies: { bancas: 18, loseBancas: 8 } 
        },
        ucr: { 
            deputies: { bancas: 8, loseBancas: 3 } 
        },
        pro: { 
            deputies: { bancas: 19, loseBancas: 10 } 
        },
        liberales: { 
            deputies: { bancas: 11, loseBancas: 6 } 
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
      population: 415438,
      parties: {
        peronismo: {
          deputies: { bancas: 24, loseBancas: 13 },
          senate: { bancas: 14, loseBancas: 6 }
        },
        ucr: {
          deputies: { bancas: 10, loseBancas: 7 },
          senate: { bancas: 2, loseBancas: 2 }
        },
        pro: {
          deputies: { bancas: 3, loseBancas: 1 },
          senate: { bancas: 0, loseBancas: 0 }
        },
        liberales: {
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
      population: 1204541,
      parties: {
        peronismo: { deputies: { bancas: 17, loseBancas: 9, renewBancas: 8 } },
        ucr: { deputies: { bancas: 8, loseBancas: 5, renewBancas: 4 } },
        pro: { deputies: { bancas: 7, loseBancas: 2, renewBancas: 0 } },
        liberales: { deputies: { bancas: 0, loseBancas: 0, renewBancas: 4 } }
      }
    },
    {
      id: "chubut",
      name: "Chubut",
      x: 25,
      y: 65,
      deputies: 27,
      senators: 0,
      population: 618994,
      parties: {
        peronismo: { deputies: { bancas: 7, loseBancas: 0 } },
        ucr: { deputies: { bancas: 9, loseBancas: 0 } },
        pro: { deputies: { bancas: 8, loseBancas: 0 } },
        liberales: { deputies: { bancas: 2, loseBancas: 0 } }
      }
    },
    {
      id: "cordoba",
      name: "Córdoba",
      x: 42,
      y: 30,
      deputies: 70,
      senators: 0,
      population: 3760450,
      parties: {
        peronismo: { deputies: { bancas: 39, loseBancas: 0 }},
        ucr: { deputies: { bancas: 26, loseBancas: 0 }},
        pro: { deputies: { bancas: 3, loseBancas: 0 }},
        liberales: { deputies: { bancas: 1, loseBancas: 0 }}
      }
    },
    {
      id: "corrientes",
      name: "Corrientes",
      x: 70,
      y: 22,
      date: "agosto-octubre",
      deputies: 30,
      senators: 15,
      population: 1120801,
      parties: {
        peronismo: {
          deputies: { bancas: 7, loseBancas: 1 },
          senate: { bancas: 4, loseBancas: 1 }
        },
        ucr: {
          deputies: { bancas: 8, loseBancas: 5 },
          senate: { bancas: 4, loseBancas: 2 }
        },
        pro: {
          deputies: { bancas: 7, loseBancas: 4 },
          senate: { bancas: 3, loseBancas: 1 }
        },
        liberales: {
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
      senators: 18,
      population: 1385961,
      parties: {
        peronismo: {
          deputies: { bancas: 14, loseBancas: 0 },
          senate: { bancas: 9, loseBancas: 0 }
        },
        ucr: {
          deputies: { bancas: 9, loseBancas: 0 },
          senate: { bancas: 4, loseBancas: 0 }
        },
        pro: {
          deputies: { bancas: 9, loseBancas: 0 },
          senate: { bancas: 4, loseBancas: 0 }
        },
        liberales: {
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
      population: 605193,
      parties: {
        peronismo: { deputies: { bancas: 22, loseBancas: 9 } },
        ucr: { deputies: { bancas: 4, loseBancas: 3 } },
        pro: { deputies: { bancas: 3, loseBancas: 3 } },
        liberales: { deputies: { bancas: 0, loseBancas: 0 } }
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
      population: 770881,
      parties: {
        peronismo: { deputies: { bancas: 12, loseBancas: 6, renewBancas: 3 } },
        ucr: { deputies: { bancas: 17, loseBancas: 9, renewBancas: 6 } },
        pro: { deputies: { bancas: 16, loseBancas: 9, renewBancas: 6 } },
        liberales: { deputies: { bancas: 0, loseBancas: 0, renewBancas: 7 } }
      }
    },
    {
      id: "la-pampa",
      name: "La Pampa",
      x: 35,
      y: 48,
      deputies: 30,
      senators: 0,
      population: 358428,
      parties: {
        peronismo: { deputies: { bancas: 17, loseBancas: 0 } },
        ucr: { deputies: { bancas: 7, loseBancas: 0 } },
        pro: { deputies: { bancas: 6, loseBancas: 0 } },
        liberales: { deputies: { bancas: 0, loseBancas: 0 } }
      }
    },
    {
      id: "la-rioja",
      name: "La Rioja",
      x: 25,
      y: 23,
      deputies: 36,
      senators: 0,
      population: 393531,
      parties: {
        peronismo: { deputies: { bancas: 32, loseBancas: 15 } },
        ucr: { deputies: { bancas: 2, loseBancas: 1 } },
        pro: { deputies: { bancas: 0, loseBancas: 0 } },
        liberales: { deputies: { bancas: 2, loseBancas: 2 } }
      }
    },
    {
      id: "mendoza",
      name: "Mendoza",
      x: 20,
      y: 40,
      deputies: 48,
      senators: 38,
      population: 1990338,
      parties: {
        peronismo: {
          deputies: { bancas: 10, loseBancas: 7 },
          senate: { bancas: 10, loseBancas: 7 }
        },
        ucr: {
          deputies: { bancas: 22, loseBancas: 11 },
          senate: { bancas: 19, loseBancas: 9 }
        },
        pro: {
          deputies: { bancas: 4, loseBancas: 4 },
          senate: { bancas: 0, loseBancas: 0 }
        },
        liberales: {
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
      population: 1261294,
      parties: {
        peronismo: { deputies: { bancas: 25, loseBancas: 10 } },
        ucr: { deputies: { bancas: 6, loseBancas: 4 } },
        pro: { deputies: { bancas: 5, loseBancas: 2 } },
        liberales: { deputies: { bancas: 0, loseBancas: 0 } }
      }
    },
    {
      id: "neuquen",
      name: "Neuquén",
      x: 15,
      y: 48,
      deputies: 35,
      senators: 0,
      population: 664057,
      parties: {
        peronismo: { deputies: { bancas: 14, loseBancas: 0 } },
        ucr: { deputies: { bancas: 2, loseBancas: 0 } },
        pro: { deputies: { bancas: 12, loseBancas: 0 } },
        liberales: { deputies: { bancas: 5, loseBancas: 0 } }
      }
    },
    {
      id: "rio-negro",
      name: "Río Negro",
      x: 35,
      y: 55,
      deputies: 46,
      senators: 0,
      population: 747610,
      parties: {
        peronismo: { deputies: { bancas: 20, loseBancas: 0 } },
        ucr: { deputies: { bancas: 15, loseBancas: 0 } },
        pro: { deputies: { bancas: 9, loseBancas: 0 } },
        liberales: { deputies: { bancas: 2, loseBancas: 0 } }
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
      population: 1424397,
      parties: {
        peronismo: {
          deputies: { bancas: 51, loseBancas: 27, renewBancas: 20 },
          senate: { bancas: 23, loseBancas: 12, renewBancas: 11 }
        },
        ucr: {
          deputies: { bancas: 4, loseBancas: 2, renewBancas: 0 },
          senate: { bancas: 0, loseBancas: 0, renewBancas: 0 }
        },
        pro: {
          deputies: { bancas: 3, loseBancas: 1, renewBancas: 0 },
          senate: { bancas: 0, loseBancas: 0, renewBancas: 0 }
        },
        liberales: {
          deputies: { bancas: 2, loseBancas: 0, renewBancas: 10 },
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
      population: 781217,
      parties: {
        peronismo: { deputies: { bancas: 23, loseBancas: 0 } },
        ucr: { deputies: { bancas: 11, loseBancas: 0 } },
        pro: { deputies: { bancas: 1, loseBancas: 0 } },
        liberales: { deputies: { bancas: 1, loseBancas: 0 } }
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
      population: 508328,
      parties: {
        peronismo: {
          deputies: { bancas: 29, loseBancas: 22, renewBancas: 8 },
          senate: { bancas: 6, loseBancas: 3, renewBancas: 0 }
        },
        ucr: {
          deputies: { bancas: 11, loseBancas: 1, renewBancas: 7 },
          senate: { bancas: 2, loseBancas: 1, renewBancas: 2 }
        },
        pro: {
          deputies: { bancas: 3, loseBancas: 0, renewBancas: 7 },
          senate: { bancas: 1, loseBancas: 0, renewBancas: 2 }
        },
        liberales: {
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
      population: 365698,
      parties: {
        peronismo: { deputies: { bancas: 23, loseBancas: 0 } },
        ucr: { deputies: { bancas: 1, loseBancas: 0 } },
        pro: { deputies: { bancas: 0, loseBancas: 0 } },
        liberales: { deputies: { bancas: 0, loseBancas: 0 } }
      }
    },
    {
      id: "santa-fe",
      name: "Santa Fe",
      x: 57,
      y: 28,
      deputies: 50,
      senators: 19,
      population: 3536418,
      parties: {
        peronismo: {
          deputies: { bancas: 13, loseBancas: 0 },
          senate: { bancas: 5, loseBancas: 0 }
        },
        ucr: {
          deputies: { bancas: 23, loseBancas: 0 },
          senate: { bancas: 11, loseBancas: 0 }
        },
        pro: {
          deputies: { bancas: 5, loseBancas: 0 },
          senate: { bancas: 2, loseBancas: 0 }
        },
        liberales: {
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
      date: "agosto-octubre",
      deputies: 40,
      senators: 0,
      population: 978313,
      parties: {
        peronismo: { deputies: { bancas: 35, loseBancas: 35 } },
        ucr: { deputies: { bancas: 3, loseBancas: 3 } },
        pro: { deputies: { bancas: 2, loseBancas: 2 } },
        liberales: { deputies: { bancas: 0, loseBancas: 0 } }
      }
    },
    {
      id: "tierra-del-fuego",
      name: "Tierra del Fuego",
      x: 29,
      y: 96,
      deputies: 15,
      senators: 0,
      population: 173432,
      parties: {
        peronismo: { deputies: { bancas: 8, loseBancas: 0 } },
        ucr: { deputies: { bancas: 2, loseBancas: 0 } },
        pro: { deputies: { bancas: 0, loseBancas: 0 } },
        liberales: { deputies: { bancas: 5, loseBancas: 0 } }
      }
    },
    {
      id: "tucuman",
      name: "Tucumán",
      x: 32,
      y: 15,
      deputies: 49,
      senators: 0,
      population: 1694656,
      parties: {
        peronismo: { deputies: { bancas: 37, loseBancas: 0 } },
        ucr: { deputies: { bancas: 9, loseBancas: 0 } },
        pro: { deputies: { bancas: 2, loseBancas: 0 } },
        liberales: { deputies: { bancas: 1, loseBancas: 0 } }
      }
    }
  ]