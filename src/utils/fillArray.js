const fillArray = (ref, newer) => {
  for (let i=0; i<16; i++) {
    if(ref[i] === true) {
      newer.push(i);
    }
  }
}

export default fillArray;