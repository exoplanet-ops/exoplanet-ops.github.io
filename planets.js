var curr;
const exo = [
{name: "11 Comae Berenices b", source: "img/11comaeberenicesb.JPG", type: "Gas Giant", loadName: "gas-giant", desc: "11 Comae Berenices b is a gas giant exoplanet that orbits a K-type star. Its mass is 19.4 Jupiters, it takes 326 days to complete one orbit of its star, and is 1.29 AU from its star. Its discovery was announced in 2007.", link: "https://exoplanets.nasa.gov/exoplanet-catalog/6988/11-comae-berenices-b/" },

{name: "11 Ursae Minoris b", source: "img/11ursaeminorisb.JPG", type: "Gas Giant", loadName: "gas-giant", desc: "11 Ursae Minoris b is a gas giant exoplanet that orbits a K-type star. Its mass is 14.74 Jupiters, it takes 1.4 years to complete one orbit of its star, and is 1.53 AU from its star. Its discovery was announced in 2009.", link: "https://exoplanets.nasa.gov/exoplanet-catalog/6989/11-ursae-minoris-b/"},

{name: "EPIC 201497682 b", source: "img/epic201497682b.JPG", type: "Terrestrial", loadName: "terrestrial", desc: "EPIC 201497682 b is a terrestrial exoplanet that orbits a K-type star. Its mass is 0.26 Earths and it takes 2.1 days to complete one orbit of its star. Its discovery was announced in 2019.", link: "https://exoplanets.nasa.gov/exoplanet-catalog/7391/epic-201497682-b/"},

{name: "55 Cancri e", source: "img/55cancrie.JPG", type: "Super Earth", loadName: "super-earth", desc: "55 Cancri e is a super Earth exoplanet that orbits a G-type star. Its mass is 8.08 Earths, it takes 0.7 days to complete one orbit of its star, and is 0.01544 AU from its star. Its discovery was announced in 2004.", link: "https://exoplanets.nasa.gov/exoplanet-catalog/7005/55-cancri-e/"},

{name: "61 Virginis b", source: "img/61virginisb.JPG", type: "Neptune Like", loadName: "neptune-like", desc: "61 Virginis b is a Neptune-like exoplanet that orbits a G-type star. Its mass is 5.1 Earths, it takes 4.2 days to complete one orbit of its star, and is 0.050201 AU from its star. Its discovery was announced in 2009.", link: "https://exoplanets.nasa.gov/exoplanet-catalog/7007/61-virginis-b/"},

{name: "Kepler-37 e", source: "img/nophoto.JPG", type: "Unknown", loadName: "unknown", desc: "Kepler-37 e is an unknown exoplanet that orbits a G-type star. Its mass is Unknown and it takes 51.2 days to complete one orbit of its star. Its discovery was announced in 2014.", link: "https://exoplanets.nasa.gov/exoplanet-catalog/4790/kepler-37-e/"},

{name: "14 Andromedae b", source: "img/14andromedaeb.JPG", type: "Gas Giant", loadName: "gas-giant", desc: "14 Andromedae b is a gas giant exoplanet that orbits a K-type star. Its mass is 4.8 Jupiters, it takes 185.8 days to complete one orbit of its star, and is 0.83 AU from its star. Its discovery was announced in 2008.", link: "https://exoplanets.nasa.gov/exoplanet-catalog/6990/14-andromedae-b/"},

{name: "14 Herculis b", source: "img/14herculisb.JPG", type: "Gas Giant", loadName: "gas-giant", desc: "14 Herculis b is a gas giant exoplanet that orbits a G-type star. Its mass is 4.66 Jupiters, it takes 4.9 years to complete one orbit of its star, and is 2.93 AU from its star. Its discovery was announced in 2002.", link: "https://exoplanets.nasa.gov/exoplanet-catalog/6991/14-herculis-b/"},

{name: "16 Cygni B b", source: "img/16cygnibb.JPG", type: "Gas Giant", loadName: "gas-giant", desc: "16 Cygni B b is a gas giant exoplanet that orbits a G-type star. Its mass is 1.78 Jupiters, it takes 2.2 years to complete one orbit of its star, and is 1.66 AU from its star. Its discovery was announced in 1996.", link: "https://exoplanets.nasa.gov/exoplanet-catalog/6992/16-cygni-b-b/"},
]

for (var i = 0; i < exo.length; i++) {
	var con = document.getElementById("content");
	//if (i%4==3 || i == 0) {
	//var row = document.createElement("div");
	//row.classList.add("row");
	//curr = row;
	//}
	var col = document.createElement("div");
	var thumb = document.createElement("div");
	var cap = document.createElement("div");
	var pic = document.createElement("IMG");
	var text = document.createTextNode(exo[i].desc);
	var plname = document.createTextNode(exo[i].name);
	var bname1 = document.createTextNode("Learn More");
	var bname2 = document.createTextNode("NASA Link");
	var shed = document.createElement("h2");
	var para = document.createElement("P");
	var btn1 = document.createElement("A");
	var btn2 = document.createElement("A");
	var bblock=document.createElement("P");
	
	shed.appendChild(plname);
	para.appendChild(text);
	btn1.appendChild(bname1);
	btn2.appendChild(bname2);
	bblock.appendChild(btn1);
	bblock.appendChild(btn2);
	
	cap.appendChild(shed);
	cap.appendChild(para);
	cap.appendChild(bblock);
	
	thumb.appendChild(pic);
	thumb.appendChild(cap);

	col.appendChild(thumb);

	//curr.appendChild(col);
	con.appendChild(col);

	col.classList.add("col-sm-5");
	col.classList.add("col-md-3");
	col.classList.add("col-active");
	col.classList.add(exo[i].loadName);
	col.classList.add("planet-box");
	thumb.classList.add("thumbnail");
	cap.classList.add("caption");
	btn1.href="#";
	btn2.href=exo[i].link;
	pic.src=exo[i].source;
	btn1.classList.add("btn");
	btn1.classList.add("btn-primary");
	btn2.classList.add("btn");
	btn2.classList.add("btn-default");
	pic.style.borderRadius="10px";

	//if (i%4 == 3 || i == 0) {
	//con.appendChild(curr);
	//}
}