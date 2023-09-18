let appState = {
    resultPrice: 0,
    totalPrice: 0,
    isActualHide: false,
    isAbsentHide: false,
    cardId: 1,
    pointId: 1,
    addressId: 0,
    products: [
        {
            id: 1,
            imgURL: "icons/photo.svg",
            productName: "Футболка UZcotton мужская",
            color: "белый",
            size: 56,
            storageName: "Коледино WB",
            provider: "Вайлдберриз",
            ogrn: 5167746237148,
            address: "129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34",
            counter: 1,
            sumNumber: 2,
            price: 522,
            oldPrice: 1051,
            checked: true
        },

        {
            id: 2,
            imgURL: "icons/photo2.svg",
            productName: "Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe",
            color: "прозрачный",
            storageName: "Коледино WB",
            provider: "Мегапрофстиль",
            ogrn: 5167746237148,
            address: "129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34",
            counter: 200,
            price: 10500.235,
            oldPrice: 11500.235,
            checked: true
        },

        {
            id: 3,
            imgURL: "icons/photo3.svg",
            productName: "Карандаши цветные Faber-Castell \"Замок\", набор 24 цвета, заточенные, шестигранные, Faber-Castell",
            storageName: "Коледино WB",
            provider: "Вайлдберриз",
            ogrn: 5167746237148,
            address: "129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34",
            counter: 2,
            sumNumber: 2,
            price: 247,
            oldPrice: 475,
            checked: true
        }
    ],

    cards: [
        {
            id: 1,
            imgURL: "icons/mir.svg",
            numberCard: "1234 56•• •••• 1234"
        },

        {
            id: 2,
            imgURL: "icons/visa.svg",
            numberCard: "1234 56•• •••• 1234"
        },

        {
            id: 3,
            imgURL: "icons/mastercard.svg",
            numberCard: "1234 56•• •••• 1234"
        },

        {
            id: 4,
            imgURL: "icons/maestro.svg",
            numberCard: "1234 56•• •••• 1234"
        }
    ],

    points: [
        {
            id: 1,
            text: "г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1"
        },

        {
            id: 2,
            text: "г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1",
            rating: 4.99
        },

        {
            id: 3,
            text: "г. Бишкек, улица Табышалиева, д. 57",
            rating: 4.99
        }
    ],

    addresses: [
        {
            id: 1,
            text: "Бишкек, улица Табышалиева, 57"
        },

        {
            id: 2,
            text: "Бишкек, улица Жукеева-Пудовкина, 77/1"
        },

        {
            id: 3,
            text: "Бишкек, микрорайон Джал, улица Ахунбаева Исы, 67/1"
        }
    ]
}

