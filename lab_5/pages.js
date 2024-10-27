document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("title-create").value.trim();
    const manufacturer = document.getElementById("manufacturer-create").value.trim();
    const material = document.getElementById("material-create").value;
    const description = document.getElementById("description-create").value.trim();
    const price = document.getElementById("price-create").value;

    let allFieldsFilled = true;

    if (title === "" || manufacturer === "" || !material || description === "" || price === "" || parseFloat(price) < 0) {
        allFieldsFilled = false;
    }

    if (!allFieldsFilled) {
        alert("All fields must be filled out correctly");
    } else {
        const treeData = {
            name: title,
            manufacturer: manufacturer,
            material: material,
            description: description,
            price: parseFloat(price)
        };

        addTree(treeData).then(() => {
            document.getElementById("form").reset();
            fetchTrees().then(trees => renderTrees(trees));
        });      
        editTree(id, treeData).then(() => {
            document.getElementById("form").reset();
            fetchTrees().then(trees => renderTrees(trees))
        });
    }
});
