var curr;
const exo = [
//0
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
//1
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
//2
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
//3
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
//4
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
//5
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
//6
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
//7
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
//8
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
//9
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
//10
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
//11
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
//12
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
//13
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
//14
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
//15
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
starMass: 0.5,
starRadius: 0.71},
//16
{name: "BD+20 594 b",
source: "img/bd+20594b.JPG",
type: "Neptune-Like",
loadName: "neptune-like",
desc: "BD+20 594 b is a Neptune-like exoplanet that orbits a G-type star. Its mass is 22.2481 Earths, it takes 41.7 days to complete one orbit of its star, and is 0.241 AU from its star. Its discovery was announced in 2016.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7166/bd20-594-b/",
marker:"bd20594b",
date: 2016,
mass: 22.2481,
pRadius: 2.52,
massRadUnits: "Earth",
oRadius: 0.241,
eccentricity: 0.0,
oPeriod: 41.7,
oPeriodUnits: "days",
detectionMethod: "Transit",
star: "G-type",
distance: 588,
starName: "BD+20 594",
starMass: 1.67,
starRadius: 1.08},
//17
{name: "EPIC 201238110 b",
source: "img/epic201238110b.JPG",
type: "Super-Earth",
loadName: "super-earth",
desc: "EPIC 201238110 b is a super Earth exoplanet that orbits a K-type star. Its mass is 4.16 Earths and it takes 28.2 days to complete one orbit of its star. Its discovery was announced in 2019.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7390/epic-201238110-b/",
marker:"epic201238110b",
date: 2019,
mass: 4.16,
pRadius: 1.87,
massRadUnits: "Earth",
oRadius: "Unknown",
eccentricity: 0.0,
oPeriod: 28.2,
oPeriodUnits: "days",
detectionMethod: "Transit",
star: "K-type",
distance: 522,
starName: "EPIC 201238110",
starMass: "unknown",
starRadius: "unknown"},
//18
{name: "EPIC 201615463 c",
source: "img/epic201615463c.JPG",
type: "Super-Earth",
loadName: "super-earth",
desc: "EPIC 201615463 c is a super Earth exoplanet that orbits a G-type star. Its mass is 1.98 Earths and it takes 3.8 days to complete one orbit of its star. Its discovery was announced in 2019.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7392/epic-201615463-c/",
marker:"epic201615463c",
date: 2019,
mass: 1.98,
pRadius: 1.22,
massRadUnits: "Earth",
oRadius: "Unknown",
eccentricity: 0.0,
oPeriod: 3.8,
oPeriodUnits: "days",
detectionMethod: "Transit",
star: "G-type",
distance: 1569,
starName: "EPIC 201615463",
starMass: 1.07,
starRadius: 1.6},
//19
{name: "EPIC 201754305 d",
source: "img/epic201754305d.JPG",
type: "Super-Earth",
loadName: "super-earth",
desc: "EPIC 201754305 d is a super Earth exoplanet that orbits a K-type star. Its mass is 1.08 Earths and it takes 2.7 days to complete one orbit of its star. Its discovery was announced in 2019.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7393/epic-201754305-d/",
marker:"epic201754305d",
date: 2019,
mass: 1.08,
pRadius: 1.03,
massRadUnits: "Earth",
oRadius: "Unknown",
eccentricity: 0.0,
oPeriod: 2.7,
oPeriodUnits: "days",
detectionMethod: "Transit",
star: "K-type",
distance: 1103,
starName: "EPIC 201754305",
starMass: 0.67,
starRadius: 0.54},
//20
{name: "EPIC 201841433 b",
source: "img/epic201841433b.JPG",
type: "Super-Earth",
loadName: "super-earth",
desc: "EPIC 201841433 b is a super Earth exoplanet that orbits a G-type star. Its mass is 1.37 Earths and it takes 4.2 days to complete one orbit of its star. Its discovery was announced in 2019.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7395/epic-201841433-b/",
marker:"epic201841433b",
date: 2019,
mass: 1.37,
pRadius: 1.1,
massRadUnits: "Earth",
oRadius: "Unknown",
eccentricity: 0.0,
oPeriod: 4.2,
oPeriodUnits: "days",
detectionMethod: "Transit",
star: "G-type",
distance: 1442,
starName: "EPIC 201841433",
starMass: 0.8,
starRadius: 0.63},
//21
{name: "EPIC 206215704 b",
source: "img/epic206215704b.JPG",
type: "Terrestrial",
loadName: "terrestrial",
desc: "EPIC 206215704 b is a terrestrial exoplanet that orbits a K-type star. Its mass is 0.666 Earths and it takes 2.3 days to complete one orbit of its star. Its discovery was announced in 2019.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7400/epic-206215704-b/",
marker:"epic206215704b",
date: 2019,
mass: 0.666,
pRadius: 0.9,
massRadUnits: "Earth",
oRadius: "Unknown",
eccentricity: 0.0,
oPeriod: 2.3,
oPeriodUnits: "days",
detectionMethod: "Transit",
star: "K-type",
distance: 306,
starName: "EPIC 206215704",
starMass: "unknown",
starRadius: "unknown"},
//22
{name: "EPIC 206317286 b",
source: "img/epic206317286b.JPG",
type: "Terrestrial",
loadName: "terrestrial",
desc: "EPIC 206317286 b is a terrestrial exoplanet that orbits a G-type star. Its mass is 0.84 Earths and it takes 1.6 days to complete one orbit of its star. Its discovery was announced in 2019.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7401/epic-206317286-b/",
marker:"epic206317286b",
date: 2019,
mass: 0.84,
pRadius: 0.96,
massRadUnits: "Earth",
oRadius: "Unknown",
eccentricity: 0.0,
oPeriod: 1.6,
oPeriodUnits: "days",
detectionMethod: "Transit",
star: "G-type",
distance: 1035,
starName: "EPIC 206317286",
starMass: 0.71,
starRadius: 0.67},
//23
{name: "K2-116 b",
source: "img/k2-116b.JPG",
type: "Terrestrial",
loadName: "terrestrial",
desc: "K2-116 b is a terrestrial exoplanet that orbits a K-type star. Its mass is 0.257 Earths, it takes 4.7 days to complete one orbit of its star, and is 0.048 AU from its star. Its discovery was announced in 2017.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/6039/k2-116-b/",
marker:"k2116b",
date: 2017,
mass: 0.257,
pRadius: 0.69,
massRadUnits: "Earth",
oRadius: 0.048,
eccentricity: 0.06,
oPeriod: 4.7,
oPeriodUnits: "days",
detectionMethod: "Transit",
star: "K-type",
distance: 161,
starName: "K2-116",
starMass: 0.69,
starRadius: 0.67},
//24
{name: "K2-137 b",
source: "img/k2-137b.JPG",
type: "Terrestrial",
loadName: "terrestrial",
desc: "K2-137 b is a terrestrial exoplanet that orbits a M-type star. Its mass is 0.5 Jupiters, it takes 0.2 days to complete one orbit of its star, and is 0.0058 AU from its star. Its discovery was announced in 2017.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/6071/k2-137-b/",
marker:"k2137b",
date: 2017,
mass: 0.5,
pRadius: 0.081,
massRadUnits: "Jupiter",
oRadius: 0.0058,
eccentricity: 0.0,
oPeriod: 0.2,
oPeriodUnits: "days",
detectionMethod: "Transit",
star: "M-type",
distance: 323,
starName: "K2-137",
starMass: 0.46,
starRadius: 0.44},
//25
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
starMass: 0.74,
starRadius: 0.66},
//26
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
starMass: 0.74,
starRadius: 0.71},
//27
{name: "18 Delphini b",
source: "img/18delphinib.JPG",
type: "Gas Giant",
loadName: "gas-giant",
desc: "18 Delphini b is a gas giant exoplanet that orbits a K-type star. Its mass is 10.3 Jupiters, it takes 2.7 years to complete one orbit of its star, and is 2.6 AU from its star. Its discovery was announced in 2008.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/6993/18-delphini-b/",
marker: "18delphinib",
date: 2008,
mass: 10.3,
pRadius: 1.11,
massRadUnits: "Jupiter",
oRadius: 2.6,
eccentricity: 0.08,
oPeriod: 2.7,
oPeriodUnits: "years",
detectionMethod: "Radial Velocity",
star: "K-type",
distance: 249,
starName: "18 Delphini",
starMass: 2.3,
starRadius: 8.5},
//28
{name: "1RXS J160929.1-210524 b",
source: "img/1rxsj160929.1-210524b.JPG",
type: "Gas Giant",
loadName: "gas-giant",
desc: "1RXS J160929.1-210524 b is a gas giant exoplanet that orbits a K-type star. Its mass is 8 Jupiters, it takes 6505.9 years to complete one orbit of its star, and is 330 AU from its star. Its discovery was announced in 2008.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7061/1rxs-j1609291-210524-b/",
marker: "1rxsj160929.1-210524b",
date: 2008,
mass: 8,
pRadius: 1.664,
massRadUnits: "Jupiter",
oRadius: 330,
eccentricity: 0.0,
oPeriod: 6505.9,
oPeriodUnits: "years",
detectionMethod: "Direct Imaging",
star: "K-type",
distance: 473,
starName: "1RXS J160929.1-210524",
starMass: 0.85,
starRadius: 1.18},
//29
{name: "24 Bootis b",
source: "img/24bootisb.JPG",
type: "Gas Giant",
loadName: "gas-giant",
desc: "24 Bootis b is a gas giant exoplanet that orbits a K-type star. Its mass is 0.91 Jupiters, it takes 30.4 days to complete one orbit of its star, and is 0.19 AU from its star. Its discovery was announced in 2018.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7274/24-bootis-b/",
marker: "24bootisb",
date: 2018,
mass: 0.91,
pRadius: 1.24,
massRadUnits: "Jupiter",
oRadius: 0.19,
eccentricity: 0.04,
oPeriod: 30.4,
oPeriodUnits: "days",
detectionMethod: "Radial Velocity",
star: "K-type",
distance: 314,
starName: "24 Bootis",
starMass: 0.99,
starRadius: 10.64},
//30
{name: "24 Sextantis b",
source: "img/24sextantisb.JPG",
type: "Gas Giant",
loadName: "gas-giant",
desc: "24 Sextantis b is a gas giant exoplanet that orbits a G-type star. Its mass is 1.99 Jupiters, it takes 452.8 days to complete one orbit of its star, and is 1.333 AU from its star. Its discovery was announced in 2010.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/6994/24-sextantis-b/",
marker: "24sextantisb",
date: 2010,
mass: 1.99,
pRadius: 1.19,
massRadUnits: "Jupiter",
oRadius: 1.333,
eccentricity: 0.09,
oPeriod: 452.8,
oPeriodUnits: "days",
detectionMethod: "Radial Velocity",
star: "G-type",
distance: 235,
starName: "24 Sextantis",
starMass: 1.54,
starRadius: 4.9},
//31
{name: "24 Sextantis c",
source: "img/24sextantisc.JPG",
type: "Gas Giant",
loadName: "gas-giant",
desc: "24 Sextantis c is a gas giant exoplanet that orbits a G-type star. Its mass is 0.86 Jupiters, it takes 2.4 years to complete one orbit of its star, and is 2.08 AU from its star. Its discovery was announced in 2010.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/6994/24-sextantis-c/",
marker: "24sextantisc",
date: 2010,
mass: 0.86,
pRadius: 1.24,
massRadUnits: "Jupiter",
oRadius: 2.08,
eccentricity: 0.29,
oPeriod: 2.4,
oPeriodUnits: "years",
detectionMethod: "Radial Velocity",
star: "G-type",
distance: 235,
starName: "24 Sextantis",
starMass: 1.54,
starRadius: 4.9},
//32
{name: "2MASS J01225093-2439505 b",
source: "img/2massj01225093-2439595b.JPG",
type: "Gas Giant",
loadName: "gas-giant",
desc: "2MASS J01225093-2439505 b is a gas giant exoplanet that orbits a K-type star. Its mass is 24.5 Jupiters, it takes 593.2 years to complete one orbit of its star, and is 52 AU from its star. Its discovery was announced in 2013.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7062/2mass-j01225093-2439505-b/",
marker: "2massj01225093-2439595b",
date: 2013,
mass: 24.5,
pRadius: 1.0,
massRadUnits: "Jupiter",
oRadius: 52.0,
eccentricity: 0.0,
oPeriod: 593.2,
oPeriodUnits: "years",
detectionMethod: "Direct Imaging",
star: "K-type",
distance: 117,
starName: "2MASS J01225093-2439505",
starMass: "unknown",
starRadius: "unknown"},
//33
{name: "2MASS J02192210-3925225 b",
source: "img/2massj02192210-3925225b.JPG",
type: "Gas Giant",
loadName: "gas-giant",
desc: "2MASS J02192210-3925225 b is a gas giant exoplanet that orbits a M-type star. Its mass is 13.9 Jupiters, it takes 5878.1 years to complete one orbit of its star, and is 156 AU from its star. Its discovery was announced in 2015.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7063/2mass-j02192210-3925225-b/",
marker: "2massj02192210-3925225b",
date: 2015,
mass: 13.9,
pRadius: 1.44,
massRadUnits: "Jupiter",
oRadius: 156.0,
eccentricity: 0.0,
oPeriod: 5878.1,
oPeriodUnits: "years",
detectionMethod: "Direct Imaging",
star: "M-type",
distance: 128,
starName: "2MASS J02192210-3925225",
starMass: 0.11,
starRadius: 0.28},
//34
{name: "2MASS J04414489+2301513 b",
source: "img/2massj04414489+2301513b.JPG",
type: "Gas Giant",
loadName: "gas-giant",
desc: "2MASS J04414489+2301513 b is a gas giant exoplanet that orbits an unknown-type star. Its mass is 7.5 Jupiters, it takes 411 years to complete one orbit of its star, and is 15 AU from its star. Its discovery was announced in 2010.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7064/2mass-j044144892301513-b/",
marker: "2massj04414489+2301513b",
date: 2010,
mass: 7.5,
pRadius: 1.13,
massRadUnits: "Jupiter",
oRadius: 15.0,
eccentricity: 0.0,
oPeriod: 411,
oPeriodUnits: "years",
detectionMethod: "Direct Imaging",
star: "unknown",
distance: 457,
starName: "2MASS J04414489+2301513",
starMass: "unknown",
starRadius: "unknown"},
//35
{name: "2MASS J12073346-3932539 b",
source: "img/2massj12073346-3932539b.JPG",
type: "Gas Giant",
loadName: "gas-giant",
desc: "2MASS J12073346-3932539 b is a gas giant exoplanet that orbits an unknown-type star. Its mass is 4 Jupiters, it takes 2207.3 years to complete one orbit of its star, and is 46 AU from its star. Its discovery was announced in 2004.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7065/2mass-j12073346-3932539-b/",
marker: "2massj12073346-3932539b",
date: 2004,
mass: 4,
pRadius: 1.16,
massRadUnits: "Jupiter",
oRadius: 46.0,
eccentricity: 0.0,
oPeriod: 2207.3,
oPeriodUnits: "years",
detectionMethod: "Direct Imaging",
star: "unknown",
distance: 210,
starName: "2MASS J12073346-3932539",
starMass: "unknown",
starRadius: "unknown"},
//36
{name: "2MASS J19383260+4603591 b",
source: "img/2massj19383260+4603591b.JPG",
type: "Gas Giant",
loadName: "gas-giant",
desc: "2MASS J19383260+4603591 b is a gas giant exoplanet that orbits an A-type star. Its mass is 1.9 Jupiters, it takes 416 days to complete one orbit of its star, and is 0.92 AU from its star. Its discovery was announced in 2015.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7108/2mass-j193832604603591-b/",
marker: "2massj19383260+4603591b",
date: 2015,
mass: 1.9,
pRadius: 1.2,
massRadUnits: "Jupiter",
oRadius: 0.92,
eccentricity: 0.0,
oPeriod: 416,
oPeriodUnits: "days",
detectionMethod: "Eclipse Timing Variations",
star: "A-type",
distance: 1307,
starName: "2MASS J19383260+4603591",
starMass: 0.48,
starRadius: 0.34},
//37
{name: "2MASS J21402931+1625183 A b",
source: "img/2massj21402931+1625183ab.JPG",
type: "Gas Giant",
loadName: "gas-giant",
desc: "2MASS J21402931+1625183 A b is a gas giant exoplanet that orbits a M-type star. Its mass is 20.95 Jupiters and it takes 20.1 years to complete one orbit of its star. Its discovery was announced in 2009.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7066/2mass-j214029311625183-a-b/",
marker: "2massj21402931+1625183ab",
date: 2009,
mass: 20.95,
pRadius: 0.92,
massRadUnits: "Jupiter",
oRadius: "Unknown",
eccentricity: 0.26,
oPeriod: 20.1,
oPeriodUnits: "years",
detectionMethod: "Direct Imaging",
star: "M-type",
distance: 82,
starName: "2MASS J21402931+1625183 A",
starMass: 0.08,
starRadius: 0.12},
//38
{name: "2MASS J22362452+4751425 b",
source: "img/2massj22362452+4751425b.JPG",
type: "Gas Giant",
loadName: "gas-giant",
desc: "2MASS J22362452+4751425 b is a gas giant exoplanet that orbits a K-type star. Its mass is 12.5 Jupiters, it takes 4505.7 years to complete one orbit of its star, and is 230 AU from its star. Its discovery was announced in 2016.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7239/2mass-j223624524751425-b/",
marker: "2massj22362452+4751425b",
date: 2016,
mass: 12.5,
pRadius: 1.1,
massRadUnits: "Jupiter",
oRadius: 230.0,
eccentricity: 0.0,
oPeriod: 4505.7,
oPeriodUnits: "years",
detectionMethod: "Direct Imaging",
star: "K-type",
distance: 241,
starName: "2MASS J22362452+4751425",
starMass: 0.6,
starRadius: 0.62},
//39
{name: "30 Arietis B b",
source: "img/30arietisbb.JPG",
type: "Gas Giant",
loadName: "gas-giant",
desc: "30 Arietis B b is a gas giant exoplanet that orbits a F-type star. Its mass is 13.82 Jupiters, it takes 335.1 days to complete one orbit of its star, and is 0.99 AU from its star. Its discovery was announced in 2009.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7239/2mass-j223624524751425-b/",
marker: "30arietisbb",
date: 2009,
mass: 13.82,
pRadius: 1.1,
massRadUnits: "Jupiter",
oRadius: 0.99,
eccentricity: 0.29,
oPeriod: 335.1,
oPeriodUnits: "days",
detectionMethod: "Radial Velocity",
star: "F-type",
distance: 146,
starName: "30 Arietis B",
starMass: 1.93,
starRadius: 1.41},
//40
{name: "HIP 78530 b",
source: "img/hip78530b.JPG",
type: "Gas-Giant",
loadName: "gas-giant",
desc: "HIP 78530 b is an object that is either a planet or a brown dwarf in the orbit of the star HIP 78530. It was observed as early as 2000, but the object was not confirmed as one in orbit of the star HIP 78530 until a direct imaging project photographed the star in 2008. HIP 78530 b orbits a young, hot, bright blue star in the Upper Scorpius association. The planet itself is over twenty-three times more massive than Jupiter, orbiting eighteen times further from its host star than Pluto does from the Sun by the estimates published in its discovery paper. In this predicted orbit, HIP 78530 b completes an orbit every twelve thousand years.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7239/2mass-j223624524751425-b/",
marker: "hip78530b",
date: 2010,
mass: 23,
pRadius: 1.07,
massRadUnits: "Jupiter",
oRadius: 740,
eccentricity: 0.0,
oPeriod: 12738.7,
oPeriodUnits: "years",
detectionMethod: "Direct Imaging",
star: "B-type",
distance: 511,
starName: "HIP 78530",
starMass: 2.5,
starRadius: "unknown"},
//41
{name: "42 Draconis b",
source: "img/42draconisb.JPG",
type: "Gas-Giant",
loadName: "gas-giant",
desc: "42 Draconis b is a gas giant exoplanet that orbits a K-type star. Its mass is 3.88 Jupiters, it takes 479.1 days to complete one orbit of its star, and is 1.19 AU from its star. Its discovery was announced in 2008.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/6997/42-draconis-b/",
marker: "42draconisb",
date: 2008,
mass: 3.88,
pRadius: 1.16,
massRadUnits: "Jupiter",
oRadius: 1.19,
eccentricity: 0.38,
oPeriod: 479.1,
oPeriodUnits: "days",
detectionMethod: "Radial Velocity",
star: "K-type",
distance: 296,
starName: "42 Draconis",
starMass: 0.98,
starRadius: 22.03},
//42
{name: "47 Ursae Majoris b",
source: "img/47ursaemajorisb.JPG",
type: "Gas-Giant",
loadName: "gas-giant",
desc: "47 Ursae Majoris b is a gas giant exoplanet that orbits a G-type star. Its mass is 2.53 Jupiters, it takes 3 years to complete one orbit of its star, and is 2.1 AU from its star. Its discovery was announced in 1996.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/6998/47-ursae-majoris-b/",
marker: "47ursaemajorisb",
date: 1996,
mass: 2.53,
pRadius: 1.18,
massRadUnits: "Jupiter",
oRadius: 2.1,
eccentricity: 0.03,
oPeriod: 3,
oPeriodUnits: "years",
detectionMethod: "Radial Velocity",
star: "G-type",
distance: 45,
starName: "47 Ursae Majoris",
starMass: 1.03,
starRadius: 1.23},
//43
{name: "47 Ursae Majoris c",
source: "img/47ursaemajorisc.JPG",
type: "Gas-Giant",
loadName: "gas-giant",
desc: "47 Ursae Majoris c is a gas giant exoplanet that orbits a G-type star. Its mass is 0.54 Jupiters, it takes 6.6 years to complete one orbit of its star, and is 3.6 AU from its star. Its discovery was announced in 2001.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/6998/47-ursae-majoris-b/",
marker: "47ursaemajorisc",
date: 2001,
mass: 0.54,
pRadius: 1.27,
massRadUnits: "Jupiter",
oRadius: 3.6,
eccentricity: 0.1,
oPeriod: 6.6,
oPeriodUnits: "years",
detectionMethod: "Radial Velocity",
star: "G-type",
distance: 45,
starName: "47 Ursae Majoris",
starMass: 1.03,
starRadius: 1.23},
//44
{name: "47 Ursae Majoris d",
source: "img/47ursaemajorisd.JPG",
type: "Gas-Giant",
loadName: "gas-giant",
desc: "47 Ursae Majoris d is a gas giant exoplanet that orbits a G-type star. Its mass is 1.64 Jupiters, it takes 38.4 years to complete one orbit of its star, and is 11.6 AU from its star. Its discovery was announced in 2009.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/6999/47-ursae-majoris-d/",
marker: "47ursaemajorisd",
date: 2009,
mass: 1.64,
pRadius: 1.2,
massRadUnits: "Jupiter",
oRadius: 11.6,
eccentricity: 0.16,
oPeriod: 38.4,
oPeriodUnits: "years",
detectionMethod: "Radial Velocity",
star: "G-type",
distance: 45,
starName: "47 Ursae Majoris",
starMass: 1.03,
starRadius: 1.23},
//45
{name: "4 Ursae Majoris b",
source: "img/4ursaemajorisb.JPG",
type: "Gas-Giant",
loadName: "gas-giant",
desc: "4 Ursae Majoris b is a gas giant exoplanet that orbits a K-type star. Its mass is 7.1 Jupiters, it takes 269.3 days to complete one orbit of its star, and is 0.87 AU from its star. Its discovery was announced in 2006.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/6999/4-ursae-majoris-b/",
marker: "4ursaemajorisb",
date: 2006,
mass: 7.1,
pRadius: 1.13,
massRadUnits: "Jupiter",
oRadius: 0.87,
eccentricity: 0.43,
oPeriod: 269.3,
oPeriodUnits: "days",
detectionMethod: "Radial Velocity",
star: "K-type",
distance: 240,
starName: "4 Ursae Majoris",
starMass: 1.23,
starRadius: 18.11},
//46
{name: "CoRoT-22 b",
source: "img/corot-22b.JPG",
type: "Neptune-Like",
loadName: "neptune-like",
desc: "CoRoT-22 b is a Neptune-like exoplanet that orbits a G-type star. Its mass is 12.2 Earths, it takes 9.8 days to complete one orbit of its star, and is 0.092 AU from its star. Its discovery was announced in 2014.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/1334/corot-22-b/",
marker: "corot-22b",
date: 2014,
mass: 12.2,
pRadius: 4.77,
massRadUnits: "Earth",
oRadius: 0.092,
eccentricity: 0.08,
oPeriod: 9.8,
oPeriodUnits: "days",
detectionMethod: "Transit",
star: "G-type",
distance: 1931,
starName: "CoRoT-22",
starMass: 1.1,
starRadius: 1.14},
//47
{name: "CoRoT-24 b",
source: "img/corot-24b.JPG",
type: "Neptune-Like",
loadName: "neptune-like",
desc: "CoRoT-24 b is a Neptune-like exoplanet that orbits a K-type star. Its mass is 5.7 Earths, it takes 5.1 days to complete one orbit of its star, and is 0.056 AU from its star. Its discovery was announced in 2014.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/1334/corot-24-b/",
marker: "corot-24b",
date: 2014,
mass: 5.7,
pRadius: 3.62,
massRadUnits: "Earth",
oRadius: 0.056,
eccentricity: 0.0,
oPeriod: 5.1,
oPeriodUnits: "days",
detectionMethod: "Transit",
star: "K-type",
distance: 1957,
starName: "CoRoT-24",
starMass: 0.91,
starRadius: 0.86},
//48
{name: "CoRoT-24 c",
source: "img/corot-24c.JPG",
type: "Neptune-Like",
loadName: "neptune-like",
desc: "CoRoT-24 c is a Neptune-like exoplanet that orbits a K-type star. Its mass is 28 Earths, it takes 11.8 days to complete one orbit of its star, and is 0.098 AU from its star. Its discovery was announced in 2014.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/1334/corot-24-c/",
marker: "corot-24c",
date: 2014,
mass: 28,
pRadius: 4.8282,
massRadUnits: "Earth",
oRadius: 0.098,
eccentricity: 0.0,
oPeriod: 11.8,
oPeriodUnits: "days",
detectionMethod: "Transit",
star: "K-type",
distance: 1957,
starName: "CoRoT-24",
starMass: 0.91,
starRadius: 0.86},
//49
{name: "HD 97048 b",
source: "img/hd97048b.JPG",
type: "Gas-Giant",
loadName: "gas-giant",
desc: "HD 97048 b is a gas giant exoplanet that orbits an A-type star. Its mass is 2.5 Jupiters, it takes 957.3 years to complete one orbit of its star, and is 130 AU from its star. Its discovery was announced in 2019.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7503/hd-97048-b/",
marker: "hd97048b",
date: 2019,
mass: 2.5,
pRadius: 1.18,
massRadUnits: "Jupiter",
oRadius: 130.0,
eccentricity: 0.0,
oPeriod: 957.3,
oPeriodUnits: "years",
detectionMethod: "Disk Kinematics",
star: "A-type",
distance: 603,
starName: "HD 97048",
starMass: 2.4,
starRadius: 2.25},
//50
{name: "YZ Ceti b",
source: "img/yzcetib.JPG",
type: "Terrestrial",
loadName: "terrestrial",
desc: "YZ Ceti b is a terrestrial exoplanet that orbits a M-type star. Its mass is 0.75 Earths, it takes 2 days to complete one orbit of its star, and is 0.01557 AU from its star. Its discovery was announced in 2017.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7181/yz-ceti-b/",
marker: "yzcetib",
date: 2017,
mass: 0.75,
pRadius: 0.93,
massRadUnits: "Earth",
oRadius: 0.01557,
eccentricity: 0.0,
oPeriod: 2,
oPeriodUnits: "days",
detectionMethod: "Radial Velocity",
star: "M-type",
distance: 12,
starName: "YZ Ceti",
starMass: 0.13,
starRadius: 0.17},
//51
{name: "YZ Ceti c",
source: "img/yzcetic.JPG",
type: "Terrestrial",
loadName: "terrestrial",
desc: "YZ Ceti c is a terrestrial exoplanet that orbits a M-type star. Its mass is 0.98 Earths, it takes 3.1 days to complete one orbit of its star, and is 0.0209 AU from its star. Its discovery was announced in 2017.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7181/yz-ceti-c/",
marker: "yzcetic",
date: 2017,
mass: 0.98,
pRadius: 1.0,
massRadUnits: "Earth",
oRadius: 0.0209,
eccentricity: 0.04,
oPeriod: 3.1,
oPeriodUnits: "days",
detectionMethod: "Radial Velocity",
star: "M-type",
distance: 12,
starName: "YZ Ceti",
starMass: 0.13,
starRadius: 0.17},
//52
{name: "YZ Ceti d",
source: "img/yzcetid.JPG",
type: "Super Earth",
loadName: "super-earth",
desc: "YZ Ceti d is a super Earth exoplanet that orbits a M-type star. Its mass is 1.14 Earths, it takes 4.7 days to complete one orbit of its star, and is 0.02764 AU from its star. Its discovery was announced in 2017.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7181/yz-ceti-d/",
marker: "yzcetid",
date: 2017,
mass: 1.14,
pRadius: 1.05,
massRadUnits: "Earth",
oRadius: 0.02764,
eccentricity: 0.13,
oPeriod: 4.7,
oPeriodUnits: "days",
detectionMethod: "Radial Velocity",
star: "M-type",
distance: 12,
starName: "YZ Ceti",
starMass: 0.13,
starRadius: 0.17},
//53



