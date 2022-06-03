function sample2_1() {
  const c = '\t';
  console.log(convertTab(c)); //"  "

  const d = 's';
  console.log(convertTab(d)); //s
}

function convertTab(c) {

  if (c === '\t') {
    return "  ";
  } else {
    return String(c);
  }

}
