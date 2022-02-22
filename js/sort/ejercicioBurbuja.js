var arr = [9,2,6,1,4,3,8,7];
var l = arr.length;

  for (let i = 0; i < l; i++ ) {
    for (let j = 0; j < l - 1 - i; j++ ) {
      if ( arr[ j ] > arr[ j + 1 ] ) {
        [ arr[ j ], arr[ j + 1 ] ] = [ arr[ j + 1 ], arr[ j ] ];
      }
    }
  }

  console.log(arr)


