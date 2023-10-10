let cart = [];
let total = 0;

function addItem() {
    const item = document.getElementById("Menu").value;
    const quantity = parseInt(document.getElementById("quantity").value);

    let price = 0;
    switch (item) {
        case "Menu1":
            price = 5000;
            break;
        case "Menu2":
            price = 5000;
            break;
        case "Menu3":
            price = 15000;
            break;
        case "Menu4":
                price = 30000;
                break;    
        default:
            price = 0;
    }

    const subtotal = price * quantity;
    total += subtotal;

    cart.push({ item, quantity, subtotal });

    updateCart();
}

function updateCart() {
    const cartList = document.getElementById("cart-list");
    cartList.innerHTML = "";

    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `Menu yang dipilih: ${item.item}, 
        Jumlah: ${item.quantity}, 
        Subtotal: Rp. ${item.subtotal}`;
        cartList.appendChild(li);
    });

    document.getElementById("total").textContent = `Rp. ${total}`;
}
function clearCart() {
    cart = [];
    total = 0;
    updateCart();
}
document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault();
    showProcessingPage();
    setTimeout(function() {
        showOrderSummary();
    }, 3000);
});

function showProcessingPage() {
    document.getElementById("orderForm").style.display = "none";
    document.getElementById("processing").style.display = "block";
}

function showOrderSummary() {
    // Tidak ada rangkuman pesanan
}
