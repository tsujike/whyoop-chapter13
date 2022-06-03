//MainApp test application
function main() {

  // 異なるアルゴリズムに従う3つのコンテキスト。
  const c1 = new Context(new ConcreteStrategyA());
  c1.execute();

  const c2 = new Context(new ConcreteStrategyB());
  c2.execute();

  const c3 = new Context(new ConcreteStrategyC());
  c3.execute();

}


//ConcreteStrategy を指定して作成され、Strategy オブジェクトへの参照を保持する。
class Context {

  // Constructor
  constructor(strategy) {
    this.strategy = strategy;
  }

  execute() {
    this.strategy.execute();
  }
}

//具体的な戦略を実装するクラスは、このインターフェイスを実装する。
//コンテキストクラスは、具体的な戦略を呼び出すためにこのインターフェイスを使用する。
class Strategy {
  execute() {
  }
}


//Strategy インターフェイスを用いたアルゴリズムの実装。
class ConcreteStrategyA extends Strategy {
  execute() {
    console.log("Called ConcreteStrategyA.execute()");
  }
}

class ConcreteStrategyB extends Strategy {
  execute() {
    console.log("Called ConcreteStrategyB.execute()");
  }
}

class ConcreteStrategyC extends Strategy {
  execute() {
    console.log("Called ConcreteStrategyC.execute()");
  }
}
