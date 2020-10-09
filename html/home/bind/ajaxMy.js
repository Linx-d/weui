// var url_head = "http://192.168.0.192:8888/api"; //http 本地
// var url_head = "http://127.0.0.1:8888/api"; //http 本地
var url_head = "https://iot.chinautech.com/api"; //服务器



/*---------------------------------------ajax 错误处理 begin--------------------------------------- */

function errorHandler(xhr,errorType, error){
  if(xhr.status==403){
    var url = window.location.href;
    // window.location.href="https://iot.chinautech.com/api/qywx/login?redirectUrl="+url;
  }else{
    window.location.href = "/html/home/empty_page.html?error="+errorType;
  }
 
}


/*---------------------------------------ajax 错误处理 end  --------------------------------------- */



/* ------------------------------------- ajax 统一处理 begin -------------------------------------- */

//  function successHandler(data,success){
//   alert(data.code);
//   alert(JSON.stringify(success ));
//   // success();
// }


/* -------------------------------------- ajax 统一处理 end --------------------------------------- */



/*--- 异步 需要请求数据  本地/服务器  发送AJAX 参数: url; 数据; 成功的函数; 失败的函数 login----*/
  function setAjax(url, content, success, error) {  
    var set_url = url_head + url;
     var successHandler = function (data){
        if(data.code==10004){
          if(url.indexOf("?")>=0){
           url =  url.substring(0,url.indexOf("?"));
          }
          var uri =  url.split("/");
          switch (uri[uri.length-1]) {
            case "listUserByDepartment":
            case "listUserByNoDepartment":
              success(data)
              break;
            default:
              alert("权限不足，无法执行操作。")
              break;
          }
        }else{
          success(data)
        }
     }
    $.ajax({
      url: set_url,
      data: JSON.stringify(content),
      type: "post",
      dataType: "json",
      contentType: "application/json",
      // success:successHandler(data,success),
      success:successHandler,
      error
    });
  }
/*--- 异步 需要请求数据  本地/服务器  发送AJAX 参数: url; 数据; 成功的函数; 失败的函数 end----*/


/*--- 异步 需要请求数据  本地/服务器  发送AJAX 参数: url; 数据; 成功的函数; 失败的函数 login----*/
  function setAjaxArr(url, content, success, error) {  
    var set_url = url_head + url;
    var successHandler = function (data){
        if(data.code==10004){
          if(url.indexOf("?")>=0){
           url =  url.substring(0,url.indexOf("?"));
          }
          var uri =  url.split("/")
          switch (uri[uri.length-1]) {
            case "listUserByDepartment":
            case "listUserByNoDepartment":
              success(data)
              break;
            default:
              alert("权限不足，无法执行操作。")
              break;
          }
        }else{
          success(data)
        }
     }
    $.ajax({
      url: set_url,
      data: content,
      traditional: true,
      type: "post",
      success:successHandler,
      error
    });
  }
/*--- 异步 需要请求数据  本地/服务器  发送AJAX 参数: url; 数据; 成功的函数; 失败的函数 end----*/

/*--- 异步 不需要请求数据  本地/服务器  发送AJAX 参数: url; 成功的函数; 失败的函数 login----*/
  function setAjaxN(url, success, error) {
    var set_url = url_head + url;
    var successHandler = function (data){
        if(data.code==10004){
          if(url.indexOf("?")>=0){
           url =  url.substring(0,url.indexOf("?"));
          }
          var uri =  url.split("/")
          switch (uri[uri.length-1]) {
            case "listUserByDepartment":
            case "listUserByNoDepartment":
              success(data)
              break;
            default:
              alert("权限不足，无法执行操作。")
              break;
          }
        }else{
          success(data)
        }
     }
    $.ajax({
      url: set_url,
      type: "post",
      dataType: "json",
      success:successHandler,
      error
    });
  }
/*--- 异步 不需要请求数据  本地/服务器  发送AJAX 参数: url; 成功的函数; 失败的函数 end----*/

