/*----------------登录校验 login--------------------------*/ 
function captLogin() {
    var auth_token = document.cookie.replace(/(?:(?:^|.*;\s*)auth_token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    var url = window.location.href; //当前连接地址
    console.log(auth_token,"auth_token")
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
            window.location.href="http://iot.chinautech.com/api/qywx/login?redirectUrl="+url;
            return;
        }
    }
    $.ajaxSettings = $.extend($.ajaxSettings, {
      error: errorHandler,
      async: false
   });
  }
/*----------------登录校验 end--------------------------*/