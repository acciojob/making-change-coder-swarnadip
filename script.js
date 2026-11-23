const makeChange = (c) => {
  // your name here
	  let res = {
    q: 0,
    d: 0,
    n: 0,
    p: 0
  };

  let arr = [25, 10, 5, 1];

  for (let i = 0; i < arr.length; i++) {
    while (c >= arr[i]) {

      if (i === 0) res.q++;
      else if (i === 1) res.d++;
      else if (i === 2) res.n++;
      else res.p++;

      c -= arr[i];
    }
  }

  return res;
};

// Do not the change the code below
const c = prompt("Enter c: ");

alert(JSON.stringify(makeChange(c)));
