function bjsj(){
  //获取当前时间戳
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  if(month<10){
    month = "0" + month;
  }
  var riqi = now.getDate();
  if(riqi < 10 ){
    riqi = "0" + riqi;
  }
  var xingqi = now.getDay();
  var hours = now.getHours();
  if(hours < 10){
    hours = "0" + min;
  }
  var min = now.getMinutes();
  if(min < 10){
    min = "0" + min;
  }
  var sec = now.getSeconds();
  if(sec < 10){
    sec = "0" + sec;
  }
  var arr = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
  var nyr = "北京时间 " + year + "年 " + month + "月 " + riqi + "日 " + arr[xingqi];
  var sfm = "" + hours + "：" + min + "：" + sec ;
  var title = min +": " + sec;
  console.log(nyr);
  console.log(sfm);
  var hnyr = document.getElementById("nyr");
  var hsfm = document.getElementById("sfm");
  hsfm.innerText = sfm;
  hnyr.innerText = nyr;
  document.title = title +' 星辰大海，为你而来'

}
window.setInterval("bjsj()",1000)
