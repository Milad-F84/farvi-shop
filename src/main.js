const mainPageProductsContainer = document.getElementById("main-page-products");
const root = document.querySelector("main");

async function getLimitedProducts(limitCount = 4) {
  return await fetch(`https://fakestoreapi.com/products?limit=${limitCount}`)
    .then((res) => res.json())
    .then((json) => json);
}

async function getAllProducts() {
  const result = await fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => json);
  return result;
}

async function renderMainPageProducts() {
  const products = await getLimitedProducts(4);
  const template = products
    .map((product) => {
      const { title, image, price } = product;
      return `
    <div class="w-full flex flex-col items-center rounded-lg shadow-xl pb-4 overflow-hidden">
    <img class="w-full aspect-square object-cover" src="${image}" alt="" width="400px">
    <h2 class="font-bold text-xl mt-4 text-center line-clamp-1">${title}</h2>
    <div class="flex gap-1 mt-4">
    <span>${price}</span>
    <span>تومان</span>
    </div>
    </div>`;
    })
    .join("");
  mainPageProductsContainer.innerHTML = template;
}
renderMainPageProducts();

async function renderAllProductsPage() {
  const skeleton = `
     <div class="w-full flex flex-col items-center rounded-lg shadow-xl pb-4 overflow-hidden">
                <div class="w-full aspect-square bg-slate-300 animate-pulse"></div>
                <div class="w-1/2 h-5 mt-4 bg-slate-300 animate-pulse"></div>
                <div class="w-1/2 h-5 mt-4 bg-slate-300 animate-pulse"></div>
            </div>
            <div class="w-full flex flex-col items-center rounded-lg shadow-xl pb-4 overflow-hidden">
                <div class="w-full aspect-square bg-slate-300 animate-pulse"></div>
                <div class="w-1/2 h-5 mt-4 bg-slate-300 animate-pulse"></div>
                <div class="w-1/2 h-5 mt-4 bg-slate-300 animate-pulse"></div>
            </div>
            <div class="w-full flex flex-col items-center rounded-lg shadow-xl pb-4 overflow-hidden">
                <div class="w-full aspect-square bg-slate-300 animate-pulse"></div>
                <div class="w-1/2 h-5 mt-4 bg-slate-300 animate-pulse"></div>
                <div class="w-1/2 h-5 mt-4 bg-slate-300 animate-pulse"></div>
            </div>
            <div class="w-full flex flex-col items-center rounded-lg shadow-xl pb-4 overflow-hidden">
                <div class="w-full aspect-square bg-slate-300 animate-pulse"></div>
                <div class="w-1/2 h-5 mt-4 bg-slate-300 animate-pulse"></div>
                <div class="w-1/2 h-5 mt-4 bg-slate-300 animate-pulse"></div>
            </div>
    `;
  const container = `
    <div id="all-products-page-products" class="container-primary mt-8 md:flex md:gap-6 md:justify-center">
    ${skeleton}
    </div>
    `;
  root.innerHTML = container;
  const allProducts = await getAllProducts();
  const template = allProducts
    .map((product) => {
      const { title, image, price } = product;
      return `
      <div class="w-full flex flex-col items-center rounded-lg shadow-xl pb-4 overflow-hidden">
      <img class="w-full aspect-square object-cover" src="${image}" alt="" width="400px">
      <h2 class="font-bold text-xl mt-4 text-center line-clamp-1">${title}</h2>
      <div class="flex gap-1 mt-4">
      <span>${price}</span>
      <span>تومان</span>
      </div>
      </div>`;
    })
    .join("");
  //-----------------------------------------------------------//
  container = `
    <div id="all-products-page-products" class="container-primary mt-8 md:grid md:grid-cols-4 md:gap-6">
    ${template}
    </div>
    `
    root.innerHTML = container;
}
renderAllProductsPage();
