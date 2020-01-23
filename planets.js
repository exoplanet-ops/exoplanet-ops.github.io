var curr;
const exo = [
{name: "11 Comae Berenices b", source: "img/11comaeberenicesb.JPG", type: "Gas Giant", loadName: "gas-giant", desc: "11 Comae Berenices b is a gas giant exoplanet that orbits a K-type star. Its mass is 19.4 Jupiters, it takes 326 days to complete one orbit of its star, and is 1.29 AU from its star. Its discovery was announced in 2007.", link: "https://exoplanets.nasa.gov/exoplanet-catalog/6988/11-comae-berenices-b/", marker: "11comaeberenicesb"},

{name: "11 Ursae Minoris b", source: "img/11ursaeminorisb.JPG", type: "Gas Giant", loadName: "gas-giant", desc: "11 Ursae Minoris b is a gas giant exoplanet that orbits a K-type star. Its mass is 14.74 Jupiters, it takes 1.4 years to complete one orbit of its star, and is 1.53 AU from its star. Its discovery was announced in 2009.", link: "https://exoplanets.nasa.gov/exoplanet-catalog/6989/11-ursae-minoris-b/", marker:"11ursaeminorisb"},

{name: "EPIC 201497682 b", source: "img/epic201497682b.JPG", type: "Terrestrial", loadName: "terrestrial", desc: "EPIC 201497682 b is a terrestrial exoplanet that orbits a K-type star. Its mass is 0.26 Earths and it takes 2.1 days to complete one orbit of its star. Its discovery was announced in 2019.", link: "https://exoplanets.nasa.gov/exoplanet-catalog/7391/epic-201497682-b/", marker:"epic201497682b"},

{name: "55 Cancri e", source: "img/55cancrie.JPG", type: "Super Earth", loadName: "super-earth", desc: "55 Cancri e is a super Earth exoplanet that orbits a G-type star. Its mass is 8.08 Earths, it takes 0.7 days to complete one orbit of its star, and is 0.01544 AU from its star. Its discovery was announced in 2004.", link: "https://exoplanets.nasa.gov/exoplanet-catalog/7005/55-cancri-e/", marker:"55cancrie"},

{name: "61 Virginis b", source: "img/61virginisb.JPG", type: "Neptune Like", loadName: "neptune-like", desc: "61 Virginis b is a Neptune-like exoplanet that orbits a G-type star. Its mass is 5.1 Earths, it takes 4.2 days to complete one orbit of its star, and is 0.050201 AU from its star. Its discovery was announced in 2009.", link: "https://exoplanets.nasa.gov/exoplanet-catalog/7007/61-virginis-b/", marker:"61virginisb"},

{name: "Kepler-37 e", source: "img/nophoto.JPG", type: "Unknown", loadName: "unknown", desc: "Kepler-37 e is an unknown exoplanet that orbits a G-type star. Its mass is Unknown and it takes 51.2 days to complete one orbit of its star. Its discovery was announced in 2014.", link: "https://exoplanets.nasa.gov/exoplanet-catalog/4790/kepler-37-e/", marker:"kepler37e"},

{name: "14 Andromedae b", source: "img/14andromedaeb.JPG", type: "Gas Giant", loadName: "gas-giant", desc: "14 Andromedae b is a gas giant exoplanet that orbits a K-type star. Its mass is 4.8 Jupiters, it takes 185.8 days to complete one orbit of its star, and is 0.83 AU from its star. Its discovery was announced in 2008.", link: "https://exoplanets.nasa.gov/exoplanet-catalog/6990/14-andromedae-b/", marker:"14andomedaeb"},

{name: "14 Herculis b", source: "img/14herculisb.JPG", type: "Gas Giant", loadName: "gas-giant", desc: "14 Herculis b is a gas giant exoplanet that orbits a G-type star. Its mass is 4.66 Jupiters, it takes 4.9 years to complete one orbit of its star, and is 2.93 AU from its star. Its discovery was announced in 2002.", link: "https://exoplanets.nasa.gov/exoplanet-catalog/6991/14-herculis-b/", marker:"14herculisb"},

{name: "16 Cygni B b", source: "img/16cygnibb.JPG", type: "Gas Giant", loadName: "gas-giant", desc: "16 Cygni B b is a gas giant exoplanet that orbits a G-type star. Its mass is 1.78 Jupiters, it takes 2.2 years to complete one orbit of its star, and is 1.66 AU from its star. Its discovery was announced in 1996.", link: "https://exoplanets.nasa.gov/exoplanet-catalog/6992/16-cygni-b-b/", marker:"16cygnibb"},

{name: "61 Virginis c", source: "img/61virginisc.JPG", type: "Neptune Like", loadName: "neptune-like", desc: "61 Virginis c is a Neptune-like exoplanet that orbits a G-type star. Its mass is 18.2 Earths, it takes 38 days to complete one orbit of its star, and is 0.2175 AU from its star. Its discovery was announced in 2009.", link: "https://exoplanets.nasa.gov/exoplanet-catalog/7008/61-virginis-c/", marker:"61virginisc"},

{name: "61 Virginis d", source: "img/61virginisd.JPG", type: "Neptune Like", loadName: "neptune-like", desc: "61 Virginis d is a Neptune-like exoplanet that orbits a G-type star. Its mass is 22.9 Earths, it takes 123 days to complete one orbit of its star, and is 0.476 AU from its star. Its discovery was announced in 2009.", link: "https://exoplanets.nasa.gov/exoplanet-catalog/7009/61-virginis-d/", marker:"61virginisd"},

{name: "CoRoT-7 b", source: "img/corot-7b.JPG", type: "Super Earth", loadName: "super-earth", desc: "CoRoT-7 b is a super Earth exoplanet that orbits a G-type star. Its mass is 3.1783 Earths, it takes 0.9 days to complete one orbit of its star, and is 0.017016 AU from its star. Its discovery was announced in 2009.", link: "https://exoplanets.nasa.gov/exoplanet-catalog/1242/corot-7-b/", marker:"corot7b"},

{name: "EPIC 201833600 c", source: "img/epic201833600c.JPG", type: "Terrestrial", loadName: "terrestrial", desc: "EPIC 201833600 c is a terrestrial exoplanet that orbits a K-type star. Its mass is 0.972 Earths and it takes 4 days to complete one orbit of its star. Its discovery was announced in 2019.", link: "https://exoplanets.nasa.gov/exoplanet-catalog/7394/epic-201833600-c/", marker:"epic201833600c"},

{name: "HD 189733 b", source: "img/hd189733b.JPG", type: "Gas Giant", loadName: "gas-giant", desc: "HD 189733 b is a gas giant exoplanet that orbits a G-type star. Its mass is 1.13 Jupiters, it takes 2.2 days to complete one orbit of its star, and is 0.0313 AU from its star. Its discovery was announced in 2005.", link: "https://exoplanets.nasa.gov/exoplanet-catalog/6876/hd-189733-b/", marker:"hd189733b"},

{name: "BD-06 1339 b", source: "img/bd-061339b.JPG", type: "Neptune-Like", loadName: "neptune-like", desc: "BD-06 1339 b is a Neptune-like exoplanet that orbits a K-type star. Its mass is 8.5 Earths, it takes 3.9 days to complete one orbit of its star, and is 0.0428 AU from its star. Its discovery was announced in 2013.", link: "https://exoplanets.nasa.gov/exoplanet-catalog/7073/bd-06-1339-b/", marker:"bd061339b"},

{name: "BD-08 2823 b", source: "img/bd-082823b.JPG", type: "Neptune-Like", loadName: "neptune-like", desc: "BD-08 2823 b is a Neptune-like exoplanet that orbits a K-type star. Its mass is 12.7132 Earths, it takes 5.6 days to complete one orbit of its star, and is 0.06 AU from its star. Its discovery was announced in 2009.", link: "https://exoplanets.nasa.gov/exoplanet-catalog/7071/bd-08-2823-b/", marker:"bd082823b"},

{name: "BD+20 594 b", source: "img/bd+20594b.JPG", type: "Neptune-Like", loadName: "neptune-like", desc: "BD+20 594 b is a Neptune-like exoplanet that orbits a G-type star. Its mass is 22.2481 Earths, it takes 41.7 days to complete one orbit of its star, and is 0.241 AU from its star. Its discovery was announced in 2016.", link: "https://exoplanets.nasa.gov/exoplanet-catalog/7166/bd20-594-b/", marker:"bd20594b"},

{name: "EPIC 201238110 b", source: "img/epic201238110b.JPG", type: "Super-Earth", loadName: "super-earth", desc: "EPIC 201238110 b is a super Earth exoplanet that orbits a K-type star. Its mass is 4.16 Earths and it takes 28.2 days to complete one orbit of its star. Its discovery was announced in 2019.", link: "https://exoplanets.nasa.gov/exoplanet-catalog/7390/epic-201238110-b/", marker:"epic201238110b"},

{name: "EPIC 201615463 c", source: "img/epic201615463c.JPG", type: "Super-Earth", loadName: "super-earth", desc: "EPIC 201615463 c is a super Earth exoplanet that orbits a G-type star. Its mass is 1.98 Earths and it takes 3.8 days to complete one orbit of its star. Its discovery was announced in 2019.", link: "https://exoplanets.nasa.gov/exoplanet-catalog/7392/epic-201615463-c/", marker:"epic201615463c"},

{name: "EPIC 201754305 d", source: "img/epic201754305d.JPG", type: "Super-Earth", loadName: "super-earth", desc: "EPIC 201754305 d is a super Earth exoplanet that orbits a K-type star. Its mass is 1.08 Earths and it takes 2.7 days to complete one orbit of its star. Its discovery was announced in 2019.", link: "https://exoplanets.nasa.gov/exoplanet-catalog/7393/epic-201754305-d/", marker:"epic201754305d"},

{name: "EPIC 201841433 b", source: "img/epic201841433b.JPG", type: "Super-Earth", loadName: "super-earth", desc: "EPIC 201841433 b is a super Earth exoplanet that orbits a G-type star. Its mass is 1.37 Earths and it takes 4.2 days to complete one orbit of its star. Its discovery was announced in 2019.", link: "https://exoplanets.nasa.gov/exoplanet-catalog/7395/epic-201841433-b/", marker:"epic201841433b"},

{name: "EPIC 206215704 b", source: "img/epic206215704b.JPG", type: "Terrestrial", loadName: "terrestrial", desc: "EPIC 206215704 b is a terrestrial exoplanet that orbits a K-type star. Its mass is 0.666 Earths and it takes 2.3 days to complete one orbit of its star. Its discovery was announced in 2019.", link: "https://exoplanets.nasa.gov/exoplanet-catalog/7400/epic-206215704-b/", marker:"epic206215704b"},

{name: "EPIC 206317286 b", source: "img/epic206317286b.JPG", type: "Terrestrial", loadName: "terrestrial", desc: "EPIC 206317286 b is a terrestrial exoplanet that orbits a G-type star. Its mass is 0.84 Earths and it takes 1.6 days to complete one orbit of its star. Its discovery was announced in 2019.", link: "https://exoplanets.nasa.gov/exoplanet-catalog/7401/epic-206317286-b/", marker:"epic206317286b"},

{name: "K2-116 b", source: "img/k2-116b.JPG", type: "Terrestrial", loadName: "terrestrial", desc: "K2-116 b is a terrestrial exoplanet that orbits a K-type star. Its mass is 0.257 Earths, it takes 4.7 days to complete one orbit of its star, and is 0.048 AU from its star. Its discovery was announced in 2017.", link: "https://exoplanets.nasa.gov/exoplanet-catalog/6039/k2-116-b/", marker:"k12116b"},
]