function render() {
    deliveryItemsCheck = document.querySelectorAll('.delivery-way__info__item__check');
    deliveryItemsCheck.forEach((deliveryItemCheck) => {
        deliveryItemCheck.style.display = 'flex';
    });

    //price
    appState.products.forEach((item) => {
        priceActual = document.querySelector(`#actual__price${item.id}`);
        priceActual.textContent = `${formatPrice(item.price * item.counter)}`;
        priceOld = document.querySelector(`#old__text${item.id}`);
        priceOld.textContent = `${formatPrice(item.oldPrice * item.counter)}`;
        counterText = document.querySelector(`#counter__text${item.id}`);
        counterText.textContent = item.counter;
    });

    resultPrice = document.querySelector('.cost__header__price');
    appState.resultPrice = appState.products.reduce((result, product) => {
        if (product.checked) {
            return result += product.counter * product.price;
        }
        return result;
    }, 0);
    resultPrice.textContent = `${formatPrice(appState.resultPrice)}`;

    totalPrice = document.querySelector('.cost__item__total__price');
    appState.totalPrice = appState.products.reduce((result, product) => {
        if (product.checked) {
            return result += product.counter * product.oldPrice;
        }
        return result;
    }, 0);
    totalPrice.textContent = `${formatPrice(appState.totalPrice)}`;

    discount = document.querySelector('.cost__item__discount__price');
    tmpDiscount = appState.totalPrice - appState.resultPrice;
    discount.textContent = `${formatPrice(tmpDiscount)}`;
    button = document.querySelector('.cart-total__button');
    if (addCheckbox.checked && appState.resultPrice > 0) {
        button.textContent = `Оплатить ${formatPrice(appState.resultPrice)} сом`;
    }
    else {
        button.textContent = 'Заказать';
    }

    //dots
    for (let i = 0; i < 4; i++) {
        dotContainer = document.querySelector(`#dot-container${i}`);
        dot = document.querySelector(`#dot${i}`);
        if (i != 1 && i != 3) {
            if (appState.products[i].counter > 1) {
                dotContainer.style.display = 'flex';
                if (appState.products[i].counter > 9) {
                    dotContainer.classList.add('dot__container__larger');
                }
                else {
                    dotContainer.classList.remove('dot__container__larger');
                }
            }
            else {
                dotContainer.style.display = 'none';
            }
            dot.textContent = appState.products[i].counter;
        }
        if (i === 1) {
            deliveryInfoItem = document.querySelector('.delivery-way__info__item__dot');
            if (appState.products[i].counter > 184) {
                deliveryInfoItem.style.display = 'flex';
                dot.textContent = 184;
                subDot = document.querySelector(`#dot${i + 2}`);
                subDot.textContent = appState.products[i].counter - 184;
                subDotContainer = document.querySelector(`#dot-container${i + 2}`);
                if (appState.products[i].counter - 184 < 2) {
                    subDotContainer.style.display = 'none';
                }
                else {
                    subDotContainer.style.display = 'flex';
                }
            }
            else {
                deliveryInfoItem.style.display = 'none';
                dot.textContent = appState.products[i].counter;
            }

        }
    }

    //delivery-items
    appState.products.forEach((item) => {
        imageContainers = document.querySelectorAll(`#imageContainer${item.id}`);
        if (item.checked) {
            console.log('lol');
            imageContainers.forEach((imageContainer) => {
                imageContainer.style.display = 'flex';
            });
        }
        else {
            if (item.id === 2) {
                deliveryInfoItem.style.display = 'none';
            }
            imageContainers.forEach((imageContainer) => {
                imageContainer.style.display = 'none';
            });
        }
    });

    tmpProductRez = appState.products.reduce((checkedCount, product) => {
        if (!product.checked) {
            checkedCount--;
        }
        return checkedCount;
    }, 3);

    if (tmpProductRez === 0) {
        deliveryItemsCheck.forEach((deliveryItemCheck) => {
            deliveryItemCheck.style.display = 'none';
        });
    }

    //card
    cardInfoIcons = document.querySelectorAll('.card-info__icon__change');
    cardInfoIcons.forEach((cardInfoIcon) => {
        cardInfoIcon.src = appState.cards[appState.cardId - 1].imgURL;
    });
    cardInfoDataTexts = document.querySelectorAll('.card-info__data__text__change');
    cardInfoDataTexts.forEach((cardInfoDataText) => {
        cardInfoDataText.textContent = appState.cards[appState.cardId - 1].numberCard;
    });

    //point-address
    pointInfoDataTexts = document.querySelectorAll('.point-info__data__text__change');
    pointRatingContainer = document.querySelector('.point__rating__container');
    pointInfoDataTexts.forEach((pointInfoDataText) => {
        if (appState.addressId === 0) {
            pointRatingContainer.style.display = 'flex';
            pointInfoDataText.textContent = appState.points[appState.pointId - 1].text;
            pointRating = document.querySelector('.point__rating');
            if (appState.points[appState.pointId - 1].hasOwnProperty('rating')) {
                pointRating.style.display = 'flex';
                pointRating.textContent = appState.points[appState.pointId - 1].rating;
            }
            else {
                pointRating.style.display = 'none';
            }
        }
        else {
            pointInfoDataText.textContent = appState.addresses[appState.addressId - 1].text;
            pointRatingContainer.style.display = 'none';
        }

    });
}

