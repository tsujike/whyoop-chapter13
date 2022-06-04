function sample2_3() {

  /*Context 具体的な戦略を渡されて、参照を保持するコンテキストクラス*/
  class Button {
    constructor(submitFunc) {
      this.onSubmit = submitFunc;
    }
  }

　/*Strategy 戦略クラス*/
  const sum = (array) => array.reduce((a, c) => a + c, 0);
  const doubles = (array) => array.map(element => element * 2);
 
  /*Client　異なる戦略をもつ2つのインスタンスを生成する　*/
  const button1 = new Button(sum);
  const button2 = new Button(doubles);
  
  //実行用処理
  const numbers = [1, 2, 3, 4, 5];
  console.log(button1.onSubmit(numbers)); //15
  console.log(button2.onSubmit(numbers)); //[ 2, 4, 6, 8, 10 ]

}
