// Verilen sürede sadece bir kere çalışır
// setTimeout(() => {
//     console.log("Merhaba")
// }, 5000)

// Verilen sürede sürekli çalışır
// setInterval(() => {
//     console.log("Merhaba ben her saniye çalışacağım")
// }, 1000);

// const sayHi = cb => cb();

// sayHi(() => console.log("Hello"));

// fetch ve async
// import fetch from "node-fetch";
import axios from 'axios';

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(data => data.json())
// .then(users => {
//     console.log("Users yüklendi!", users);
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then(data => data.json())
//     .then(post => {
//         console.log("Post yüklendi!", post);
//         fetch("https://jsonplaceholder.typicode.com/posts/2")
//         .then(data => data.json())
//         .then(data => console.log("Post 2 Yüklendi!", data));
//     });
// });

// async-await yapısı
// async function getData() {
//     const users = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();

//     const post1 = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();

//     const post2 = await (await fetch("https://jsonplaceholder.typicode.com/posts/2")).json();


//     console.log("users", users);
//     console.log("post1", post1);
//     console.log("post2", post2);
// }

// getData();


// anonim fonksiyon

// (async () => {
//     const users = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();

//     const post1 = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();

//     const post2 = await (await fetch("https://jsonplaceholder.typicode.com/posts/2")).json();


//     console.log("users", users);
//     console.log("post1", post1);
//     console.log("post2", post2);
// })();

// (async () => {
//     const { data: users} = await axios("https://jsonplaceholder.typicode.com/users");

//     const { data: post1 } = await axios("https://jsonplaceholder.typicode.com/posts/1");

//     const { data: post2 } = await axios("https://jsonplaceholder.typicode.com/posts/2");


//     console.log("users", users);
//     console.log("post1", post1);
//     console.log("post2", post2);
// })();

// const getComments = (number) => {
//     return new Promise((resolve, reject) => {
//         if (number === 1) {
//             resolve({ text : "Selam" });
//         }
//         reject("Bir problem oluştu");
//     });
// };

// getComments(2)
//     .then((data) => console.log(data))
//     .catch((e) => console.log(e));

const getUsers = () => {
    return new Promise(async(resolve, reject) => {
        const { data } = await axios("https://jsonplaceholder.typicode.com/users");
        resolve(data);
    });
};
const getPost = (post_id) => {
    return new Promise(async(resolve, reject) => {
        const { data } = await axios("https://jsonplaceholder.typicode.com/posts/"+post_id);
        resolve(data);
    });
};

// (async () => {
//     // await getUsers()
//     // .then((data) => console.log(data))
//     // .catch((e) => console.log(e));

//     // await getPost(1)
//     // .then((data) => console.log(data))
//     // .catch((e) => console.log(e));
//     /****/
//     try {
//         console.log(await getUsers());
//         console.log(await getPost(1));
//     } catch (e) {
//         console.log(e);
//     }
// })();

Promise.all([getUsers(),getPost(1)]).then(console.log).catch(console.log);

