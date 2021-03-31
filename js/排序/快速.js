/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
  quickSort(arr)

  return arr.slice(0, k)
}

/**
 * @param {number[]} arr
 * @param {number} i
 * @param {number} i
 */
function swap(arr, i, j) {
  ;[arr[i], arr[j]] = [arr[j], arr[i]]
}

/**
 * @param {number[]} arr
 * @param {number} l
 * @param {number} r
 */
function quickSort(arr, l = 0, r = arr.length - 1) {
  if (l >= r) return

  let i = l,
    j = r

  while (i < j) {
    while (i < j && arr[j] >= arr[l]) j--
    while (i < j && arr[i] <= arr[l]) i++

    swap(arr, i, j)
  }

  swap(arr, i, l)

  quickSort(arr, l, i - 1)
  quickSort(arr, i + 1, r)
}

let arr = [3, 2, 1, 4, 7, 10, 5, 6, 9]

quickSort(arr)

console.log(arr)
