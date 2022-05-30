// On clicking remove button the item should be removed from DOM as well as localstorage.

// getting data from localStorage
let arr = JSON.parse(localStorage.getItem("coffee"));

let bucket = document.getElementById("bucket");
let total = 0;



// append data
arr.forEach( function (el,i){

  let div = document.createElement("div");

  let image = document.createElement("img");
  image.src = el.image;
  image.setAttribute("id","image")

  let price = document.createElement("h3");
  price.innerText = el.price
  total = total+el.price;

  let total_amount = document.getElementById("total_amount");
  total_amount.innerText = total;


  let button = document.createElement("button");
  button.innerText = "Remove";
  button.setAttribute("id","remove_coffee");
  button.addEventListener("click",function() {
    remove(el,i);
  })

  let title = document.createElement("h3");
  title.innerText = el.title;

  div.append(image, title, price, button);
  bucket.append(div)

});


// remove
function remove(el,i) {

  let x = arr.splice(el,i,1);
  localStorage.setItem("coffee",JSON.stringify(x));
  window.location.reload();
}


// confirm_checkout
function confirm_checkout() {
   window.location.href="checkout.html"
}