/*--- 异步GET 需要请求数据  本地/服务器  发送AJAX 参数: url; 成功的函数; 失败的函数 login----*/
  function getAjax(url, content, success, error) {
    var set_url = url_head + url;
    var successHandler = function (data){
        if(data.code==10004){
          if(url.indexOf("?")>=0){
           url =  url.substring(0,url.indexOf("?"));
          }
          var uri =  url.split("/")
          switch (uri[uri.length-1]) {
            case "listUserByDepartment":
            case "listUserByNoDepartment":
              success(data)
              break;
            default:
              alert("权限不足，无法执行操作。")
              break;
          }
        }else{
          success(data)
        }
     }
    $.ajax({
      url: set_url,
      data: JSON.stringify(content),
      type: "get",
      dataType: "json",
      contentType: "application/json",
      success:successHandler,
      error
    });
  }
/*--- 异步GET 需要请求数据  本地/服务器  发送AJAX 参数: url; 成功的函数; 失败的函数 end----*/

/*--- 同步GET 需要请求数据  本地/服务器  发送AJAX 参数: url; 成功的函数; 失败的函数 login----*/
  function getAjaxA(url, content, success, error) {
    var set_url = url_head + url;
    var successHandler = function (data){
        if(data.code==10004){
          if(url.indexOf("?")>=0){
           url =  url.substring(0,url.indexOf("?"));
          }
          var uri =  url.split("/")
          switch (uri[uri.length-1]) {
            case "listUserByDepartment":
            case "listUserByNoDepartment":
              success(data)
              break;
            default:
              alert("权限不足，无法执行操作。")
              break;
          }
        }else{
          success(data)
        }
     }
    $.ajax({
      async: false,
      url: set_url,
      data: JSON.stringify(content),
      type: "get",
      dataType: "json",
      contentType: "application/json",
      success:successHandler,
      error
    });
  }
/*--- 同步GET 需要请求数据  本地/服务器  发送AJAX 参数: url; 成功的函数; 失败的函数 end----*/

/*--- 异步GET 不需要请求数据  本地/服务器  发送AJAX 参数: url; 成功的函数; 失败的函数 login----*/
  function getAjaxN(url, success, error) {
    var set_url = url_head + url;
    var successHandler = function (data){
        if(data.code==10004){
          if(url.indexOf("?")>=0){
           url =  url.substring(0,url.indexOf("?"));
          }
          var uri =  url.split("/")
          switch (uri[uri.length-1]) {
            case "listUserByDepartment":
            case "listUserByNoDepartment":
              success(data)
              break;
            default:
              alert("权限不足，无法执行操作。")
              break;
          }
        }else{
          success(data)
        }
     }
    $.ajax({
      url: set_url,
      type: "get",
      dataType: "json",
      success:successHandler,
      error
    });
  }
/*--- 异步GET 不需要请求数据  本地/服务器  发送AJAX 参数: url; 成功的函数; 失败的函数 end----*/

/*--- 同步GET 不需要请求数据  本地/服务器  发送AJAX 参数: url; 成功的函数; 失败的函数 login----*/
  function getAjaxNA(url, success, error) {
    var set_url = url_head + url;
    var successHandler = function (data){
        if(data.code==10004){
          if(url.indexOf("?")>=0){
           url =  url.substring(0,url.indexOf("?"));
          }
          var uri =  url.split("/")
          switch (uri[uri.length-1]) {
            case "listUserByDepartment":
            case "listUserByNoDepartment":
              success(data)
              break;
            default:
              alert("权限不足，无法执行操作。")
              break;
          }
        }else{
          success(data)
        }
     }
    $.ajax({
      async: false,
      url: set_url,
      type: "get",
      dataType: "json",
      success:successHandler,
      error
    });
  }
/*--- 同步GET 不需要请求数据  本地/服务器  发送AJAX 参数: url; 成功的函数; 失败的函数 end----*/
 
/*--- 同步 不需要请求数据  本地/服务器  发送AJAX 参数: url; 成功的函数; 失败的函数 login----*/
  function setAjaxA(url, content, success, error) {   
    var set_url = url_head + url;
    var successHandler = function (data){
        if(data.code==10004){
          if(url.indexOf("?")>=0){
           url =  url.substring(0,url.indexOf("?"));
          }
          var uri =  url.split("/")
          switch (uri[uri.length-1]) {
            case "listUserByDepartment":
            case "listUserByNoDepartment":
              success(data)
              break;
            default:
              alert("权限不足，无法执行操作。")
              break;
          }
        }else{
          success(data)
        }
     }
    $.ajax({
      async: false,
      url: set_url,
      data: JSON.stringify(content),
      type: "post",
      dataType: "json",
      contentType: "application/json",
      success:successHandler,
      error
    });
  }
