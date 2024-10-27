const renderItemsList = (items) => {
    const container = document.getElementById('elements_id');
    container.innerHTML = '';

    for (const item of items) {
        const newElement = document.createElement('div');
        newElement.classList.add('main-box');

        newElement.innerHTML = `
            <div class="img-box img-box-1"></div>
            <div class="text-box">
                <h2 class="txt-box-title">${item.name}</h2>
                <h3 class="manufacturer">${item.manufacturer}</h3>
                <p class="box-material"><b>Material:</b> ${item.material}</p>
                <p class="box-txt">${item.description}</p>
                <p class="box-price"><b>Price:</b> $${item.price}</p>
                <div class="element-button">
                    <button class="edit-button">Edit</button>
                    <button class="remove-button">Remove</button>
                </div>
            </div>
        `;

        newElement.querySelector('.remove-button').addEventListener('click', () => {
            deleteItem(item.id);
        });

        newElement.querySelector('.edit-button').onclick = () => {
            // Redirect to the edit page with the item's ID as a query parameter
            window.location.href = `edit_page.html?id=${item.id}`; // Use template literals for URL
        };
        

        container.appendChild(newElement);
    }
};

// Функції для роботи з API
async function getAllTrees() {
    try {
        const response = await fetch('http://localhost:3000/trees');
        if (!response.ok) {
            throw new Error('Failed to fetch trees');
        }
        const trees = await response.json();
        return trees;
    } catch (error) {
        console.error('Error loading trees:', error);
        return [];
    }
}

async function postTree(treeData) {
    try {
        const response = await fetch('http://localhost:3000/trees', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(treeData)
        });
        if (!response.ok) {
            throw new Error('Failed to add tree');
        }
    } catch (error) {
        console.error('Error adding tree:', error);
    }
}

async function putTree(id, treeData) {
    try {
        const response = await fetch(`http://localhost:3000/trees/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(treeData)
        });
        if (!response.ok) {
            throw new Error('Failed to update tree');
        }
    } catch (error) {
        console.error('Error updating tree:', error);
    }
}

async function deleteTree(id) {
    try {
        const response = await fetch(`http://localhost:3000/trees/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Failed to delete tree');
        }
    } catch (error) {
        console.error('Error deleting tree:', error);
    }
}

async function fetchTreeData(id) {
    try {
        const response = await fetch(`http://localhost:3000/trees/${id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch tree data');
        }
        return await response.json(); // Повертає JSON з даними дерева
    } catch (error) {
        console.error('Error fetching tree data:', error);
    }
}


// Функції для завантаження, додавання, редагування та видалення елементів
async function loadAndRenderItems() {
    try {
        const trees = await getAllTrees();
        renderItemsList(trees);
    } catch (error) {
        console.error('Error loading trees:', error);
    }
}

async function addItem(name, manufacturer, material, description, price) {
    try {
        await postTree({ name, manufacturer, material, description, price });
        loadAndRenderItems();
    } catch (error) {
        console.error('Error adding tree:', error);
    }
}

async function editItem(id, name, manufacturer, material, description, price) {
    try {
        await putTree(id, { name, manufacturer, material, description, price });
        loadAndRenderItems();
    } catch (error) {
        console.error('Error updating tree:', error);
    }
}

async function deleteItem(id) {
    try {
        await deleteTree(id);
        loadAndRenderItems();
    } catch (error) {
        console.error('Error deleting tree:', error);
    }
}

// Функції для розрахунку ціни та пошуку
function sortElements(){
    const container = document.getElementById("elements_id");
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
    counter.textContent = total;
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

document.addEventListener('DOMContentLoaded', loadAndRenderItems);
