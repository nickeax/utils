class Conversion {
  num = 0;
  numerals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  listOfSquares(amt) {
    let tmpArr = [];
    let tmp = 1;
    for (let i = 0; i < amt; i++) {
      tmpArr.push(tmp *= 2);
    }
    return tmpArr;
  }  

  bin2dec = bin => {
    // TODO
  }

  dec2bin = dec => {
    let padAmount = 4;
    let temp = dec;
    let output = "";
    while (temp > 0) {
      if (temp % 2 === 0) {
        output = "0" + output;
      } else {
        output = "1" + output;
      }
      temp = Math.floor(temp / 2);
    }
    while(output.length < padAmount) {
      output = "0" + output;
    }
    return output;
  }
}

export { Conversion };