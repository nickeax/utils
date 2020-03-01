class DomManip {
  item(ref) {
    return document.querySelector(ref);
  }
  
  elem(type="div") {
    return document.createElement(type);
  }
}

export {DomManip};