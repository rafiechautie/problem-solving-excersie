//question in hackerrank https://www.hackerrank.com/challenges/diagonal-difference/problem?isFullScreen=true


const arr = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
]
const diagonalDifference = (arr) => {
    let n = arr.length; //representasi baris dan kolom matrix
    let primaryDiagonalSum = 0  
    let secondaryDiagonalSum = 0
    //loop untuk setiap baris
    for(let i = 0; i< n; i++){
        //ambill baris dan kolom [0][0], [1][1], [2][2] untuk primaryDiagonalSum
        primaryDiagonalSum += arr[i][i]
        //ambil baris dan kolom [n - 1 - i]  
        secondaryDiagonalSum += arr[i][n - 1 - i]
    }
    
    /*
    Math.abs adalah sebuah fungsi dalam JavaScript yang digunakan untuk menghitung nilai absolut
    dari sebuah angka. Nilai absolut dari sebuah angka adalah nilai non-negatif dari angka tersebut
    tanpa memperhatikan tanda positif atau negatifnya.
    */
    return Math.abs(primaryDiagonalSum - secondaryDiagonalSum)
}

console.log(diagonalDifference(arr))