function String(str) {
  const arr = str.split('');

  const n = arr.length;
  console.log(n);
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j].charCodeAt(0) > arr[j + 1].charCodeAt(0)) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr.join('');
}

console.log(String("hello")); 
