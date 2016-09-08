/**
 * Created by Administrator on 2016/9/5.
 */
/*lunfan*/
$(function () {
    $('.bannermain').imgtransition({
        speed:3000,  //图片切换时间
        animate:1000 //图片切换过渡时间
    });
    /*serach*/
    $("#stxt").focus(function () {
        if($("#stxt").val()=="请输入想要找的宝贝"){
            $("#stxt").val("");
        }
    });
    $("#stxt").blur(function () {
        if($("#stxt").val()==""){
            $("#stxt").val("请输入想要找的宝贝");
        }
        $("#stxt").val($("#stxt").val());
    });
    var proList;
    /*获取ajax数据*/

});

