var options = {
	animation: true,
	delay: 4000,
	autohide: false,
}

function myToast(){
	var toastElement = document.getElementById("toastElement");
	var toastShow = new bootstrap.Toast(toastElement, options);
	toastShow.show();
}