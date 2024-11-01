import { getAllTrees, postTree, putTree, deleteTree } from "./api.js"

function renderItemsList(items) {
    const container = document.getElementById('trees-container');

    container.innerHTML = '';

    for (const item of items) {
        const newElement = document.createElement('div');
        newElement.classList.add('main-box');

        newElement.innerHTML = `
            <div class="img-box img-box-1"></div>
            <div class="text-box">
                <h2 class="txt-box-title">${item.name}</h2>
                <h3 class = "manufacturer"><b>Manufacturer:</b> ${item.manufacturer}</h3>
                <p class="box-material" id="material"> <b>Material:</b> ${item.material}</p>
                <p class="box-txt">${item.description}</p>
                <p class="box-price" id="price"> <b>Price:</b> $${item.price}</p>
                <div class="element-button">
                    <button class="edit-button">Edit</button>
                    <button class="remove-button">Remove</button>
                </div>
            </div>
        `;

        container.appendChild(newElement);

        newElement.querySelector('.remove-button').addEventListener('click', () => {
            deleteTree(item.id);
            newElement.remove();
        });


        newElement.querySelector('.edit-button').onclick = () => {
            localStorage.setItem("editTree", JSON.stringify(item));

            window.location.href = "edit_page.html";
        };
    }
};

const getTrees = async () => {
    const allTrees = await getAllTrees();

    console.log(allTrees);

    let trees = allTrees;

    renderItemsList(trees);
}

if (window.location.href == "http://127.0.0.1:5501/frontend/index.html") {
    getTrees();
}

//----------------------------------previous functions----------------------------------------------------------

function sortElements() {
    const container = document.getElementById("trees-container");
    const boxes = Array.from(container.getElementsByClassName("main-box"));
    boxes.sort((a, b) => {
        const priceA = parseFloat(a.querySelector(".box-price").textContent.replace(/[^0-9.-]+/g, ""));
        const priceB = parseFloat(b.querySelector(".box-price").textContent.replace(/[^0-9.-]+/g, ""));
        return priceB - priceA;
    });

    container.innerHTML = "";
    boxes.forEach(box => {
        container.appendChild(box);
    });
}

function countPrice() {
    const boxes = Array.from(document.querySelectorAll(".box-price"));
    const total = boxes.reduce((acc, box) => {
        acc += parseFloat(box.textContent.replace(/[^0-9.-]+/g, ""));
        return acc;
    }, 0);
    const counter = document.getElementById("total-expenses");
    counter.textContent = total.toFixed(2);
}

function searchElements() {
    const searchName = document.getElementById("search-input").value.trim().toLowerCase();
    const boxes = Array.from(document.getElementsByClassName("main-box"));

    boxes.forEach((box) => {
        const currentName = box.querySelector("h2").textContent.trim().toLowerCase();
        box.style.display = currentName.includes(searchName) ? '' : 'none';
    });
}

function clearButton() {
    document.getElementById("search-input").value = '';
    document.querySelectorAll(".main-box").forEach((box) => {
        box.style.display = "";
    });
}

window.sortElements = sortElements;
window.countPrice = countPrice;
window.searchElements = searchElements;
window.clearButton = clearButton;