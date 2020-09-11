$(function() {
    getUser()

    function getUser() {
        $.ajax({
            method: 'get',
            url: '/my/userinfo',
            headers: {
                Authorization: localStorage.getItem('token') || ''
            },
            success: function(res) {
                if (res.status !== 0) {
                    return layui.layer.msg('获取用户信息失败')
                }
                getUserName(res.data)
            }
        })
    }

    function getUserName(user) {
        var username = user.nickname || user.username
        $('.uname').html('欢迎' + username)
        if (user.user_pic !== null) {
            $('.img').attr('scr', user.user_pic).show()
            $('.tou').hide()

        } else {
            $('.img').hide()
            var first = username[0].toUpperCase()
            $('.tou')
                .html(first)
                .show()
        }
    }
    $('.logOut').on('click', function() {
        console.log(111);

        layui.layer.confirm('确点退出登录', { icon: 3, title: '提示' }, function(index) {
            localStorage.removeItem('token')
            location.href = '/login.html'
            layer.close(index);
        });
    })

})