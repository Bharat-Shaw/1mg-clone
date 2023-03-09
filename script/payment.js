function pay() {
    document.getElementById("name").value = "";
    document.getElementById("cardnumber").value = "";
    document.getElementById("expirationdate").value = "";
    document.getElementById("securitycode").value = "";
    setTimeout(() => {
        alert(
            `Your order is successfully placed. You can close this window.`
        );
    }, 3000);
    location.href()
}