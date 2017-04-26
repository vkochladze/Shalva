var day = new Date();
var dayGet = day.getDate();
var monthGet = day.getMonth(); 

if (dayGet == 26 && monthGet == 3) {
	document.getElementById("demo").innerText = "YES";
} else {
	document.getElementById("demo").innerText = "NO";
}

console.log("%cდიდი სიყვარულით ვანოსგან საუკეთესო მამას", "font-size:64px;");
//console.log("%cExtra Large Yellow Text with Red Background", "background: red; color: yellow; font-size: x-large");
