let products = [
    {
        id: 1,
        imgURL: "icons/photo.svg",
        productName: "Футболка UZcotton мужская",
        color: "белый",
        size: 56,
        storageName: "Коледино WB",
        provider: "ООО Вайлдберриз",
        counter: 1,
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
        provider: "ООО Мегапрофстиль",
        counter: 200,
        price: 2100047,
        oldPrice: 2300047
    },

    {
        id: 3,
        imgURL: "icons/photo3.svg",
        productName: "Карандаши цветные Faber-Castell \"Замок\", набор 24 цвета, заточенные, шестигранные, Faber-Castell",
        storageName: "Коледино WB",
        provider: "ООО Вайлдберриз",
        counter: 2,
        sumNumber: 2,
        price: 494,
        oldPrice: 950
    }
]
function formatPrice(price) {
    return price.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
}

function createProducts() {
    products.forEach((product) => {
        createProduct(product);
    });
}

function createOldProducts() {
    products.forEach((oldProduct) => {
        createOldProduct(oldProduct);
    });
}

const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const phoneNumber = document.querySelector('#phone-number');
const inn = document.querySelector('#inn');

function validateFirstName() {
    var nameInputValue = firstName.value;
    var nameCheck = (/^[a-zA-Zа-яА-Я]+$/).test(nameInputValue);
    if (nameCheck) {
        firstName.classList.remove('error__label');
    }
    else {
        firstName.classList.add('error__label');
    }
}

function validateLastName() {
    var nameInputValue = lastName.value;
    var nameCheck = (/^[a-zA-Zа-яА-Я]+$/).test(nameInputValue);
    if (nameCheck) {
        lastName.classList.remove('error__label');
    }
    else {
        lastName.classList.add('error__label');
    }
}

function validateEmail() {
    var emailInputValue = email.value;
    var emailCheck = (/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i).test(emailInputValue);
    if (emailCheck) {
        email.classList.remove('error__label');
    }
    else {
        email.classList.add('error__label');
    }
}

function validatePhoneNumber() {
    var phoneNumberInputValue = phoneNumber.value;
    var phoneNumberCheck = (/^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/).test(phoneNumberInputValue);
    if (phoneNumberCheck) {
        phoneNumber.classList.remove('error__label');
    }
    else {
        phoneNumber.classList.add('error__label');
    }
}

function validateInn() {
    var innInputValue = inn.value;
    var innCheck = (/^[0-9]{14}$/).test(innInputValue);
    if (innCheck) {
        inn.classList.remove('error__label');
    }
    else {
        inn.classList.add('error__label');
    }
}

function validateAll() {
    console.log('lol');

    validateFirstName();
    validateLastName();
    validateEmail();
    validatePhoneNumber();
    validateInn();

    firstName.addEventListener('blur', validateFirstName);
    lastName.addEventListener('blur', validateLastName);
    email.addEventListener('blur', validateEmail);
    phoneNumber.addEventListener('blur', validatePhoneNumber);
    inn.addEventListener('blur', validateInn);

}

