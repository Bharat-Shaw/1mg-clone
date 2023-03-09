function loadCart(){
    
    var cart= JSON.parse(localStorage.getItem("cart")) || [];
    var html="";
    for (var i=0;i<cart.length;i++){
var id=cart[i].id;
var quantity=cart[i].quantity;
html=`  <div id="leftPurchaseDetail">
<div>
    <div id="leftPurchaseName">Show the Product detail here</div>
    <div id="leftPurchasePrice">
        <div > ₹<b id="leftPurchasePriceFirst">995</b></div>
        <div id="leftPruchaseMrp">MRP &nbsp; ₹<span id="mrpdash">1990</span></div>
        
    </div>
</div>
<div id="quant" >bottles of 60 tablets</div>
<div id="removeItem">
    <div>
        <div class="remove"><img src="https://img.1mg.com/images/delete_icon.svg" alt=""></div> 
        <div class="remove" >Remove</div>
    </div>
    <div>
        <div id="dec" onclick="dec()"><img src="https://www.1mg.com/images/minus-cart.svg" alt="decrease" class=""></div>
        <div id="betweenIncDec">1 </div>
        <div id="inc" onclick="inc()"><img src="https://www.1mg.com/images/plus-cart.svg" alt="increase"></div>
    </div>
</div>
</div>`
    }
}
