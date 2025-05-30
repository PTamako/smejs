//基地数按城市
var reg_citybasecount = [];
$.ajax({
  type: "post",
  url: "https://api.smejs.cn/webapi/SasBase/sasSmeData?appkey=appkey&time=202210100122",
  data: {
    sas_type: "basedata",
  },
  async: false,
  success: function (data) {
    debugger;
    var list = data;
    for (var i = 0; i < list.data.length; i++) {
      reg_citybasecount.push({
        name: list.data[i].sub_cat_name,
        value: list.data[i].basecount,
      });
    }
  },
});

//入驻企业数按城市
var reg_citycompanycount = [];
$.ajax({
  type: "post",
  url: "https://api.smejs.cn/webapi/SasBase/sasSmeData?appkey=appkey&time=202210100122",
  data: {
    sas_type: "basedata",
  },
  async: false,
  success: function (data) {
    var list = data;
    for (var i = 0; i < list.data.length; i++) {
      reg_citycompanycount.push({
        name: list.data[i].sub_cat_name,
        value: list.data[i].companycount,
      });
    }
  },
});

//就业人数按城市
var reg_cityemployeecount = [];
$.ajax({
  type: "post",
  url: "https://api.smejs.cn/webapi/SasBase/sasSmeData?appkey=appkey&time=202210100122",
  data: {
    sas_type: "basedata",
  },
  async: false,
  success: function (data) {
    var list = data;
    for (var i = 0; i < list.data.length; i++) {
      reg_cityemployeecount.push({
        name: list.data[i].sub_cat_name,
        value: list.data[i].employeecount,
      });
    }
  },
});

// index map
var Mychart = echarts.init(document.getElementById("map"));
var myoption = {
  tooltip: {
    trigger: "item",
    formatter: function (params) {
      //定义一个res变量来保存最终返回的字符结果,并且先把地区名称放到里面
      var res = params.name + "<br />";
      //定义一个变量来保存series数据系列
      var myseries = myoption.series;
      //循环遍历series数据系列
      for (var i = 0; i < myseries.length; i++) {
        //在内部继续循环series[i],从data中判断：当地区名称等于params.name的时候就将当前数据和名称添加到res中供显示
        for (var k = 0; k < myseries[i].data.length; k++) {
          //console.log(myseries[i].data[k].name);
          //如果data数据中的name和地区名称一样
          if (myseries[i].data[k].name == params.name) {
            //将series数据系列每一项中的name和数据系列中当前地区的数据添加到res中
            res +=
              myseries[i].name + ":" + myseries[i].data[k].value + "<br />";
          }
        }
      }
      return res;
    },
  },
  visualMap: {
    show:false,
    min: 0, // 最小值
    max: 20000, // 最大值
    text: ["20000", "0"],
    realtime: false,
    calculable: false,
    inRange: {
      color: ["#fffbf7", "#ffeadb", "#ffd8bc"], // 渐变颜色
    },
  },
  series: [
    {
      type: "map",
      map: "江苏",
      name: "基地数",
      itemStyle: {
        normal: {
          label: {
            show: true,
          },
          color: "green",
        },
      },
      emphasis: {
        itemStyle: {
          areaColor: "#fec69d",
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          shadowBlur: 20,
          borderWidth: 0,
          shadowColor: "rgba(0, 0, 0, 0.3)",
        },
      },
      data: reg_citybasecount,
    },
    {
      type: "map",
      map: "江苏",
      name: "入驻企业数",
      itemStyle: {
        normal: {
          label: {
            show: true,
          },
          color: "green",
        },
      },
      emphasis: {
        itemStyle: {
          areaColor: "#fec69d",
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          shadowBlur: 20,
          borderWidth: 0,
          shadowColor: "rgba(0, 0, 0, 0.3)",
        },
      },
      data: reg_citycompanycount,
    },
    {
      type: "map",
      map: "江苏",
      name: "就业人数",
      itemStyle: {
        normal: {
          label: {
            show: true,
          },
          color: "green",
        },
      },
      emphasis: {
        itemStyle: {
          areaColor: "#fec69d",
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          shadowBlur: 20,
          borderWidth: 0,
          shadowColor: "rgba(0, 0, 0, 0.3)",
        },
      },
      data: reg_cityemployeecount,
    },
  ],
};
Mychart.setOption(myoption);

