const users = ["Mehmet", "Ahmet", "Murat"];
const usersObj = [
    {   name : "Mehmet", age : 30,   },
    {   name : "Mehmet" , age : 29,  },
    {   name : "Sevilay" , age : 40,  },
]

/* 
    push
    map
    find
    filter
    some
    every
    includes
*/

//push
// users.push("Ayşe");
// users.push("Fatma");
// console.log(users);

//map
// users.map((item) => {
//     console.log(item);
// });
// usersObj.map((item) => {
//     console.log(item.name);
// });

//find
// const result = usersObj.find( item => item.name === "Mehmet" && item.age > 20);
// console.log(result);

//filter
// const filtered = usersObj.filter(item => item.name === "Mehmet" && item.age >29);
// const filtered = usersObj.filter(({name, age}) => name === "Mehmet" && age >29);
// console.log(filtered);

//some
// const some = usersObj.some(item => item.age === 29);
// console.log(some);

//every
// const every = usersObj.every(item => item.age >29);
// console.log(every);

//includes
const meyveler = ["elma", "armut", "muz"];
const isIncluded = meyveler.includes("muz");
console.log(isIncluded);
const isIncludedF = meyveler.includes("portakal");
console.log(isIncludedF);

