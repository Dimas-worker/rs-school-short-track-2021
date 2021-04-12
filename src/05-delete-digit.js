/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const newArr = [];
  const arr = String(n).split('');
  let min = Math.min.apply(null, arr);
  min = String(min);
  const minStr = arr.indexOf(min);
  for (let i = 0; i < arr.length; i++) {
    if (i !== minStr) {
      newArr.push(arr[i]);
    }
  }
  return newArr.join('') / 1;
}

module.exports = deleteDigit;
