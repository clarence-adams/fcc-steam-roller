function steamrollArray(arr) {
  let newArr = [];


  function extract(arg) {
    if (Array.isArray(arg) == false) {
      newArr.push(arg);
    } else {
      arg.forEach(element => {
        extract(element);
      });
    }
  };

  for (let i = 0; i < arr.length; i++) {
    extract(arr[i]);
  }
  console.log(newArr);
  return newArr;
};

console.log(steamrollArray([1, {}, [3, [[4]]]]));