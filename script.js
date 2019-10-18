console.log(window.innerWidth);
console.log(window.innerHeight);
let imageNames = ["IMAG0481.jpg", "IMAG0482.jpg", "IMAG0483.jpg", "download.jpg", "ferb.png", "doof.jpg"];
let tumbs = document.getElementById('tumbs');
let display = document.getElementById('display');

let up = document.getElementById('up');

let hoi = Math.floor(Math.random()*imageNames.length);
selectImage(hoi);


for(let i= 0; i<imageNames.length; i++){

	let tumb = new Image();
	tumb.src = "images_test/small/" + imageNames[i];
	tumb.id = i;
	tumbs.appendChild(tumb);
	tumb.addEventListener("click",function(e){
		selectImage(e.target.id);
	});

if (up) {
}

}

function selectImage(id){
	display.src = "images_test/big/" + imageNames[id];
}

document.getElementById("up").addEventListener("click",()=> {

	if (hoi >= 5){
		hoi = 0;
		display.src = "images_test/big/" + imageNames[hoi];
	}
	else {
			hoi++;
			display.src = "images_test/big/" + imageNames[hoi];
	}
});

document.getElementById("left").addEventListener("click",()=> {
	if (hoi <= 0){
				hoi = 5;
				display.src = "images_test/big/" + imageNames[hoi];
	}
	else {
			hoi--;
			display.src = "images_test/big/" + imageNames[hoi];
	}
});

document.getElementById("right").addEventListener("click",()=> {

	if (hoi >= 5){
		hoi = 0;
		display.src = "images_test/big/" + imageNames[hoi];
	}
	else {
			hoi++;
			display.src = "images_test/big/" + imageNames[hoi];
	}
});

document.getElementById("down").addEventListener("click",()=> {
	if (hoi <= 0){
				hoi = 5;
				display.src = "images_test/big/" + imageNames[hoi];
	}
	else {
			hoi--;
			display.src = "images_test/big/" + imageNames[hoi];
	}
});