function createProduct(item) {
    const products = document.querySelector('.in-stock__products');
    const product = document.createElement('div');
    product.classList.add('product');
    // product-info
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    //product-info__icon
    const productInfoIconContainer = document.createElement('div');
    productInfoIconContainer.classList.add('product-info__icon__container');
    const productInfoIcon = document.createElement('div');
    productInfoIcon.classList.add('product-info__icon');
    const productInfoCheckbox = document.createElement('input');
    productInfoCheckbox.type = "checkbox";
    productInfoCheckbox.id = `product${item.id}`;
    productInfoCheckbox.name = "product";
    productInfoCheckbox.value = `product${item.id}`;

    const productInfoImage = document.createElement('img');
    productInfoImage.src = item.imgURL;
    productInfoImage.classList.add('product-info__img');
    productInfoCheckbox.alt = "product photo";
    //product-item
    const productItem = document.createElement('div');
    productItem.classList.add('product-item');
    const productItemName = document.createElement('p');
    productItemName.classList.add('product-item__name');
    productItemName.textContent = item.productName;

    const characteristics = document.createElement('div');
    characteristics.classList.add('product-item__characteristics');
    //storage-info
    const storageInfo = document.createElement('div');
    storageInfo.classList.add('product-item__storage-info');
    const storageInfoName = document.createElement('p');
    storageInfoName.classList.add('storage-info__name');
    storageInfoName.textContent = item.storageName;
    const provider = document.createElement('div');
    provider.classList.add('provider');
    const providerName = document.createElement('p');
    providerName.classList.add('storage-info__name');
    providerName.textContent = item.provider;
    const storageInfoIconContainer = document.createElement('div');
    storageInfoIconContainer.classList.add('storage-info__icon__container');
    const storageInfoIcon = document.createElement('img');
    storageInfoIcon.src = "icons/i.svg";
    storageInfoIcon.classList.add('storage-info__icon');
    storageInfoIcon.alt = "info";

    // product-order
    const productOrder = document.createElement('div');
    productOrder.classList.add('product-order');
    // product-sum
    const productSum = document.createElement('div');
    productSum.classList.add('product-sum');
    const productSumCounter = document.createElement('div');
    productSumCounter.classList.add('product-sum__counter');
    const counterMinus = document.createElement('button');
    counterMinus.classList.add('counter__button');
    counterMinus.classList.add('counter__minus');
    counterMinus.textContent = "-";
    const counterPlus = document.createElement('button');
    counterPlus.classList.add('counter__button');
    counterPlus.classList.add('counter__plus');
    counterPlus.textContent = "+";
    const counterText = document.createElement('span');
    counterText.classList.add('counter__text');
    counterText.textContent = item.counter;

    const productSumIcons = document.createElement('div');
    productSumIcons.classList.add('product-sum__icons');
    const favouriteButton = document.createElement('button');
    favouriteButton.classList.add('product__button');
    favouriteButton.classList.add('favourite__button');
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('product__button');
    deleteButton.classList.add('delete__button');
    //product-price
    const productPrice = document.createElement('div');
    productPrice.classList.add('product__price');
    const priceActual = document.createElement('div');
    priceActual.classList.add('price__actual');
    const actualTextPrice = document.createElement('p');
    actualTextPrice.classList.add('actual__text');
    actualTextPrice.textContent = `${formatPrice(item.price)} `;
    if (item.price >= 10000) {
        actualTextPrice.classList.add('smaller-actual__price');
    }
    const actualText = document.createElement('p');
    actualText.classList.add('actual__text');
    actualText.classList.add('actual__text__val');
    actualText.textContent = "сом";

    const priceOldContainer = document.createElement('div');
    priceOldContainer.classList.add('price__old__container');
    const hrPriceOld = document.createElement('hr');
    hrPriceOld.classList.add('old__line');
    const priceOld = document.createElement('div');
    priceOld.classList.add('price__old');
    const OldTextPrice = document.createElement('p');
    OldTextPrice.classList.add('old__text');
    OldTextPrice.textContent = `${item.oldPrice} `;
    const OldText = document.createElement('p');
    OldText.classList.add('old__text');
    OldText.textContent = "сом";

    //dom
    //product-info
    productInfoIcon.appendChild(productInfoCheckbox);
    productInfoIcon.appendChild(productInfoImage);
    productInfoIconContainer.appendChild(productInfoIcon);

    productItem.appendChild(productItemName);

    var tmp = 0;
    if (item.hasOwnProperty('color')) {
        const characteristicColor = document.createElement('div');
        characteristicColor.classList.add('characteristic');
        characteristicColor.textContent = `Цвет: ${item.color}`;
        characteristics.appendChild(characteristicColor);
    }
    else {
        tmp += 1;
    }

    if (item.hasOwnProperty('size')) {
        const characteristicSize = document.createElement('div');
        characteristicSize.classList.add('characteristic');
        characteristicSize.textContent = `Размер: ${item.size}`;
        characteristics.appendChild(characteristicSize);
    }
    else {
        tmp += 1;
    }

    storageInfoIconContainer.appendChild(storageInfoIcon);
    provider.appendChild(providerName);
    provider.appendChild(storageInfoIconContainer);

    storageInfo.appendChild(storageInfoName);
    storageInfo.appendChild(provider);

    if (tmp < 2) {
        productItem.appendChild(characteristics);
    }
    productItem.appendChild(storageInfo);

    productInfo.appendChild(productInfoIcon);
    productInfo.appendChild(productItem);
    //product-order
    //product-sum
    productSumCounter.appendChild(counterMinus);
    productSumCounter.appendChild(counterText);
    productSumCounter.appendChild(counterPlus);

    // favouriteButton.addEventListener('click', clickFavourite);
    // deleteButton.addEventListener('click', clickDelete);
    productSumIcons.appendChild(favouriteButton);
    productSumIcons.appendChild(deleteButton);

    productSum.appendChild(productSumCounter);
    if (item.hasOwnProperty('sumNumber')) {
        const productSumText = document.createElement('p');
        productSumText.classList.add('product-sum__text');
        productSumText.textContent = `Осталось ${item.sumNumber} шт.`;
        productSum.appendChild(productSumText);
    }
    productSum.appendChild(productSumIcons);
    //product-price
    priceActual.appendChild(actualTextPrice);
    priceActual.appendChild(actualText);

    priceOld.appendChild(OldTextPrice);
    priceOld.appendChild(OldText);

    priceOldContainer.appendChild(hrPriceOld);
    priceOldContainer.appendChild(priceOld);

    productPrice.appendChild(priceActual);
    productPrice.appendChild(priceOldContainer);

    productOrder.appendChild(productSum);
    productOrder.appendChild(productPrice);

    product.appendChild(productInfo);
    product.appendChild(productOrder);

    products.appendChild(product);
}

