var array = [3,7,2,8,2,782,7,29,1,3,0,34];
  array.sort(function (a, b)
  {
      return a-b;
  });
  console.log(array); // prints [0, 1, 2, 2, 3, 3, 7, 7, 8, 29, 34, 782]
