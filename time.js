class TimeFuncs {
  stampMs() {
    return Date.now();
  }
  
  stampS() {
    return Date.now() / 1000;
  }
}

export {TimeFuncs};