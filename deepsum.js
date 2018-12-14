// Logic Challenge: Deep Sum
// Implementasikan function deepSum untuk mendapatkan jumlah pertambahan dari angka-angka yang terdapat di dalam array

// Contoh array:

// [
//   [
//     [1, 2, 3],
//     [1, 2, 3]
//   ],
//   [
//     [1, 2, 3],
//     [1, 2],
//     [1]
//   ]
// ]
// Maka akan menghasilkan output: 22

// Level kedalaman array akan di-asumsikan selalu 3, [ [ [ ] ] ], jika yang diberikan adalah array kosong maka kembalikan nilai 'No number'


// jadi ini sum semua number yang ada di deep 3 kan
// per array pake for sebanyak length di deep 3 tsb

function deepSum (arr) {
  // Code disini
  var tot = 0
  var a = arr.length
  // console.log('ada ' +a+ ' array dalam')
  for (var i = 0;  i < a; i++) {
    var b = arr[i].length
    // console.log('leng array dalem ke '+i+ ' adalah '+ b)
    for ( var j =0; j < b; j++) {
        var c = arr[i][j].length
        // console.log('leng array dalem banget ke '+j+ ' di dalam array dalam ke '+i+' adalah '+c)
        for (var k = 0; k < c; k++) {
            tot += arr[i][j][k]
        }
    }
  } //loop di array 2.selesein dulu. pola pikirnya kyk baris-kolom asterisk

  console.log('-----------------')
  return tot
}

//TEST CASE
console.log(deepSum(
[
  [
    [4, 5, 6],
    [9, 1, 2, 10],
    [9, 4, 3]
  ],
  [
    [4, 14, 31],
    [9, 10, 18, 12, 20],
    [1, 4, 90]
  ],
  [
    [2, 5, 10],
    [3, 4, 5],
    [2, 4, 5, 10]
  ]
])); // 316

console.log(deepSum([
  [
    [20, 10],
    [15],
    [1, 1]
  ],
  [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    [2],
    [9, 11]
  ],
  [
    [3, 5, 1],
    [1, 5, 3],
    [1]
  ],
  [
    [2]
  ]
])); // 156

console.log(deepSum([])); // No number