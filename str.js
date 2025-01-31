// Задание 1 - Самое простое - это иногда мы исправляем за пользователем 
// его ввод данных и хотим, чтобы наша строка начиналась с большой буквы, 
// независимо от того, что ввел пользователь. Необходимо реализовать такую функцию.
/*

str = "иногда мы исправляем за пользователем его ввод данных и хотим, чтобы наша строка начиналась с большой буквы, независимо от того, что ввел пользователь";
function getUpperCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(getUpperCase(str));
*/


// Задание 2 - На вход получаем длинную или 
// не очень строку и размер ограничения (например, то что у нас влезает 40 символов). 
// На выходе возвращает, по необходимости укороченную строку, 
// в конце которой стоит троеточие. Усложняем задание тем, 
// что строка не должна обрезаться посредине слова. 
// Обрезаем строку по пробелу или по символу знака препинания (,.!?:;)/
/*
str = "На вход получаем длинную или !не!?.очень строку и размер ограничения (например, то что у нас влезает 40 символов).";
strLimit = 35;
punctuation = [" ", ",", ".", ";", ":", "!", "?", ")", "(", "/"];


function getTrimString(str, strLimit) {
  str = str.substr(0, strLimit);
  comparison = str.lastIndexOf(punctuation[0]);
  
  for (i = 1; i < punctuation.length; i++) {
    lastIndex = str.lastIndexOf(punctuation[i]);

    if (lastIndex > comparison) {
      comparison = lastIndex;
    }
  }
  return str = str.substr(0, comparison) + "...";
}

console.log(getTrimString(str, strLimit));

*/

str1 = "widget id mac windows";
str2 = "id mac";

function isSubStr(str1, str2) {

  subStr1 = str1.indexOf(str2);
  subStr2 = str2.indexOf(str1);
  
  if ((subStr1>=0) || (subStr2>=0)) {
    return true;
  } else return false;
}
console.log(isSubStr(str1, str2));

