document.addEventListener('DOMContentLoaded', function () {
    function sortItems(isChecked) {
        const items = document.querySelectorAll('.main-box');
        const itemArray = Array.from(items);

        itemArray.sort((a, b) => {
            const priceA = parseFloat(a.querySelector('.box-price').textContent.replace(/[^0-9.-]+/g, ""));
            const priceB = parseFloat(b.querySelector('.box-price').textContent.replace(/[^0-9.-]+/g, ""));
            return isChecked ? priceB - priceA : priceA - priceB;
        });

        const container = document.querySelector('.box-container');
        itemArray.forEach(item => container.appendChild(item));
    }

    function handleCheckboxClick(checkboxId) {
        const checkbox = document.getElementById(checkboxId);
        sortItems(checkbox.checked);
    }

    const checkbox = document.getElementById('myCheckbox1');
    checkbox.addEventListener('change', () => handleCheckboxClick('myCheckbox1'));

    function calculateTotalPrice() {
        const priceElements = document.querySelectorAll('.box-price');
        let total = 0;

        priceElements.forEach(priceElement => {
            const priceText = priceElement.textContent.replace(/[^0-9.-]+/g, "");
            total += parseFloat(priceText);
        });

        document.getElementById('total-expenses').textContent = total.toFixed(2);
    }

    document.getElementById('count-button').addEventListener('click', calculateTotalPrice);

    document.querySelector('.header__button--search').addEventListener('click', 
        function () {
        const searchTerm = document.querySelector('.header__input').value.toLowerCase().trim(); // Очищаємо пробіли
        const items = document.querySelectorAll('.main-box');

        items.forEach(item => {
            const title = item.querySelector('.txt-box-title').textContent.toLowerCase();
            const manufacturer = item.querySelector('.manufacturer').textContent.toLowerCase();

            // Перевіряємо, чи містить назва або виробник пошуковий запит
            if (title.includes(searchTerm) || manufacturer.includes(searchTerm)) {
                item.style.display = ''; // Показуємо елемент
            } else {
                item.style.display = 'none'; // Ховаємо елемент
            }
        });
    });

    // Кнопка очищення
    document.querySelector('.header__button--clear').addEventListener('click', function () {
        document.querySelector('.header__input').value = ''; // Очищуємо поле введення
        const items = document.querySelectorAll('.main-box');
        items.forEach(item => {
            item.style.display = ''; // Показуємо всі елементи
        });
    });
});
