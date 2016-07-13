
require(['jquery', 'window'], function($, Window){
	$('#btn').on('click', function(){
		var win = new Window({
			/*width: 300,
			height: 200,*/
			left: 280,
			top: 50
		});
		win.alert({
			title: '提示',
			content: 'login.html',
			handler: function(){
				console.log(3456789);
			}
		});
	});
});