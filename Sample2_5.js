/** main */
function sample2_4() {
  console.log(factorial_(4)); //24
}

/**
 * 階乗を求める関数
 * @param {number} n
 */
function factorial_(n) {

  let result = 1;
  for (let i = n; i > 0; i--) {
    result *= i
  }
  return result;
}



/** main */
function sample2_5() {
  console.log(factorialRecursion_(4)); //24
}

/**
 * 階乗を求める関数
 * @param {number} n
 */
function factorialRecursion_(n) {

  if (n !== 0) {
    return n * factorialRecursion_(n - 1);
  }
  return 1;
}
