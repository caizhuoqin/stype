if(localStorage!=''){
//				如果本地数据库不为空,显示表格
//				$('.commodity_shopping').css('display','none');
			}
			else{
//				$('.commodity_shopping').css('display','block');
			}
			var $box_box= document.querySelector('.box_box');
			var $bthqd = document.querySelector('.btnqd');
			var $bthgb = document.querySelector('.btngb');	
			var $tbody = document.querySelector('.tbody');
			var $move = document.querySelector('.move');
//				获取本地数据库数据
			var arr = JSON.parse(localStorage.arr);
					console.log(arr);
			for(var i=0;i<arr.length;i++){
			var $tr = document.createElement('tr');
			for(var j in arr[i]){
				console.log(arr[i][j]);
				var $td = document.createElement('td');
				var $text = document.createTextNode(arr[i][j]);
				$td.appendChild($text);
				$tr.appendChild($td);
			}
			var $text = document.createTextNode('删除');
				var $btndelete = document.createElement('button');
						$btndelete.appendChild($text)
					var $td = document.createElement('td');
					$td.appendChild($btndelete);					
					$tr.appendChild($td);					
					$tbody.appendChild($tr);
			}
			$tbody.onclick = function(e){
				 e = e || window.event;
                var target = e.target || e.srcElement;                
                if(target.nodeName == 'BUTTON'){
                	var $tr = target.parentNode.parentNode;
                	$box_box.style.display = 'block';
                $bthqd.onclick = function(){
                	$tr.remove();
//              	arr[i][j] ='';
					console.log(arr);
					$box_box.style.display = 'none';
				}
				$bthgb.onclick = function(){
					$box_box.style.display = 'none';
			}	
                }				
				console.log(1);
			}
			$move.onmousedown = function(ev){
				ev = ev || window.event;
//				阻止冒泡行为;
				ev.preventDefault();
                // 计算偏移量
			var maxx =window.innerWidth - $box.offsetWidth;
			var maxy = window.innerHeight-$box.offsetHeight;
			var _x = ev.offsetX;
			var _y = ev.offsetY;
			document.onmousemove = function(ev){
				ev = ev || window.event;					
				var x= ev.pageX;
				var y  =ev.pageY;
				x=x-_x;
				y = y-_y;
				
				if(x<0){
					x=0
				}
				else if(x>maxx){
					x=maxx
				}
				if(y<0){
					y=0
				}
				else if(y>maxy){
					y=maxy
				}
				$box.style.left = x+250+'px';
				$box.style.top = y-100+'px';	
			}
			document.onmouseup = function(){
				document.onmousemove = null;
			}		
			}