/*--- 同步 不需要请求数据  本地/服务器  发送AJAX 参数: url; 成功的函数; 失败的函数 end----*/


/*--- 同步 不需要请求数据  本地/服务器  发送AJAX 参数: url; 成功的函数; 失败的函数 login----*/
  function setAjaxNA(url, success, error) {
    var set_url = url_head + url;
    var successHandler = function (data){
        if(data.code==10004){
          if(url.indexOf("?")>=0){
           url =  url.substring(0,url.indexOf("?"));
          }
          var uri =  url.split("/") 
          switch (uri[uri.length-1]) {
            case "listUserByDepartment":
            case "listUserByNoDepartment":
              success(data)
              break;
            default:
              alert("权限不足，无法执行操作。")
              break;
          }
        }else{
          success(data)
        }
     }
    $.ajax({
      async: false,
      url: set_url,
      type: "post",
      dataType: "json",
      success:successHandler,
      error
    });
  }
/*--- 同步 不需要请求数据  本地/服务器  发送AJAX 参数: url; 成功的函数; 失败的函数 end-----*/

/*----- 异步 绑定设备专属Ajax   ----- */
  function setAjaxP(url,formData,success,error){
    var set_url = url_head + url;
    var successHandler = function (data){
      if(data.code==10004){
        if(url.indexOf("?")>=0){
         url =  url.substring(0,url.indexOf("?"));
        }
        var uri =  url.split("/");
        switch (uri[uri.length-1]) {
          case "listUserByDepartment":
          case "listUserByNoDepartment":
            success(data)
            break;
          default:
            alert("权限不足，无法执行操作。")
            break;
        }
      }else{
        success(data)
      }
   }
   $.ajax({
    url: set_url,
    data: formData,
    type: "POST",
    async: false,
    cache: false,
    contentType: false,
    processData: false,
    success:successHandler,
    error
   });
  }

/*--------------获取 地址栏 参数 login--------------------------*/
  //url为空时为调用当前url地址 
  //调用方法为 var patams = getPatams();
  //获取地址栏上的 userName
  //var userName =  patams.userName;
  function getPatams(url) {
      var theRequest = new Object();
      if (!url)
          url = location.href;
      if (url.indexOf("?") !== -1)
      {
          var str = url.substr(url.indexOf("?") + 1) + "&";
          var strs = str.split("&");
          for (var i = 0; i < strs.length - 1; i++)
          {
              var key = strs[i].substring(0, strs[i].indexOf("="));
              var val = strs[i].substring(strs[i].indexOf("=") + 1);
              theRequest[key] = val;
          }
      }
      return theRequest;
  }
/*--------------获取 地址栏 参数 end--------------------------*/

/*--------------获取cookie中的corpId login--------------------------*/
  //name为获取的存储cookie的键
  function getCookie(cname) {
      /*var corpId = document.cookie.replace(/(?:(?:^|.*;\s*)corpId\s*\=\s*([^;]*).*$)|^.*$/, "$1");
      return corpId;*/
      var name = cname + "=";
      var ca = document.cookie.split(';');
      for(var i=0; i<ca.length; i++) 
      {
        var c = ca[i].trim();
        if (c.indexOf(name)==0) return c.substring(name.length,c.length);
      }
      return "";
  }
/*--------------获取cookie中的corpId end--------------------------*/


/*--------------清除所有cookie函数 login--------------------------*/
  //清除所有cookie函数
  function clearAllCookie() {
      var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
      if (keys) {
          for (var i = keys.length; i--;)
              document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
      }
  }
/*--------------清除所有cookie函数 end--------------------------*/

/*--------------清除指定cookie函数 end--------------------------*/
  function clearCookie(name) {
      var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
      if (keys) {
          for (var i = keys.length; i--;)
            if(keys[i] === name) {
              document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString();
            }else {
              return;
            }
      }
  }
