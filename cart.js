var total=0;
var totalOff=0;
function loadCart(){
    
   
    var data=getdata();
    debugger
    
}
const getdata= async () => {
debugger
    const response =await fetch ("https://json-server-1017.onrender.com/products");
    const products = await response.json();
    if (products.length >0){

    
        var cart= JSON.parse(localStorage.getItem("toCart")) || [];
    
    var html="";
    for (var i=0;i<cart.length;i++){
var id=cart[i].id;
var quantity=cart[i].quantity;
var item=products.filter(c=>c.id==id)
var item1;
if(item.length>0){
item1=item[0]

}
total+=item1.price;
totalOff+=item1.off;
html+=`  <div id="leftPurchaseDetail${item1.id}">
<div>
    <div id="leftPurchaseName">${item1.title}</div>
    <div id="leftPurchasePrice">
        <div > ₹<b id="leftPurchasePriceFirst">${item1.price}</b></div>
        <div id="leftPruchaseMrp">MRP &nbsp; ₹<span id="mrpdash">${item1.price+item1.off}</span></div>
        
    </div>
</div>
<div id="quant" >${item1.count}</div>
<div id="removeItem">
    <div>
        <div class="remove"><img onclick="removeItem(${item1.id},${item1.price},${item1.off})" src="https://img.1mg.com/images/delete_icon.svg" alt=""></div> 
        <div class="remove" >Remove</div>
    </div>
    <div>
        <div id="dec" onclick="dec(${item1.id},${item1.price},${item1.off},${false})"><img src="https://www.1mg.com/images/minus-cart.svg" alt="decrease" class=""></div>
        <div id="betweenIncDec">${quantity} </div>
        <div id="inc" onclick="inc(${item1.id},${item1.price},${item1.off})"><img src="https://www.1mg.com/images/plus-cart.svg" alt="increase"></div>
    </div>
</div>
</div>`
    } 
    var container =document.getElementById("leftContainer")
    container.innerHTML=html
  
document.getElementById("cartSummarymrp").innerHTML=total+totalOff
document.getElementById("cartSummaryDiscount").innerHTML=totalOff
document.getElementById("cartSummaryShippingFee").innerHTML=0
document.getElementById("cartSummaryToBePaid").innerHTML=total
document.getElementById("totalSavingGreen").innerHTML=totalOff
}
}


function removeItem(id, price,off){

    dec(id,price,off,true)
}
function dec(id, price,off,remove){
    var curr= parseInt(document.getElementById("betweenIncDec").innerHTML);
    if (remove)

    {
        total-=(curr*price)
        totalOff-=(curr*off)
    }
    else{
    total-=price
    totalOff-=off 
    }
    if (curr==1 ||remove)
    document.getElementById("leftPurchaseDetail"+id).remove()
    else
    document.getElementById("betweenIncDec").innerHTML=curr-1
document.getElementById("cartSummarymrp").innerHTML=total+totalOff
document.getElementById("cartSummaryDiscount").innerHTML=totalOff
document.getElementById("cartSummaryShippingFee").innerHTML=0
document.getElementById("cartSummaryToBePaid").innerHTML=total
document.getElementById("totalSavingGreen").innerHTML=totalOff
}
function inc(id,price,off){
    var curr= parseInt(document.getElementById("betweenIncDec").innerHTML);

    total+=price
totalOff+=off
document.getElementById("betweenIncDec").innerHTML=curr+1
document.getElementById("cartSummarymrp").innerHTML=total+totalOff
document.getElementById("cartSummaryDiscount").innerHTML=totalOff
document.getElementById("cartSummaryShippingFee").innerHTML=0
document.getElementById("cartSummaryToBePaid").innerHTML=total
document.getElementById("totalSavingGreen").innerHTML=totalOff

}
