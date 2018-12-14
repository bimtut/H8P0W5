function meleeRangedGrouping (str) {
    var arr = str.split(',')
    var jadi = [[], []]
    // console.log(arr)
    if (str == false) {
        return []
    }
    for (var i =0; i < arr.length; i++) {
        var arrb = arr[i].split('-')
        if(arrb[1] == 'Ranged') {
            jadi[0].push(arrb[0])
        } else if(arrb[1] == 'Melee') {
            jadi[1].push(arrb[0])
        }
    }
    return jadi
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []