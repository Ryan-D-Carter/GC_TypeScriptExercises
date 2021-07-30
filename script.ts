// TALLEST MOUNTAIN
{
interface Mountain {
    name: string;
    height: number;
}

let mountains: Mountain[] = [
    { name: "Kilimanjaro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 }
 ]

 const findNameOfTallestMountain = (mts:Mountain[]):string => {
    let result:Mountain = {name:"test", height:0};
    mts.forEach(x => {
        if(x.height > result.height){
            result = x;
        }
    })

    return result.name;
 }

 let answer:string = findNameOfTallestMountain(mountains);

 console.log(answer);

//PRODUCTS
interface Product {
    name:string;
    price:number;
}

let products:Product[] =[
    {name: "Shoes", price: 25},
    {name: "Tie", price: 8},
    {name: "pants", price: 15}
]

const calcAverageProductPrice = (prods:Product[]):number => {
    let nums:number = 0;
    for(let i = 0; i < prods.length; i++){
        nums += prods[i].price;
    }
     let result = nums / prods.length;
    return result;
}

let avg = calcAverageProductPrice(products);
console.log(avg);


//INVETORY
interface InventoryItem {
    product:Product;
    quantity:number;
}
let inventory:InventoryItem[] =[
    {product:{name:"motor", price:10.00}, quantity:10},
    {product:{name:"sensor", price:12.50}, quantity:4},
    {product:{name:"LED", price:1.00}, quantity:20}
]

const calcInventoryValue = (inv:InventoryItem[]):number => {
    let result:number = 0;
    for(let i = 0; i < inv.length; i++){
        result += inv[i].product.price * inv[i].quantity;
    }
    return result;
}

let finalResult = calcInventoryValue(inventory);

console.log(finalResult);
}