/*--------------清除指定cookie函数 end--------------------------*/

/*--------------文本框验证封装函数 login--------------------------*/
  // 第一个参数是input的 id
  // 第二个参数 正则表达式对象 RegExp
  // 第三个参数 是提示的位置的id
  function addCheck(element, reg, tip) {
    var element = $("#"+ element);
    element.on('input', function() {
      //验证
      if(!reg.test(this.value)) {
        $('#'+tip).addClass("weui-cell_warn");
      }else {
        $('#'+tip).removeClass("weui-cell_warn");
      }
    });
  }
  
  function addCheckChange(element, reg, tip) {
    var element = $("#"+ element);
    element.on('click', function() {
      //验证
      if(!reg.test(this.value)) {
        $('#'+tip).addClass("weui-cell_warn");
      }else {
        $('#'+tip).removeClass("weui-cell_warn");
      }
    });
  }

  function addCheckUp(element, reg, tip) {
    var element = $("#"+ element);
    element.on('input', function() {
      //验证
      if($(this)[0].value !== '') {
        if(!reg.test(this.value)) {
          $('#'+tip).addClass("weui-cell_warn");
        }else {
          $('#'+tip).removeClass("weui-cell_warn");
        }
      }else {
        $('#'+tip).removeClass("weui-cell_warn");
      }
    });
  }

  function addCheckUpL(element, reg, tip, len) {
    var element = $("#"+ element);
    element.on('input', function() {
      //验证
      if($(this)[0].value !== '') {
        if(!reg.test($(this).val().slice(0, len))) {
          $('#'+tip).addClass("weui-cell_warn");
          if($(this).val().length>=len) {
            $(this).val($(this).val().slice(0, len));
          }
        }else {
          $('#'+tip).removeClass("weui-cell_warn");
        }
      }else {
        $('#'+tip).removeClass("weui-cell_warn");
      }
    });
  }

  function addCheckAddr(element, reg, tip) {
    var element = $("#"+ element);
    element.on('blur', function() {
      //验证
      if($(this)[0].value !== '') {
        if(!reg.test(this.value)) {
          $('#'+tip).addClass("weui-cell_warn");
        }
      }else {
        $('#'+tip).removeClass("weui-cell_warn");
      }
    });
  }

  function addCheckAddrUp(element, reg, tip) {
    var element = $("#"+ element);
    element.on('blur', function() {
      //验证
      if($(this)[0].value !== '') {
        if(!reg.test(this.value)) {
          $('#'+tip).addClass("weui-cell_warn");
        }
      }else {
        $('#'+tip).removeClass("weui-cell_warn");
      }
    });

  }
  


  //输入框验证
  function addToast(inputTs, captTs) {
    if($(inputTs).val() === '') {
      $('#'+captTs).addClass('weui-cell_warn');
    }
  };
/*--------------文本框验证封装函数 end--------------------------*/

/*--------------length login--------------------------*/
  function captLen(id, len) {
      $("#" + id).on('input', function(){
          if($(this).val().length>=len) {
            $(this).val($(this).val().slice(0, len));
          }
      });
  }
/*--------------length end--------------------------*/

/*--------------日期格式化 login--------------------------*/
  //日期格式化
  function formatDate(now) { 
    var year=now.getFullYear();  //取得4位数的年份
    var month=now.getMonth()+1;  //取得日期中的月份，其中0表示1月，11表示12月
    var date=now.getDate();      //返回日期月份中的天数（1到31）
    var hour=now.getHours();     //返回日期中的小时数（0到23）
    var minute=now.getMinutes(); //返回日期中的分钟数（0到59）
    var second=now.getSeconds(); //返回日期中的秒数（0到59）

    function addRero(time, number) {
      if (time<number) {
        time = '0'+time;
      }
      return time;
    }
    var arrTime = [month, date, hour, minute, second];
    for(var i=0, len=arrTime.length; i<len; i++) {
      arrTime[i] = addRero(arrTime[i], 10);
    }
    month = arrTime[0];
    date = arrTime[1];
    hour = arrTime[2];
    minute = arrTime[3];
    second = arrTime[4];
  return year+"-"+month+"-"+date+" "+hour+":"+minute+":"+second; 
  }