function formatPrice(price) {
    tmpPrice = Math.round(price);
    return tmpPrice.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
}

function createProducts() {
    appState.products.forEach((product) => {
        createProduct(product);
    });
}

function createOldProducts() {
    appState.products.forEach((oldProduct) => {
        createOldProduct(oldProduct);
    });
}

const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const phoneNumber = document.querySelector('#phone-number');
const inn = document.querySelector('#inn');


//create dots
function createDots() {
    //cart dot
    cart = document.querySelector('.cart');
    dotContainer = document.createElement('div');
    dotContainer.classList.add('dot__container');
    dotContainer.classList.add('dot__container__cart');
    dot = document.createElement('p');
    dot.classList.add('dot');
    dot.classList.add('dot__cart');
    dot.textContent = '3';
    dotContainer.appendChild(dot);
    cart.appendChild(dotContainer);

    //product dots
    productImageContainers = document.querySelectorAll('.delivery-way__info__item__image__container');
    for (let i = 0; i < 4; i++) {
        dotContainer = document.createElement('div');
        dotContainer.classList.add('dot__container');
        dotContainer.classList.add('dot__container__product');
        dotContainer.id = `dot-container${i}`;
        if (i === 0) {
            dotContainer.style.display = 'none';
        }
        dot = document.createElement('p');
        dot.classList.add('dot');
        dot.classList.add('dot__product');
        dot.id = `dot${i}`;
        if (i != 1 && i != 3) {
            dot.textContent = appState.products[i].counter;
        }
        if (i === 1) {
            dot.textContent = 184;
        }
        if (i === 3) {
            dot.textContent = appState.products[i - 2].counter - 184;
        }
        if (dot.textContent > 9) {
            dotContainer.classList.add('dot__container__larger');
        }
        dotContainer.appendChild(dot);
        productImageContainers[i].appendChild(dotContainer);
    }
}
createDots();

// validation
function validateFirstName() {
    var nameInputValue = firstName.value;
    var nameCheck = (/^[a-zA-Zа-яА-Я]+$/).test(nameInputValue);
    if (nameCheck) {
        firstName.classList.remove('error__label');
        return true;
    }
    else {
        firstName.classList.add('error__label');
        return false;
    }
}

function validateLastName() {
    var nameInputValue = lastName.value;
    var nameCheck = (/^[a-zA-Zа-яА-Я]+$/).test(nameInputValue);
    if (nameCheck) {
        lastName.classList.remove('error__label');
        return true;
    }
    else {
        lastName.classList.add('error__label');
        return false;
    }
}

function validateEmail() {
    var emailInputValue = email.value;
    var emailCheck = (/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i).test(emailInputValue);
    if (emailCheck) {
        email.classList.remove('error__label');
        return true;
    }
    else {
        email.classList.add('error__label');
        return false;
    }
}

function validatePhoneNumber() {
    var phoneNumberInputValue = phoneNumber.value;
    var phoneNumberCheck = (/^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/).test(phoneNumberInputValue);
    if (phoneNumberCheck) {
        phoneNumber.classList.remove('error__label');
        return true;
    }
    else {
        phoneNumber.classList.add('error__label');
        return false;
    }
}

function validateInn() {
    var innInputValue = inn.value;
    var innCheck = (/^[0-9]{14}$/).test(innInputValue);
    if (innCheck) {
        inn.classList.remove('error__label');
        return true;
    }
    else {
        inn.classList.add('error__label');
        return false;
    }
}

function validateAll() {

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

    if (validateFirstName(), validateLastName(), validateEmail(), validatePhoneNumber(), validateInn()) {
        return true;
    }
    else {
        return false;
    }

}

function checkValidate() {
    if (!validateAll()) {
        const scrollTo = document.documentElement.scrollHeight - window.innerHeight;
        window.scroll({
            top: scrollTo,
            behavior: 'smooth'
        });
    }
}

