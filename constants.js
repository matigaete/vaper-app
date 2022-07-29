export const flavours = [
  {
    nombre: "Frutilla platano",
    route: "frutilla-platano",
  },
  {
    nombre: "Sandia Ice",
    route: "prod2",
  },
  {
    nombre: "Arandano Ice",
    route: "arandano-ice",
  },
  {
    nombre: "Menta Ice",
    route: "menta-ice",
  },
  {
    nombre: "Frutilla",
    route: "frutilla",
  },
  {
    nombre: "Chicle",
    route: "chicle",
  },
  {
    nombre: "Redbull",
    route: "prod1",
  },
  {
    nombre: "Frutilla Mango",
    route: "frutilla-mango",
  },
  {
    nombre: "Mamba",
    route: "mamba",
  },
  {
    nombre: "Arandano",
    route: "arandano",
  },
  {
    nombre: "Frutilla Limon",
    route: "frutilla-limon",
  },
  {
    nombre: "Frutilla Sandia Ice",
    route: "frutilla-sandia-ice",
  },
  {
    nombre: "Piña colada",
    route: "pina-colada",
  },
  {
    nombre: "Uva",
    route: "uva",
  },
  {
    nombre: "Dulces",
    route: "dulces",
  },
];

export const vaper = {
  hasSchema: false,
  url: "https://fumechile.cl/producto",
  checkStock: async ({ page }) => {
    const content = await page.textContent(".out-of-stock");
    return content.includes("Agotado") === false;
  },
};
