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
//轮播
		var box = document.getElementById('box');
		var slider = document.getElementById('slider');
		var left = document.getElementById('left');
		var right = document.getElementById('right');
		var oNavlist = document.getElementById('nav0').children;
		var index = 1; //打开页面生效的图片的下标为1
		var timer;
		var isMoving = false;
		box.onmouseover = function () {
			animate(left, {
				opacity: 0.8
			})
			animate(right, {
				opacity: 0.8
			})
			clearInterval(timer); //图片停止滚动
		}
		box.onmouseout = function () {
			animate(left, {
				opacity: 0
			})
			animate(right, {
				opacity: 0
			})
			timer = setInterval(next, 3000); //图片开始接着滚动
		}
		right.onclick = next;
		left.onclick = prev;

		function next() {
			if (isMoving) {
				return;
			}
			isMoving = true;
			index++;
			navmove();
			animate(slider, {
				left: -800 * index
			}, function () {
				if (index == 7) {
					slider.style.left = '-800px';
					index = 1;
				}
				isMoving = false;
			});
		}

		function prev() {
			if (isMoving) {
				return;
			}
			isMoving = true;
			index--;
			navmove();
			animate(slider, {
				left: -800 * index
			}, function () {
				if (index == 0) {
					slider.style.left = '-4800px';
					index = 6;
				}
				isMoving = false;
			});
		}
		//按钮点击切换事件
		for (var i = 0; i < oNavlist.length; i++) {
			oNavlist[i].index = i;
			oNavlist[i].onclick = function () {
				index = this.index + 1;
				navmove();
				animate(slider, {
					left: -800 * index
				});
			}

		}
		//图片切换时按钮样式跟着切换
		function navmove() {
			for (var i = 0; i < oNavlist.length; i++) {
				oNavlist[i].className = "";
			}
			if (index > 6) {
				oNavlist[0].className = "active";
			} else if (index <= 0) {
				oNavlist[5].className = "active";
			} else {
				oNavlist[index - 1].className = "active";
			}
		}
		//页面打开时自动滚动切换
		timer = setInterval(next, 3000);




function getStyle(obj, attr) { //返回值带有单位px
  	if (obj.currentStyle) {
  		return obj.currentStyle[attr];
  	} else {
  		return getComputedStyle(obj, null)[attr];
  	}
  }

  function animate(obj, json, callback) {
  	clearInterval(obj.timer);
  	obj.timer = setInterval(function () {
  		var flag = true;
  		for (var attr in json) {
  			(function (attr) {
  				if (attr == "opacity") {
  					var now = parseInt(getStyle(obj, attr) * 100);
  					var dest = json[attr] * 100;
  				} else {
  					var now = parseInt(getStyle(obj, attr));
  					var dest = json[attr];
  				}
  				var speed = (dest - now) / 6;
  				speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
  				if (now != dest) {
  					flag = false;
  					if (attr == "opacity") {
  						obj.style[attr] = (now + speed) / 100;
  					} else {
  						obj.style[attr] = now + speed + "px";
  					}
  				}
  			})(attr);
  		}
  		if (flag) {
  			clearInterval(obj.timer);
  			callback && callback(); //如果回调函数存在，就调用回调函数
  		}
  	}, 30);
  }

 //话费充值
 function changeMoney(){
 	var money = document.getElementById("choose");
	var index = money.selectedIndex;
	var text = money.options[index].text; 
	var fon = document.getElementById("money");
	fon.innerHTML = "￥" + text;
 }

 function back(){
 	var money = document.getElementById("choose");
 	money.value = -1;
 	var as = document.getElementById('placeh');
	as.value="";
	changeMoney();
 }

 //公告栏滚动
                var area =document.getElementById('scrollBox');
                var con1 = document.getElementById('con1');
                var con2 = document.getElementById('con2');
                con2.innerHTML=con1.innerHTML;
                function scrollUp(){
                	if(area.scrollTop>=con1.offsetHeight){
                    	area.scrollTop=0;
                	}else{
                   	 area.scrollTop++
               		}
                }                
                var time = 50;
                var mytimer=setInterval(scrollUp,time);
                area.onmouseover=function(){
                    clearInterval(mytimer);
                }
                area.onmouseout=function(){
                    mytimer=setInterval(scrollUp,time);
                }

//侧边滑出
function huachu(){
		var box = document.getElementById('box1');
        var dest=7;
		var timer = setInterval(function () {
			var now = parseInt(getStyle(box, "marginLeft"));
			if (now == dest) {
				clearInterval(timer);
			} else {
				box.style.marginLeft= now - 1 + "px";
			}
		}, 1);
}
function huaru(){
	var box = document.getElementById('box1');
        var dest=85;
		var timer = setInterval(function () {
			var now = parseInt(getStyle(box, "marginLeft"));
			if (now == dest) {
				clearInterval(timer);
			} else {
				box.style.marginLeft= now + 1 + "px";
				now = now+1;
			}
		}, 5);
} 
function huachu_youhui(){
		var box = document.getElementById('box2');
        var dest=0;
		var timer = setInterval(function () {
			var now = parseInt(getStyle(box, "marginLeft"));
			if (now == dest) {
				clearInterval(timer);
			} else {
				box.style.marginLeft= now - 1 + "px";
			}
		}, 1);
}
function huaru_youhui(){
	var box = document.getElementById('box2');
        var dest=85;
		var timer = setInterval(function () {
			var now = parseInt(getStyle(box, "marginLeft"));
			if (now == dest) {
				clearInterval(timer);
			} else {
				box.style.marginLeft= now + 1 + "px";
				now = now+1;
			}
		}, 5);
}

function huachu_ewm(){
		var box = document.getElementById('box3');
        var dest=0;
        var erwei = document.getElementById('serwei');
        erwei.src = "img/erwei.png";
        erwei.style.marginTop = 0;
		var timer = setInterval(function () {
			var now = parseInt(getStyle(box, "marginLeft"));
			if (now == dest) {
				clearInterval(timer);
			} else {
				box.style.marginLeft= now - 1 + "px";
			}
		}, 1);
}
function huaru_ewm(){
		var box = document.getElementById('box3');
		var erwei = document.getElementById('serwei');
        erwei.src = "img/serwei.png";
        erwei.style.marginTop = "40px";
        var dest=85;
		var timer = setInterval(function () {
			var now = parseInt(getStyle(box, "marginLeft"));
			if (now == dest) {
				clearInterval(timer);
			} else {
				box.style.marginLeft= now + 1 + "px";
				now = now+1;
			}
		}, 5);
}
function huachu_car(){
		var box = document.getElementById('box4');
        var dest=7;
		var timer = setInterval(function () {
			var now = parseInt(getStyle(box, "marginLeft"));
			if (now == dest) {
				clearInterval(timer);
			} else {
				box.style.marginLeft= now - 1 + "px";
			}
		}, 1);
}
function huaru_car(){
	var box = document.getElementById('box4');
        var dest=85;
		var timer = setInterval(function () {
			var now = parseInt(getStyle(box, "marginLeft"));
			if (now == dest) {
				clearInterval(timer);
			} else {
				box.style.marginLeft= now + 1 + "px";
				now = now+1;
			}
		}, 5);
} 
    
