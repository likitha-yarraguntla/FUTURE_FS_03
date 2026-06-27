function toggleDarkMode() {
document.body.classList.toggle("dark-mode");
}

// ================= PRODUCT FILTER =================
const cards = document.querySelectorAll(".product-box");

function filterProducts(category) {
cards.forEach(card => {
if (category === "all" || card.classList.contains(category)) {
card.style.display = "block";
} else {
card.style.display = "none";
}
});
}

if (document.getElementById("allBtn")) {
document.getElementById("allBtn").onclick = () => filterProducts("all");
document.getElementById("gheeBtn").onclick = () => filterProducts("ghee");
document.getElementById("dryBtn").onclick = () => filterProducts("dryfruit");
document.getElementById("festivalBtn").onclick = () => filterProducts("festival");
document.getElementById("bakeryBtn").onclick = () => filterProducts("bakery");
}

// ================= SEARCH =================
const searchInput = document.getElementById("searchInput");

if (searchInput) {
searchInput.addEventListener("keyup", function () {
let value = this.value.toLowerCase();


document.querySelectorAll(".product-box").forEach(item => {
  let name = item.querySelector("h3").innerText.toLowerCase();

  if (name.includes(value)) {
    item.style.display = "block";
  } else {
    item.style.display = "none";
  }
});


});
}

// ================= DARK MODE BUTTON =================
const darkBtn = document.getElementById("darkBtn");

if (darkBtn) {
darkBtn.onclick = function () {
document.body.classList.toggle("dark-mode");
};
}

// ================= IMAGE SLIDER =================
let slides = document.querySelectorAll(".slide");
let current = 0;

if (slides.length > 0) {
slides[0].style.display = "block";

setInterval(() => {
slides[current].style.display = "none";


current++;

if (current >= slides.length) {
  current = 0;
}

slides[current].style.display = "block";


}, 3000);
}

// ================= BACK TO TOP =================
const topBtn = document.getElementById("topBtn");

if (topBtn) {
topBtn.onclick = function () {
window.scrollTo({
top: 0,
behavior: "smooth"
});
};
}

// ================= ADD TO CART =================
let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.querySelectorAll(".cart-btn").forEach(btn => {
btn.addEventListener("click", function (e) {


e.stopPropagation();

let box = this.parentElement;

let name = box.querySelector("h3").innerText;
let price = box.querySelector("p").innerText;

cart.push({
  name: name,
  price: price,
  qty: 1
});

localStorage.setItem("cart", JSON.stringify(cart));

let cartCount = document.getElementById("cartCount");

if (cartCount) {
  cartCount.innerText = cart.length;
}

alert(name + " Added To Cart 🛒");
});
});

// ================= CART COUNT =================
let cartCount = document.getElementById("cartCount");

if (cartCount) {
cartCount.innerText = cart.length;
}

// ================= PRODUCT POPUP =================
let popup = document.getElementById("popup");

if (popup) {
let popupImg = document.getElementById("popupImg");
let popupTitle = document.getElementById("popupTitle");
let popupPrice = document.getElementById("popupPrice");

document.querySelectorAll(".product-box").forEach(card => {
card.addEventListener("click", () => {
popup.style.display = "block";

  popupImg.src = card.querySelector("img").src;
  popupTitle.innerText = card.querySelector("h3").innerText;
  popupPrice.innerText = card.querySelector("p").innerText;
});


});

const closePopup = document.getElementById("closePopup");

if (closePopup) {
closePopup.onclick = function () {
popup.style.display = "none";
};
}
}
// CART PAGE

if (document.getElementById("cartItems")) {

  let cart =
    JSON.parse(localStorage.getItem("cart")) || [];

  let cartItems =
    document.getElementById("cartItems");

  let total = 0;

  cartItems.innerHTML = "";

  cart.forEach((item, index) => {

    let price =
      parseInt(item.price.replace(/[^\d]/g, ""));

    total += price * item.qty;

    cartItems.innerHTML += `
      <div class="product-box">
        <h3>${item.name}</h3>
        <p>${item.price}</p>

        <button onclick="changeQty(${index},-1)">
          -
        </button>

        ${item.qty}

        <button onclick="changeQty(${index},1)">
          +
        </button>
        <button
class="remove-btn"
onclick="removeItem(${index})">
Remove
</button>
      </div>
    `;
  });

  document.getElementById(
    "totalPrice"
  ).innerText =
    "Total : ₹" + total;
}function changeQty(index, value) {

  let cart =
    JSON.parse(localStorage.getItem("cart")) || [];

  cart[index].qty += value;

  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }

  localStorage.setItem(
    "cart",
    JSON.stringify(cart)
  );

  location.reload();
}
function removeItem(index){

  let cart =
  JSON.parse(localStorage.getItem("cart")) || [];

  cart.splice(index,1);

  localStorage.setItem(
  "cart",
  JSON.stringify(cart)
  );

  location.reload();
}
let checkoutBtn =
document.getElementById("checkoutBtn");

if(checkoutBtn){

checkoutBtn.onclick = function(){

let cart =
JSON.parse(
localStorage.getItem("cart")
) || [];

let message =
"Hello Sri Balaji Ghee Sweets%0A%0A";

cart.forEach(item=>{
message +=
`${item.name} x ${item.qty}%0A`;
});

window.open(
`https://wa.me/918309663069?text=${message}`
);

};

}