// create products in-stock and absent
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
    productInfoCheckbox.classList.add('product-checkbox');
    productInfoCheckbox.type = "checkbox";
    productInfoCheckbox.id = `product${item.id}`;
    productInfoCheckbox.name = "product";
    productInfoCheckbox.value = `product${item.id}`;
    productInfoCheckbox.checked = true;
    productInfoCheckbox.addEventListener('click', productCheckboxChange);

    const productInfoCheckboxLabel = document.createElement('label');
    productInfoCheckboxLabel.htmlFor = `product${item.id}`;

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
    providerName.textContent = `ООО ${item.provider}`;
    const storageInfoIconContainer = document.createElement('div');
    storageInfoIconContainer.classList.add('storage-info__icon__container');
    const storageInfoIcon = document.createElement('img');
    storageInfoIcon.src = "icons/i.svg";
    storageInfoIcon.classList.add('storage-info__icon');
    storageInfoIcon.alt = "info";

    const providerSubwindow = document.createElement('div');
    providerSubwindow.classList.add('provider__subwindow');
    const providerSubtextHeader = document.createElement('p');
    providerSubtextHeader.classList.add('provider__subwindow__subtext');
    providerSubtextHeader.classList.add('provider__subwindow__subtext__header');
    providerSubtextHeader.textContent = `ООО «${item.provider}»`;
    const providerSubtextOGRN = document.createElement('p');
    providerSubtextOGRN.classList.add('provider__subwindow__subtext');
    providerSubtextOGRN.textContent = `ОГРН: ${item.ogrn}`;
    const providerSubtextAddress = document.createElement('p');
    providerSubtextAddress.classList.add('provider__subwindow__subtext');
    providerSubtextAddress.textContent = item.address;

    // product-order
    const productOrder = document.createElement('div');
    productOrder.classList.add('product-order');

    const productOrderSubwindow = document.createElement('div');
    productOrderSubwindow.classList.add('product-order__subwindow');

    const productOrderSubwindowContainer = document.createElement('div');
    productOrderSubwindowContainer.classList.add('product-order__subwindow__container');
    const productOrderSubheaderContainer = document.createElement('div');
    productOrderSubheaderContainer.classList.add('product-order__subheader__container');
    const productOrderSubtextContainer = document.createElement('div');
    productOrderSubtextContainer.classList.add('product-order__subtext__container');

    const productOrderSubtextHeader1 = document.createElement('p');
    productOrderSubtextHeader1.classList.add('product-order__subwindow__subtext');
    productOrderSubtextHeader1.classList.add('product-order__subwindow__subtext__header');
    productOrderSubtextHeader1.classList.add('product-order__subwindow__subtext__header1');
    const productOrderSubtext1 = document.createElement('p');
    productOrderSubtext1.classList.add('product-order__subwindow__subtext');

    const productOrderSubtextHeader2 = document.createElement('p');
    productOrderSubtextHeader2.classList.add('product-order__subwindow__subtext');
    productOrderSubtextHeader2.classList.add('product-order__subwindow__subtext__header');
    productOrderSubtextHeader2.classList.add('product-order__subwindow__subtext__header2');
    const productOrderSubtext2 = document.createElement('p');
    productOrderSubtext2.classList.add('product-order__subwindow__subtext');

    var subwindowDiscount = item.oldPrice - item.price;
    var subwindowDiscountUser = subwindowDiscount * 0.1;
    var subwindowDiscountActual = subwindowDiscount - subwindowDiscountUser;
    var subWindowPersent = (subwindowDiscountActual / item.oldPrice) * 100;

    productOrderSubtextHeader1.textContent = `Скидка ${formatPrice(subWindowPersent)}%`;
    productOrderSubtextHeader2.textContent = 'Скидка покупателя 10%';
    productOrderSubtext1.textContent = `-${formatPrice(subwindowDiscountActual)} сом`;
    productOrderSubtext2.textContent = `-${formatPrice(subwindowDiscountUser)} сом`;

    // product-sum
    const productSum = document.createElement('div');
    productSum.classList.add('product-sum');
    const productSumCounter = document.createElement('div');
    productSumCounter.classList.add('product-sum__counter');
    const counterMinus = document.createElement('button');
    counterMinus.classList.add('counter__button');
    counterMinus.classList.add('counter__minus');
    counterMinus.id = `counter__minus${item.id}`;
    counterMinus.textContent = "-";
    if (item.counter === 1) {
        counterMinus.classList.add('counter__disabled');
        counterMinus.disabled = true;
    }
    counterMinus.addEventListener('click', counterMinusClicked);

    const counterPlus = document.createElement('button');
    counterPlus.classList.add('counter__button');
    counterPlus.classList.add('counter__plus');
    counterPlus.id = `counter__plus${item.id}`;
    counterPlus.textContent = "+";
    if (item.hasOwnProperty('sumNumber')) {
        if (item.counter === item.sumNumber) {
            counterPlus.classList.add('counter__disabled');
            counterPlus.disabled = true;
        }
    }
    counterPlus.addEventListener('click', counterPlusClicked);

    const counterText = document.createElement('span');
    counterText.classList.add('counter__text');
    counterText.id = `counter__text${item.id}`;
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
    actualTextPrice.id = `actual__price${item.id}`;
    actualTextPrice.textContent = `${formatPrice(item.price * item.counter)} `;
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
    OldTextPrice.id = `old__text${item.id}`;
    OldTextPrice.textContent = `${formatPrice(item.oldPrice * item.counter)} `;
    const OldText = document.createElement('p');
    OldText.classList.add('old__text');
    OldText.textContent = "сом";

    //dom
    //product-info
    productInfoIcon.appendChild(productInfoCheckbox);
    productInfoIcon.appendChild(productInfoCheckboxLabel);
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

    providerSubwindow.appendChild(providerSubtextHeader);
    providerSubwindow.appendChild(providerSubtextOGRN);
    providerSubwindow.appendChild(providerSubtextAddress);

    provider.appendChild(providerName);
    provider.appendChild(storageInfoIconContainer);
    provider.appendChild(providerSubwindow);

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

    productOrderSubheaderContainer.appendChild(productOrderSubtextHeader1);
    productOrderSubheaderContainer.appendChild(productOrderSubtextHeader2);
    productOrderSubtextContainer.appendChild(productOrderSubtext1);
    productOrderSubtextContainer.appendChild(productOrderSubtext2);

    productOrderSubwindowContainer.appendChild(productOrderSubheaderContainer);
    productOrderSubwindowContainer.appendChild(productOrderSubtextContainer);

    productOrderSubwindow.appendChild(productOrderSubwindowContainer);

    priceOld.appendChild(OldTextPrice);
    priceOld.appendChild(OldText);
    priceOld.appendChild(productOrderSubwindow);

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

    const productInfoImage = document.createElement('img');
    productInfoImage.src = item.imgURL;
    productInfoImage.classList.add('product-info__img');
    productInfoImage.classList.add('absent__img');
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

