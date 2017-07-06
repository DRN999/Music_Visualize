var music;
var music_viz;
var sound_data;
var analyser;

function init()
{
	var ctx = new AudioContext();
	music = new Audio('assets/music/WIth The Wind.mp3');
	music.volume = 0.2;
	console.log(music);
	var audioSrc = ctx.createMediaElementSource(music);
	analyser = ctx.createAnalyser();
	audioSrc.connect(analyser);
	audioSrc.connect(ctx.destination);
	sound_data = new Uint8Array(analyser.frequencyBinCount);
	music_viz = new Graph_viz(reduce_data(sound_data, 5));
	//console.log(reduce_data(sound_data, 5));
	main();
}

function reduce_data(data, red)
{
	var temp = new Array();
	for(var i = 0; i < data.length; i+=red)
	{
		temp.push(data[i]);
	}
	return temp;
}