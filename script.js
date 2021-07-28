const videoElement = document.getElementById('video');
const button = document.getElementById('button');


//selecting media passing video and play 

async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject=mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        alert(error)
    }
}






//on load 
selectMediaStream();

button.addEventListener('click', async () => {
    //disable botton 
    button.disabled = true ;
    //start picture in picture 
    await videoElement.requestPictureInPicture();

    //reset button 
    button.disabled = false; 
})
