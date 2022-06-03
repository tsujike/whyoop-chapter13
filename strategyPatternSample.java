//MainApp test application
public class MainApp {
	public static void main(String[] args) {
		Context context;

		// 異なるアルゴリズムに従う3つのコンテキスト。
		context = new Context(new ConcreteStrategyA());
		context.execute();

		context = new Context(new ConcreteStrategyB());
		context.execute();

		context = new Context(new ConcreteStrategyC());
		context.execute();

	}
}

//ConcreteStrategy を指定して作成され、Strategy オブジェクトへの参照を保持する。
class Context {
	Strategy strategy;

	// Constructor
	public Context(Strategy strategy) {
		this.strategy = strategy;
	}

	public void execute() {
		this.strategy.execute();
	}
}

//具体的な戦略を実装するクラスは、このインターフェイスを実装する。
//コンテキストクラスは、具体的な戦略を呼び出すためにこのインターフェイスを使用する。
interface Strategy {
	void execute();
}

//Strategy インターフェイスを用いたアルゴリズムの実装。
class ConcreteStrategyA implements Strategy {
	public void execute() {
		System.out.println("Called ConcreteStrategyA.execute()");
	}
}

class ConcreteStrategyB implements Strategy {
	public void execute() {
		System.out.println("Called ConcreteStrategyB.execute()");
	}
}

class ConcreteStrategyC implements Strategy {
	public void execute() {
		System.out.println("Called ConcreteStrategyC.execute()");
	}
}
