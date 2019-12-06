var refresh_interval;

function update_progress() {
	refresh_interval = setInterval(function(){
		reload_image();
		$.get('/status', success=function(data) {
			$('#status').html(data);
			if (data == 'Idle') {
				clearInterval(refresh_interval);
				refresh_interval = null;
			}
		});
	},2000);
}
function start() {
	var opt_image = $('#image').children("option:selected").val();
	var opt_configuration = $('#configuration').children("option:selected").val();
	var opt_palette = $('#palette').children("option:selected").val();
	var opt_palette_usage = $('#palette_usage').children("option:selected").val();
	var opt_threshold = $('#color_distance_threshold').val();
	
	$.get('/start', {'image':opt_image, 'configuration':opt_configuration, 'palette':opt_palette, 'color_distance_threshold':opt_threshold, 'palette_usage':opt_palette_usage});
	if (!refresh_interval) {
		update_progress();
	}
}

function stop() {
	$.get('/stop');
	clearInterval(refresh_interval);
	refresh_interval = null;
}

function reload_image() {
	$("#progress_image").attr("src", "/progress.jpg?"+new Date().getTime());
	$("#progress_link").attr("href", "/progress.jpg?"+new Date().getTime());
}

$(document).ready(function(){
	reload_image();
	update_progress();
});