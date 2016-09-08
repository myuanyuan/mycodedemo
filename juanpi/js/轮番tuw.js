/**
 * Created by Administrator on 2016/9/8.
 */
let banner_config = {
    item:".banner-img li",
    num: 4,
    time: 30,
};
{
    let i = 0;
    setInterval(function () {
        let li = $(banner_config.item);
        if (i < banner_config.num - 1) {
            li.eq(i).animate({
                opacity: 0,
            }, 400, function () {
                li.eq(i).index = 0
            });
            li.eq(i + 1).animate({
                opacity: 1,
            }, 400, function () {
                li.eq(i).index = 1
            });
            i++;
        } else {
            li.eq(i).animate({
                opacity: 0,
            }, 400, function () {
                li.eq(i).index = 0
            });
            li.eq(0).animate({
                opacity: 1,
            }, 400, function () {
                li.eq(i).index = 1
            });
            i = 0;
        }
    }, banner_config.time)
}
