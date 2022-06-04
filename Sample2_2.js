function sample2_2() {

  const getIncludeTax = {
    normal(price) { return price * 1.1; },
    keigen(price) { return price * 1.08; },
    uchizei(price) { return price * 1; }
  };

  const calculateTax = (type, price) => getIncludeTax[type](price);

  console.log(calculateTax('normal', 1000)); // 1100
  console.log(calculateTax('keigen', 1000)); // 1080
  console.log(calculateTax('uchizei', 1000)); // 1000

}
