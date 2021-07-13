export default (name) => console.log("hello " + name);
//

// const topla = function topla(a , b){
//     return a + b;
// }
// export default topla;
const topla = (a, b) => a + b;
const cikar = (a,b) => a-b;
const text = "Text";
const user = {
    name: "Doğancan",
    surname: "Ülgü",
};

const users = [
    {
        name: "Ahmet",
        surname: "Tarık"
    },
    {
        name: "Tayfun",
        surname: "Erbilen",
    },
];
export {topla, cikar, text, user, users};
