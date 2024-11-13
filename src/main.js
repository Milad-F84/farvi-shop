const mainPageProductsContainer = document.getElementById("main-page-products");

async function getLimitedProducts(limitCount = 4) {
  return await fetch(`https://fakestoreapi.com/products?limit=${limitCount}`)
    .then((res) => res.json())
    .then((json) => json);
}

async function renderMainPageProducts() {
  const products = await getLimitedProducts(4);
  const template = products.map((product) => {
    const {title,image,price} = product
    return `
    <div class="flex flex-col items-center rounded-lg shadow-xl pb-4 overflow-hidden">
    <img class="w-full aspect-square object-cover" src="${image}" alt="" width="400px">
    <h2 class="font-bold text-xl mt-4">${title}</h2>
    <div class="flex gap-1 mt-4">
    <span>${price}</span>
    <span>تومان</span>
    </div>
    </div>`
  }).join("");
  mainPageProductsContainer.innerHTML = template;
}
renderMainPageProducts();
