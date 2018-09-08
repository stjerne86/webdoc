
//skull//

var figure = $(".video").hover( hoverVideo, hideVideo );

function hoverVideo(e) {  
    $('video', this).get(0).play(); 
}

function hideVideo(e) {
    $('video', this).get(0).pause(); 
}




HTMLScriptElement
window.onload = function () {
    var vids = document.getElementById("video");

    vids.addEventListener('mousover',
        function (e) {
            console.log('mus over');
            vids.play();
        })
    vids.addEventListener('mouseout', function (e) {
        vids.pause()


    })
}



js:
    let myTracks = [
'niels-musik.mp3'
]

musicNiels.controls = true;
musicNiels.src = myTracks[0];
musicNiels.currentTime = true;