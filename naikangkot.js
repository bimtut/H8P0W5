// Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. 
// Function akan me-return array of object.
// Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.
// Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]


function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var b = rute.length
    var a = arrPenumpang.length
    var jadi = []

    for ( var i = 0; i < a; i++) {
        // console.log(arrPenumpang[i][0])
        // console.log(arrPenumpang[i][1])
        // console.log(arrPenumpang[i][2])
        var asal = 0
        var tuju = 0
        
        
        for (var j = 0; j < b; j++) {
            if (rute[j] == arrPenumpang[i][1]) {
                asal = j
            }
            if (rute[j] == arrPenumpang[i][2]) {
                tuju = j
            }
        }
        var ongkos = 2000 * (tuju-asal)
        jadi[i] = { penumpang : arrPenumpang[i][0],
            naikDari : arrPenumpang[i][1],        
            tujuan : arrPenumpang[i][2],
            bayar : ongkos}
        //jadi[i] = 'reo'
    }
    //your code here
    return jadi
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]