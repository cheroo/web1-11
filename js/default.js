var num=Math.floor(Math.random()*3);
var ans=parseInt(window.prompt('数あてゲーム。0~2の数字を入力してください!'));

var mes;
if(ans==num){
  mes='あたり';
}else if(ans<num){
    mes='残念、もっと大きい';
  }else if(num<ans){
    mes='残念、もっと小さい';
  }else{
    mes='0~3の数字を入力してください';
  }

document.getElementById('choice').textContent=mes;
