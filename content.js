let t0 = t1 = 0
let attention = 20
let pause = 5
let cycle = attention + pause

t0 = new Date()
setInterval(() => {
	t1 = new Date()
	if (t1 - t0 > attention * 60 * 1000 && t1 - t0 - 1000 < attention * 60 * 1000) {
		alert("time to take a break!")
	}

	if (t1 - t0 > cycle * 60 * 1000 && t1 - t0 - 1000 < cycle * 60 * 1000) {
		alert("let's get back to work!")
		t0 = new Date()
	}
}, 1000)