// showCityDatas(1);

// $("#mapcity").change(function () {
//   showCityDatas($(this).children("option:selected").val());
// });

// function showCityDatas(citycode) {
//   var iRegCompCount = 0,
//     iCertedCompCount = 0;
//   var reg_clustertypeames_right = [];
//   //入库按城市
//   $.ajax({
//     type: "post",
//     url:
//       "/tools/smemap_ajax.ashx?action=getZJTXDataByCity&datatype=zjtx_reg_city&citycode=" +
//       citycode,
//     async: false,
//     success: function (data) {
//       var list = $.parseJSON(data);
//       for (var i = 0; i < list.rows.length; i++) {
//         reg_clustertypeames_right.push({
//           value: list.rows[i].JSON_value,
//           name: list.rows[i].JSON_name,
//         });
//         iRegCompCount += list.rows[i].JSON_value;
//       }
//     },
//   });
//   $("#regcompanytotal").html(iRegCompCount);

//   //认定按城市
//   var certed_citynamevalues_right = [];
//   $.ajax({
//     type: "post",
//     url:
//       "/tools/smemap_ajax.ashx?action=getZJTXDataByCity&datatype=zjtx_certed_city&citycode=" +
//       citycode,
//     async: false,
//     success: function (data) {
//       var list = $.parseJSON(data);
//       for (var i = 0; i < list.rows.length; i++) {
//         certed_citynamevalues_right.push({
//           value: list.rows[i].JSON_value,
//           name: list.rows[i].JSON_name,
//         });
//       }
//     },
//   });

//   //入库按行业类型
//   var reg_hylxnamevalues = [];
//   $.ajax({
//     type: "post",
//     url:
//       "/tools/smemap_ajax.ashx?action=getZJTXDataByConst&datatype=zjtx_reg_hylx&citycode=" +
//       citycode,
//     async: false,
//     success: function (data) {
//       var list = $.parseJSON(data);
//       var otherValue = 0;
//       for (var i = 0; i < list.rows.length; i++) {
//         if (i < 10 && list.rows[i].JSON_name.indexOf("其他") < 0) {
//           reg_hylxnamevalues.push({
//             value: list.rows[i].JSON_value,
//             name: list.rows[i].JSON_name,
//           });
//         } else {
//           otherValue += parseInt(list.rows[i].JSON_value);
//         }
//       }
//       if (otherValue > 0) {
//         reg_hylxnamevalues.push({ value: otherValue, name: "其他合计" });
//       }
//     },
//   });

//   //认定按类型
//   var reg_typenames = [];
//   var reg_typevalues = [];
//   $.ajax({
//     type: "post",
//     url:
//       "/tools/smemap_ajax.ashx?action=getZJTXDataByConst&datatype=zjtx_certed_type&citycode=" +
//       citycode,
//     async: false,
//     success: function (data) {
//       var list = $.parseJSON(data);
//       for (var i = 0; i < list.rows.length; i++) {
//         reg_typenames.push(list.rows[i].JSON_name);
//         reg_typevalues.push(list.rows[i].JSON_value);
//         iCertedCompCount += parseInt(list.rows[i].JSON_value);
//       }
//       $("#certedcompanytotal").html(iCertedCompCount);
//     },
//   });

