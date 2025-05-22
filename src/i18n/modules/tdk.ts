/*
 * SEO TDK
 */
const msg: ILangMsgs = {
  /*
   * 首页
   */
  tdk_title_guess_number: {
    en_US: 'Guess Number Game',
    zh_CN: '猜数字游戏',
    zh_TW: '猜數字遊戲',
    es_ES: 'Juego de adivinar números',
    fr_FR: 'Jeu de devinette de nombres',
    ru_RU: 'Игра в угадывание чисел',
    pt_PT: 'Jogo de adivinhação de números',
    de_DE: 'Zahlenspiel',
    ja_JP: '数字当てゲーム',
    it_IT: 'Gioco di adivinare i numeri',
    ko_KR: '숫자 맞추기 게임',
    vi_VN: 'Trò chơi đoán số',
  },
  tdk_description_guess_number: {
    en_US:
      'Guess Number Game – a fun and interactive number guessing challenge! Pick a number within a set range and test your logic and luck.',
    zh_CN:
      '猜数字游戏 – 一个有趣且互动的数字猜谜游戏！在给定的范围内选择一个数字，测试你的逻辑和运气。',
    zh_TW:
      '猜數字遊戲 – 一個有趣且互動的數字猜謎遊戲！在給定的範圍內選擇一個數字，測試你的邏輯和運氣。',
    es_ES:
      'Juego de adivinar números – un desafío de adivinar números interactivo y divertido! Elige un número dentro de un rango y prueba tu lógica y suerte.',
    fr_FR:
      'Jeu de devinette de nombres – un défi de devinette de nombres interactif et amusant! Choisissez un nombre dans un intervalle et testez votre logique et votre chance.',
    ru_RU:
      'Игра в угадывание чисел – веселая и интерактивная игра в угадывание чисел! Выберите число в заданном диапазоне и проверьте свою логику и удачу.',
    pt_PT:
      'Jogo de adivinhação de números – um desafio de adivinhação de números interativo e divertido! Escolha um número dentro de um intervalo e teste sua lógica e sorte.',
    de_DE:
      'Zahlenspiel – ein lustiges und interaktives Zahlenerraten-Spiel! Wählen Sie eine Zahl innerhalb eines bestimmten Bereichs und testen Sie Ihre Logik und Glück.',
    ja_JP:
      '数字当てゲーム – 楽しくてインタラクティブな数字当てゲーム！設定された範囲内で数字を選び、ロジックと運を試してみましょう。',
    it_IT:
      'Gioco di adivinare i numeri – un gioco di adivinare i numeri interattivo e divertente! Scegli un numero all’interno di un intervallo e testa la tua logica e la tua fortuna.',
    ko_KR:
      '숫자 맞추기 게임 – 재미있고 상호작용적인 숫자 추측 게임! 설정된 범위 내에서 숫자를 선택하고 논리와 운을 테스트해보세요.',
    vi_VN:
      'Trò chơi đoán số – một trò chơi đoán số thú vị và tương tác! Chọn một số trong một khoảng cố định và kiểm tra tư duy và may mắn của bạn.',
  },
  tdk_keywords_guess_number: {
    en_US:
      'Guess Number Game, Number guessing game, Guess Number, Number guessing, Guess a Number, Guess the Number, Guess my Number',
    zh_CN: '猜数字游戏, 猜数字',
    zh_TW: '猜數字遊戲, 猜數字',
    es_ES: 'Juego de adivinar números, adivinar números',
    fr_FR: 'Jeu de devinette de nombres, deviner les nombres',
    ru_RU: 'Игра в угадывание чисел, угадать число',
    pt_PT: 'Jogo de adivinhação de números, adivinhar números',
    de_DE: 'Zahlenspiel, Zahl erraten',
    ja_JP: '数字当てゲーム, 数字当て',
    it_IT: 'Gioco di adivinare i numeri, indovinare i numeri',
    ko_KR: '숫자 맞추기 게임, 숫자 맞추기',
    vi_VN: 'Trò chơi đoán số, đoán số',
  },

  /*
   * Guess Number 1-n
   */
  tdk_title_guess_number_1_n: {
    en_US: 'Guess a Number up to {n}',
    zh_CN: '猜数字游戏 1-{n}',
    zh_TW: '猜數字遊戲 1-{n}',
    es_ES: 'Juego de adivinar números 1-{n}',
    fr_FR: 'Jeu de devinette de nombres 1-{n}',
    ru_RU: 'Игра в угадывание чисел 1-{n}',
    pt_PT: 'Jogo de adivinhação de números 1-{n}',
    de_DE: 'Zahlenspiel 1-{n}',
    ja_JP: '数字当てゲーム 1-{n}',
    it_IT: 'Gioco di adivinare i numeri 1-{n}',
    ko_KR: '숫자 맞추기 게임 1-{n}',
    vi_VN: 'Trò chơi đoán số 1-{n}',
  },
  tdk_description_guess_number_1_n: {
    en_US:
      'Guess a Number up to {n}. A quick and easy number guessing challenge! Pick a number between 1 and {n} and see if you can guess it right',
    zh_CN: '猜数字游戏 1-{n}',
    zh_TW: '猜數字遊戲 1-{n}',
    es_ES:
      'Juego de adivinar números 1-{n}. Un desafío de adivinar números rápido y fácil! Elige un número entre 1 y {n} y verifica si puedes adivinarlo correctamente',
    fr_FR:
      'Jeu de devinette de nombres 1-{n}. Un défi de devinette de nombres rapide et facile! Choisissez un nombre entre 1 et {n} et vérifiez si vous pouvez le deviner correctement',
    ru_RU:
      'Игра в угадывание чисел 1-{n}. Веселая и простая игра в угадывание чисел! Выберите число между 1 и {n} и проверьте, сможете ли вы угадать его правильно',
    pt_PT:
      'Jogo de adivinhação de números 1-{n}. Um desafio de adivinhação de números rápido e fácil! Escolha um número entre 1 e {n} e veja se você consegue adivinhá-lo corretamente',
    de_DE:
      'Zahlenspiel 1-{n}. Ein lustiges und einfaches Zahlenerraten-Spiel! Wählen Sie eine Zahl zwischen 1 und {n} und sehen Sie, ob Sie sie richtig erraten können',
    ja_JP:
      '数字当てゲーム 1-{n}. 楽しくて簡単な数字当てゲーム！1から{n}の数字を選び、正しく当てられるか試してみましょう',
    it_IT:
      'Gioco di adivinare i numeri 1-{n}. Un gioco di adivinare i numeri rapido e facile! Scegli un numero tra 1 e {n} e vedi se puoi indovinarlo correttamente',
    ko_KR:
      '숫자 맞추기 게임 1-{n}. 재미있고 간단한 숫자 맞추기 게임! 1에서 {n} 사이의 숫자를 선택하고 맞출 수 있는지 확인해보세요',
    vi_VN:
      'Trò chơi đoán số 1-{n}. Một trò chơi đoán số nhanh và dễ dàng! Chọn một số giữa 1 và {n} và xem liệu bạn có thể đoán nó đúng không',
  },
  tdk_keywords_guess_number_1_n: {
    en_US:
      'Guess a Number up to {n}, Guess Number Game 1-{n}, Number Guess 1-{n}, Number Guessing 1 {n}, Number Guessing Game 1 {n}, Guess a Number Between 1 and {n}, 1-{n} number games',
    zh_CN: '猜数字游戏 1-{n}, 猜数字, 猜数字游戏',
    zh_TW: '猜數字遊戲 1-{n}, 猜數字, 猜數字遊戲',
    es_ES: 'Juego de adivinar números 1-{n}, adivinar números, Juego de adivinar números',
    fr_FR: 'Jeu de devinette de nombres 1-{n}, deviner les nombres, Jeu de devinette de nombres',
    ru_RU: 'Игра в угадывание чисел 1-{n}, угадать число, Игра в угадывание чисел',
    pt_PT:
      'Jogo de adivinhação de números 1-{n}, adivinhar números, Jogo de adivinhação de números',
    de_DE: 'Zahlenspiel 1-{n}, Zahl erraten, Zahlenspiel',
    ja_JP: '数字当てゲーム 1-{n}, 数字当て, 数字当てゲーム',
    it_IT: 'Gioco di adivinare i numeri 1-{n}, indovinare i numeri, Gioco di adivinare i numeri',
    ko_KR: '숫자 맞추기 게임 1-{n}, 숫자 맞추기, 숫자 맞추기 게임',
    vi_VN: 'Trò chơi đoán số 1-{n}, đoán số, Trò chơi đoán số',
  },

  /*
   * guess the n digit number game
   */
  tdk_keywords_guess_number_n_digit: {
    en_US:
      'Guess the {n} digit number game, Guess the {n} digit number, Guess a {n} digit number game, Guess a {n} digit number',
    zh_CN: '猜数字游戏 {n} 位数',
    zh_TW: '猜數字遊戲 {n} 位數',
    es_ES: 'Juego de adivinar números {n} dígitos',
    fr_FR: 'Jeu de devinette de nombres {n} chiffres',
    ru_RU: 'Игра в угадывание чисел {n} цифр',
    pt_PT: 'Jogo de adivinhação de números {n} dígitos',
    de_DE: 'Zahlenspiel {n} Ziffern',
    ja_JP: '数字当てゲーム {n} 桁',
    it_IT: 'Gioco di adivinare i numeri {n} cifre',
    ko_KR: '숫자 맞추기 게임 {n} 자리',
    vi_VN: 'Trò chơi đoán số {n} chữ số',
  },
};

export default msg;
