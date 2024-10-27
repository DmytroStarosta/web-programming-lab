function fetchTrees() {
    return fetch('http://localhost:3000/trees')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const treesContainer = document.getElementById('trees-container');

            if (!treesContainer) {
                throw new Error("Element with ID 'trees-container' not found");
            }

            treesContainer.innerHTML = '';

            data.forEach(tree => {
                const treeElement = document.createElement('div');
                treeElement.innerHTML = `
                    <h3>${tree.name}</h3>
                    <p>Manufacturer: ${tree.manufacturer}</p>
                    <p>Material: ${tree.material}</p>
                    <p>Description: ${tree.description}</p>
                    <p>Price: $${tree.price}</p>
                `;
                treesContainer.appendChild(treeElement);
            });
        })
        .catch(error => {
            console.error('Error fetching trees:', error);
        });
}

function renderTrees(trees) {
    const container = document.getElementById("elements_id");

    if (!container) {
        throw new Error("Element with ID 'elements_id' not found");
    }

    container.innerHTML = ""; 

    trees.forEach(tree => {
        const box = document.createElement("div");
        box.classList.add("main-box");

        box.innerHTML = `
            <h2>${tree.name}</h2>
            <p>Manufacturer: ${tree.manufacturer}</p>
            <p>Material: ${tree.material}</p>
            <p>${tree.description}</p>
            <p class="box-price">$${tree.price}</p>
        `;

        container.appendChild(box);
    });
}

export { fetchTrees };
export { renderTrees };