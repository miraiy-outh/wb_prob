let products = [
    {
        id: 1,
        imgURL: "icons/photo.svg",
        productName: "Футболка UZcotton мужская",
        color: "белый",
        size: 56,
        storageName: "Коледино WB",
        proveder: "ООО Вайлдберриз",
        sumNumber: 2,
        price: 522,
        oldPrice: 1051
    },

    {
        id: 2,
        imgURL: "icons/photo2.svg",
        productName: "Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe",
        color: "прозрачный",
        storageName: "Коледино WB",
        proveder: "ООО Мегапрофстиль",
        price: 2100047,
        oldPrice: 2300047
    },

    {
        id: 3,
        imgURL: "icons/photo3.svg",
        productName: "Карандаши цветные Faber-Castell \"Замок\", набор 24 цвета, заточенные, шестигранные, Faber-Castell",
        color: "белый",
        size: 56,
        storageName: "Коледино WB",
        proveder: "ООО Вайлдберриз",
        sumNumber: 2,
        price: 494,
        oldPrice: 950
    }
]

function createProducts() {
    products.forEach((product) => {
        createProduct(product);
    });
}

function createOldProducts() {
    products.forEach((item) => {
        createOldProduct(item);
    });
}

function createProduct(item) {
    const products = document.querySelector('.in-stock__products');
    const product = document.createElement('div');
    product.classList.add('product');
    // product-info
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    //product-info__icon
    const productInfoCheckbox = document.createElement('input');
    productInfoCheckbox.type = "checkbox";
    productInfoCheckbox.id = `product${item.id}`;
    productInfoCheckbox.name = "product";
    productInfoCheckbox.value = `product${item.id}`;

    const productInfoImage = document.createElement('img');
    productInfoImage.src = toString(item.imgURL);
    productInfoImage.classList.add('product-info__img');
    productInfoCheckbox.alt = "product photo";
    //product-item
    const productItem = document.createElement('div');
    productItem.classList.add('product-item');
    const productItemName = document.createElement('p');
    productItemName.classList.add('product-item__name');
    productItemName.textContent = toString(item.productName);

    const Characteristics = document.createElement('div');
    Characteristics.classList.add('product-item__characteristics');
    const CharacteristicColor = document.createElement('div');
    CharacteristicColor.classList.add('characteristic');
    CharacteristicColor.textContent = `Цвет: ${item.color}`;
    if (item.hasOwnProperty('size')) {
        const CharacteristicSize = document.createElement('div');
        CharacteristicSize.classList.add('characteristic');
        CharacteristicSize.textContent = `Размер: ${item.size}`;
    }

    // product-order
    const productOrder = document.createElement('div');
    productInfo.classList.add('product-order');

    emoji.textContent = content;
    front.appendChild(emoji);
    card.appendChild(notfront);
    card.appendChild(front);
    card.addEventListener('click', reverseCard)
    cards.appendChild(card);
}
