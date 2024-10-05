function sortElements(){
    const container = document.getElementById("elements_id");
    const boxes = Array.from(container.getElementsByClassName("main-box"));
    boxes.sort((a, b) => {
        const priceA = parseFloat(a.querySelector(".box-price").textContent.replace(/[^0-9.-]+/g, ""));
        const priceB = parseFloat(b.querySelector(".box-price").textContent.replace(/[^0-9.-]+/g, ""));
        return priceB - priceA;
    })

    container.innerHTML = "";
    boxes.forEach(box => {
        container.appendChild(box);
    })
}

function countPrice(){
    const boxes = Array.from(document.querySelectorAll(".box-price"))

    const total = boxes.reduce((acc, box) => {
        acc += parseFloat(box.textContent.replace(/[^0-9.-]+/g, ""));
        return acc;
    }, 0)
    const counter = document.getElementById("total-expenses");
    counter.textContent = total;
}

function searchElements(){
    const searchName = document.getElementById("search-input").value.trim().toLowerCase();
    const boxes = Array.from(document.getElementsByClassName("main-box"));

    boxes.forEach((box) => {
        const currentName = box.querySelector("h2").textContent.trim().toLowerCase();
        if (currentName.includes(searchName)) {
            box.style.display = '';
        } else {
            box.style.display = 'none'; 
        }
    });
}

function clearButton(){
    document.getElementById("search-input").value = '';
    const boxes = document.querySelectorAll(".main-box");
    boxes.forEach((box) => {
        box.style.display = "";
    });
}