// count price
function checkboxAllChange() {
    if (this.checked) {
        appState.products.forEach((item) => {
            item.checked = true;
        });
        productCheckboxes.forEach((checkbox) => {
            checkbox.checked = true;
        });
    }
    else {
        appState.products.forEach((item) => {
            item.checked = false;
        });
        productCheckboxes.forEach((checkbox) => {
            checkbox.checked = false;
        });
    }
    render();
}

function productCheckboxChange() {
    checkboxId = parseInt(this.id.slice(-1));
    if (this.checked) {
        appState.products[checkboxId - 1].checked = true;
    }
    else {
        appState.products[checkboxId - 1].checked = false;
    }
    render();
}

function counterMinusClicked() {
    counterId = parseInt(this.id.slice(-1));
    appState.products[counterId - 1].counter--;
    if (appState.products[counterId - 1].hasOwnProperty('sumNumber')) {
        if (appState.products[counterId - 1].counter < appState.products[counterId - 1].sumNumber) {
            tmpCounterPlus = document.querySelector(`#counter__plus${counterId}`);
            tmpCounterPlus.classList.remove('counter__disabled');
            tmpCounterPlus.disabled = false;
        }
    }
    if (appState.products[counterId - 1].counter === 1) {
        tmpCounterMinus = document.querySelector(`#counter__minus${counterId}`);
        tmpCounterMinus.classList.add('counter__disabled');
        tmpCounterMinus.disabled = true;
    }
    render();
}

