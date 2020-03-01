class ConsoleOps {
  c(d) {
    console.log(d);
  }
  
  cStyled(d) {
    console.log(`%c${d.text}`, d.style);
  }
  
  t(d) {
    console.table(d);
  }
}

export { ConsoleOps };