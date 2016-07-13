define(['jquery'], function($){

	function Window(options){
		this.cfg = $.extend({
			width: 400,
			height: 300
		}, options);

	}

	Window.prototype = {
		alert: function(options){
			options = $.extend({
				title: '系统提示'
			}, options);
			var $boundingBox = $('<div class="window_boundingBox"></div>').css({
				width: this.cfg.width,
				height: this.cfg.height,
				left: this.cfg.left || ($(window).width() - this.cfg.width) / 2,
				top: this.cfg.top || ($(window).height() - this.cfg.height) / 2
			}),
			$header = $('<div class="window_header">'+options.title+'</div>').appendTo($boundingBox),
			$body = $('<div class="window_body"></div>').load(options.content).appendTo($boundingBox),
			$footer = $('<div class="window_footer"></div>').appendTo($boundingBox);

			var $btn = $('<button>确定</button>').on('click', function(){
				options.handler && options.handler();
				$boundingBox.remove();
			}).appendTo($footer);

			$boundingBox.appendTo(document.body);
		}

	};


	return Window;

});