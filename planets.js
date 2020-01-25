var curr;
const exo = [
{name: "11 Comae Berenices b",
source: "img/11comaeberenicesb.JPG",
type: "Gas Giant",
loadName: "gas-giant",
desc: "11 Comae Berenices b is a gas giant exoplanet that orbits a K-type star. Its mass is 19.4 Jupiters, it takes 326 days to complete one orbit of its star, and is 1.29 AU from its star. Its discovery was announced in 2007.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/6988/11-comae-berenices-b/",
marker: "11comaeberenicesb",
date: 2007,
mass: 19.4,
pRadius: 1.08,
massRadUnits: "Jupiter",
oRadius: 1.29,
eccentricity: 0.23,
oPeriod: 326,
oPeriodUnits: "days",
detectionMethod: "Radial Velocity",
star: "K-type",
distance: 305,
starName: "11 Comae Berenices",
starMass: 2.70,
starRadius: 16.79},

{name: "11 Ursae Minoris b",
source: "img/11ursaeminorisb.JPG",
type: "Gas Giant",
loadName: "gas-giant",
desc: "11 Ursae Minoris b is a gas giant exoplanet that orbits a K-type star. Its mass is 14.74 Jupiters, it takes 1.4 years to complete one orbit of its star, and is 1.53 AU from its star. Its discovery was announced in 2009.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/6989/11-ursae-minoris-b/",
marker:"11ursaeminorisb",
date: 2009,
mass: 14.74,
pRadius: 1.09,
massRadUnits: "Jupiter",
oRadius: 1.53,
eccentricity: 0.08,
oPeriod: "1.4",
oPeriodUnits: "years",
detectionMethod: "Radial Velocity",
star: "K-type",
distance: 410,
starName: "11 Ursae Minoris",
starMass: 1.80,
starRadius: 20.68 },

{name: "EPIC 201497682 b",
source: "img/epic201497682b.JPG",
type: "Terrestrial",
loadName: "terrestrial",
desc: "EPIC 201497682 b is a terrestrial exoplanet that orbits a K-type star. Its mass is 0.26 Earths and it takes 2.1 days to complete one orbit of its star. Its discovery was announced in 2019.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7391/epic-201497682-b/",
marker:"epic201497682b",
date: 2019,
mass: 0.26,
pRadius: 0.692,
massRadUnits: "Earth",
oRadius: "unknown",
eccentricity: 0.0,
oPeriod: 2.1,
oPeriodUnits: "days",
detectionMethod: "Transit",
star: "K-type",
distance: 831,
starName: "EPIC 201497682",
starMass: 0.78,
starRadius: 0.55},

{name: "55 Cancri e",
source: "img/55cancrie.JPG",
type: "Super Earth",
loadName: "super-earth",
desc: "55 Cancri e is a super Earth exoplanet that orbits a G-type star. Its mass is 8.08 Earths, it takes 0.7 days to complete one orbit of its star, and is 0.01544 AU from its star. Its discovery was announced in 2004.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7005/55-cancri-e/",
marker:"55cancrie",
date: 2004,
mass: 8.08,
pRadius: 1.91,
massRadUnits: "Earth",
oRadius: 0.01544,
eccentricity: 0.03,
oPeriod: 0.7,
oPeriodUnits: "days",
detectionMethod: "Radial Velocity",
star: "G-type",
distance: 41,
starName: "55 Cancri",
starMass: 0.91,
starRadius: 0.95},

{name: "61 Virginis b",
source: "img/61virginisb.JPG",
type: "Neptune Like",
loadName: "neptune-like",
desc: "61 Virginis b is a Neptune-like exoplanet that orbits a G-type star. Its mass is 5.1 Earths, it takes 4.2 days to complete one orbit of its star, and is 0.050201 AU from its star. Its discovery was announced in 2009.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7007/61-virginis-b/",
marker:"61virginisb",
date: 2009,
mass: 5.1,
pRadius: 2.11,
massRadUnits: "Earth",
oRadius: 0.050201,
eccentricity: 0.12,
oPeriod: 4.2,
oPeriodUnits: "days",
detectionMethod: "Radial Velocity",
star: "G-type",
distance: 28,
starName: "61 Virginis",
starMass: 0.95,
starRadius: 0.96},

{name: "Kepler-37 e",
source: "img/nophoto.JPG",
type: "Unknown",
loadName: "unknown",
desc: "Kepler-37 e is an unknown exoplanet that orbits a G-type star. Its mass is Unknown and it takes 51.2 days to complete one orbit of its star. Its discovery was announced in 2014.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/4790/kepler-37-e/",
marker:"kepler37e",
date: 2014,
mass: "unknown",
pRadius: "unknown",
massRadUnits: "unknown",
oRadius: "unknown",
eccentricity: 0.0,
oPeriod: 51.2,
oPeriodUnits: "days",
detectionMethod: "Transit Timing Variations",
star: "G-type",
distance: 209,
starName: "Kepler-37",
starMass: 0.80,
starRadius: 0.79},

{name: "14 Andromedae b",
source: "img/14andromedaeb.JPG",
type: "Gas Giant",
loadName: "gas-giant",
desc: "14 Andromedae b is a gas giant exoplanet that orbits a K-type star. Its mass is 4.8 Jupiters, it takes 185.8 days to complete one orbit of its star, and is 0.83 AU from its star. Its discovery was announced in 2008.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/6990/14-andromedae-b/",
marker:"14andomedaeb",
date: 2008,
mass: 4.8,
pRadius: 1.15,
massRadUnits: "Jupiter",
oRadius: 0.83,
eccentricity: 0.0,
oPeriod: 185.8,
oPeriodUnits: "days",
detectionMethod: "Radial Velocity",
star: "K-type",
distance: 247,
starName: "14 Andromedae",
starMass: 2.2,
starRadius: 10.49},

{name: "14 Herculis b",
source: "img/14herculisb.JPG",
type: "Gas Giant",
loadName: "gas-giant",
desc: "14 Herculis b is a gas giant exoplanet that orbits a G-type star. Its mass is 4.66 Jupiters, it takes 4.9 years to complete one orbit of its star, and is 2.93 AU from its star. Its discovery was announced in 2002.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/6991/14-herculis-b/",
marker:"14herculisb",
date: 2002,
mass: 4.66,
pRadius: 1.15,
massRadUnits: "Jupiter",
oRadius: 1.93,
eccentricity: 0.37,
oPeriod: 4.9,
oPeriodUnits: "years",
detectionMethod: "Radial Velocity",
star: "G-type",
distance: 59,
starName: "14 Herculis",
starMass: 0.9,
starRadius: 0.8668},

{name: "16 Cygni B b",
source: "img/16cygnibb.JPG",
type: "Gas Giant",
loadName: "gas-giant",
desc: "16 Cygni B b is a gas giant exoplanet that orbits a G-type star. Its mass is 1.78 Jupiters, it takes 2.2 years to complete one orbit of its star, and is 1.66 AU from its star. Its discovery was announced in 1996.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/6992/16-cygni-b-b/",
marker:"16cygnibb",
date: 1996,
mass: 1.78,
pRadius: 1.2,
massRadUnits: "Jupiter",
oRadius: 1.66,
eccentricity: 0.68,
oPeriod: 2.2,
oPeriodUnits: "years",
detectionMethod: "Radial Velocity",
star: "G-type",
distance: 69,
starName: "16 Cygni B",
starMass: 1.04,
starRadius: 1.116},

{name: "61 Virginis c",
source: "img/61virginisc.JPG",
type: "Neptune Like",
loadName: "neptune-like",
desc: "61 Virginis c is a Neptune-like exoplanet that orbits a G-type star. Its mass is 18.2 Earths, it takes 38 days to complete one orbit of its star, and is 0.2175 AU from its star. Its discovery was announced in 2009.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7008/61-virginis-c/",
marker:"61virginisc",
date: 2009,
mass: 18.2,
pRadius: 4.371,
massRadUnits: "Earth",
oRadius: 0.2175,
eccentricity: 0.14,
oPeriod: 38,
oPeriodUnits: "days",
detectionMethod: "Radial Velocity",
star: "G-type",
distance: 28,
starName: "61 Vrginis",
starMass: 0.95,
starRadius: 0.96},

{name: "61 Virginis d",
source: "img/61virginisd.JPG",
type: "Neptune Like",
loadName: "neptune-like",
desc: "61 Virginis d is a Neptune-like exoplanet that orbits a G-type star. Its mass is 22.9 Earths, it takes 123 days to complete one orbit of its star, and is 0.476 AU from its star. Its discovery was announced in 2009.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7009/61-virginis-d/",
marker:"61virginisd",
date: 2009,
mass: 22.9,
pRadius: 5,
massRadUnits: "Earth",
oRadius: 0.476,
eccentricity: 0.35,
oPeriod: 123,
oPeriodUnits: "days",
detectionMethod: "Radial Velocity",
star: "G-type",
distance: 28,
starName: "61 Virginis",
starMass: 0.95,
starRadius: 0.96},

{name: "CoRoT-7 b",
source: "img/corot-7b.JPG",
type: "Super Earth",
loadName: "super-earth",
desc: "CoRoT-7 b is a super Earth exoplanet that orbits a G-type star. Its mass is 3.1783 Earths, it takes 0.9 days to complete one orbit of its star, and is 0.017016 AU from its star. Its discovery was announced in 2009.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/1242/corot-7-b/",
marker:"corot7b",
date: 2009,
mass: 3.1783,
pRadius: 1.681,
massRadUnits: "Earth",
oRadius: 0.017016,
eccentricity: 0.0,
oPeriod: 0.9,
oPeriodUnits: "days",
detectionMethod: "Transit",
star: "G-type",
distance: 524,
starName: "CoRoT-7",
starMass: 0.91,
starRadius: 0.82},

{name: "EPIC 201833600 c",
source: "img/epic201833600c.JPG",
type: "Terrestrial",
loadName: "terrestrial",
desc: "EPIC 201833600 c is a terrestrial exoplanet that orbits a K-type star. Its mass is 0.972 Earths and it takes 4 days to complete one orbit of its star. Its discovery was announced in 2019.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7394/epic-201833600-c/",
marker:"epic201833600c",
date: 2019,
mass: 0.972,
pRadius: 1.0,
massRadUnits: "Earth",
oRadius: "Unknown",
eccentricity: 0.0,
oPeriod: 4,
oPeriodUnits: "days",
detectionMethod: "Transit",
star: "K-type",
distance: "",
starName: "EPIC 201833600",
starMass: 0.61,
starRadius: 0.63},

{name: "HD 189733 b",
source: "img/hd189733b.JPG",
type: "Gas Giant",
loadName: "gas-giant",
desc: "HD 189733 b is a gas giant exoplanet that orbits a G-type star. Its mass is 1.13 Jupiters, it takes 2.2 days to complete one orbit of its star, and is 0.0313 AU from its star. Its discovery was announced in 2005.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/6876/hd-189733-b/",
marker:"hd189733b",
date: 2005,
mass: 1.13,
pRadius: 1.13,
massRadUnits: "Jupiter",
oRadius: 0.0313,
eccentricity: 0.0,
oPeriod: 2.2,
oPeriodUnits: "days",
detectionMethod: "Radial Velocity",
star: "G-type",
distance: 65,
starName: "HD 189733",
starMass: 0.79,
starRadius: 0.75},
//Here
{name: "BD-06 1339 b",
source: "img/bd-061339b.JPG",
type: "Neptune-Like",
loadName: "neptune-like",
desc: "BD-06 1339 b is a Neptune-like exoplanet that orbits a K-type star. Its mass is 8.5 Earths, it takes 3.9 days to complete one orbit of its star, and is 0.0428 AU from its star. Its discovery was announced in 2013.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7073/bd-06-1339-b/",
marker:"bd061339b",
date: 2013,
mass: 8.5,
pRadius: 2.787,
massRadUnits: "Earth",
oRadius: 0.0428,
eccentricity: 0.0,
oPeriod: 3.9,
oPeriodUnits: "days",
detectionMethod: "Radial Velocity",
star: "K-type",
distance: 66,
starName: "BD-06 1339",
starMass: 0.7,
starRadius: 0.67},

{name: "BD-08 2823 b",
source: "img/bd-082823b.JPG",
type: "Neptune-Like",
loadName: "neptune-like",
desc: "BD-08 2823 b is a Neptune-like exoplanet that orbits a K-type star. Its mass is 12.7132 Earths, it takes 5.6 days to complete one orbit of its star, and is 0.06 AU from its star. Its discovery was announced in 2009.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7071/bd-08-2823-b/",
marker:"bd082823b",
date: 2009,
mass: 12.7132,
pRadius: 3.53,
massRadUnits: "Earth",
oRadius: 0.06,
eccentricity: 0.15,
oPeriod: 5.6,
oPeriodUnits: "days",
detectionMethod: "Radial Velocity",
star: "K-type",
distance: 135,
starName: "BD-08 2823",
starMass: "uk",
starRadius: "uk"},

{name: "BD+20 594 b",
source: "img/bd+20594b.JPG",
type: "Neptune-Like",
loadName: "neptune-like",
desc: "BD+20 594 b is a Neptune-like exoplanet that orbits a G-type star. Its mass is 22.2481 Earths, it takes 41.7 days to complete one orbit of its star, and is 0.241 AU from its star. Its discovery was announced in 2016.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7166/bd20-594-b/",
marker:"bd20594b",
date: "",
mass: "",
pRadius: "",
massRadUnits: "",
oRadius: "",
eccentricity: "",
oPeriod: "",
oPeriodUnits: "",
detectionMethod: "",
star: "G-type",
distance: "",
starName: "BD+20 594",
starMass: "uk",
starRadius: "uk"},

{name: "EPIC 201238110 b",
source: "img/epic201238110b.JPG",
type: "Super-Earth",
loadName: "super-earth",
desc: "EPIC 201238110 b is a super Earth exoplanet that orbits a K-type star. Its mass is 4.16 Earths and it takes 28.2 days to complete one orbit of its star. Its discovery was announced in 2019.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7390/epic-201238110-b/",
marker:"epic201238110b",
date: "",
mass: "",
pRadius: "",
massRadUnits: "",
oRadius: "",
eccentricity: "",
oPeriod: "",
oPeriodUnits: "",
detectionMethod: "",
star: "K-type",
distance: "",
starName: "EPIC 201238110",
starMass: "uk" ,
starRadius: "uk"},

{name: "EPIC 201615463 c",
source: "img/epic201615463c.JPG",
type: "Super-Earth",
loadName: "super-earth",
desc: "EPIC 201615463 c is a super Earth exoplanet that orbits a G-type star. Its mass is 1.98 Earths and it takes 3.8 days to complete one orbit of its star. Its discovery was announced in 2019.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7392/epic-201615463-c/",
marker:"epic201615463c",
date: "",
mass: "",
pRadius: "",
massRadUnits: "",
oRadius: "",
eccentricity: "",
oPeriod: "",
oPeriodUnits: "",
detectionMethod: "",
star: "G-type",
distance: "",
starName: "EPIC 201615463",
starMass: "uk",
starRadius: "uk"},

{name: "EPIC 201754305 d",
source: "img/epic201754305d.JPG",
type: "Super-Earth",
loadName: "super-earth",
desc: "EPIC 201754305 d is a super Earth exoplanet that orbits a K-type star. Its mass is 1.08 Earths and it takes 2.7 days to complete one orbit of its star. Its discovery was announced in 2019.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7393/epic-201754305-d/",
marker:"epic201754305d",
date: "",
mass: "",
pRadius: "",
massRadUnits: "",
oRadius: "",
eccentricity: "",
oPeriod: "",
oPeriodUnits: "",
detectionMethod: "",
star: "K-type",
distance: "",
starName: "EPIC 201754305",
starMass: "uk",
starRadius: "uk"},

{name: "EPIC 201841433 b",
source: "img/epic201841433b.JPG",
type: "Super-Earth",
loadName: "super-earth",
desc: "EPIC 201841433 b is a super Earth exoplanet that orbits a G-type star. Its mass is 1.37 Earths and it takes 4.2 days to complete one orbit of its star. Its discovery was announced in 2019.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7395/epic-201841433-b/",
marker:"epic201841433b",
date: "",
mass: "",
pRadius: "",
massRadUnits: "",
oRadius: "",
eccentricity: "",
oPeriod: "",
oPeriodUnits: "",
detectionMethod: "",
star: "G-type",
distance: "",
starName: "EPIC 201841433",
starMass: "uk",
starRadius: "uk"},

{name: "EPIC 206215704 b",
source: "img/epic206215704b.JPG",
type: "Terrestrial",
loadName: "terrestrial",
desc: "EPIC 206215704 b is a terrestrial exoplanet that orbits a K-type star. Its mass is 0.666 Earths and it takes 2.3 days to complete one orbit of its star. Its discovery was announced in 2019.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7400/epic-206215704-b/",
marker:"epic206215704b",
date: "",
mass: "",
pRadius: "",
massRadUnits: "",
oRadius: "",
eccentricity: "",
oPeriod: "",
oPeriodUnits: "",
detectionMethod: "",
star: "K-type",
distance: "",
starName: "EPIC 206215704",
starMass: "uk",
starRadius: "uk"},

{name: "EPIC 206317286 b",
source: "img/epic206317286b.JPG",
type: "Terrestrial",
loadName: "terrestrial",
desc: "EPIC 206317286 b is a terrestrial exoplanet that orbits a G-type star. Its mass is 0.84 Earths and it takes 1.6 days to complete one orbit of its star. Its discovery was announced in 2019.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7401/epic-206317286-b/",
marker:"epic206317286b",
date: "",
mass: "",
pRadius: "",
massRadUnits: "",
oRadius: "",
eccentricity: "",
oPeriod: "",
oPeriodUnits: "",
detectionMethod: "",
star: "G-type",
distance: "",
starName: "EPIC 206317286",
starMass: "uk",
starRadius: "uk"},

{name: "K2-116 b",
source: "img/k2-116b.JPG",
type: "Terrestrial",
loadName: "terrestrial",
desc: "K2-116 b is a terrestrial exoplanet that orbits a K-type star. Its mass is 0.257 Earths, it takes 4.7 days to complete one orbit of its star, and is 0.048 AU from its star. Its discovery was announced in 2017.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/6039/k2-116-b/",
marker:"k2116b",
date: "",
mass: "",
pRadius: "",
massRadUnits: "",
oRadius: "",
eccentricity: "",
oPeriod: "",
oPeriodUnits: "",
detectionMethod: "",
star: "K-type",
distance: "",
starName: "K2-116",
starMass: "uk",
starRadius: "uk"},

{name: "K2-137 b",
source: "img/k2-137b.JPG",
type: "Terrestrial",
loadName: "terrestrial",
desc: "K2-137 b is a terrestrial exoplanet that orbits a M-type star. Its mass is 0.5 Jupiters, it takes 0.2 days to complete one orbit of its star, and is 0.0058 AU from its star. Its discovery was announced in 2017.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/6071/k2-137-b/",
marker:"k2137b",
date: "",
mass: "",
pRadius: "",
massRadUnits: "",
oRadius: "",
eccentricity: "",
oPeriod: "",
oPeriodUnits: "",
detectionMethod: "",
star: "M-type",
distance: "",
starName: "K2-137",
starMass: "uk",
starRadius: "uk"},

{name: "K2-136 b",
source: "img/k2-136b.JPG",
type: "Terrestrial",
loadName: "terrestrial",
desc: "K2-136 b is a terrestrial exoplanet that orbits a K-type star. Its mass is 0.937 Earths and it takes 8 days to complete one orbit of its star. Its discovery was announced in 2017.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/6068/k2-136-b/",
marker:"k2136b",
date: 2017,
mass: 0.937,
pRadius: 0.99,
massRadUnits: "Earth",
oRadius: "Unknown",
eccentricity: 0.1,
oPeriod: 8,
oPeriodUnits: "days",
detectionMethod: "Transit",
star: "K-Type",
distance: 194,
starName: "K2-136",
starMass: "uk",
starRadius: "uk"},

{name: "K2-209 b",
source: "img/k2-209b.JPG",
type: "Terrestrial",
loadName: "terrestrial",
desc: "K2-209 b is a terrestrial exoplanet that orbits a K-type star. Its mass is 0.586 Earths and it takes 2.1 days to complete one orbit of its star. Its discovery was announced in 2018.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/6239/k2-209-b/",
marker:"k2209b",
date: 2018,
mass: 0.586,
pRadius: 0.869,
massRadUnits: "Earth",
oRadius: "Unknown",
eccentricity: 0.0,
oPeriod: 2.1,
oPeriodUnits: "days",
detectionMethod: "Transit",
star: "K-Type",
distance: 250,
starName: "K2-209",
starMass: "uk",
starRadius: "uk"},

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
	var bblock=document.createElement("div");
	var breaks = document.createElement("br");

	shed.appendChild(plname);
	para.appendChild(text);
	btn1.appendChild(bname1);
	btn2.appendChild(bname2);
	bblock.appendChild(btn1);
	bblock.appendChild(btn2);

	cap.appendChild(shed);
	cap.appendChild(para);
	cap.appendChild(breaks);
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
	btn2.target="_blank";
	pic.src=exo[i].source;
	btn1.classList.add("btn");
	btn1.classList.add("btn-primary");
	btn2.classList.add("btn");
	btn2.classList.add("btn-default");
	pic.style.borderRadius="10px";
	bblock.classList.add("btn-group")
}


