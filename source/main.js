
function main()
{// main fucntion
	render_frame();
}

function render_frame() 
{
	requestAnimationFrame(render_frame);
	analyser.getByteFrequencyData(sound_data);
	
	music_viz.update_data(reduce_data(sound_data, 5));
	//console.log(reduce_data(sound_data, 5));
	music_viz.redraw();
}
	