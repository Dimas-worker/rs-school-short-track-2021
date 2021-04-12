/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let result;
  for (let i = 0; i < n.length; i++) {
    if (((n.charCodeAt(i) > 47) && (n.charCodeAt(i) < 58))
    || (((n.charCodeAt(i) > 64) && (n.charCodeAt(i) < 71))
    || (n.charCodeAt(i) === 45))) {
      result = true;
    } else {
      return false;
    }
  }
  return result;
}

module.exports = isMAC48Address;
