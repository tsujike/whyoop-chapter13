//MainApp test application
public class MainApp {
	public static void main(String[] args) {
		Context context;

		// Strategyインターフェイスを型とした変数に、具体的な計算ロジックを代入する
		Strategy sa = () -> System.out.println("Called ConcreteStrategyA.execute()");
		Strategy sb = () -> System.out.println("Called ConcreteStrategyB.execute()");
		Strategy sc = () -> System.out.println("Called ConcreteStrategyC.execute()");

		// 異なるアルゴリズムに従う3つのコンテキスト。
		context = new Context(sa);
		context.execute();

		context = new Context(sb);
		context.execute();

		context = new Context(sc);
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
