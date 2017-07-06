
function music_toggle()
{
	if(music.paused)
	{
		music.play().then(() => {
			console.log('working as intended');
		}).catch((err) => {
			console.log('error');
			console.log(err);
		});
		document.getElementById('music_toggle_button').value = 'pause';
	}
	else 
	{
		music.pause();
		document.getElementById('music_toggle_button').value = 'play';
	}
}