/*--------------日期格式化 end--------------------------*/

/*--------------插入元素 login--------------------------*/
  /**
   * 
   * @param {*} parentId 父元素id 
   * @param {*} node 节点
   */
  function appendNode(parentId, node) {
      parentId.append(node);
  }
/*--------------插入元素 end--------------------------*/

/*--------------复选框 login--------------------------*/
  //trigger 触发事件元素
  //ele 需要被选择的元素
  function checkAll(trigger, ele) {
      trigger.on('click', function() {
          ele.each(function(){
              this.checked = !this.checked;
          });
      }); 
  }
/*--------------复选框 end--------------------------*/

/*--------------数组查异 login--------------------------*/
//数组二相对于数组一所新增的数据
  function add_msg(a,b){
      return a.filter(function(i){
          return b.indexOf(i) === -1
      })
  }
/*--------------数组查异 end--------------------------*/

/*--------------toast login--------------------------*/
  function toastMsg(txt){
      var $toast = $('#toast');
      if ($toast.css('display') != 'none') return;
      $('#toast p').text(txt);
      $toast.fadeIn(100);
      var tmt = setTimeout(function () {
          $toast.fadeOut(100);
      }, 1500);
  }
/*--------------toast end--------------------------*/

/*--------------onBlur login--------------------------*/
  function onBlur(id){
      $('#' + id + ' input').blur();
  }
/*--------------onBlur end--------------------------*/

/*---------------------errorMsg login------------------------*/
  function errorMsg() {
    $('.weui-icon-warn').each(function(){
      $(this).on('click', function(){
        var txt = $(this).parent().parent('.weui-cell').find('label').text();
        txt = "请填写正确的" + txt;
        $('#toastMsg').text(txt);
        $('#Dialog_no').css("display", "block");
      });
    });
  }
/*---------------------errorMsg end------------------------*/

/*---------------------数组去重 login------------------------*/
  function unique (arr) {
    return Array.from(new Set(arr));
  }
/*---------------------数组去重 end------------------------*/


/*---------------------back login------------------------*/
  function back() {
    var hiddenProperty = 'hidden' in document ? 'hidden' :    
        'webkitHidden' in document ? 'webkitHidden' :    
        'mozHidden' in document ? 'mozHidden' :    
        null;
    var visibilityChangeEvent = hiddenProperty.replace(/hidden/i, 'visibilitychange');
    var onVisibilityChange = function(){
        if (document[hiddenProperty]) {    
            //store.remove('obj');
        }else{
            store.remove('obj');
        }
    }
    document.addEventListener(visibilityChangeEvent, onVisibilityChange);
  }
/*---------------------back end------------------------*/

/*---------------------stop 事件冒泡 end------------------------*/
function bubbles(e){
  var ev = e || window.event;
  if(ev && ev.stopPropagation) {
    //非IE浏览器
    ev.stopPropagation();
  } else {
    //IE浏览器(IE11以下)
    ev.cancelBubble = true;
  }
}
/*---------------------stop 事件冒泡 end------------------------*/