function counterPlusClicked() {
    counterId = parseInt(this.id.slice(-1));
    appState.products[counterId - 1].counter++;
    if (appState.products[counterId - 1].hasOwnProperty('sumNumber')) {
        if (appState.products[counterId - 1].counter === appState.products[counterId - 1].sumNumber) {
            tmpCounterPlus = document.querySelector(`#counter__plus${counterId}`);
            tmpCounterPlus.classList.add('counter__disabled');
            tmpCounterPlus.disabled = true;
        }
    }
    tmpCounterMinus = document.querySelector(`#counter__minus${counterId}`);
    if (appState.products[counterId - 1].counter === 1) {
        tmpCounterMinus.classList.add('counter__disabled');
        tmpCounterMinus.disabled = true;
    }
    else {
        tmpCounterMinus.classList.remove('counter__disabled');
        tmpCounterMinus.disabled = false;
    }
    render();
}

function checkboxAddChange() {
    render();
}

// show/hide products
function actualButtonChange() {
    products = document.querySelector('.in-stock__products');
    if (appState.isActualHide) {
        appState.isActualHide = false;
        products.style.display = 'flex';
    }
    else {
        appState.isActualHide = true;
        products.style.display = 'none';
    }
}

function absentButtonChange() {
    products = document.querySelector('.products__absent');
    if (appState.isAbsentHide) {
        appState.isAbsentHide = false;
        products.style.display = 'flex';
    }
    else {
        appState.isAbsentHide = true;
        products.style.display = 'none';
    }
}

//subwindows
function radioCardCheck() {
    if (this.checked) {
        var tmpId = parseInt(this.id.slice(-1));
        appState.cardId = tmpId;
    }
}

function radioPointCheck() {
    if (this.checked) {
        var tmpId = parseInt(this.id.slice(-1));
        appState.pointId = tmpId;
        appState.addressId = 0;
    }
}

function radioAddressCheck() {
    if (this.checked) {
        var tmpId = parseInt(this.id.slice(-1));
        appState.pointId = 0;
        appState.addressId = tmpId;
    }
}

function createCardsWindow() {
    appState.cards.forEach((card) => {
        createCardWindow(card);
    });
}

function createPointsWindow() {
    appState.points.forEach((point) => {
        createPointWindow(point);
    });
}

function createAddressesWindow() {
    appState.addresses.forEach((address) => {
        createAddressWindow(address);
    });
}

function createCardWindow(item) {
    cardRadioContainer = document.querySelector('.card__radio__container');
    cardRadioItem = document.createElement('div');
    cardRadioItem.classList.add('window__radio__item');
    cardRadioItem.classList.add('card__radio__item');

    radio = document.createElement('input');
    radio.classList.add('radio__window');
    radio.classList.add('card__radio__window');
    radio.type = 'radio';
    radio.id = `card${item.id}`;
    radio.name = 'card';
    radio.addEventListener('click', radioCardCheck);

    labelRadio = document.createElement('label');
    labelRadio.htmlFor = `card${item.id}`;
    labelRadio.classList.add('window__radio__label');

    cardInfoContainer = document.createElement('div');
    cardInfoContainer.classList.add('card-info__container');
    cardInfoIconContainer = document.createElement('div');
    cardInfoIconContainer.classList.add('card-info__icon__container');
    cardInfoIcon = document.createElement('img');
    cardInfoIcon.classList.add('card-info__icon');
    cardInfoIcon.src = item.imgURL;
    cardInfoIcon.alt = 'card icon';
    cardInfoData = document.createElement('div');
    cardInfoData.classList.add('card-info__data');
    cardInfoDataText = document.createElement('p');
    cardInfoDataText.classList.add('card-info__data__text');
    cardInfoDataText.textContent = item.numberCard;

    cardInfoIconContainer.appendChild(cardInfoIcon);
    cardInfoData.appendChild(cardInfoDataText);

    cardInfoContainer.appendChild(cardInfoIconContainer);
    cardInfoContainer.appendChild(cardInfoData);
    labelRadio.appendChild(cardInfoContainer);

    cardRadioItem.appendChild(radio);
    cardRadioItem.appendChild(labelRadio);
    cardRadioContainer.appendChild(cardRadioItem);
}

