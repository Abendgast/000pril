function changeAudio(music, video){
    var videoMap = {
        'groupmates/music/Papercut.mp3': 'groupmates/Video/1.mp4',
        'groupmates/music/InsideTheFire.mp3': 'groupmates/Video/2.mp4',
        'groupmates/music/HellOfANight.mp3': 'groupmates/Video/3.mp4',
        'groupmates/music/Benzin.mp3': 'groupmates/Video/4.mp4'
    };
    document.getElementById('myAudio').setAttribute('src', music);
    document.getElementById('myVideo').children[0].setAttribute('src', videoMap[music]);
}
