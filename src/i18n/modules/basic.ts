/*
 * 国际化翻译
 */
const msg: ILangMsgs = {
  lang_name: {
    en_US: 'English',
    zh_CN: '中文（简体）',
    zh_TW: '中文（繁体）',
    es_ES: 'Español',
    fr_FR: 'Français',
    ru_RU: 'Русский',
    pt_PT: 'Português',
    de_DE: 'Deutsch',
    ja_JP: '日本語',
    it_IT: 'Italiano',
    ko_KR: '한국어',
    vi_VN: 'Tiếng Việt',
  },

  // 猜中了之后的文案
  guess_number_win: {
    en_US: 'You got it!',
    zh_CN: '猜中了！',
    zh_TW: '猜中了！',
    es_ES: '¡Lo has adivinado!',
    fr_FR: 'Vous avez deviné!',
    ru_RU: 'Вы угадали!',
    pt_PT: 'Você acertou!',
    de_DE: 'Sie haben es erraten!',
    ja_JP: 'あなたは正解を当てました！',
    it_IT: 'Hai indovinato!',
    ko_KR: '맞추셨습니다!',
    vi_VN: 'Bạn đã đoán đúng!',
  },
  // 战胜了xx%的玩家
  guess_number_win_percentage: {
    en_US: 'You beat {percentage}% of players!',
    zh_CN: '战胜了{percentage}%的玩家！',
    zh_TW: '戰勝了{percentage}%的玩家！',
    es_ES: '¡Venciste a {percentage}% de jugadores!',
    fr_FR: 'Vous avez battu {percentage}% des joueurs!',
    ru_RU: 'Вы победили {percentage}% игроков!',
    pt_PT: 'Você venceu {percentage}% dos jogadores!',
    de_DE: 'Sie haben {percentage}% der Spieler übertroffen!',
    ja_JP: '{percentage}%のプレーヤーを打ち負かしました！',
    it_IT: 'Hai battuto {percentage}% dei giocatori!',
    ko_KR: '{percentage}%의 플레이어를 이겼습니다!',
    vi_VN: 'Bạn đã vượt qua {percentage}% người chơi!',
  },

  // 确认按钮
  btn_confirm: {
    en_US: 'Confirm',
    zh_CN: '确认',
    zh_TW: '確認',
    es_ES: 'Confirmar',
    fr_FR: 'Confirmer',
    ru_RU: 'Подтвердить',
    pt_PT: 'Confirmar',
    de_DE: 'Bestätigen',
    ja_JP: '確認',
    it_IT: 'Confermare',
    ko_KR: '확인',
    vi_VN: 'Xác nhận',
  },

  // 猜测历史记录列表
  guess_number_history: {
    en_US: 'Guess History',
    zh_CN: '猜测记录',
    zh_TW: '猜測記錄',
    es_ES: 'Historial de adivinanzas',
    fr_FR: 'Historique des devinettes',
    ru_RU: 'История угадываний',
    pt_PT: 'Histórico de adivinhações',
    de_DE: 'Erraten-Historie',
    ja_JP: '当てた履歴',
    it_IT: 'Storia delle adivinanze',
    ko_KR: '추측 기록',
    vi_VN: 'Lịch sử đoán',
  },

  // 第n次猜测
  guess_number_try: {
    en_US: 'Try {n}',
    zh_CN: '第{n}次',
    zh_TW: '第{n}次',
    es_ES: 'Intento {n}',
    fr_FR: 'Essai {n}',
    ru_RU: 'Попытка {n}',
    pt_PT: 'Tentativa {n}',
    de_DE: 'Versuch {n}',
    ja_JP: '試行 {n}',
    it_IT: 'Tentativo {n}',
    ko_KR: '시도 {n}',
    vi_VN: 'Lần đoán {n}',
  },

  // 正确
  guess_number_correct: {
    en_US: 'Correct!',
    zh_CN: '正确',
    zh_TW: '正確',
    es_ES: 'Correcto!',
    fr_FR: 'Correct!',
    ru_RU: 'Правильно!',
    pt_PT: 'Correto!',
    de_DE: 'Richtig!',
    ja_JP: '正解!',
    it_IT: 'Corretto!',
    ko_KR: '정답!',
    vi_VN: 'Đúng!',
  },

  // 太小
  guess_number_too_low: {
    en_US: 'Too low!',
    zh_CN: '太小',
    zh_TW: '太小',
    es_ES: 'Demasiado bajo!',
    fr_FR: 'Trop bas!',
    ru_RU: 'Слишком низко!',
    pt_PT: 'Muito baixo!',
    de_DE: 'Zu niedrig!',
    ja_JP: '太低!',
    it_IT: 'Troppo basso!',
    ko_KR: '너무 낮아요!',
    vi_VN: 'Quá thấp!',
  },

  // 太大
  guess_number_too_high: {
    en_US: 'Too high!',
    zh_CN: '太大',
    zh_TW: '太大',
    es_ES: 'Demasiado alto!',
    fr_FR: 'Trop haut!',
    ru_RU: 'Слишком высоко!',
    pt_PT: 'Muito alto!',
    de_DE: 'Zu hoch!',
    ja_JP: '太大!',
    it_IT: 'Troppo alto!',
    ko_KR: '너무 높아요!',
    vi_VN: 'Quá cao!',
  },

  // 重新开始
  btn_restart: {
    en_US: 'Restart Game',
    zh_CN: '重新开始',
    zh_TW: '重新開始',
    es_ES: 'Reiniciar juego',
    fr_FR: 'Recommencer le jeu',
    ru_RU: 'Начать заново',
    pt_PT: 'Reiniciar jogo',
    de_DE: 'Neustart',
    ja_JP: 'ゲームを再開',
    it_IT: 'Riavviare il gioco',
    ko_KR: '게임 다시 시작',
    vi_VN: 'Chơi lại',
  },
};

export default msg;
