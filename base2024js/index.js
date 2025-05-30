$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    $(".comTop").addClass("ny");
  } else {
    $(".comTop").removeClass("ny");
  }
});
var swiper = new Swiper("#zc", {
  autoplay: true,
  disableOnInteraction: false,
  loop: true, // 循环模式选项
  speed: 500,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var mySwiper = new Swiper("#banner", {
  autoplay: { delay: 5000 },
  effect: "fade",
  disableOnInteraction: false,
  loop: true, // 循环模式选项
  speed: 2000,
});

var swiper = new Swiper(".mySwiper", {
  autoplay: { delay: 5000 },
  speed: 5000,
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 4,
  loop: true,
  loopFillGroupWithBlank: true,
});
var mySwiper = new Swiper("#map1", {
  direction: "vertical",
  slidesPerView: 4,
  loop: true,
  autoplay: true,
  spaceBetween: 25,
});
var mySwiper = new Swiper("#map2", {
  direction: "vertical",
  slidesPerView: 4,
  loop: true,
  autoplay: true,
  spaceBetween: 25,
});
var mySwiper = new Swiper("#fw", {
  slidesPerView: 2,
  slidesPerGroup: 2,
  grid: {
    fill: "column",
    rows: 2,
  },
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: true,
});
var swiper = new Swiper("#cloud", {
  autoplay: { delay: 5000 },
  speed: 5000,
  slidesPerView: 3,
  spaceBetween: 25,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
//map
var myoption = {
  geo: {
    map: "江苏",
    top: "9%",
    zoom: 1.2, //地图缩放比例
    //地图省份的样式；包括板块颜色和边框颜色
    itemStyle: {
      normal: { areaColor: "#dcf5ff", borderColor: "#68dff5" },
      emphasis: {
        areaColor: "#599ff9",
        borderColor: "#68dff5",
        shadowBlur: 0,
      },
    },
    //省份字体样式；包括是否展示，字体大小和颜色
    label: {
      normal: {
        show: true,
        fontSize: "12",
        color: "#666",
      },
    },
  },
};
let myChart = echarts.init(document.getElementById("map"));
myChart.setOption(myoption);
window.addEventListener("resize", function () {
  myChart.resize();
});
myChart.on("click", function (params) {
  switch (params.name) {
    case "南京市":
      var url = "./ssx_nj.aspx?city=" + params.name;
      window.location.href = url;
      break;
    case "无锡市":
      var url = "./ssx_wx.aspx?city=" + params.name;
      window.location.href = url;
      break;
    case "徐州市":
      var url = "./ssx_xz.aspx?city=" + params.name;
      window.location.href = url;
      break;
    case "常州市":
      var url = "./ssx_cz.aspx?city=" + params.name;
      window.location.href = url;
      break;
    case "苏州市":
      var url = "./ssx_sz.aspx?city=" + params.name;
      window.location.href = url;
      break;
    case "南通市":
      var url = "./ssx_nt.aspx?city=" + params.name;
      window.location.href = url;
      break;
    case "连云港市":
      var url = "./ssx_lyg.aspx?city=" + params.name;
      window.location.href = url;
      break;
    case "淮安市":
      var url = "./ssx_ha.aspx?city=" + params.name;
      window.location.href = url;
      break;
    case "盐城市":
      var url = "./ssx_yc.aspx?city=" + params.name;
      window.location.href = url;
      break;
    case "扬州市":
      var url = "./ssx_yz.aspx?city=" + params.name;
      window.location.href = url;
      break;
    case "镇江市":
      var url = "./ssx_zj.aspx?city=" + params.name;
      window.location.href = url;
      break;
    case "泰州市":
      var url = "./ssx_tz.aspx?city=" + params.name;
      window.location.href = url;
      break;
    case "宿迁市":
      var url = "./ssx_sq.aspx?city=" + params.name;
      window.location.href = url;
      break;
    default:
      var url = "./ssx_index.aspx?city=江苏省";
      window.location.href = url;
      break;
  }
});
