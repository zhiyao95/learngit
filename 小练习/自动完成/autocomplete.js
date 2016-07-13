;(function($){
	$.fn.extend({
		autocomplete: function(){
			$list = $('<ul class="autocomplete-list"></ul>').css({
				left: this.offset().left,
				top: this.offset().top + this.height() + 4
			});

			//测试数据
			var testData = ['hello', 'haha', 'hehe', 'javascript', 'css', 'html', '你好', '你xx', '哈哈'];

			var index = 0;

			this.on('keyup', function(e){
				console.log(this.value);
				if($.trim(this.value) != "" && e.which != 13){
					$list.empty().remove();
					var html = '';
					for(var i=0; i<testData.length; i++){
						var re = new RegExp(this.value, 'gi');
						if( re.test(testData[i]) ){
							html += '<li>'+testData[i]+'</li>';
						}
					}
					if(html){
						$list.append(html).appendTo(document.body);
						$list.children().eq(index).addClass('selected').siblings().removeClass('selected');
					}

				}else{
					$list.remove();
				}
			}).on('keydown', function(e){
				if(e.which == 38){
					index--;
					if(index == -1){
						index = $list.children().length - 1;
					}
					$list.children().eq(index).addClass('selected').siblings().removeClass('selected');

				}else if(e.which == 40){
					index++;
					if(index == $list.children().length){
						index = 0;
					}
					$list.children().eq(index).addClass('selected').siblings().removeClass('selected');
				}else if(e.which == 13){
					this.value = $list.children().eq(index).html();
					$list.remove();

				}
			});
		}
	});
})(jQuery);












