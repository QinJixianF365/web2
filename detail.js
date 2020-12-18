//顶部悬浮
window.onload = function(){
	var cover = document.getElementsByClassName('header')[0];
	window.onscroll = function(){
		var st = document.documentElement.scrollTop || document.body.scrollTop;
		if(st>180){
			cover.style.position = 'fixed';
			cover.style.zIndex = 1000;
		}else{
			cover.style.position = 'static';
		}
	}
}

// 图片放大镜
var pic_div = document.getElementById('full-pic');//拿到整个大的div
var normal_pic = pic_div.getElementsByTagName('img')[0];//拿到div中的图片
var span_move = document.getElementById('pic-span');//拿到显示当前图片位置的span
var big_div = document.getElementById('big-pic');//拿到右边放置放大图片的div
var pic_move = big_div.getElementsByTagName('img')[0];//拿到右侧放大的图片本身
//当鼠标在最外层div中滑动的时候触发事件，因为要获取当前的鼠标位置所以要拿到事件源evt
pic_div.onmousemove = function (evt) {
    // 获取事件
    var e = evt || window.event;
	// 获取大图和小图之间的倍数     
    var bigSize = pic_move.offsetHeight;
    var littleSize = normal_pic.offsetHeight;
    var n = bigSize / littleSize;
	//获取pic对于页面的绝对位置
    var pic_x = normal_pic.getBoundingClientRect().left;
    var pic_y = normal_pic.getBoundingClientRect().top + document.documentElement.scrollTop;
	// 获取鼠标相对full-pic的位置
    var mouse_x = e.pageX - pic_x;
    var mouse_y = e.pageY - pic_y;
	//将两个div的设置为显示
    big_div.style.display = 'block';
    span_move.style.display = 'block';
	span_move.style.width = normal_pic.offsetWidth / 2 + 'px';
	span_move.style.height = normal_pic.offsetWidth / 2 + 'px';
	//设置边际以及图片移动的算法
    if (mouse_x <= span_move.offsetWidth / 2) {
        //在最左侧不发生移动的情况
        pic_move.style.left = '0px';//右边大图位置为0px
        span_move.style.left = normal_pic.offsetLeft + 'px';//span始终和图片左端对齐
    } 
	else if (mouse_x > span_move.offsetWidth/ 2 && mouse_x < normal_pic.offsetWidth - span_move.offsetWidth / 2) {
		var tempX = mouse_x - span_move.offsetWidth/ 2;
		pic_move.style.left = -n * (tempX) + 'px';//控制右侧大图的移动
		span_move.style.left = tempX + normal_pic.offsetLeft + 'px';//控制span位置的移动
	}
    else {
    	//当移动到最右端的时候，停止span的移动，大图也移动到相应的最右端，此时可以通过一个n来控制大图的移动了
		pic_move.style.left = -n * (normal_pic.offsetWidth - span_move.offsetWidth) + 'px';
		span_move.style.left = normal_pic.offsetLeft + normal_pic.offsetWidth - span_move.offsetWidth + 'px';
	}
	if (mouse_y <= span_move.offsetWidth / 2) {
        pic_move.style.top = '0px';
        span_move.style.top = '0px';
    } 
	else if (mouse_y > span_move.offsetHeight / 2 && mouse_y < normal_pic.offsetHeight - span_move.offsetHeight /2) {
        var tempY = mouse_y - span_move.offsetHeight / 2;
        pic_move.style.top = - n * tempY + 'px';
        span_move.style.top = tempY + 'px';
    } 
	else {
        pic_move.style.top = -(n - 1) * normal_pic.offsetHeight + 'px';
        span_move.style.top = normal_pic.offsetHeight - span_move.offsetHeight + 'px';
    }
}
pic_div.onmouseout = function () {
    span_move.style.display = 'none';
    big_div.style.display = 'none';
}

//图片切换
function lChange(){
	var pic = document.getElementById('pic');
	var bigpic = document.getElementById('bigpic');
	var pic01 = document.getElementById('pic01');
	var pic02 = document.getElementById('pic02');
	pic.src = "img/pp0.jpeg";
	bigpic.src = "img/pp0big.jpg";
	pic01.style.border = "2px solid #ff9003";
	pic02.style.border = "0 solid #ff9003";
}
function rChange(){
	var pic = document.getElementById('pic');
	var bigpic = document.getElementById('bigpic');
	var pic01 = document.getElementById('pic01');
	var pic02 = document.getElementById('pic02');
	pic.src = "img/pp1.jpeg";
	bigpic.src = "img/pp1big.jpg";
	pic01.style.border = "0 solid #ff9003";
	pic02.style.border = "2px solid #ff9003";
}

//选择净含量
function change150(){
	var small = document.getElementById('daxiao_150');
	var big = document.getElementById('daxiao_200');
	small.style.border = "1px solid #fe0d4a";
	small.style.background = "url(img/duigou.png) no-repeat 47px 16px";
	big.style.border = "1px solid #ffffff";
	big.style.background = "none";
	var choose = document.getElementById('al_choose');
	choose.innerHTML = '“150ml”';
}
function change200(){
	var small = document.getElementById('daxiao_150');
	var big = document.getElementById('daxiao_200');
	small.style.border = "1px solid #ffffff";
	small.style.background = "none";
	big.style.border = "1px solid #fe0d4a";
	big.style.background = "url(img/duigou.png) no-repeat 47px 16px";
	var choose = document.getElementById('al_choose');
	choose.innerHTML = '“200ml”';
}
//选择数量
function plus(){
	var num = document.getElementById('xzq_shuliang');
	var left = document.getElementById('xzq_l');
	var right = document.getElementById('xzq_r');
	var number = parseInt(num.innerHTML);
	if (number<5) {
		right.style.cursor = "pointer";
		left.style.cursor = "pointer";
		num.innerHTML = number+1;
	}else{
		right.style.cursor = "not-allowed";
	}
	if (number==4) {
		right.style.cursor = "not-allowed";
	}
}
function less(){
	var num = document.getElementById('xzq_shuliang');
	var left = document.getElementById('xzq_l');
	var right = document.getElementById('xzq_r');
	var number = parseInt(num.innerHTML);
	if (number>1) {
		left.style.cursor = "pointer";
		right.style.cursor = "pointer";
		num.innerHTML = number-1;
	}else{
		left.style.cursor = "not-allowed";
	}
	if (number==2) {
		left.style.cursor = "not-allowed";
	}
}
//加入购物车
function addcar(){
	var add1 = document.getElementById('mengban');
	add1.style.display = "block";
	var add2 = document.getElementById('afteradd');
	add2.style.display = "block";
}
function afterAdd(){
	var add1 = document.getElementById('mengban');
	add1.style.display = "none";
	var add2 = document.getElementById('afteradd');
	add2.style.display = "none";
}
