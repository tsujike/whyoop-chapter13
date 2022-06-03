//実行エントリーポイント
public class Main {
	public static void main(String[] args) {
		Trainer trainer = new Trainer();
		trainer.excute(new Baby()); // おぎゃー
		trainer.excute(new Dog()); // ワンワン
	}
}

//Animalを鳴かすトレーナークラス
class Trainer {
	void excute(Animal animal) {
		System.out.println(animal.cry());
	}
}

//実装をもたない抽象メソッドをもつ抽象クラス
abstract class Animal {
	abstract String cry();
}

//抽象クラスを継承して、実装するサブクラス1
class Baby extends Animal {

	//オーバーライドによる実装
	String cry() {
		return "おぎゃー";
	}
}

//抽象クラスを継承して、実装するサブクラス2
class Dog extends Animal {
	
	//オーバーライドによる実装
	String cry() {
		return "ワンワン";
	}
}