//Template Dataset
/*{name: "",
source: "",
type: "",
loadName: "",
desc: "",
link: "",
marker: "",
date: ,
mass: ,
pRadius: ,
massRadUnits: "",
oRadius: ,
eccentricity: ,
oPeriod: ,
oPeriodUnits: "",
detectionMethod: "",
star: "",
distance: ,
starName: "",
starMass: ,
starRadius: },*/

]

var devTools = false;

document.addEventListener("keydown", function(event) {
	if(event.key=="Z" && event.shiftKey && !devTools) {
		console.log("Developer Tools Enabled");
    console.log("Current number of entries: " + exo.length)
    console.log("Commands: \n Shift + L - Run copy analysis")
		devTools = true;
	} else if (event.key=="Z" && event.shiftKey) {
		console.log("Developer Tools Disabled");
		devTools = false;
	}
});

document.addEventListener("keydown", function(event) {
	if(event.key=="L" && event.shiftKey && devTools) {
		match = false;
		for (var i=0; i<exo.length; i++) {
			for (var j=0; j<exo.length; j++) {
				if (exo[i].name == exo[j].name && j>i) {
					var finMessage = "Found matching planets: " + exo[i].name + " at indices " + i + " and " + j + ".";
					match = true;
					break;
				}
			}
		}
		if (!match) {
			var finMessage = "No matches observed; OK to proceed.";
		}
		console.log("Program finished.");
		console.log(finMessage);
	}
});

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
	btn1.classList.add("btn-danger");
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
		pmass.innerHTML = exo[cr].mass + " " + exo[cr].massRadUnits + "s" ;
		pradius.innerHTML = exo[cr].pRadius + " x " + exo[cr].massRadUnits;
		sm.innerHTML = exo[cr].starMass + " x Our Sun";
		sr.innerHTML = exo[cr].starRadius + " x Our Sun";
		stype.innerHTML = exo[cr].star;
		dis.innerHTML = exo[cr].distance + " " + "light years";

		if (exo[cr].star == "O-type") {
			stype.style.color = "#004eff";
		} else if (exo[cr].star =="B-type") {
			stype.style.color = "#76bffb"
		} else if (exo[cr].star == "A-type") {
			stype.style.color = "#d9f4ff"
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
