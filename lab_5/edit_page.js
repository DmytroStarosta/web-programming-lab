document.getElementById('form').addEventListener('submit', async (event) => {
    event.preventDefault();

    // Отримати ID з URL
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id'); // Отримати ID ялинки для редагування

    // Отримання значень з форми
    const title = document.getElementById('title-edit').value;
    const manufacturer = document.getElementById('manufacturer-edit').value;
    const material = document.getElementById('material-edit').value;
    const description = document.getElementById('description-edit').value;
    const price = document.getElementById('price-edit').value;

    // Перевірка на заповненість полів
    if (!title || !manufacturer || !material || !description || price === '') {
        alert('Please fill in all fields');
        return;
    }

    // Створити об'єкт treeData
    const treeData = {
        name: title,
        manufacturer: manufacturer,
        material: material,
        description: description,
        price: parseFloat(price) // Конвертувати ціну в число
    };

    // Виклик функції редагування
    await editTree(id, treeData); // Використати editTree для редагування

    // Скинути форму та оновити список ялинок
    document.getElementById("form").reset();
    fetchTrees().then(trees => renderTrees(trees));
});