var mdb = document.getElementsByClassName("modal-trigger");
var header = document.getElementById("planetName");
var paragraph = document.getElementById("modalP");
var footer = document.getElementById("modalF");
var picture = document.getElementById("planetRep");
var fullDesc = document.getElementById("descBox");
var yearInfo = document.getElementById("yearDis");
var plty = document.getElementById("planetType");
var or = document.getElementById("or");
var op = document.getElementById("op");
var oe = document.getElementById("oe");
var pmass = document.getElementById("mass");
var pradius = document.getElementById("radius");
var largePlanet = document.getElementById("largerPlanet");
var smallPlanet = document.getElementById("smallerPlanet")
var sc = document.getElementById("smallCircle");
var sm = document.getElementById("starmass");
var sr = document.getElementById("starradius");
var smallStar = document.getElementById("smallerStar");
var largeStar = document.getElementById("largerStar");
var sc2 = document.getElementById("smallCircle2");
var ukk = document.getElementById("unknownVal1");
var ukk2 = document.getElementById("unknownVal2");
var stype = document.getElementById("startype");
var dis = document.getElementById("distanceFrom");

var cr;
for (var i = 0; i < mdb.length; i++) {
	mdb[i].addEventListener("click", function() {
		for (var j = 0; j < exo.length; j++) {
			if (this.classList.contains(exo[j].marker)) {
				cr = j;
				break;
			}
		}
		if (exo[cr].loadName == "gas-giant") {
			picture.src = "img/cnc/gasgiant.jpg";
		} else if (exo[cr].loadName == "neptune-like") {
			picture.src = "img/cnc/neptunelike.jpg";
		} else if (exo[cr].loadName == "super-earth") {
			picture.src = "img/cnc/superearth.jpg";
		} else if (exo[cr].loadName == "terrestrial") {
			picture.src = "img/cnc/terrestrial.jpg";
		} else {
			picture.src = "img/cnc/unknown.jpg";
		}
		header.innerHTML = exo[cr].name;
		fullDesc.innerHTML = exo[cr].desc;
		yearInfo.innerHTML = exo[cr].date;
		plty.innerHTML = exo[cr].type;
		or.innerHTML = exo[cr].oRadius;
		op.innerHTML = exo[cr].oPeriod + " " + exo[cr].oPeriodUnits;
		oe.innerHTML = exo[cr].eccentricity;
		pmass.innerHTML = exo[cr].mass + " x " + exo[cr].massRadUnits + "s" ;
		pradius.innerHTML = exo[cr].pRadius + " x " + exo[cr].massRadUnits;
		sm.innerHTML = exo[cr].starMass + " x Our Sun";
		sr.innerHTML = exo[cr].starRadius + " x Our Sun";
		stype.innerHTML = exo[cr].star;
		dis.innerHTML = exo[cr].distance + " " + "light years";

		if (exo[cr].star == "O-type") {
			stype.style.color = "#004eff";
		} else if (exo[cr].star =="B-type") {
			stype.style.color = "#b6deff"
		} else if (exo[cr].star == "A-type") {
			stype.style.color = "#ffffff"
		} else if (exo[cr].star =="F-type") {
			stype.style.color = "#f9f3b1"
		} else if (exo[cr].star == "G-type") {
			stype.style.color = "#fff700"
		} else if (exo[cr].star == "K-type") {
			stype.style.color = "#ffa500"
		} else if (exo[cr].star == "M-type") {
			stype.style.color = "#d60000"
		} else if (exo[cr].star == "unknown") {
			stype.style.color = "#7b7b7b"
		}


		if (exo[cr].pRadius >= 1) {
			var x = 133 * (1/exo[cr].pRadius);
			x=String(x) + "px"
			largePlanet.innerHTML = exo[cr].name;
			smallPlanet.innerHTML = exo[cr].massRadUnits;
			sc.style.width = x;
			sc.style.height = x;

		} else {
			largePlanet.innerHTML = exo[cr].massRadUnits;
			smallPlanet.innerHTML = exo[cr].name;
			var x = 133 * exo[cr].pRadius;
			x=String(x) + "px"
			sc.style.width = x;
			sc.style.height = x;
		}
		if (exo[cr].starRadius >= 1) {
			largeStar.innerHTML = exo[cr].starName;
			smallStar.innerHTML = "Our Sun"
			var y = 133 * (1/exo[cr].starRadius);
			y=String(y) + "px"
			sc2.style.width = y;
			sc2.style.height = y;
		} else {
			smallStar.innerHTML = exo[cr].starName;
			largeStar.innerHTML = "Our Sun"
			var y = 133 * exo[cr].starRadius;
			y=String(y) + "px"
			sc2.style.width = y;
			sc2.style.height = y;
		}

		if (exo[cr].starRadius=="unknown") {
			sc2.style.display = "none";
			ukk2.style.display = "block";
		} else {
			sc2.style.display = "block";
			ukk2.style.display = "none";
		}

		if (exo[cr].pRadius=="unknown") {
			sc.style.display = "none";
			ukk.style.display = "block";
		} else {
			sc.style.display = "block";
			ukk.style.display = "none";
		}
	});
}
