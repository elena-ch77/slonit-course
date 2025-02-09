/* Напишите функцию createLogger(), которая должна возвращать объект с методами:
log(message): сохраняет сообщение в массив.
getLogs(): выводит все сохраненные сообщения. 
Массив с сообщениями должен быть доступен только внутри замыкания. 
Посторонние функции не должны иметь прямого доступа к этому массиву.
*/


/* const createLogger = () => {
    let arr=[];
    return {
        log(message){        
            arr.push(message);            
        },
        getLogs() {
            return arr;
            },
    }
    
}

const newMessage = createLogger();

newMessage.log('message');
console.log(newMessage.getLogs());
newMessage.log('message2');
newMessage.log('message3');
console.log(newMessage.getLogs()); */



/* Генератор случайных чисел из диапазона
Напишите функцию `createRandomGenerator(min, max), которая возвращает новую функцию.
Каждое время, когда возвращенная функция вызывается, она должна генерировать случайное число в пределах от min до max.
Значения min и max должны сохраняться внутри замыкания, и быть недоступными извне. */
function createRandomGenerator(min, max) {
    let generateRandom = () => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return generateRandom();
}

console.log(createRandomGenerator(3, 8));
console.log(createRandomGenerator(600, 800));



