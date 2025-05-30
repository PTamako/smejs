function GetActivity(type) {

  var dTime = $("#dateTime").html() + '-01';

  //var dTime = getdate(dTime);
  if (type == 1) {
      var now = new Date(dTime),
          y = now.getFullYear(),
          m = now.getMonth() + 2,
          d = now.getDate();

      if (m == 13) {
          y = y + 1;
          m = 1;
      }
      dTime = y + '-' + (m < 10 ? "0" + m : m) + '-' + (d < 10 ? "0" + d : d);

      var showTime = y + '-' + (m < 10 ? "0" + m : m);
      $("#dateTime").html(showTime);

  } else if (type == 2) {
      var now = new Date(),
          y = now.getFullYear(),
          m = now.getMonth() + 1,
          d = now.getDate();
      dTime = y + '-' + (m < 10 ? "0" + m : m) + '-' + (d < 10 ? "0" + d : d);
      var showTime = y + '-' + (m < 10 ? "0" + m : m);
      $("#dateTime").html(showTime);
  } else {
      var now = new Date(dTime),
          y = now.getFullYear(),
          m = now.getMonth(),
          d = now.getDate();

      if (m == 0) {
          y = y - 1;
          m = 12;
      }
      dTime = y + '-' + (m < 10 ? "0" + m : m) + '-' + (d < 10 ? "0" + d : d);

      var showTime = y + '-' + (m < 10 ? "0" + m : m);
      $("#dateTime").html(showTime);
  }

  $.post(
      "/web/Province/Home/GetActivity", { dtime: dTime },
      function(data) {
          $("#lstActivity").html(data);
      }
  );


}

function getdate(dTime) {
  var now = new Date(dTime),
      y = now.getFullYear(),
      m = now.getMonth() + 1,
      d = now.getDate();
  return y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d) + " " + now.toTimeString().substr(0, 8);
}

function IsMsgShow() {
  var display = $('#zone_center').css('display');
  if (display == 'none') {
      $("#zone_center").show();
  } else {
      $("#zone_center").hide();
  }
}