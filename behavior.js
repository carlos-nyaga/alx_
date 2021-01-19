document.addEventListener("DOMContentLoaded", function(event) {
    
    let thumbnails = document.getElementsByClassName("gallery")

    for (i of thumbnails) {
        i.addEventListener('click', function() {
            let thumb = event.target.getElementById('smart_thumbnail')
            
            if (thumb.className=="small"){
                thumb.className = ""
            }else{
                thumb.className="small"
            }
        });
    } 

});