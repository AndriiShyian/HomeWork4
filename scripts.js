// task1
// console.log(fromTo(3,2));
// function fromTo(from, to){
//     switch(arguments.length){
//         case 0: return 'you didnt entered any arg';
//         case 1: return 'you entered one arg';
//         case 2: break;
//         default: return 'you entered more than two arg';
//     }
//     let zero = 0;
//     let nol = 0;
//     for(let i = from; i <= to; i++){
//         if(i % 2 === 0){
//            zero++;
//         }
//         else{
//             nol++;
//         }
//     }
//     return 'Parni '+zero+ ' Neparni '+nol;
// }




// task2

// console.log(pseudo(7,8,9,0,8,7,7,6,5,45,8));
// function pseudo(){
//     let massive = [];
// for(let i = 0; i < arguments.length; i++ ){
// massive[i] = arguments[i];
// }
//     let elem = 0;
//     if(arguments.length > 10){
//         return massive;
//     }
//     if(arguments.length === 0){
//         return 'There are no arguments';
//     }
//     else{
//         for(let i = 0; i < arguments.length; i++){
//             elem += massive[i];
//         }
//     }
//     return elem;
// }






// task3
// console.log(factorial(6));
// function factorial(chuslo){
//     let one = 1;
//     for(let i = 1; i <= chuslo; i++){
//         one*=i;
//     }
//     return one;
// }


// task4
// let list = [5, 3, 6, 1, 54, 7, 8, 4, -4];
// bubbleSorting(list);
// console.log(list);
// function bubbleSorting(list){
//     let helpie;
//     for(let j = 0; j < list.length; j++){
//     for(let i = 0; i < list.length; i++){
//         if(list[i] > list[i+1]){
//             helpie = list[i];
//             list[i] = list[i + 1];
//             list[i+1] = helpie;
//         }
//     }}
//     return list;
// }
