window.onload = () => {
	document.getElementById("calculate").onclick = calculateTip;
};

function calculateTip() {
	console.log("helo");
	let amount = document.getElementById("amount").value;
	let persons = document.getElementById("persons").value;
	let service = document.getElementById("services").value;
	//console.log(service);

	if (amount === "" && service === "Select") {
		alert("Please enter valid values");
		return;
	} else if (persons === "1")
		document.getElementById("each").style.display = "none";
	else document.getElementById("each").style.display = "block";

	let total= (amount* service) / persons;
	total=Math.round(total*100)/100;

	 //console.log("total", total);

total= total.toFixed(2);

	document.getElementById("totalTip").style.display = "block";

	document.getElementById("tipc").innerHTML =total;
}
document.getElementById("totalTip").style.display="none";
document.getElementById("each").style.display="none";