//   // index datachart2
//   var chart2 = echarts.init(document.getElementById("select"));
//   var option = {
//     color: [
//       "#73a0fb",
//       "#c7d9fd",
//       "#73deb4",
//       "#c7f2e1",
//       "#7685a2",
//       "#ccd0db",
//       "#f7c639",
//       "#fce9af",
//       "#ec7e65",
//       "#f7ccc3",
//       "#83d0ee",
//       "#c1e6f6",
//       "#a185d2",
//     ],
//     tooltip: {
//       trigger: "item",
//       formatter: "{a} <br/>{b}: {c} ({d}%)",
//     },
//     series: [
//       {
//         name: "企业已入驻总数",
//         type: "pie",
//         radius: "55%",
//         itemStyle: {
//           normal: {
//             label: {
//               show: true,
//               formatter: "{b}",
//               textStyle: {
//                 //数值样式
//                 color: "#333",
//               },
//             },
//           },
//         },
//         data: reg_hylxnamevalues,
//       },
//     ],
//   };
//   chart2.setOption(option);

//   // index datachart3
//   var chart3 = echarts.init(document.getElementById("bar"));
//   var option = {
//     color: "#60d1d5",
//     tooltip: {
//       trigger: "axis",
//       axisPointer: {
//         // 坐标轴指示器，坐标轴触发有效
//         type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
//       },
//     },
//     grid: { y2: 120 },
//     xAxis: {
//       type: "category",
//       data: reg_typenames,
//       axisLabel: {
//         interval: 0,
//         rotate: 70,
//       },
//     },
//     yAxis: {
//       type: "value",
//     },
//     series: [
//       {
//         data: reg_typevalues,
//         type: "bar",
//         itemStyle: {
//           normal: {
//             label: {
//               show: true, //开启显示
//               position: "top", //在上方显示
//               textStyle: {
//                 //数值样式
//                 color: "#333",
//               },
//             },
//           },
//         },
//         showBackground: true,
//         backgroundStyle: {
//           color: "rgba(220, 220, 220, 0.8)",
//         },
//       },
//     ],
//   };
//   chart3.setOption(option);

//   // index datachart4
//   var chart4 = echarts.init(document.getElementById("pie"));
//   var myoption2 = {
//     title: {
//       text: "各地区认定企业数/各地区入库培育数",
//       left: "center",
//       bottom: "bottom",
//     },
//     color: [
//       "#73a0fb",
//       "#c7d9fd",
//       "#73deb4",
//       "#c7f2e1",
//       "#7685a2",
//       "#ccd0db",
//       "#f7c639",
//       "#fce9af",
//       "#ec7e65",
//       "#f7ccc3",
//       "#83d0ee",
//       "#c1e6f6",
//       "#a185d2",
//     ],
//     tooltip: {
//       trigger: "item",
//       formatter: function (params) {
//         //定义一个res变量来保存最终返回的字符结果,并且先把地区名称放到里面
//         var res = params.name + "<br />";
//         //定义一个变量来保存series数据系列
//         var myseries = myoption2.series;
//         //循环遍历series数据系列
//         for (var i = 0; i < myseries.length; i++) {
//           //在内部继续循环series[i],从data中判断：当地区名称等于params.name的时候就将当前数据和名称添加到res中供显示
//           for (var k = 0; k < myseries[i].data.length; k++) {
//             //console.log(myseries[i].data[k].name);
//             //如果data数据中的name和地区名称一样
//             if (myseries[i].data[k].name == params.name) {
//               //将series数据系列每一项中的name和数据系列中当前地区的数据添加到res中
//               res +=
//                 myseries[i].name + ":" + myseries[i].data[k].value + "<br />";
//             }
//           }
//         }
//         return res;
//       },
//     },
//     series: [
//       {
//         name: "认定企业总数",
//         type: "pie",
//         radius: "55%",
//         itemStyle: {
//           normal: {
//             label: {
//               show: true,
//               formatter: "{b}",
//               textStyle: {
//                 //数值样式
//                 color: "#333",
//               },
//             },
//           },
//         },
//         data: certed_citynamevalues_right,
//       },
//       {
//         name: "入库培育总数",
//         type: "pie",
//         radius: "55%",
//         itemStyle: {
//           normal: {
//             label: {
//               show: false,
//               formatter: "{b}",
//               textStyle: {
//                 //数值样式
//                 color: "#333",
//               },
//             },
//           },
//         },
//         data: reg_clustertypeames_right,
//       },
//     ],
//   };
//   chart4.setOption(myoption2);
// }
