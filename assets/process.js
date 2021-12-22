



if ($(window).width() < 768) {
  let noOfCharac = 100;
  let texts = document.querySelectorAll(".text");
  texts.forEach(text => {
    //If text length is less that noOfCharac... then hide the read more button
    if(text.textContent.length < noOfCharac){
        content.nextElementSibling.style.display = "none";
    }
    else{
        let displayText = text.textContent.slice(0,noOfCharac);
        let moreText = text.textContent.slice(noOfCharac);
        text.innerHTML = `${displayText}<span class="dots">...</span><span class="hide more">${moreText}</span>`;
    }
});

function readMore(btn){
    let post = btn.parentElement;
    post.querySelector(".dots").classList.toggle("hide");
    post.querySelector(".more").classList.toggle("hide");
    btn.textContent == "Read Less" ? btn.textContent = "Read More" : btn.textContent = "Read Less";
}
}
else {
  console.log("not mobile size ");
}



