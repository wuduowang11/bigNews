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
    var layer = layui.layer
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
    $('#form_zhu').on('submit', function(e) {
        e.preventDefault()
        $.post('/api/reguser', {
            username: $('#form_zhu [name=username]').val(),
            password: $('#form_zhu [name=password]').val()
        }, function(res) {
            if (res.status !== 0) {
                return
                layer.msg(res.message)

            }
            layer.msg(res.message)
            $('#denglu').click()

        })
    })
    $('#form_deng').submit(function(e) {
        e.preventDefault()
        $.ajax({
            url: '/api/login',
            method: 'post',
            data: $(this).serialize(),
            success: function(res) {
                if (res.status !== 0) {
                    return layer.msg(res.message)
                }
                location.href = '/index.html'
                localStorage.setItem('token', res.token)
            }

        })
    })
})