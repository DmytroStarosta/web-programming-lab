import { putTree } from "./api.js";
let item = null;

document.addEventListener("DOMContentLoaded", () => {
    item = JSON.parse(localStorage.getItem("editTree"));

    if (item) {
        document.getElementById("title-edit").value = item.name;
        document.getElementById("manufacturer-edit").value = item.manufacturer;
        document.getElementById("material-edit").value = item.material;
        document.getElementById("description-edit").value = item.description;
        document.getElementById("price-edit").value = item.price;
    }
});

document.getElementById("edit-button").onclick = async function () {

    const newTitle = document.getElementById("title-edit").value;
    const newManufacturer = document.getElementById("manufacturer-edit").value;
    const newMaterial = document.getElementById("material-edit").value;
    const newDescription = document.getElementById("description-edit").value;
    const newPrice = document.getElementById("price-edit").value;

    if (newTitle === "" || newManufacturer === "" || !newMaterial || newDescription === "" || newPrice === "" || parseFloat(newPrice) < 0) {
        alert("All fields must be filled!");
    } else {
        await putTree(item.id, {
        "name": newTitle,
        "manufacturer": newManufacturer,
        "material": newMaterial,
        "description": newDescription,
        "price": newPrice
        });
    }

    document.getElementById("title-edit").value = "";
    document.getElementById("manufacturer-edit").value = "";
    document.getElementById("material-edit").value = "";
    document.getElementById("description-edit").value = "";
    document.getElementById("price-edit").value = "";

    alert("Tree updated!");
    localStorage.removeItem("editTree");
};