function createPointWindow(item) {
    pointRadioContainer = document.querySelector('.point__radio__container');
    pointRadioItemContainer = document.createElement('div');
    pointRadioItemContainer.classList.add('window__radio__item__container');
    pointRadioItem = document.createElement('div');
    pointRadioItem.classList.add('window__radio__item');

    radio = document.createElement('input');
    radio.classList.add('radio__window');
    radio.type = 'radio';
    radio.id = `point${item.id}`;
    radio.name = 'point';
    radio.addEventListener('click', radioPointCheck);

    labelRadio = document.createElement('label');
    labelRadio.htmlFor = `point${item.id}`;
    labelRadio.classList.add('window__radio__label');

    windowPointLabel = document.createElement('div');
    windowPointLabel.classList.add('delivery-way__subitem');
    windowPointLabel.classList.add('delivery-way__point');
    windowPointLabel.classList.add('window__point__label');

    pointRadioText = document.createElement('p');
    pointRadioText.classList.add('delivery-way__info__item__text');
    pointRadioText.classList.add('point__radio__text');
    pointRadioText.textContent = item.text;

    ratingContainer = document.createElement('div');
    ratingContainer.classList.add('delivery-way__rating-container');
    rating = document.createElement('div');
    rating.classList.add('rating');
    ratingIcon = document.createElement('img');
    ratingIcon.src = 'icons/rating.svg';
    ratingIcon.alt = 'rating star';
    ratingText = document.createElement('p');
    ratingText.classList.add('delivery-way__info__item__subtext');
    ratingText.classList.add('point__rating__subtext');
    ratingText.textContent = 'Пункт выдачи';

    deleteButton = document.createElement('button');
    deleteButton.classList.add('product__button');
    deleteButton.classList.add('delete__button');
    deleteButton.classList.add('window__delete__button');

    rating.appendChild(ratingIcon);
    if (item.hasOwnProperty('rating')) {
        ratingSubtext = document.createElement('p');
        ratingSubtext.classList.add('delivery-way__info__item__subtext');
        ratingSubtext.textContent = item.rating;
        rating.appendChild(ratingSubtext);
    }
    ratingContainer.appendChild(rating);
    ratingContainer.appendChild(ratingText);

    windowPointLabel.appendChild(pointRadioText);
    windowPointLabel.appendChild(ratingContainer);
    labelRadio.appendChild(windowPointLabel);

    pointRadioItem.appendChild(radio);
    pointRadioItem.appendChild(labelRadio);
    pointRadioItemContainer.appendChild(pointRadioItem);
    pointRadioItemContainer.appendChild(deleteButton);
    pointRadioContainer.appendChild(pointRadioItemContainer);
}

function createAddressWindow(item) {
    addressRadioContainer = document.querySelector('.address__radio__container');
    addressRadioItemContainer = document.createElement('div');
    addressRadioItemContainer.classList.add('window__radio__item__container');
    addressRadioItem = document.createElement('div');
    addressRadioItem.classList.add('window__radio__item');

    radio = document.createElement('input');
    radio.classList.add('radio__window');
    radio.type = 'radio';
    radio.id = `address${item.id}`;
    radio.name = 'address';
    radio.addEventListener('click', radioAddressCheck);

    labelRadio = document.createElement('label');
    labelRadio.htmlFor = `address${item.id}`;
    labelRadio.classList.add('window__radio__label');

    addressRadioText = document.createElement('p');
    addressRadioText.classList.add('address__radio__text');
    addressRadioText.textContent = item.text;

    deleteButton = document.createElement('button');
    deleteButton.classList.add('product__button');
    deleteButton.classList.add('delete__button');
    deleteButton.classList.add('window__delete__button');

    labelRadio.appendChild(addressRadioText);
    addressRadioItem.appendChild(radio);
    addressRadioItem.appendChild(labelRadio);
    addressRadioItemContainer.appendChild(addressRadioItem);
    addressRadioItemContainer.appendChild(deleteButton);
    addressRadioContainer.appendChild(addressRadioItemContainer);
}

