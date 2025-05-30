$(function () {
  var t = setTimeout(time, 20);
});
function checkTime(v) {
  if (v < 10) {
    v = "0" + v;
  }
  return v;
}
function time() {
  var t = null;
  clearTimeout(t);
  var weekDays = [
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六",
  ];
  var dt = new Date();
  var y = dt.getFullYear();
  var mt = dt.getMonth() + 1;
  var day = dt.getDate();
  var h = this.checkTime(dt.getHours());
  var m = this.checkTime(dt.getMinutes());
  var s = this.checkTime(dt.getSeconds());
  var weekDay = weekDays[dt.getDay()];
  $("#solarname").html(getjq(y, mt, day));
  $("#indextime").html(
    y +
      "年&nbsp;" +
      mt +
      "月" +
      day +
      "日&nbsp;" +
      weekDay +
      "&emsp;" +
      h +
      ":" +
      m +
      ":" +
      s
  );
  t = setTimeout(this.time, 20); //设定定时器，循环运行
}
function getjq(yyyy, mm, dd) {
  mm = mm - 1;
  var sTermInfo = new Array(
    0,
    21208,
    42467,
    63836,
    85337,
    107014,
    128867,
    150921,
    173149,
    195551,
    218072,
    240693,
    263343,
    285989,
    308563,
    331033,
    353350,
    375494,
    397447,
    419210,
    440795,
    462224,
    483532,
    504758
  );
  var solarTerm = new Array(
    "小寒",
    "大寒",
    "立春",
    "雨水",
    "惊蛰",
    "春分",
    "清明",
    "谷雨",
    "立夏",
    "小满",
    "芒种",
    "夏至",
    "小暑",
    "大暑",
    "立秋",
    "处暑",
    "白露",
    "秋分",
    "寒露",
    "霜降",
    "立冬",
    "小雪",
    "大雪",
    "冬至"
  );
  var solarTerms = "";
  while (solarTerms == "") {
    var tmp1 = new Date(
      31556925974.7 * (yyyy - 1900) +
        sTermInfo[mm * 2 + 1] * 60000 +
        Date.UTC(1900, 0, 6, 2, 5)
    );
    var tmp2 = tmp1.getUTCDate();
    if (tmp2 == dd) solarTerms = solarTerm[mm * 2 + 1];
    tmp1 = new Date(
      31556925974.7 * (yyyy - 1900) +
        sTermInfo[mm * 2] * 60000 +
        Date.UTC(1900, 0, 6, 2, 5)
    );
    tmp2 = tmp1.getUTCDate();
    if (tmp2 == dd) solarTerms = solarTerm[mm * 2];
    if (dd > 1) {
      dd = dd - 1;
    } else {
      mm = mm - 1;
      if (mm < 0) {
        yyyy = yyyy - 1;
        mm = 11;
      }
      dd = 31;
    }
  }
  return solarTerms;
}