/*----------------登录校验 login--------------------------*/ 
  function captLogin() {
    var auth_token = document.cookie.replace(/(?:(?:^|.*;\s*)auth_token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    var url = window.location.href; //当前连接地址
    if (auth_token == null||auth_token===''){
        var params = getPatams();
        auth_token = params.auth_token;
        if(auth_token != null&&auth_token!==''){
            clearAllCookie();
            document.cookie="auth_token="+auth_token+";path=/";
        }else {
            $('#load_hd').append($(`
                <div id="operat_load">
                    <div class="weui-loadmore">
                        <i class="weui-loading"></i>
                        <span class="weui-loadmore__tips">正在加载</span>
                    </div>
                </div>
            `));
            window.location.href="https://iot.chinautech.com/api/qywx/login?redirectUrl="+url;
            return;
        }
    }
    $.ajaxSettings = $.extend($.ajaxSettings, {
      error: errorHandler,
      async: false
   });
  }
/*----------------登录校验 end--------------------------*/




/*--------------------获取企业微信jssdkConfig begin---------------------- */
/**
 * @description 获取jssdk 待完善
 * @author libo
 */
function getJSSDK(){
  var url = window.location.href; //当前连接地址
  url = url.replace(/[&]/g, '@');
    setAjaxNA("/qywx/getJSSDK?url="+url, function(data) {
        //通过config接口注入权限验证配置
        var agentConfig = data.data.agentConfig;
        var config = data.data.config;
        wx.config({
               beta: true,// 必须这么写，否则wx.invoke调用形式的jsapi会有问题
               debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
               appId: config.authCorpId, // 必填，企业微信的corpID
               timestamp: config.timestamp, // 必填，生成签名的时间戳
               nonceStr: config.nonceStr, // 必填，生成签名的随机串
               signature: config.signature,// 必填，签名，见 附录-JS-SDK使用权限签名算法
               jsApiList: ['agentConfig',  'scanQRCode'] // 必填，需要使用的JS接口列表，凡是要调用的接口都需要传进来
           });

        wx.ready(function(){
            //通过agentConfig注入应用的权限
            wx.agentConfig ({
                corpid: agentConfig.authCorpId, // 必填，企业微信的corpid，必须与当前登录的企业一致
                agentid: agentConfig.agentId, // 必填，企业微信的应用id （e.g. 1000247）
                timestamp: agentConfig.timestamp, // 必填，生成签名的时间戳
                nonceStr: agentConfig.nonceStr, // 必填，生成签名的随机串
                signature: agentConfig.signature,// 必填，签名，见附录1
                jsApiList: [
                    'getCurExternalContact',
                    'openUserProfile',
                    'scanQRCode',
                ],
                success: function(res) {
                    // wx.invoke('getCurExternalContact', {
                    // }, function(res){
                    //     // 调用成功
                    // });
                    $('#operat_load').remove();
                },
                fail: function(res) {
                    if(res.errMsg.indexOf('function not exist') > -1){
                        alert('版本过低请升级')
                        window.location.href = "./empty_page.html";
                    }
                    alert('通过agentConfig注入应用失败' + JSON.stringify(res));
                    window.location.href = "./empty_page.html";
                }
            });

            /*----------点击按钮 绑定用户-----------*/
            $("#scanIt").on('click', function() {
                //企业微信扫一扫
                wx.scanQRCode({
                    desc: 'scanQRCode desc',
                    needResult: 1, // 默认为0，扫描结果由企业微信处理，1则直接返回扫描结果，
                    scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是一维码，默认二者都有
                    success: function(res) {
                        // 回调
                        number = res.resultStr;
                        //判断进入绑定页面还是解绑页面，以及识别错误二维码提示
                        //发送生成二维码的ajax请求获取 code
                        //24002: 设备已绑定; 0: 设备未绑定; 500: 二维码错误
                        //扫码绑定
                        setAjaxNA("/qywx/generateQRCode?serial="+number, function(data){
                            var code = data.code;
                            if(code === 24004) {
                                var imei = data.data.wxUserId;
                                var id = data.data.id;
                                if(id===null||id===undefined) {
                                    $('#errorQrcode .weui-dialog__bd').text('当前用户数据异常');
                                    $('#errorQrcode').css("display", "block");
                                }else {
                                    window.location.href = "./html/home/unitie_bind.html?imei="+imei+"&id="+id;
                                }
                            }else if(code === 0) {
                                window.location.href = "./html/home/flex_bind.html?number="+number;
                            }else {
                                var qrMsg = data.msg;
                                $('#errorQrcode').css("display", "block");
                            }
                        }, function(textStatus,XMLHttpRequest){
                            errorHandler('QRCode',XMLHttpRequest)
                        });
                    },
                    error: function(res) {
                        if (res.errMsg.indexOf('function_not_exist') > 0) {
                          errorHandler('版本过低请升级')
                        }
                    }
                });
            });
        });
    wx.error(function(res){
        // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
        errorHandler('res config信息验证失败' +JSON.stringify(res))
    });
    });   
}

/*--------------------获取企业微信jssdkConfig end---------------------- */
