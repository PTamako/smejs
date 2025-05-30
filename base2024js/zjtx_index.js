var res_company_zjtx_reg = 0,
  res_company_zjtx_regcert = 0,
  res_company_zjtx_certprovince = 0, 
  res_company_zjtx_certcountry = 0;
$.ajax({
  type: "post",
  url: "https://api.smejs.cn/webapi/Sas/sasSmeData?appkey=appkey&time=202210100122",
  data: {
    sas_type: "company_zjtx_reg",
  },
  async: false,
  success: function (data) {
    res_company_zjtx_reg = data.data.count_total;
  },
});

$.ajax({
  type: "post",
  url: "https://api.smejs.cn/webapi/Sas/sasSmeData?appkey=appkey&time=202210100122",
  data: {
    sas_type: "company_zjtx_regcert",
  },
  async: false,
  success: function (data) {
    res_company_zjtx_regcert = data.data.count_total;
  },
});

$.ajax({
  type: "post",
  url: "https://api.smejs.cn/webapi/Sas/sasSmeData?appkey=appkey&time=202210100122",
  data: {
    sas_type: "company_zjtx_certprovince",
  },
  async: false,
  success: function (data) {
    res_company_zjtx_certprovince = data.data.count_total;
  },
});

$.ajax({
  type: "post",
  url: "https://api.smejs.cn/webapi/Sas/sasSmeData?appkey=appkey&time=202210100122",
  data: {
    sas_type: "company_zjtx_certcountry",
  },
  async: false,
  success: function (data) {
    res_company_zjtx_certcountry = data.data.count_total;
  },
});
$("#zjtx_index_num1").prop("number", 0).animateNumber(
  {
    number: res_company_zjtx_reg,
    easing: "easeInQuad",
  },
  2500
);
$("#zjtx_index_num2").prop("number", 0).animateNumber(
  {
    number: res_company_zjtx_regcert,
    easing: "easeInQuad",
  },
  2500
);
$("#zjtx_index_num3").prop("number", 0).animateNumber(
  {
    number: res_company_zjtx_certprovince,
    easing: "easeInQuad",
  },
  2500
);
$("#zjtx_index_num4").prop("number", 0).animateNumber(
  {
    number: res_company_zjtx_certcountry,
    easing: "easeInQuad",
  },
  2500
);