console.log("JavaScript подключён!");

document.querySelector("#buy").addEventListener("click", function() {
    document.querySelector("#message").textContent = "Отличный выбор! Наушники уже в вашей корзине.";
});


document.querySelector("#buy").addEventListener("click", function() {
    document.querySelector("#message").textContent = "Товар успешно добавлен в вашу корзину!";
});


document.querySelector("#details").addEventListener("click", function() {
    document.querySelector("#info").textContent = "Время работы: до 20 часов. Гарантия: 12 месяцев.";
});


document.querySelector("#delivery").addEventListener("click", function() {
    document.querySelector("#delivery-info").textContent = "Доставка по городу — 300 ₽";
});

document.querySelector("#clear").addEventListener("click", function() {
    document.querySelector("#message").textContent = "";
});
