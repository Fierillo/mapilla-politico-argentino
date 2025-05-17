// src/tailwind-safelist.js
// Este archivo no se usa en runtime, solo para que Tailwind detecte las clases
const safelist = [
    "bg-sky-500",
    "bg-sky-700",
    "bg-sky-200",
    "bg-purple-500",
    "bg-purple-700",
    "bg-purple-200",
    "bg-red-500",
    "bg-red-700",
    "bg-red-200",
    "bg-yellow-500",
    "bg-yellow-700",
    "bg-yellow-200",
  ];
  
  // Usamos las clases en un comentario para que Tailwind las detecte
  safelist.forEach(cls => console.log(cls));