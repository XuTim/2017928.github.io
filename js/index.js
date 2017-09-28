/**
 * Created by Administrator on 2017/9/27.
 */
var curque;
var timui;
var tindex;
var showwin=0;
var queObj = queData.concat();
var mypath = '', allC = 0, allW = 0, allL = 0;

document.getElementById("page0").addEventListener( "touchstart", function( e ){
    touchY = e.touches[0].pageY;
    touchX = e.touches[0].pageX;
}, false );
document.getElementById("page0").addEventListener( "touchmove", function( e ){
    e.preventDefault();
    touchEY = e.touches[0].pageY;
    touchEX = e.touches[0].pageX;
}, false );
document.getElementById("page0").addEventListener( "touchend", function( e ){
    if( touchEY - touchY < -100 ){
        showPage1();
    }
}, false );
document.getElementById("page0").addEventListener( "mousedown", function( e ){
    touchY = e.pageY;
    touchX = e.pageX;
}, false );
document.getElementById("page0").addEventListener( "mousemove", function( e ){
    e.preventDefault();
    touchEY = e.pageY;
    touchEX = e.pageX;
}, false );
document.getElementById("page0").addEventListener( "mouseup", function( e ){
    if( touchEY - touchY < -100 ){
        showPage1();
    }
}, false );

function showPage1(){
    jQuery('#page0').hide();
    jQuery('#page1').show();
    let tiStr = '';
    for(let ti of tiData){
        tiStr += `<div class="curti" i="${ti['题号']}" onclick="showcutti(this)"><p class="tip1">召开时间：${ti['时间']}</p><p class="tip2">${ti['题干']}</p><img src="${ti['图片']}" width="83.5%"/></div>`;
    }
    jQuery('.page1Main').html(`${tiStr}<br><br><br><br><br><br>`);
}

function showcutti(obj){
    jQuery('.p1p5d2').hide();
    jQuery('.p1p5d1').show();
    jQuery('.p1p5').show();
    let tiObj = tiData[jQuery(obj).attr('i')*1-1];
    jQuery('.p1p5d1t').html(tiObj['题干']);
    let objStr = `<img src="${tiObj['图片']}" width="98%"/><p class="_bb mp1">主要内容</p><p class="mp2">${tiObj['主要']}</p><p class="_bb mp1">重要内容</p><p class="mp2">${tiObj['重要']}</p>`
    jQuery('.p1p5d1m').html(objStr).scrollTop(0).attr('i',(jQuery(obj).attr('i')*1-1));
}
function turnTimu(){
    let tiindex = jQuery('.p1p5d1m').attr('i');
    //需要实现答对的题目不再出现
    if(mypath.includes(tiindex)) {
        alert(`已答过此题。总答题数${allC}，总答对数${allW}，总答错数${allL}`);
        return;
    }
    jQuery('.p1p5d1').hide();
    jQuery('.p1p5d2').show();
    showTimu(tiindex);
    jQuery('.p1p5d2m').scrollTop(0);
}
function returnTimu(){
    jQuery('.p1p5d2').hide();
    jQuery('.p1p5d1').show();
    jQuery('.p1p5d1m').scrollTop(0);
}
/**
 * 显示所选择的题目
 * @param index
 */
function showTimu(index){
    tindex = index;
    curque = queObj[tindex];
    timui = index;
    var quetype=0;
    var strHtml="";
    var strHtml1="";
    strHtml+='<div class="tit-box">';
    if(curque["题型"]!=undefined){
        jQuery('.p5d2ts').html(tindex*1+1).css({'font-size': '1.2rem','width':'30px'});
        if(curque["题型"]=="判断题"||curque["题型"]=="单选题"){
            quetype=1;
        }else{
            quetype=0;
        }
    }
    if(curque["题干"]!=undefined){
        strHtml+='<div id="queTit" class="que-tit">'+curque["题干"]+'<br><br></div>';
    }
    strHtml+='</div>';
    strHtml1+='<ul class="option-list">';
    if(curque["A"]!=undefined){
        strHtml1+='<li dataval="A" class="" onclick="'+(quetype==0?"chooseOp(this)":"chooseDx(this)")+'"><span>A. </span><span>'+curque["A"]+'</span></li>';
    }
    if(curque["B"]!=undefined){
        strHtml1+='<li dataval="B" class="" onclick="'+(quetype==0?"chooseOp(this)":"chooseDx(this)")+'"><span>B. </span><span>'+curque["B"]+'</span></li>';
    }
    if(curque["C"]!=undefined){
        strHtml1+='<li dataval="C" class="" onclick="'+(quetype==0?"chooseOp(this)":"chooseDx(this)")+'"><span>C. </span><span>'+curque["C"]+'</span></li>';
    }
    if(curque["D"]!=undefined){
        strHtml1+='<li dataval="D" class="" onclick="'+(quetype==0?"chooseOp(this)":"chooseDx(this)")+'"><span>D. </span><span>'+curque["D"]+'</span></li>';
    }
    strHtml1+='</ul>';
    jQuery(".p1p5d2m").html(strHtml+strHtml1);   
}
function chooseDx(obj){
    jQuery(".option-list li").removeClass("on");
    jQuery(obj).addClass("on");
}
function chooseOp(obj){
    if(jQuery(obj).hasClass("on")){
        jQuery(obj).removeClass("on");
    }else{
        jQuery(obj).addClass("on");
    }
}
/**
 * 答案提交
 */
function submitResult(){
    var result="";
    jQuery.each(jQuery(".option-list li"), function(si, sn){
        if(jQuery(sn).hasClass("on")){
            result+=jQuery(sn).attr("dataval");
        }
    });
    if(result==""){
        return;
    }else if(result==curque["答案"]){
        console.log('答对了');
        showWin();
    }else{
        console.log('答错了');
        showLose();
    }
    jQuery(".p1p5").hide();
    mypath += `，${timui}`;
    allC += 1;
    allC >= 10 && (allW >= 8 ? jQuery('.p1p6').show() : jQuery('.p1p7').show());
}

function showWin(){
    allW += 1;
    jQuery(".losetips").hide();
    jQuery(".wintips").show();
    setTimeout(function () {jQuery(".wintips").hide();}, 3000);
}

function showLose(){
    allL += 1;
    jQuery(".wintips").hide();
    jQuery(".losetips").show();
    setTimeout(function () {jQuery(".losetips").hide();}, 3000);
}
/**
 * 显示抽奖按钮
 */
function showcjbtn(){
    jQuery('.p1p6').hide();
    jQuery('.p1p3').show();
}
/**
 * 重新游戏
 */
function regame(){
    mypath = '', allC = 0, allW = 0, allL = 0;
    jQuery('.p1p7').hide();
}
/**
 * 通关界面
 */
function allWin(){
    jQuery(".page1title,.page1main,.page1btnb,.page1btnp,.page1timumain").hide();
    jQuery(".page1timu").children().hide();
    jQuery(".page1timu,.page1tongguan").show();
}
