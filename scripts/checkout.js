
document.getElementById("form").addEventListener("submit",confirm);
function confirm() {

  event.preventDefault();
  

  let name = document.getElementById("name").value;
  let number = document.getElementById("number").value;
  let address = document.getElementById("address").value;


  if(name === "" || number === "" || address === ""){
    alert("All the fields are required");
  }
  else{
      
         setTimeout( function(){
             alert(" Your order is accepted");
         },0);

         setTimeout( function(){
             alert(" Your order is being Prepared ");
         },3000)

         setTimeout( function(){
             alert("  Your order is being packed   ");
         },8000)

         setTimeout( function(){
             alert(" Your order is out for delivery  ");
         },10000)

         setTimeout( function(){
             alert(" Order delivered ");
         },12000)
         

  }
}