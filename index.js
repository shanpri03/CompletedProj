let deliver_div=document.querySelector(".deliver");
let orders_div=document.querySelector(".orders");
let cart_div=document.querySelector(".cart");
let subheader =document.querySelector('.subheader');
let child_of_subheader =subheader.children;


deliver_div.addEventListener("mouseover", (e)=>
{
    deliver_div.style.border="1px solid white"
})
deliver_div.addEventListener("mouseout", (e)=>
{
    deliver_div.style.border="none"
})


orders_div.addEventListener("mouseover", (e)=>
{
    orders_div.style.border="1px solid white"
})
orders_div.addEventListener("mouseout", (e)=>
{
    orders_div.style.border="none"
})


cart_div.addEventListener("mouseover", (e)=>
{
    cart_div.style.border="1px solid white"
})
cart_div.addEventListener("mouseout", (e)=>
{
    cart_div.style.border="none"
})

for(let i=0;i<child_of_subheader.length;i++){
        child_of_subheader[i].addEventListener("mouseover",(e)=>{
             child_of_subheader[i].classList.add('hovereffect')
         })
         child_of_subheader[i].addEventListener("mouseout",(e)=>{
             child_of_subheader[i].classList.add('hoverout')
         })
        }
let container=document.querySelector(".container");       
async function fetching_data(){
            try {
                let res =await fetch("https://dummyjson.com/products")
            let data =await res.json();
            console.log(data.products);
        let productArr = data.products;
        productArr.map((ele)=>{
            container.innerHTML = container.innerHTML + `
            <div class="card">
            <div class="image-card">
            <img src=${ele.thumbnail} alt=${ele.title} srcset="">
            </div>
            <div class="card-content">
            <div>Product Name : ${ele.title}</div>
            <div>Price : Rs. ${ele.price}</div>
            <div>Rating : ${ele.rating}</div>
            <div>Brand : ${ele.brand}</div>


            </div>
         </div>
         `
        })

  } 
  catch (error) {
                console.log(error);
            }
        }
        fetching_data()