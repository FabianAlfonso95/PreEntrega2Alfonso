const productos = [
  {
    id: "1",
    tipo: "Pizza",
    nombre: "CLASICA",
    descripcion: "Pizzeta clasica con salsa",
    precio: 150,
    imagen: "/pClasica.jpg",
  },

  {
    id: "2",
    tipo: "Pizza",
    nombre: "Napoli",
    descripcion: "Pizzeta con salsa y Muzzarella",
    precio: 180,
    imagen: "/pNapoli.jpg",
  },

  {
    id: "3",
    tipo: "Pizza",
    nombre: "Valentino",
    descripcion: "Pizzeta con muzzarella y pepperoni",
    precio: 200,
    imagen: "/pPepperoni.jpeg",
  },

  {
    id: "4",
    tipo: "Pizza",
    nombre: "Biancoverde",
    descripcion: "Pizzeta con muzzarella,rucula y albahaca",
    precio: 220,
    imagen: "/pBiancoverde.jpg",
  },

  {
    id: "5",
    tipo: "Pizza",
    nombre: "Olivia",
    descripcion: "Pizzeta con muzzarella y aceitunas",
    precio: 200,
    imagen: "/pOlivia.jpg",
  },

  {
    id: "6",
    tipo: "Pizza",
    nombre: "Maiale Crocante",
    descripcion: "Pizzeta con muzzarella y panceta crocante",
    precio: 220,
    imagen: "/pMaiale.jpg",
  },

  {
    id: "7",
    tipo: "Pizza",
    nombre: "Le Origini",
    descripcion: "Pizzeta con muzzarella y carne",
    precio: 230,
    imagen: "/pOrigini.jpeg",
  },

  {
    id: "8",
    tipo: "Pizza",
    nombre: "Massimo",
    descripcion: "Pizzeta con muzzarella,parmesano y queso azul",
    precio: 230,
    imagen: "/pMassimo.jpg",
  },

  {
    id: "9",
    tipo: "Pizza",
    nombre: "Due formaggi",
    descripcion: "Pizzeta con muzzarella y cheddar",
    precio: 230,
    imagen: "/pDue.jpg",
  },

  {
    id: "10",
    tipo: "Pizza",
    nombre: "Isa",
    descripcion: "Pizzeta con muzzarella,bondiola y rucula",
    precio: 240,
    imagen: "/pIsa.jpg",
  },

  {
    id: "11",
    tipo: "Pizza",
    nombre: "Rose",
    descripcion: "Pizzeta con muzzarella,pistachos,cebolla colorada y romero",
    precio: 250,
    imagen: "/pRose.jpg",
  },

  {
    id: "12",
    tipo: "Focaccia",
    nombre: "Clasica",
    descripcion: "Romero, albahaca y sal marina",
    precio: 160,
    imagen: "/fClasica.jpeg",
  },

  {
    id: "13",
    tipo: "Focaccia",
    nombre: "Pesto",
    descripcion: "Albahaca,perejil y ajo",
    precio: 180,
    imagen: "/fPesto.jpeg",
  },

  {
    id: "14",
    tipo: "Focaccia",
    nombre: "Confitada",
    descripcion: "Cherrys,ajo,romero y cebolla",
    precio: 180,
    imagen: "/fConfitada.jpeg",
  },

  {
    id: "15",
    tipo: "Focaccia",
    nombre: "Olivia",
    descripcion: "Aceituna,romero y cherrys",
    precio: 200,
    imagen: "/fOlivia.jpg",
  },
  {
    id: "16",
    tipo: "Focaccia",
    nombre: "Napoli",
    descripcion: "Salsa de tomate,albahaca y cebolla",
    precio: 200,
    imagen: "/fNapoli.jpeg",
  },
  {
    id: "17",
    tipo: "Panes",
    nombre: "Original",
    descripcion: "Pan de masa madre",
    precio: 80,
    imagen: "/pOriginal.jpg",
  },
  {
    id: "18",
    tipo: "Panes",
    nombre: "Pan de queso",
    descripcion: "Pan de masa madre con oregano y queso",
    precio: 100,
    imagen: "/pQueso.jpeg",
  },
  {
    id: "19",
    tipo: "Panes",
    nombre: "Pan de queso y panceta",
    descripcion: "Pan de masa madre con queso y panceta",
    precio: 130,
    imagen: "/pPanceta.jpg",
  },
];

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });
};

export const getProductoById = (productId) => {
  console.log(productId);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos.find((prod) => prod.id === productId));
    }, 0);
  });
};

export const getProductoByCategory = (productTipo) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos.filter((prod) => prod.tipo === productTipo));
    }, 5000);
  });
};
