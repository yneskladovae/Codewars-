/* 
Return the Nth Even Number

Example(Input --> Output)

1 --> 0 (the first even number is 0)
3 --> 4 (the 3rd even number is 4 (0, 2, 4))
100 --> 198
1298734 --> 2597466
*/

function nthEven(n){
  return n * 2 - 2;
}

// function nthEven(n){
//   let res = 0;
//   for (let i = 1; i < n; i++){
//     res += 2;
//   }
//   return res;
// }