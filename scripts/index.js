// Add the coffee to local storage with key "coffee"

let url = "https://masai-mock-api.herokuapp.com/coffee/menu";

fetch(url)
 .then( function (res){
    return res.json();
 })
   .then( function (res){
      console.log(res.menu.data);
      append(res.menu.data);
   })
    .catch(function(err){
      console.log(err);
    });



let menu = document.getElementById("menu");

// append function
function append(data){

  data.forEach( function (el,i){

    let div = document.createElement("div");

    let image = document.createElement("img");
    image.src = el.image;
    image.setAttribute("id","image")

    let price = document.createElement("h3");
    price.innerText = el.price

    let button = document.createElement("button");
    button.innerText = "Add to bucket";
    button.setAttribute("id","add_to_bucket");
    button.addEventListener("click",function() {
      add_to_bucket(el,i);
    })

    let title = document.createElement("h3");
    title.innerText = el.title;

    div.append(image, title, price, button);
    menu.append(div);

  });
}



let arr=[];
let count =0;
// add_to_bucket
function add_to_bucket(el,i){
  
  arr.push(el);
  
  count=count+1;
  let coffee_count = document.getElementById("coffee_count");
  coffee_count.innerText = count;
  localStorage.setItem("coffee",JSON.stringify(arr));

}
