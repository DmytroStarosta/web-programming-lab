import { postTree} from "./api.js";

document.getElementById('sumbit-button').onclick = function() {
    const title = document.getElementById("title-create").value.trim();
    const manufacturer = document.getElementById("manufacturer-create").value.trim();
    const material = document.getElementById("material-create").value;
    const description = document.getElementById("description-create").value.trim();
    const price = document.getElementById("price-create").value;

    if (title === "" || manufacturer === "" || !material || description === "" || price === "" || parseFloat(price) < 0) {
        alert("All fields must be filled!");
    } else {
        postTree({
            "name": title,
            "manufacturer": manufacturer,
            "material": material,
            "description": description,
            "price": price
        });
    }
}