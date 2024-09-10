document.querySelector(".home__form").addEventListener("submit",()=>{
	event.preventDefault()
})

document.documentElement.addEventListener("keyup",(evt)=>{
	if (evt.which == 13) {
		let voiceText = document.querySelector(".google-search").value;
		if (voiceText.length > 0) {
            window.location.href = "https://search.yahoo.com/search?ei=UTF-8&fr=opera2&p=" + voiceText;
		}
	}
})