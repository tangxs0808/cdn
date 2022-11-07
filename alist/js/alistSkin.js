var x = true;

$("html").click(function() {
    if (x) {
        var title = document.title,
            // 头像链接地址
            headimg = "",
            // 博主铭言句子
            motto = "",
            linkname = ["首页", "先森的列表"],
            link = ["/", "https://on.lhht.cc/"],
            code = "";
        // 程序化代码
        code += '<h3>' + title + '</h3>';
        code += '<div >< img src = "' + headimg + '" alt = "[ ' + title + ' ]" / >< /div>';
        code += '<p>' + motto + '</p >';
        code += '< ul >';
        for (vo in linkname) {
            code += '<li> < a href = "' + link[vo] + '" > ' + linkname[vo] + ' < /a></li >';
        }
        code += '< /ul>';

        // 代码写入视觉程序
        $(".header").append(code);
    }
})

// 支持样式代码
$(document).on('click', '.buttons>span:eq(1) svg', function() {
    var $viwe = $(this).attr('viewBox');
    alert($viwe);
})

window.onload = function() {
    setTimeout(function() {
        $("html").click();
        x = false;
    }, 100);
}