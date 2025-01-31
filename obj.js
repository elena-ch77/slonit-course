//написать метод, который на вход получает объект, а 
// на выходе возвращает число, соответствующее сумме всех числовых полей.
//Задача со звездочкой - то же самое. Но 
// вместо просто числа с суммой полей метод 
// возвращает массив с названиями полей, причем 
// эти названия полей отсортированы по убыванию.
//Например, для объекта 
// {name: 'Vasya', friends: 5, likes: 19, projects: 7} вернется массив [likes, projects, friends].
let obj = {
    name: 'Vasya',
    friends: 5,
    likes: 19,
    projects: 7,
}
let sum = 0;
let arr = [];
let obj2 = [];
for (key in obj) {
    if (typeof obj[key] == "number") {
        sum += obj[key];
        obj2.push({ id: obj[key], name: key });
    }
}
obj2.sort((a, b) => b.id - a.id);
for (i = 0; i < obj2.length; i++) {
    arr.push(obj2[i]["name"]);
}
console.log(sum);
console.log(arr);