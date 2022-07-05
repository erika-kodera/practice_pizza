// 所持金の入力
let budget = prompt('所持金を数字で入力してください');
budget = parseFloat(budget);
// お腹の空き具合に応じて条件分岐
let isHungry = confirm('お腹は空いていますか？');
// 所持金で条件分岐する
if (budget >= 1500 && isHungry) {
alert('ピザを注文しました');
//所持金が1500円未満の処理
} else if (budget >= 500) {
  alert('ポテトを注文しました');
} else {
  alert('節約、節約...');
}
