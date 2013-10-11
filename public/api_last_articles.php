<?php
/* ===================================================================
#    FileName: api_last_articles.php
#      Author: Ruchee
#       Email: my@ruchee.com
#     WebSite: http://www.ruchee.com
#  CreateTime: 2013-10-11 09:15
=================================================================== */

// 网站地址
const SITE_URL = 'http://www.ruchee.com';
// 操作指令
@$action = $_GET['action'];


// -------------------------------


/**
 * @brief         取全部日志目录文件
 * @param  $dir   目标文件夹
 * @return        文件路径数组
 */
function get_all_journals ($dir)
{
    static $result_arr = array();

    if (is_dir($dir)) {
        $d = dir($dir);
        while ($sdir = $d->read()) {
            if ($sdir != '.' && $sdir != '..') {
                if (is_dir($dir.'/'.$sdir)) {
                    get_all_journals($dir.'/'.$sdir);
                } else {
                    $filename = $sdir;
                    $filepath = $dir.'/'.$sdir;
                    if ($filename != 'index.html' && $filename != 'all.html' && $filename != 'qiqi.html') {
                        array_push($result_arr, $filepath);
                    }
                }
            }
        }
    }

    return $result_arr;
}


/**
 * @brief         取全部代码目录和文章目录文件
 * @param  $dir   目标文件夹
 * @return        文件路径数组
 */
function get_all_articles ($dir)
{
    static $result_arr = array();

    if (is_dir($dir)) {
        $d = dir($dir);
        while ($sdir = $d->read()) {
            if ($sdir != '.' && $sdir != '..') {
                if (is_dir($dir.'/'.$sdir)) {
                    get_all_articles($dir.'/'.$sdir);
                } else {
                    $filename = $sdir;
                    $filepath = $dir.'/'.$sdir;
                    if ($filename != 'index.html') {
                        array_push($result_arr, $filepath);
                    }
                }
            }
        }
    }

    return $result_arr;
}

// -------------------------------


// 返回最新的5篇日志
if ($action == 'get_journals') {
    $all_journals = get_all_journals('./journal');
    $path_time = array();
    foreach ($all_journals as $item) {
        $path = $item;
        $item = explode('/', $item);
        $item = explode('.html', $item[4]);
        $time = $item[0];
        $path_time[$path] = strtotime($time);
    }
    arsort($path_time);
    array_splice($path_time, 5);

    $all_journals = $path_time;

    $journals = array();
    foreach ($all_journals as $item => $time) {
        $path = SITE_URL.substr($item, 1);
        $item = explode('/', $item);
        $item = explode('.html', $item[4]);
        $title = "每日心情 {$item[0]}";
        $journals[] = array('path'  => $path, 'title' => $title);
    }
    echo json_encode($journals);
    exit();
}
// 返回最新的5篇文章
elseif ($action == 'get_articles') {
    $all_articles = array_merge(get_all_articles('./code'), get_all_articles('./works'));

    // 组合路径日期数组
    $path_time_arr = array();
    foreach ($all_articles as $item) {
        $content = file_get_contents($item);
        $content = explode('<red>date</red>', $content);
        $content = explode('<hr />', $content[1]);
        $content = substr($content[0], 3);
        $content = explode('、', $content);
        $last_time = $content[count($content)-1];
        if (preg_match('/^\d{4}-\d{2}-\d{2}$/', $last_time)) {
            $path_time_arr[$item] = strtotime($last_time);
        }
    }
    arsort($path_time_arr);  // 按日期从大到小排序
    array_splice($path_time_arr, 5);

    // 取文章标题
    $articles = array();
    foreach ($path_time_arr as $key => $item) {
        $content = file_get_contents($key);
        $content = explode('<title>', $content);
        $content = explode('</title>', $content[1]);
        $title = $content[0];
        $path = SITE_URL.substr($key, 1);
        $articles[] = array('path' => $path, 'title' => $title);
    }
    echo json_encode($articles);
    exit();
}
