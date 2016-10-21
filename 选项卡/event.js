window.onload = function() {
  var oTab = document.getElementById('tabs');
  var oUl = document.getElementsByTagName('ul')[0];
  var olis = oUl.getElementsByTagName('li');
  var oDivs = oTab.getElementsByTagName('div');

  for (var i = 0,len=olis.length; i < len; i++) {
    olis[i].index = i;
    olis[i].onclick = function() {
      // 首先要清除掉原来的某个已被选中的样式
      for (var n = 0; n < len; n++) {
        olis[n].className = "";
        oDivs[n].className = "hide";
      }
      this.className = "on";
      oDivs[this.index].className = "";
    }
  };
}