function createOldProduct(item) {
    console.log(item);
    const products = document.querySelector('.products__absent');
    const product = document.createElement('div');
    product.classList.add('product');
    product.classList.add('absent__product');
    // product-info
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    //product-info__icon
    const productInfoIcon = document.createElement('div');
    productInfoIcon.classList.add('product-info__icon');
    const productInfoCheckbox = document.createElement('input');
    productInfoCheckbox.type = "checkbox";
    productInfoCheckbox.id = `product${item.id}`;
    productInfoCheckbox.name = "product";
    productInfoCheckbox.value = `product${item.id}`;

    const productInfoImage = document.createElement('img');
    productInfoImage.src = item.imgURL;
    productInfoImage.classList.add('product-info__img');
    productInfoImage.classList.add('absent__img');
    productInfoCheckbox.alt = "product photo";
    //product-item
    const productItem = document.createElement('div');
    productItem.classList.add('product-item');
    productItem.classList.add('absent__text');
    const productItemName = document.createElement('p');
    productItemName.classList.add('product-item__name');
    productItemName.textContent = item.productName;

    const characteristics = document.createElement('div');
    characteristics.classList.add('product-item__characteristics');
    // product-order
    const productOrder = document.createElement('div');
    productOrder.classList.add('absent__product-order');
    // product-sum
    const productSumIcons = document.createElement('div');
    productSumIcons.classList.add('product-sum__icons');
    const favouriteButton = document.createElement('button');
    favouriteButton.classList.add('product__button');
    favouriteButton.classList.add('favourite__button');
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('product__button');
    deleteButton.classList.add('delete__button');
    //dom
    //product-info
    productInfoIcon.appendChild(productInfoImage);

    productItem.appendChild(productItemName);
    var tmp = 0;
    if (item.hasOwnProperty('color')) {
        const characteristicColor = document.createElement('div');
        characteristicColor.classList.add('characteristic');
        characteristicColor.textContent = `Цвет: ${item.color}`;
        characteristics.appendChild(characteristicColor);
    }
    else {
        tmp += 1;
    }

    if (item.hasOwnProperty('size')) {
        const characteristicSize = document.createElement('div');
        characteristicSize.classList.add('characteristic');
        characteristicSize.classList.add('absent__text');
        characteristicSize.textContent = `Размер: ${item.size}`;
        characteristics.appendChild(characteristicSize);
    }
    else {
        tmp += 1;
    }
    if (tmp < 2) {
        productItem.appendChild(characteristics);
    }
    productInfo.appendChild(productInfoIcon);
    productInfo.appendChild(productItem);

    // favouriteButton.addEventListener('click', clickFavourite);
    // deleteButton.addEventListener('click', clickDelete);
    productSumIcons.appendChild(favouriteButton);
    productSumIcons.appendChild(deleteButton);

    productOrder.appendChild(productSumIcons);

    product.appendChild(productInfo);
    product.appendChild(productOrder);

    products.appendChild(product);
}
createProducts();
createOldProducts();

const checkButton = document.querySelector('.cart-total__button');
checkButton.addEventListener('click', validateAll);