//MainApp test application
function main() {

  //関数型（インターフェイスではない）で実装を定義
  const sa = () => console.log("Called ConcreteStrategyA.execute()");
  const sb = () => console.log("Called ConcreteStrategyB.execute()");
  const sc = () => console.log("Called ConcreteStrategyC.execute()");

  // 異なるアルゴリズムに従う3つのコンテキスト。
  const c1 = new Context(sa);
  c1.execute();

  const c2 = new Context(sb);
  c2.execute();

  const c3 = new Context(sc);
  c3.execute();

}

//ConcreteStrategy を指定して作成され、Strategy オブジェクトへの参照を保持する。
class Context {

  // Constructor
  constructor(strategy) {
    this.strategy = strategy;
  }

  execute() {
    this.strategy();
  }
}
