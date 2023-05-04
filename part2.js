// const myCar = {
//     make: 'Honda',
//     model: 'Civic',
//     info: {
//         isPopular: true,
//         color: 'red',
//         more: {
//             mileage: 10000,
//             nextService: 2024,
//         }
//     } 
// }

// console.log(myCar.make);

// myCar.model - 'CR-V';
// console.log(myCar.model);
// myCar.color - 'red';
// console.log(myCar);
// console.log(myCar.mileage);

// const popularity = 'popular';

// myCar[popularity] = {isPopular: 'false', color: 'red'};

// console.log(myCar.info.more.nextService)

// console.log(myCar);

// const userName = 'gqef2312'
// const friendsQty = 10000;

// const userProfile = {
//     userName,
//     friendsQty
// }

// console.log(userProfile);

const button = {
    width: 200,
    text: 'Buy',
    color: 'green'
}

const redButton = {
    ...button,
    color: 'red'
}

console.log(redButton)