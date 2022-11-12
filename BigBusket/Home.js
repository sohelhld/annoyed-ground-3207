
    // for select
    let data=[]

    function handlelCatagory(){

      document.querySelector("#smartBusket").innerHTML = "";

      let selected = document.querySelector("select").value;
      let filterData = data.filter(function(elem){
          return elem.catagory == selected;
          
      })
      console.log(filterData);
      displayCardSm(filterData);
  }

    
    
    // name boxe
let boxUrl ="https://636b95f77f47ef51e134a114.mockapi.io/products"
let Boxdata=[]
async function getDataBox() {
    try{
        let res= await fetch( boxUrl)
        let out = await res.json();
        Boxdata=[out]
        displayCardBox(out)
        console.log(out);
    }catch(err){
        alert("link is err")
    }     
}
getDataBox() ;
function displayCardBox(out) {
out.forEach((elem) => {
  let div=  document.createElement("div")
  let dis = document.createElement("h1")
dis.innerText=elem.name
  div.append(dis)
  document.querySelector("#boxs").append(div)
});
}

        // Smart Busket
let urlbst ="https://636b95f77f47ef51e134a114.mockapi.io/Busket"
let databst=[]
let cartItems=JSON.parse(localStorage.getItem("cartProducts")) || [];
async function getDatabst() {
    try{
        let res= await fetch(urlbst)
        let out = await res.json();
        data=[out]
        displayCardSm(out)
        console.log(out);
    }catch(err){
        alert("link is err")
    }     
}
getDatabst() ;

function displayCardSm(out) {

  document.querySelector("#smartBusket").innerHTML = "";

out.forEach((elem) => {
    let div=  document.createElement("div")
let img=document.createElement("img")
img.setAttribute("src",elem.img)
let dis = document.createElement("h1")
dis.innerText=elem.title
let rev = document.createElement("h2")
rev.innerText= "RS-"+elem.price
let cosr = document.createElement("h2")
cosr.innerText= elem.catagory

let btn = document.createElement("button");
btn.innerText = "add to cart";
btn.addEventListener("click",function(){
    cartItems.push(elem);
    localStorage.setItem("cartProducts",JSON.stringify(cartItems));
});

  div.append(img,dis,rev,cosr,btn)
  document.querySelector("#smartBusket").append(div)
});
}

        // for bank part

let urlBank ="https://636b95f77f47ef51e134a114.mockapi.io/Bank"
let dataBank=[]
async function getDataBank() {
try{
    let Bres= await fetch(urlBank)
    let Bout = await Bres.json();
    Bdata=[Bout]
   console.log(displayCardBank(Bout)); 
    console.log(Bout);
}catch(err){
    alert("link is err")
}     
}
getDataBank() ;

function displayCardBank(Bout) {
Bout.forEach((elem) => {
let div=  document.createElement("div")
let img=document.createElement("img")
img.setAttribute("src",elem.img)
let dis = document.createElement("h1")
dis.innerText=elem.discount +"Instant Discount"
let rev = document.createElement("h2")
rev.innerText=elem.number+"Review"
let cosr = document.createElement("h2")
cosr.innerText="Review - "+ elem.review 
div.append(img,dis,rev,cosr)
document.querySelector("#bank").append(div)
});
}

        // Best Sellers

// let urlSm ="https://636b95f77f47ef51e134a114.mockapi.io/Busket"
// let dataSm=[]
// async function getDataSm() {
//     try{
//         let res= await fetch(urlSm)
//         let out = await res.json();
//         data=[out]
//         displayCardSm(out)
//         console.log(out);
//     }catch(err){
//         alert("link is err")
//     }     
// }
// getDataSm() ;
// function displayCardSm(out) {
// out.forEach((elem) => {
//     let div=  document.createElement("div")
// let img=document.createElement("img")
// img.setAttribute("src",elem.img)
// let dis = document.createElement("h1")
// dis.innerText=elem.title
// let rev = document.createElement("h2")
// rev.innerText= "RS-"+elem.price
// let cosr = document.createElement("h2")
// cosr.innerText= elem.catagory

//   div.append(img,dis,rev,cosr)
//   document.querySelector("#best").append(div)
// });
// }
    // Fruits & Vegetables
let frutUrl ="https://636b95f77f47ef51e134a114.mockapi.io/banner?page=1&limit=6"
let frutdata=[]
async function getDatafrut() {
    try{
        let res= await fetch( frutUrl)
        let out = await res.json();
        frutdata=[out]
        displayCardfrut(out)
        console.log(out);
    }catch(err){
        alert("link is err")
    }     
}
getDatafrut() ;
function displayCardfrut(out) {
out.forEach((elem) => {
  let div=  document.createElement("div")
  let img=document.createElement("img")
img.setAttribute("src",elem.img)
  let dis = document.createElement("h1")
dis.innerText=elem.products
  div.append(img,dis)
  document.querySelector("#fruits").append(div)
});
}
            // Your Daily Staples

let daliyUrl ="https://636b95f77f47ef51e134a114.mockapi.io/banner?page=1&limit=6"
let daliydata=[]
async function getDatadaliy() {
    try{
        let res= await fetch( daliyUrl)
        let out = await res.json();
        daliydata=[out]
        displayCarddaliy(out)
        console.log(out);
    }catch(err){
        alert("link is err")
    }     
}
getDatadaliy() ;
function displayCarddaliy(out) {
out.forEach((elem) => {
  let div=  document.createElement("div")
  let img=document.createElement("img")
img.setAttribute("src",elem.img)
  let dis = document.createElement("h1")
dis.innerText=elem.products
  div.append(img,dis)
  document.querySelector("#daily").append(div)
});
}
    // Bavergs