for (var i = 0; i < exo.length; i++) {
	var con = document.getElementById("content");
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
	var btn1 = document.createElement("BUTTON");
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

	con.appendChild(col);

	col.classList.add("col-sm-5");
	col.classList.add("col-md-3");
	col.classList.add("col-active");
	col.classList.add(exo[i].loadName);
	col.classList.add("planet-box");
	thumb.classList.add("thumbnail");
	cap.classList.add("caption");
	btn1.classList.add("modal-trigger");
	btn1.classList.add(exo[i].marker);
	btn2.href=exo[i].link;
	pic.src=exo[i].source;
	btn1.classList.add("btn");
	btn1.classList.add("btn-primary");
	btn2.classList.add("btn");
	btn2.classList.add("btn-default");
	pic.style.borderRadius="10px";
}


var mdb = document.getElementsByClassName("modal-trigger");
var header = document.getElementById("planetName");
var paragraph = document.getElementById("modalP");
var footer = document.getElementById("modalF");
var cr;
for (var i = 0; i < mdb.length; i++) {
	mdb[i].addEventListener("click", function() {
		for (var j = 0; j < exo.length; j++) {
			if (this.classList.contains(exo[j].marker)) {
				cr = j;
				break;
			}
		}
		header.innerHTML = exo[cr].name;
		paragraph.innerHTML = "Currently under construction...";
		footer.innerHTML = "Check back for updates!"
	});
}
