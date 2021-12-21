function saveLocal() {
    let data = {
        firstName: document.getElementById("firstName").value,
        secondName: document.getElementById("secondName").value,
        phone: document.getElementById("phone").value,
        address: document.getElementById("address").value,
        date: document.getElementById("date").value
    }
    localStorage.setItem("prev-order", JSON.stringify(data))
}