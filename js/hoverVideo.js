document.addEventListener('mouseover',hoverVideo,false);

document.addEventListener('mouseover',hoverVideo,false);
var vid = document.getElementById('video-example');
function hoverVideo(e)
{   
    if(e.target == vid)
    {
        vid.play();
        this.addEventListener('mouseout',hideVideo,false);
    }

}

function hideVideo(e)
{
    if(e.target == vid)
    {
        vid.pause();
    }

}