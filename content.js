let t0 = new Date()
let attention = 20
let pause = 5
let cycle = attention + pause

setInterval(timer, 1000)

function timer() {
	dt = new Date() - t0
	if (dt > attention * 60 * 1000 && dt - 1000 < attention * 60 * 1000) {
		alert("time to take a break!")
	}

	if (dt > cycle * 60 * 1000 && dt - 1000 < cycle * 60 * 1000) {
		alert("let's get back to work!")
		t0 = new Date()
	}
}