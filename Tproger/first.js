const ARR = [1, 4, 3, 0, 4, 5, 4]

const oneString = (arr) => {
    return arr.filter(item => item % 2 == 0).reduce((acc, item) => acc + Math.sqrt(item), 0)
}
console.log(oneString(ARR))

// Напишите однострочное решение, которое вычисляет сумму квадратных корней для всех чётных чисел целочисленного массива.