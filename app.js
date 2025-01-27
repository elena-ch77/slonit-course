let i=0;
let x= 42;  //компьютер 1
let n=100;
let rezult = Math.round((i+n)/2); //Компьютер 2
while (rezult!=x) {
    rezult = Math.round((i+n)/2);
 if (rezult==x) {
    console.log(`Компьютер 2: пробую число ${rezult}`);
    console.log(`Компьютер 1: Число угадано - ${x}`);
 } else if (rezult<x) {

    
    console.log(`Компьютер 2: пробую число ${rezult}`);
    console.log(`Компьютер 1: Загаданное число больше \n`);
    i= rezult;
 } else if (rezult>x) {
    console.log(`Компьютер 2: пробую число ${rezult}`);
    console.log(`Компьютер 1: Загаданное число меньше \n`);
    
    n = rezult;
 }
}