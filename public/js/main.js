// 显示最新日志和最新文章
$(function() {
    $.get('/api_last_articles.php?action=get_journals', function(data) {
        var html = make_html(data);
        $('#journal').html(html);
    });

    $.get('/api_last_articles.php?action=get_articles', function(data) {
        var html = make_html(data);
        $('#article').html(html);
    });

    // 生成HTML内容
    function make_html (arr) {
        data = eval(arr);
        var html = '';
        for (var i = 0; i < data.length; ++i) {
            html += '<a href="'+data[i].path+'">'+data[i].title+'</a>';
            if (i < data.length-1) {
                html += '<hr />';
            }
        }
        return html;
    }
});