createCardsWindow();
createPointsWindow();
createAddressesWindow();

// choose point/address
pointButton = document.querySelector('.point__button');
addressButton = document.querySelector('.address__button');
addressButton.addEventListener('click', changedWayAddress);

pointRadioContainer = document.querySelector('.point__radio__container');
addressRadioContainer = document.querySelector('.address__radio__container');

function changedWayAddress() {
    addressButton.removeEventListener('click', changedWayAddress);
    addressButton.classList.add('choosed');
    pointButton.classList.remove('choosed');
    pointButton.addEventListener('click', changedWayPoint);
    pointRadioContainer.style.display = 'none';
    addressRadioContainer.style.display = 'flex';
}

function changedWayPoint() {
    addressButton.addEventListener('click', changedWayAddress);
    addressButton.classList.remove('choosed');
    pointButton.classList.add('choosed');
    addressButton.removeEventListener('click', changedWayPoint);
    pointRadioContainer.style.display = 'flex';
    addressRadioContainer.style.display = 'none';
}

//close subwindow
function closeWindow() {
    windowsContainer = document.querySelectorAll('.windows__container');
    windowsContainer.forEach((windowContainer) => {
        windowContainer.style.display = 'none';
    });
    render();
}

closeButtons = document.querySelectorAll('.close__button');
closeButtons.forEach((closeButton) => {
    closeButton.addEventListener('click', closeWindow);
});
chooseButtons = document.querySelectorAll('.choose__button');
chooseButtons.forEach((chooseButton) => {
    chooseButton.addEventListener('click', closeWindow);
});

//open subwindows
function openSubWindowCard() {
    cardContainer = document.querySelector('.card__container');
    cardContainer.style.display = 'block';
}

function openSubWindowPoint() {
    cardContainer = document.querySelector('.point__container');
    cardContainer.style.display = 'block';
}

cardChangeButtons = document.querySelectorAll('.change__card__button');
cardChangeButtons.forEach((button) => {
    button.addEventListener('click', openSubWindowCard);
})

pointChangeButtons = document.querySelectorAll('.change__point__button');
pointChangeButtons.forEach((button) => {
    button.addEventListener('click', openSubWindowPoint);
})

// resize page
function handleResize() {
    const main = document.querySelector('main');
    const mainContainer = document.querySelector('.main__container');

    const header = document.querySelector('header');
    const headerContainer = document.querySelector('.header__container');
    if (main.offsetWidth >= 1400) {
        main.style.display = 'flex';
        header.style.display = 'flex';
        mainContainer.style.width = '1400px';
        headerContainer.style.width = '1400px';
    }
    else {
        main.style.display = 'block';
        header.style.display = 'block';
        mainContainer.style.removeProperty('width');
        headerContainer.style.removeProperty('width');
    }
}
handleResize();
window.addEventListener('resize', handleResize);

createProducts();
createOldProducts();

const productCheckboxes = document.querySelectorAll('.product-checkbox');

const checkboxAll = document.querySelector('#all');
checkboxAll.addEventListener('change', checkboxAllChange);

const addCheckbox = document.querySelector('#add__checkbox');
addCheckbox.addEventListener('change', checkboxAddChange);

const checkButton = document.querySelector('.cart-total__button');
checkButton.addEventListener('click', checkValidate);

const actualButton = document.querySelector('.actual__products__button');
const absentButton = document.querySelector('.absent__products__button');
actualButton.addEventListener('click', actualButtonChange);
absentButton.addEventListener('click', absentButtonChange);