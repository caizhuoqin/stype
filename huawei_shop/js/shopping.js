var shopping = (function(){
			var $commodity_shopping = document.querySelector('.commodity_shopping');
			var $shop_cat_box  = document.querySelector('.shop_cat_box');
			var $shop_cat_1 = document.querySelector('.shop_cat_1');
	return {
		init:function(){
			
			this.shopcar();
			this.event();
			this.addcar();
		},
		event:function(){
			var _this = this;
			
		},
		shopcar:function(){
			var _this = this;
			$shop_cat_1.innerHTML = null;
			var arr = localStorage.arr || '[]';
			arr = JSON.parse(arr);
			console.log(arr);
			if(arr!=''){
				$('.commodity_shopping').css('display','none');
				$('.shop_cat_box').css('display','block');
			}
			else{
				$('.commodity_shopping').css('display','block');
				$('.shop_cat_box').css('display','none');
			}
            for(var i =0; i<arr.length;i++){
            	var $aaaa =document.createElement('div');
            	$aaaa.className = "aaaa";
//          	for(var j in arr[i]){
//				var reg = //
            	var img = arr[i].img;
            	var name = arr[i].name;
            	var price = arr[i].price;
            	var num = arr[i].num;
            	var sum = arr[i].sum;
            	var id = arr[i].id
            	console.log(arr[i]);
            	$aaaa.innerHTML =`<div class="aaaa">
						<div class="item1">
						<a href=""><i class="iconfont icon-xuanze1"></i></a>
						<img src="${img}" alt="" />
					</div>
					<div class="item2">
						${name}
					</div>
					<div class="item3">${price}</div>
					<div class="item4">
						
						<input type="text" name="carbuy" value="${num}" autocomplete="off" class="inpadd"> 
						<div>
							<span class="add">+</span>
							<span class="decrease">-</span>
						</div>
					</div>
					<div class="item5">¥ ${sum}</div>
					<div class="item6"> <button class="del" >删除</button></div>
					</div>`
            	$shop_cat_1.appendChild($aaaa);
            	
            }
			
		},
		addcar(){
			var _this=this;
			var $aaaa = document.querySelector('.aaaa');
			var $delAll = document.querySelectorAll('.del')
			console.log($delAll);
			var $decrease = document.querySelector('.decrease');
			var $add = document.querySelector('.add');
			var $inpadd = document.querySelector('.inpadd');
			var $item6 = document.querySelector('.item6');
			var $del = $item6.querySelector('.del');
			console.log($del)
			var $item5 = document.querySelector('.item5');
			var $item3 = document.querySelector('.item3');
			var price  =$item3.innerHTML;
					price = Number(price.split(' ')[1]);
			console.log(price);
			var val = $inpadd.value;
			$decrease.onclick = function(){
				if(val>1){
					val--;
					$inpadd.value = val;
					$item5.innerHTML = '¥' + val * price;
				}
				else{
					val=1;
				}
				
			}
			$add.onclick = function(){
				val++;
				$inpadd.value = val;
				$item5.innerHTML = '¥' + val * price;
			}
			
			$shop_cat_box.onclick = function(e){
				var e = e || window.event;
				var target = e.target || e.srcElement;	
				for(var i=0;i<$delAll.length;i++){
				if(target.nodeName=='BUTTON'){
					var $aaaa = target.parentNode.parentNode;
					$aaaa.remove();
//					console.log(i)
					localStorage.arr[i]= '';
					console.log(i)
//					$aaaa.innerHTML = '';
					_this.shopcar();
				}
				}
			}
			
			
		}
	}
}())
