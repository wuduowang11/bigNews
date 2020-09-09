$(function() {
    $('#zhuce').on('click', function() {
        $('.login-zhu').show();
        $('.login-deng').hide()
    })
    $('#denglu').on('click', function() {
        $('.login-zhu').hide();
        $('.login-deng').show()
    })
    var form = layui.form
    form.verify({
        pass: [
            /^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'
        ],
        password: function(value) {
            var pad = $('.login-zhu [name=password]').val()
            if (pad !== value) {
                return '密码不一致'
            }
        }
    })
})