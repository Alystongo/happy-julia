//SCRIPT OF SCREEN
$(document).ready(function (){
	$("#frases").click(function (){
		$('#audio').trigger('play');
		$('.videos').trigger('pause');
		
		$(".slideshow-container1").show();
		$(".slideshow-container3").hide();
		$(".slideshow-container2").hide();
		$(".closebtn").click();
	});
	
	$("#imagens").click(function (){
		$('#audio').trigger('play');
		$('.videos').trigger('pause');
		
		$(".slideshow-container2").show();
		$(".slideshow-container1").hide();
		$(".slideshow-container3").hide();
		$(".closebtn").click();
	});
	
	$("#videos").click(function (){
		$('#audio').trigger('pause');
		
		$(".slideshow-container3").show();
		$(".slideshow-container1").hide();
		$(".slideshow-container2").hide();
		$(".closebtn").click();
	});
	
	//SCRIPT OF VIDEOS
		//NEXT VIDEO
	$("#nextV1").click(function(){
		$("#nextV1").slideUp();
		$("#nextV2").slideDown();
	
		$("#video1").hide();
		$("#video3").hide();
		$("#video4").hide();
		$("#video2").show();
	});
	
	$("#nextV2").click(function(){
		$('.videos').trigger('pause');
	
		$("#nextV2").slideUp();
		$("#nextV3").slideDown();
	
		$("#video1").hide();
		$("#video4").hide();
		$("#video2").hide();
		$("#video3").show();
	});
	
	$("#nextV3").click(function(){
		$('.videos').trigger('pause');
	
		$("#nextV3").slideUp();
		$("#nextV4").slideDown();
	
		$("#video1").hide();
		$("#video3").hide();
		$("#video2").hide();
		$("#video4").show();
	});
	
	$("#nextV4").click(function(){
		$('.videos').trigger('pause');
	
	$("#nextV4").slideUp();
	$("#nextV1").slideDown();
	
		$("#video3").hide();
		$("#video2").hide();
		$("#video4").hide();
		$("#video1").show();
	});
	
		//PREV VIDEO
	$("#prevV1").click(function(){
		$('.videos').trigger('pause');
	
		$("#prevV1").slideUp();
		$("#prevV4").slideDown();
	
		$("#video1").hide();
		$("#video3").hide();
		$("#video2").hide();
		$("#video4").show();
	});
	
	$("#prevV2").click(function(){
		$('.videos').trigger('pause');
	
		$("#prevV2").slideUp();
		$("#prevV1").slideDown();
	
		$("#video2").hide();
		$("#video4").hide();
		$("#video2").hide();
		$("#video1").show();
	});
	
	$("#prevV3").click(function(){
		$('.videos').trigger('pause');
	
		$("#prevV3").slideUp();
		$("#prevV2").slideDow();
	
		$("#video1").hide();
		$("#video3").hide();
		$("#video4").hide();
		$("#video2").show();
	});
	
	$("#prevV4").click(function(){
		$('.videos').trigger('pause');
	
		$("#prevV4").slideUp();
		$("#prevV3").slideDown();
	
		$("#video1").hide();
		$("#video2").hide();
		$("#video4").hide();
		$("#video3").show();
	});
	
});

//SCRIPT OF IMAGEs
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

//SCRIPT OF MENU
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
