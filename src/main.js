let mainPageProductsContainer = document.getElementById("main-page-products");
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

async function getSingleProduct(id) {
  const result = await fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
    .then((json) => console.log(json));
  return result;
}

async function renderMainPageProducts() {
  const products = await getLimitedProducts(4);
  const template = products
    .map((product) => {
      const { id, title, image, price } = product;
      return `
    <a href="/products/${id}" onclick="handleAClick(event,this)" class="w-full flex flex-col items-center rounded-lg shadow-xl pb-4 overflow-hidden">
    <img class="w-full aspect-square object-cover" src="${image}" alt="" width="400px">
    <h2 class="font-bold text-xl mt-4 text-center line-clamp-1">${title}</h2>
    <div class="flex gap-1 mt-4">
    <span>${price}</span>
    <span>تومان</span>
    </div>
    </a>`;
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
  let container = `
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
    `;
  root.innerHTML = container;
}

function handleAClick(event) {
  event.preventDefault();
  const href = event.target.getAttribute("href");
  history.pushState("", "", href);
  checkState();
}

function renderMainPage() {
  root.innerHTML = `
    <img class="container-primary rounded-lg" src="./assets/imgs/slider.jpeg" alt="">

        <div class="flex flex-col items-center mt-6">
            <div class="bg-black w-14 h-0.5"></div>
            <h1 class="my-4">جدیدترین محصولات</h1>
            <div class="bg-black w-14 h-0.5"></div>
        </div>

        <!-- products(limited) -->
         <div id="main-page-products" class="container-primary mt-8 md:flex md:gap-6 md:justify-center"> 
            <!--skeleton-->
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
         </div>
         <a href="/products" onclick="handleAClick(event)" class="bg-black text-white px-8 py-2 block mx-auto w-max mt-6" href="#">همه محصولات</a>
    `;
  mainPageProductsContainer = document.getElementById("main-page-products");
  renderMainPageProducts();
}

async function renderSingleProduct(id) {
  const data = await getSingleProduct(id);
  const template = `
    <div class="container-primary flex flex-col md:flex-row gap-4">
    <img src="${data.image}"/>
    <div>
    <h1>${data.title}</h1>
    <p>${data.description}</p>
    </div>
    </div>
    `;
  root.innerHTML = template;
}

function checkState() {
  const pathName = location.pathname;
  switch (true) {
    case pathName === "/products":
      renderAllProductsPage();
      break;
    case pathName === "/src/index.html":
      renderMainPage();
      break;
    case pathName.startsWith("/products/"):
      let path = pathName.split("/");
      const pId = path.at(-1);
      renderSingleProduct(pId);
      break;
    default:
      break;
  }
}

window.addEventListener("popstate", checkState);
