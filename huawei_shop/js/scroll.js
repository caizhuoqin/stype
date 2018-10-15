var scroll = (function(){
		return{
			init:function(){
					$uqward = document.querySelector('.upward');	
					this.event();
			},
			event:function(){
				$uqward.onclick=function(){
					console.log(1111)
					var time = setInterval(function(){
						var _top = document.documentElement.scrollTop-100;
						if(_top<0){
							_top = 0;
							clearInterval(time);
						}
						document.documentElement.scrollTop =  _top;
					},20);
				}
				window.onscroll = function(){
					var top = document.documentElement.scrollTop;
					if(top>1000){
						$uqward.style.display = 'block';
					}
					else{
						$uqward.style.display = 'none';
					}
					
				}
			},
			
		}
}())
