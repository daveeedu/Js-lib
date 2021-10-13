// variables/const

//var personAge = 66;
//personAge = 25
//console.log(personAge);

//let firstname = 'John';
//firstname = 'dave'
//console.log(firstname);

// const lastname = 'jude';
// lastname = 'brian';
// console.log(lastname)

//string 
// let firstname = "david";
// let lastname = 'john';
// let fullname = `Her full name is ${firstname} ${lastname}`;
// console.log(fullname)
// console.log(typeof(fullname));

//number
// let grade = 564;
// console.log(grade);
// console.log(typeof(grade));

//booleon
// let datacheked = true;
// let valuecheck = false;

// console.log(datacheked);
// console.log(valuecheck);
// console.log(typeof(datacheked));
// console.log(typeof(valuecheck));

//undefined
// let personname;
// console.log(personname);
// console.log(personname);

// null
// let myname = null;
// // console.log(myname);
// console.log(typeof(myname));

//object
// let kodecamplearners = {
//     fullname: 'brian',
//     lastname: null,
//     stage: 10
// }
// console.log(kodecamplearners);
// console.log(typeof(kodecamplearners));

// 5 + 6 //binary operator

// 5++ //unary operator

// let a = 6;
// // let b = a;
// a += 5;
// console.log(a);



// function printName() {
//     let name = 'David Edu';
//     console.log(name);
// }
// printName();

// function printName(name) {
    
//     console.log(name);
// }
// printName('David');

//array  
// let cars = ["camry", "volvo", "BMW", 12, {name: "Fruits", type: "Banana"}]
// console.log(cars);
// console.log('first item is', cars[0]);
// console.log('last item is', cars[cars.length - 1]);

// cars[3] = "Segun";
// console.log(cars);
// console.log(typeof(cars));

// //lenght of array
// console.log('length of the cars array', cars.length);

//for loop
// for (let i = 0; i < students.length; i++) {
//     console.log(students[i]);
// }

// students.forEach(element => {
//     console.log(element);
// });

// function myfunction() {
//     let time = new Date().getHours();
//     let greetings;

//     if(time > 20){
//         greetings = 'Good day'
//     }else{
//         greetings = 'Good evening'
//     }
//     console.log(greetings);
// }
// myfunction()

let products = [
    {
        product_name: "Apple iphone x",
        product_image: "iphone-x-silver",
        Price: "Price $230"
    },
    {
        product_name: "Apple iPhone 12 Pro Max",
        product_image: "iphone-12-Pro-Max",
        Price: "Price: $450"
    },
    {
        product_name: "Huawei P40 Pro",
        product_image: "Huawei-P40-Pro",
        Price: "Price: $170"
    },
    {
        product_name: "Samsung Galaxy Z Flip",
        product_image: "Samsung-Galaxy-Z-Flip",
        Price: "Price: $420"
    },
    {
        product_name: "Apple iPhone 11",
        product_image: "Apple-iPhone-11",
        Price: "Price: $350"
    },
    {
        product_name: "Samsung Galaxy A51",
        product_image: "Samsung_Galaxy_A51",
        Price: "Price: $210"
    },
    {
        product_name: "Samsung Galaxy S21 Ultra",
        product_image: "Samsung-Galaxy-S21-Ultra",
        Price: "Price $400"
    },
    {
        product_name: "Samsung Galaxy S21 5G",
        product_image: "Samsung_Galaxy_S21_5G",
        Price: "Price: $380"
    }
]

//display products
let productsection = document.getElementById('productwrapper')
let html = "";
products.forEach(e => {
    html += `
        <section class="m-5 productsection " id="productwrapper">
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col d-flex flex-wrap justify-content-between ">
                    <div class="card h-100">
                        <img src="./images/${e.product_image}.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${e.product_name} x</h5>
                            <p class="card-text">${e.Price}</p>
                            <a class="btn btn-light btn-outline-secondary" href="#">Add to Cart</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="./images/${e.product_image}.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${e.product_name}</h5>
                            <p class="card-text">${e.Price}</p>
                            <a class="btn btn-light btn-outline-secondary" href="#">Add to Cart</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="./images/${e.product_image}.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${e.product_name}</h5>
                            <p class="card-text">${e.Price}</p>
                            <a class="btn btn-light btn-outline-secondary" href="#">Add to Cart</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>         
    `
    console.log(e)

    productsection.innerHTML = html
})