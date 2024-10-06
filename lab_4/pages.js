document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("title-create").value.trim();
    const manufacturer = document.getElementById("manufacturer-create").value.trim();
    const material = document.getElementById("material-create").value;
    const description = document.getElementById("description-create").value.trim();
    const price = document.getElementById("price-create").value;

    let allFieldsFilled = true;

    if (title === "" || manufacturer === "" || !material || description === "" || price === "" || price < 0) {
        allFieldsFilled = false;
    }

    if (!allFieldsFilled) {
        alert("All fields must be filled out");
    } else {

        console.log("Title:", title);
        console.log("Manufacturer:", manufacturer);
        console.log("Material:", material);
        console.log("Description:", description);
        console.log("Price:", price);
    };
});