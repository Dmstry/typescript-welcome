function calculateOrderAmount(...products) {
    if (products.length === 0) {
        return `Список товарів порожній`;
    }
    const validProducts = products.filter((product) => product.price > 0);
    const invalidProducts = products.filter((product) => product.price <= 0);
    const invalidMessages = invalidProducts
        .map((product) => `Товар "${product.name}" має некоректну ціну (${product.price}) і не врахований у розрахунку.`)
        .join('\n');
    const amount = validProducts.reduce((acc, product) => acc + product.price, 0);
    return invalidProducts.length > 0
        ? `${invalidMessages}\nВартість замовлених товарів складає: ${amount}`
        : `Вартість замовлених товарів складає: ${amount}`;
}
console.log(calculateOrderAmount({ name: 'Apple', price: 20 }, { name: 'Banana', price: 23 }, { name: 'Orange', price: -5 }, { name: 'Kiwi', price: 42 }, { name: 'Grapes', price: 0 }));
