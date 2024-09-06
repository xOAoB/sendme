document.body.addEventListener('click', function() {
setTimeout(function() {
    document.getElementById("qr-code").classList.add("hidden"); 
    document.getElementById("video-container").classList.remove("hidden");  
    document.getElementById("joke-video").play();
    video.play().catch(error => {
        console.log("Autoplay was blocked. Showing controls.");
        video.setAttribute('controls', 'controls');
    });
}, 10000); //10 sec 
}, { once: true }); 
