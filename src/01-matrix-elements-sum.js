/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
		  const arr = [];
			for (let i = 0; i < matrix[0].length; i++) {
				let el = matrix.map((value) => value[i]);
				arr.push(el);
			}
		  return arr.reduce((acc, el, id) => {
			el = el.filter((value, index) => el.includes(0) ? index < el.indexOf(0) : el);
			for (let i = 0; i < el.length; i++) {
				acc += el[i];
			}
			return acc;
		  }, 0);
}

let matrix = [
   [0, 1, 1, 2],
   [0, 5, 0, 0],
   [2, 0, 3, 3]
 ]
console.log(getMatrixElementsSum(matrix))
//module.exports = getMatrixElementsSum;