let bevrUrl ="https://636b95f77f47ef51e134a114.mockapi.io/banner?page=1&limit=5"
let bevrdata=[]
async function getDatabevr() {
    try{
        let res= await fetch( bevrUrl)
        let out = await res.json();
        bevrdata=[out]
        displayCardbevr(out)
        console.log(out);
    }catch(err){
        alert("link is err")
    }     
}
getDatabevr() ;
function displayCardbevr(out) {
out.forEach((elem) => {
  let div=  document.createElement("div")
  let img=document.createElement("img")
img.setAttribute("src",elem.img)
  let dis = document.createElement("h1")
dis.innerText=elem.products

let up = document.createElement("h1")
up.innerText= "UP TO 30% OFF"
  div.append(img,dis,up)
  document.querySelector("#bev").append(div)
});
}

// Snack Store

let snkUrl ="https://636b95f77f47ef51e134a114.mockapi.io/Busket?page=1&limit=6"
let snkdata=[]
async function getDatasnk() {
    try{
        let res= await fetch( snkUrl)
        let out = await res.json();
        snkdata=[out]
        displayCardsnk(out)
        console.log(out);
    }catch(err){
        alert("link is err")
    }     
}
getDatasnk() ;
function displayCardsnk(out) {
out.forEach((elem) => {
  let div=  document.createElement("div")
  let img=document.createElement("img")
img.setAttribute("src",elem.img)
  let dis = document.createElement("h1")
dis.innerText=elem.title

let up = document.createElement("h1")
up.innerText= "UP TO 50% OFF"
  div.append(img,dis,up)
  document.querySelector("#snk").append(div)
});
}


            // Cleaning & Household
let clnUrl ="https://636b95f77f47ef51e134a114.mockapi.io/Busket?page=1&limit=6"
let clndata=[]
async function getDatacln() {
    try{
        let res= await fetch( clnUrl)
        let out = await res.json();
        clndata=[out]
        displayCardcln(out)
        console.log(out);
    }catch(err){
        alert("link is err")
    }     
}
getDatacln() ;
function displayCardcln(out) {
out.forEach((elem) => {
  let div=  document.createElement("div")
  let img=document.createElement("img")
img.setAttribute("src",elem.img)
  let dis = document.createElement("h1")
dis.innerText=elem.title

let up = document.createElement("h1")
up.innerText= "UP TO 50% OFF"
  div.append(img,dis,up)
  document.querySelector("#cln").append(div)
});
}

                // Beauty & Hygiene
let btyUrl ="https://636b95f77f47ef51e134a114.mockapi.io/banner?page=1&limit=5"
let btydata=[]
async function getDatabty() {
    try{
        let res= await fetch( btyUrl)
        let out = await res.json();
        btydata=[out]
        displayCardbty(out)
        console.log(out);
    }catch(err){
        alert("link is err")
    }     
}
getDatabty() ;
function displayCardbty(out) {
out.forEach((elem) => {
  let div=  document.createElement("div")
  let img=document.createElement("img")
img.setAttribute("src",elem.img)
  let dis = document.createElement("h1")
dis.innerText=elem.products

let up = document.createElement("h1")
up.innerText= "UP TO 30% OFF"
  div.append(img,dis,up)
  document.querySelector("#bty").append(div)
});
}

        // Home & Kitchen Essentials

        let hnkUrl ="https://636b95f77f47ef51e134a114.mockapi.io/Busket?page=1&limit=6"
        let hnkdata=[]
        async function getDatahnk() {
            try{
                let res= await fetch( hnkUrl)
                let out = await res.json();
                hnkdata=[out]
                displayCardhnk(out)
                console.log(out);
            }catch(err){
                alert("link is err")
            }     
        }
        getDatahnk() ;
        function displayCardhnk(out) {
        out.forEach((elem) => {
          let div=  document.createElement("div")
          let img=document.createElement("img")
        img.setAttribute("src",elem.img)
          let dis = document.createElement("h1")
        dis.innerText=elem.title
        
        let up = document.createElement("h1")
        up.innerText= "UP TO 50% OFF"
          div.append(img,dis,up)
          document.querySelector("#hnk").append(div)
        });
        }       

            //  Brand Store
        let bndUrl ="https://636b95f77f47ef51e134a114.mockapi.io/Busket?page=1&limit=6"
        let bnddata=[]
        async function getDatabnd() {
            try{
                let res= await fetch( bndUrl)
                let out = await res.json();
                bnddata=[out]
                displayCardbnd(out)
                console.log(out);
            }catch(err){
                alert("link is err")
            }     
        }
        getDatabnd() ;
        function displayCardbnd(out) {
        out.forEach((elem) => {
          let div=  document.createElement("div")
          let img=document.createElement("img")
        img.setAttribute("src",elem.img)
          let dis = document.createElement("h1")
        dis.innerText=elem.title
        
        let up = document.createElement("h1")
        up.innerText= "UP TO 50% OFF"
          div.append(img,dis,up)
          document.querySelector("#bnd").append(div)
        });
        } 