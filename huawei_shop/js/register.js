var register = (function(){

    return {
        init: function(ele) {
            // 获取form表单
            this.$ele = document.querySelector(ele);
            // 获取提交按钮
            this.$loginBtn = this.$ele['login-btn'];
            this.$usernameInp =   this.$ele['username'];
            this.$passwordInp =   this.$ele['password'];
            this.event();
        },
        event: function() {
            var _this = this;
            // 注册按钮
            this.$loginBtn.onclick = function() {
                // 发送ajax，验证用户名和密码
                	if(_this.$usernameInp.value==''){
                		alert('您的账号设置格式错误,请重新注册');
                	}
                	else{
                		var params = {
                    method: 'post',
                    data: {
                        username: _this.$usernameInp.value,
                        password: _this.$passwordInp.value
                    },
                    success: function(data) {
                        data = JSON.parse(data);
                        _this.loginSuccess(data);
                    }
                   }
                
                sendAjax('http://localhost:8080/huawei_shop/php/register.php', params);
                	}
            }
            this.$usernameInp.onchange = function(){
                var params = {
                    data: {
                        username: _this.$usernameInp.value
                    },
                    success: function(data) {
                        data = JSON.parse(data);
                        _this.checkName(data);
                    }
                }
                sendAjax('http://localhost:8080/huawei_shop/php/check_username.php', params);
            }
        },
        checkName: function(data) {
            if(data.code == 200) {
                // 用户名称不存在
            } else {
                // 用户名称存在
            }
        },
        loginSuccess: function(data) {
            if(data.code == 200) {              
                location.href = 'login.html';
            } else {
                alert(data.msg);
            }
        }
    }

}())