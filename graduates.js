function graduates (students) {
    //bikin object buat nampung nama class
    var hasil = {}
    for (var i = 0; i<students.length; i++) {
      hasil[students[i]['class']] = [] //bikin key class. timpa timpa aja
      // console.log(students[i].class)
    }
    // console.log(hasil)
    
    for (var j = 0; j<students.length; j++) {
      var temp = {}
      if(students[j].score > 75) {
        temp['name'] = students[j].name
        temp['score'] = students[j].score
        hasil[students[j]['class']].push(temp)
      } 
        
        
    }
    return hasil
      
  }
  //   for (j = 1; j < string.length; j++) {//tiap abis looping, jika sesuai, push temp ke hasil
  //     var temp = {}
  //     for (k = 0; k < string[j].length; k++) {
  //         temp[string[0][k]] = (string[j][k]) //key dan value
  //     }
  //     hasil[string[j][3]].push(temp)
  // }
    // return hasil
  // }
  
  console.log(graduates([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: [
  //     { name: 'Dimitri', score: 90 }
  //   ],
  //   wolves: [
  //     { name: 'Alexei' , score: 85 },
  //     { name: 'Anastasia', score: 78 }
  //   ]
  // }
  
  console.log(graduates([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
  //   foxes: [
  //     { name: 'Alexander', score: 100 },
  //     { name: 'Vladimir', score: 92 }
  //   ],
  //   wolves: [
  //     { name: 'Alisa', score: 76 },
  //   ],
  //   tigers: [
  //     { name: 'Viktor', score: 80 }
  //   ]
  // }
  
  
  console.log(graduates([])); //{}