// TALLEST MOUNTAIN
{
    var mountains = [
        { name: "Kilimanjaro", height: 19341 },
        { name: "Everest", height: 29029 },
        { name: "Denali", height: 20310 }
    ];
    var findNameOfTallestMountain = function (mts) {
        var result = { name: "test", height: 0 };
        mts.forEach(function (x) {
            if (x.height > result.height) {
                result = x;
            }
        });
        return result.name;
    };
    var answer = findNameOfTallestMountain(mountains);
    console.log(answer);
    var products = [
        { name: "Shoes", price: 25 },
        { name: "Tie", price: 8 },
        { name: "pants", price: 15 }
    ];
    var calcAverageProductPrice = function (prods) {
        var nums = 0;
        for (var i = 0; i < prods.length; i++) {
            nums += prods[i].price;
        }
        var result = nums / prods.length;
        return result;
    };
    var avg = calcAverageProductPrice(products);
    console.log(avg);
    var inventory = [
        { product: { name: "motor", price: 10.00 }, quantity: 10 },
        { product: { name: "sensor", price: 12.50 }, quantity: 4 },
        { product: { name: "LED", price: 1.00 }, quantity: 20 }
    ];
    var calcInventoryValue = function (inv) {
        var result = 0;
        for (var i = 0; i < inv.length; i++) {
            result += inv[i].product.price * inv[i].quantity;
        }
        return result;
    };
    var finalResult = calcInventoryValue(inventory);
    console.log(finalResult);
}
