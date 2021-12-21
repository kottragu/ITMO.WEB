function loadPrevOrder() {
    if (localStorage.getItem("prev-order") !== null && localStorage.getItem("prev-order") !== 'null') {
        let order = document.getElementById("prev-order")
        let out = ''
        let prevOrder = JSON.parse(localStorage.getItem("prev-order"))
        out += `<p>Имя: ${prevOrder.firstName}</p>`;
        out += `<p>Фамилия: ${prevOrder.secondName}</p>`;
        out += `<p>Телефона: ${prevOrder.phone}</p>`;
        out += `<p>День доставки: ${prevOrder.date}</p>`;
        out += `<p>Адресс: ${prevOrder.address}</p>`;
        order.innerHTML = out;
    }
}