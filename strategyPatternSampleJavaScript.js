function strategy() {

  const validator = {
    // これがストラテジー（戦略）
    strtegy: {
      isNonEmpty: {
        validate: _ => _ !== '',
        instructions: '何か入力してください',
      },
      isNumber: {
        validate: _ => !isNaN(_),
        instructions: '数値にしてください',
      },
      isAlphaNum: {
        validate: _ => !/[^a-z0-9]/i.test(_),
        instructions: '英数字にしてください',
      },
    },

    // キー名（項目）ごとにストラテジーを割り当てておく
    config: {
      firstName: 'isNonEmpty', // 空はだめよ
      // lastNameはなんでもいいよ
      age: 'isNumber', // 数字じゃないとだめよ
      username: 'isAlphaNum', // 英数字じゃないとダメよ
    },

    messages: [],

    validate: function (data) {
      this.messages = [];
      for (key in data) {
        // プロトタイプはスルー
        if (!data.hasOwnProperty(key)) continue;

        // キーに適合するストラテジー名とストラテジー本体を抽出
        const strategyName = this.config[key];
        const strategy = this.strtegy[strategyName];

        // チェックの必要がないキーはスルー
        if (!strategyName) continue;

        const valid = strategy.validate(data[key]);
        if (!valid) {
          const msg = `Error at ${key}. ${strategy.instructions}`;
          this.messages.push(msg);
        }
      }
    },

    hasErrors: function () {
      return this.messages.length !== 0;
    },
  };



  const data = {
    firstName: '',
    lastName: 'Doe',
    age: 'unknown',
    username: 'o_O',
  };

  validator.validate(data);
  if (validator.hasErrors()) console.log(validator.messages);

}
/*
[ 'Error at firstName. 何か入力してください',
  'Error at age. 数値にしてください',
  'Error at username. 英数字にしてください' ]
*/
