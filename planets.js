var curr;
var firstLoad = true;
let exo = [
//0
{name: "11 Comae Berenices b",
type: "Gas Giant",
desc: "11 Comae Berenices b is a gas giant exoplanet that orbits a K-type star. Its mass is 19.4 Jupiters, it takes 326 days to complete one orbit of its star, and is 1.29 AU from its star. Its discovery was announced in 2007.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/6988/11-comae-berenices-b/",
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
starMass: 2.70,
starRadius: 16.79},
//1
{name: "11 Ursae Minoris b",
type: "Gas Giant",
desc: "11 Ursae Minoris b is a gas giant exoplanet that orbits a K-type star. Its mass is 14.74 Jupiters, it takes 1.4 years to complete one orbit of its star, and is 1.53 AU from its star. Its discovery was announced in 2009.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/6989/11-ursae-minoris-b/",
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
starMass: 1.80,
starRadius: 20.68 },
//2
{name: "EPIC 201497682 b",
type: "Terrestrial",
desc: "EPIC 201497682 b is a terrestrial exoplanet that orbits a K-type star. Its mass is 0.26 Earths and it takes 2.1 days to complete one orbit of its star. Its discovery was announced in 2019.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7391/epic-201497682-b/",
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
starMass: 0.78,
starRadius: 0.55},
//3
{name: "55 Cancri e",
type: "Super Earth",
desc: "55 Cancri e is a super Earth exoplanet that orbits a G-type star. Its mass is 8.08 Earths, it takes 0.7 days to complete one orbit of its star, and is 0.01544 AU from its star. Its discovery was announced in 2004.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7005/55-cancri-e/",
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
starMass: 0.91,
starRadius: 0.95},
//4
{name: "61 Virginis b",
type: "Neptune Like",
desc: "61 Virginis b is a Neptune-like exoplanet that orbits a G-type star. Its mass is 5.1 Earths, it takes 4.2 days to complete one orbit of its star, and is 0.050201 AU from its star. Its discovery was announced in 2009.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7007/61-virginis-b/",
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
starMass: 0.95,
starRadius: 0.96},
//5
{name: "Kepler-37 e",
type: "Unknown",
desc: "Kepler-37 e is an unknown exoplanet that orbits a G-type star. Its mass is Unknown and it takes 51.2 days to complete one orbit of its star. Its discovery was announced in 2014.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/4790/kepler-37-e/",
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
starMass: 0.80,
starRadius: 0.79},
//6
{name: "14 Andromedae b",
type: "Gas Giant",
desc: "14 Andromedae b is a gas giant exoplanet that orbits a K-type star. Its mass is 4.8 Jupiters, it takes 185.8 days to complete one orbit of its star, and is 0.83 AU from its star. Its discovery was announced in 2008.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/6990/14-andromedae-b/",
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
starMass: 2.2,
starRadius: 10.49},
//7
{name: "14 Herculis b",
type: "Gas Giant",
desc: "14 Herculis b is a gas giant exoplanet that orbits a G-type star. Its mass is 4.66 Jupiters, it takes 4.9 years to complete one orbit of its star, and is 2.93 AU from its star. Its discovery was announced in 2002.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/6991/14-herculis-b/",
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
starMass: 0.9,
starRadius: 0.8668},
//8
{name: "16 Cygni B b",
type: "Gas Giant",
desc: "16 Cygni B b is a gas giant exoplanet that orbits a G-type star. Its mass is 1.78 Jupiters, it takes 2.2 years to complete one orbit of its star, and is 1.66 AU from its star. Its discovery was announced in 1996.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/6992/16-cygni-b-b/",
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
starMass: 1.04,
starRadius: 1.116},
//9
{name: "61 Virginis c",
type: "Neptune Like",
desc: "61 Virginis c is a Neptune-like exoplanet that orbits a G-type star. Its mass is 18.2 Earths, it takes 38 days to complete one orbit of its star, and is 0.2175 AU from its star. Its discovery was announced in 2009.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7008/61-virginis-c/",
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
starMass: 0.95,
starRadius: 0.96},
//10
{name: "61 Virginis d",
type: "Neptune Like",
desc: "61 Virginis d is a Neptune-like exoplanet that orbits a G-type star. Its mass is 22.9 Earths, it takes 123 days to complete one orbit of its star, and is 0.476 AU from its star. Its discovery was announced in 2009.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7009/61-virginis-d/",
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
starMass: 0.95,
starRadius: 0.96},
//11
{name: "CoRoT-7 b",
type: "Super Earth",
desc: "CoRoT-7 b is a super Earth exoplanet that orbits a G-type star. Its mass is 3.1783 Earths, it takes 0.9 days to complete one orbit of its star, and is 0.017016 AU from its star. Its discovery was announced in 2009.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/1242/corot-7-b/",
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
starMass: 0.91,
starRadius: 0.82},
//12
{name: "EPIC 201833600 c",
type: "Terrestrial",
desc: "EPIC 201833600 c is a terrestrial exoplanet that orbits a K-type star. Its mass is 0.972 Earths and it takes 4 days to complete one orbit of its star. Its discovery was announced in 2019.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7394/epic-201833600-c/",
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
distance: "846",
starMass: 0.61,
starRadius: 0.63},
//13
{name: "HD 189733 b",
type: "Gas Giant",
desc: "HD 189733 b is a gas giant exoplanet that orbits a G-type star. Its mass is 1.13 Jupiters, it takes 2.2 days to complete one orbit of its star, and is 0.0313 AU from its star. Its discovery was announced in 2005.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/6876/hd-189733-b/",
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
starMass: 0.79,
starRadius: 0.75},
//14
{name: "BD-06 1339 b",
type: "Neptune-Like",
desc: "BD-06 1339 b is a Neptune-like exoplanet that orbits a K-type star. Its mass is 8.5 Earths, it takes 3.9 days to complete one orbit of its star, and is 0.0428 AU from its star. Its discovery was announced in 2013.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7073/bd-06-1339-b/",
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
starMass: 0.7,
starRadius: 0.67},
//15
{name: "BD-08 2823 b",
type: "Neptune-Like",
desc: "BD-08 2823 b is a Neptune-like exoplanet that orbits a K-type star. Its mass is 12.7132 Earths, it takes 5.6 days to complete one orbit of its star, and is 0.06 AU from its star. Its discovery was announced in 2009.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7071/bd-08-2823-b/",
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
starMass: 0.5,
starRadius: 0.71},
//16
{name: "BD+20 594 b",
type: "Neptune-Like",
desc: "BD+20 594 b is a Neptune-like exoplanet that orbits a G-type star. Its mass is 22.2481 Earths, it takes 41.7 days to complete one orbit of its star, and is 0.241 AU from its star. Its discovery was announced in 2016.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7166/bd20-594-b/",
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
starMass: 1.67,
starRadius: 1.08},
//17
{name: "EPIC 201238110 b",
type: "Super Earth",
desc: "EPIC 201238110 b is a super Earth exoplanet that orbits a K-type star. Its mass is 4.16 Earths and it takes 28.2 days to complete one orbit of its star. Its discovery was announced in 2019.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7390/epic-201238110-b/",
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
starMass: "unknown",
starRadius: "unknown"},
//18
{name: "EPIC 201615463 c",
type: "Super Earth",
desc: "EPIC 201615463 c is a super Earth exoplanet that orbits a G-type star. Its mass is 1.98 Earths and it takes 3.8 days to complete one orbit of its star. Its discovery was announced in 2019.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7392/epic-201615463-c/",
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
starMass: 1.07,
starRadius: 1.6},
//19
{name: "EPIC 201754305 d",
type: "Super Earth",
desc: "EPIC 201754305 d is a super Earth exoplanet that orbits a K-type star. Its mass is 1.08 Earths and it takes 2.7 days to complete one orbit of its star. Its discovery was announced in 2019.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7393/epic-201754305-d/",
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
starMass: 0.67,
starRadius: 0.54,
verified: true},
//20
{name: "EPIC 201841433 b",
type: "Super Earth",
desc: "EPIC 201841433 b is a super Earth exoplanet that orbits a G-type star. Its mass is 1.37 Earths and it takes 4.2 days to complete one orbit of its star. Its discovery was announced in 2019.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7395/epic-201841433-b/",
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
starMass: 0.8,
starRadius: 0.63,
verified: true},
//21
{name: "EPIC 206215704 b",
type: "Terrestrial",
desc: "EPIC 206215704 b is a terrestrial exoplanet that orbits a K-type star. Its mass is 0.666 Earths and it takes 2.3 days to complete one orbit of its star. Its discovery was announced in 2019.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7400/epic-206215704-b/",
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
starRadius: "unknown",
verified: true},
//22
{name: "EPIC 206317286 b",
type: "Terrestrial",
desc: "EPIC 206317286 b is a terrestrial exoplanet that orbits a G-type star. Its mass is 0.84 Earths and it takes 1.6 days to complete one orbit of its star. Its discovery was announced in 2019.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7401/epic-206317286-b/",
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
starMass: 0.71,
starRadius: 0.67,
verified: true},
//23
{name: "K2-116 b",
type: "Terrestrial",
desc: "K2-116 b is a terrestrial exoplanet that orbits a K-type star. Its mass is 0.257 Earths, it takes 4.7 days to complete one orbit of its star, and is 0.048 AU from its star. Its discovery was announced in 2017.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/6039/k2-116-b/",
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
starMass: 0.69,
starRadius: 0.67},
//24
{name: "K2-137 b",
type: "Terrestrial",
desc: "K2-137 b is a terrestrial exoplanet that orbits a M-type star. Its mass is 0.5 Jupiters, it takes 0.2 days to complete one orbit of its star, and is 0.0058 AU from its star. Its discovery was announced in 2017.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/6071/k2-137-b/",
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
starMass: 0.46,
starRadius: 0.44},
//25
{name: "K2-136 b",
type: "Terrestrial",
desc: "K2-136 b is a terrestrial exoplanet that orbits a K-type star. Its mass is 0.937 Earths and it takes 8 days to complete one orbit of its star. Its discovery was announced in 2017.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/6068/k2-136-b/",
date: 2017,
mass: 0.937,
pRadius: 0.99,
massRadUnits: "Earth",
oRadius: "Unknown",
eccentricity: 0.1,
oPeriod: 8,
oPeriodUnits: "days",
detectionMethod: "Transit",
star: "K-type",
distance: 194,
starMass: 0.74,
starRadius: 0.66,
verified: true},
//26
{name: "K2-209 b",
type: "Terrestrial",
desc: "K2-209 b is a terrestrial exoplanet that orbits a K-type star. Its mass is 0.586 Earths and it takes 2.1 days to complete one orbit of its star. Its discovery was announced in 2018.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/6239/k2-209-b/",
date: 2018,
mass: 0.586,
pRadius: 0.869,
massRadUnits: "Earth",
oRadius: "Unknown",
eccentricity: 0.0,
oPeriod: 2.1,
oPeriodUnits: "days",
detectionMethod: "Transit",
star: "K-type",
distance: 250,
starMass: 0.74,
starRadius: 0.71,
verified: true},
//27
{name: "18 Delphini b",
type: "Gas Giant",
desc: "18 Delphini b is a gas giant exoplanet that orbits a K-type star. Its mass is 10.3 Jupiters, it takes 2.7 years to complete one orbit of its star, and is 2.6 AU from its star. Its discovery was announced in 2008.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/6993/18-delphini-b/",
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
starMass: 2.3,
starRadius: 8.5},
//28
{name: "1RXS J160929.1-210524 b",
type: "Gas Giant",
desc: "1RXS J160929.1-210524 b is a gas giant exoplanet that orbits a K-type star. Its mass is 8 Jupiters, it takes 6505.9 years to complete one orbit of its star, and is 330 AU from its star. Its discovery was announced in 2008.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7061/1rxs-j1609291-210524-b/",
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
starMass: 0.85,
starRadius: 1.18},
//29
{name: "24 Bootis b",
type: "Gas Giant",
desc: "24 Bootis b is a gas giant exoplanet that orbits a K-type star. Its mass is 0.91 Jupiters, it takes 30.4 days to complete one orbit of its star, and is 0.19 AU from its star. Its discovery was announced in 2018.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7274/24-bootis-b/",
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
starMass: 0.99,
starRadius: 10.64},
//30
{name: "24 Sextantis b",
type: "Gas Giant",
desc: "24 Sextantis b is a gas giant exoplanet that orbits a G-type star. Its mass is 1.99 Jupiters, it takes 452.8 days to complete one orbit of its star, and is 1.333 AU from its star. Its discovery was announced in 2010.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/6994/24-sextantis-b/",
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
starMass: 1.54,
starRadius: 4.9},
//31
{name: "24 Sextantis c",
type: "Gas Giant",
desc: "24 Sextantis c is a gas giant exoplanet that orbits a G-type star. Its mass is 0.86 Jupiters, it takes 2.4 years to complete one orbit of its star, and is 2.08 AU from its star. Its discovery was announced in 2010.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/6994/24-sextantis-c/",
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
starMass: 1.54,
starRadius: 4.9},
//32
{name: "2MASS J01225093-2439505 b",
type: "Gas Giant",
desc: "2MASS J01225093-2439505 b is a gas giant exoplanet that orbits a K-type star. Its mass is 24.5 Jupiters, it takes 593.2 years to complete one orbit of its star, and is 52 AU from its star. Its discovery was announced in 2013.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7062/2mass-j01225093-2439505-b/",
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
starMass: "unknown",
starRadius: "unknown"},
//33
{name: "2MASS J02192210-3925225 b",
type: "Gas Giant",
desc: "2MASS J02192210-3925225 b is a gas giant exoplanet that orbits a M-type star. Its mass is 13.9 Jupiters, it takes 5878.1 years to complete one orbit of its star, and is 156 AU from its star. Its discovery was announced in 2015.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7063/2mass-j02192210-3925225-b/",
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
starMass: 0.11,
starRadius: 0.28},
//34
{name: "2MASS J04414489+2301513 b",
type: "Gas Giant",
desc: "2MASS J04414489+2301513 b is a gas giant exoplanet that orbits an unknown-type star. Its mass is 7.5 Jupiters, it takes 411 years to complete one orbit of its star, and is 15 AU from its star. Its discovery was announced in 2010.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7064/2mass-j044144892301513-b/",
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
starMass: "unknown",
starRadius: "unknown"},
//35
{name: "2MASS J12073346-3932539 b",
type: "Gas Giant",
desc: "2MASS J12073346-3932539 b is a gas giant exoplanet that orbits an unknown-type star. Its mass is 4 Jupiters, it takes 2207.3 years to complete one orbit of its star, and is 46 AU from its star. Its discovery was announced in 2004.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7065/2mass-j12073346-3932539-b/",
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
starMass: "unknown",
starRadius: "unknown"},
//36
{name: "2MASS J19383260+4603591 b",
type: "Gas Giant",
desc: "2MASS J19383260+4603591 b is a gas giant exoplanet that orbits an A-type star. Its mass is 1.9 Jupiters, it takes 416 days to complete one orbit of its star, and is 0.92 AU from its star. Its discovery was announced in 2015.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7108/2mass-j193832604603591-b/",
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
starMass: 0.48,
starRadius: 0.34},
//37
{name: "2MASS J21402931+1625183 A b",
type: "Gas Giant",
desc: "2MASS J21402931+1625183 A b is a gas giant exoplanet that orbits a M-type star. Its mass is 20.95 Jupiters and it takes 20.1 years to complete one orbit of its star. Its discovery was announced in 2009.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7066/2mass-j214029311625183-a-b/",
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
starMass: 0.08,
starRadius: 0.12},
//38
{name: "2MASS J22362452+4751425 b",
type: "Gas Giant",
desc: "2MASS J22362452+4751425 b is a gas giant exoplanet that orbits a K-type star. Its mass is 12.5 Jupiters, it takes 4505.7 years to complete one orbit of its star, and is 230 AU from its star. Its discovery was announced in 2016.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7239/2mass-j223624524751425-b/",
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
starMass: 0.6,
starRadius: 0.62,
verified: true},
//39
{name: "30 Arietis B b",
type: "Gas Giant",
desc: "30 Arietis B b is a gas giant exoplanet that orbits a F-type star. Its mass is 13.82 Jupiters, it takes 335.1 days to complete one orbit of its star, and is 0.99 AU from its star. Its discovery was announced in 2009.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/6996/30-arietis-b-b/",
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
starMass: 1.93,
starRadius: 1.41,
verified: true},
//40
{name: "HIP 78530 b",
type: "Gas-Giant",
desc: "HIP 78530 b is an object that is either a planet or a brown dwarf in the orbit of the star HIP 78530. It was observed as early as 2000, but the object was not confirmed as one in orbit of the star HIP 78530 until a direct imaging project photographed the star in 2008. HIP 78530 b orbits a young, hot, bright blue star in the Upper Scorpius association. The planet itself is over twenty-three times more massive than Jupiter, orbiting eighteen times further from its host star than Pluto does from the Sun by the estimates published in its discovery paper. In this predicted orbit, HIP 78530 b completes an orbit every twelve thousand years.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/6907/hip-78530-b/",
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
starMass: 2.5,
starRadius: "unknown"},
//41
{name: "42 Draconis b",
type: "Gas-Giant",
desc: "42 Draconis b is a gas giant exoplanet that orbits a K-type star. Its mass is 3.88 Jupiters, it takes 479.1 days to complete one orbit of its star, and is 1.19 AU from its star. Its discovery was announced in 2008.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/6997/42-draconis-b/",
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
starMass: 0.98,
starRadius: 22.03},
//42
{name: "47 Ursae Majoris b",
type: "Gas-Giant",
desc: "47 Ursae Majoris b is a gas giant exoplanet that orbits a G-type star. Its mass is 2.53 Jupiters, it takes 3 years to complete one orbit of its star, and is 2.1 AU from its star. Its discovery was announced in 1996.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/6998/47-ursae-majoris-b/",
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
starMass: 1.03,
starRadius: 1.23},
//43
{name: "47 Ursae Majoris c",
type: "Gas-Giant",
desc: "47 Ursae Majoris c is a gas giant exoplanet that orbits a G-type star. Its mass is 0.54 Jupiters, it takes 6.6 years to complete one orbit of its star, and is 3.6 AU from its star. Its discovery was announced in 2001.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/6999/47-ursae-majoris-c/",
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
starMass: 1.03,
starRadius: 1.23},
//44
{name: "47 Ursae Majoris d",
type: "Gas-Giant",
desc: "47 Ursae Majoris d is a gas giant exoplanet that orbits a G-type star. Its mass is 1.64 Jupiters, it takes 38.4 years to complete one orbit of its star, and is 11.6 AU from its star. Its discovery was announced in 2009.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7000/47-ursae-majoris-d/",
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
starMass: 1.03,
starRadius: 1.23},
//45
{name: "4 Ursae Majoris b",
type: "Gas-Giant",
desc: "4 Ursae Majoris b is a gas giant exoplanet that orbits a K-type star. Its mass is 7.1 Jupiters, it takes 269.3 days to complete one orbit of its star, and is 0.87 AU from its star. Its discovery was announced in 2006.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/6999/4-ursae-majoris-b/",
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
starMass: 1.23,
starRadius: 18.11},
//46
{name: "CoRoT-22 b",
type: "Neptune-Like",
desc: "CoRoT-22 b is a Neptune-like exoplanet that orbits a G-type star. Its mass is 12.2 Earths, it takes 9.8 days to complete one orbit of its star, and is 0.092 AU from its star. Its discovery was announced in 2014.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/1334/corot-22-b/",
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
starMass: 1.1,
starRadius: 1.14},
//47
{name: "CoRoT-24 b",
type: "Neptune-Like",
desc: "CoRoT-24 b is a Neptune-like exoplanet that orbits a K-type star. Its mass is 5.7 Earths, it takes 5.1 days to complete one orbit of its star, and is 0.056 AU from its star. Its discovery was announced in 2014.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/1334/corot-24-b/",
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
starMass: 0.91,
starRadius: 0.86},
//48
{name: "CoRoT-24 c",
type: "Neptune-Like",
desc: "CoRoT-24 c is a Neptune-like exoplanet that orbits a K-type star. Its mass is 28 Earths, it takes 11.8 days to complete one orbit of its star, and is 0.098 AU from its star. Its discovery was announced in 2014.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/1334/corot-24-c/",
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
starMass: 0.91,
starRadius: 0.86},
//49
{name: "HD 97048 b",
type: "Gas-Giant",
desc: "HD 97048 b is a gas giant exoplanet that orbits an A-type star. Its mass is 2.5 Jupiters, it takes 957.3 years to complete one orbit of its star, and is 130 AU from its star. Its discovery was announced in 2019.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7503/hd-97048-b/",
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
starMass: 2.4,
starRadius: 2.25},
//50
{name: "YZ Ceti b",
type: "Terrestrial",
desc: "YZ Ceti b is a terrestrial exoplanet that orbits a M-type star. Its mass is 0.75 Earths, it takes 2 days to complete one orbit of its star, and is 0.01557 AU from its star. Its discovery was announced in 2017.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7181/yz-ceti-b/",
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
starMass: 0.13,
starRadius: 0.17},
//51
{name: "YZ Ceti c",
type: "Terrestrial",
desc: "YZ Ceti c is a terrestrial exoplanet that orbits a M-type star. Its mass is 0.98 Earths, it takes 3.1 days to complete one orbit of its star, and is 0.0209 AU from its star. Its discovery was announced in 2017.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7181/yz-ceti-c/",
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
starMass: 0.13,
starRadius: 0.17},
//52
{name: "YZ Ceti d",
type: "Super Earth",
desc: "YZ Ceti d is a super Earth exoplanet that orbits a M-type star. Its mass is 1.14 Earths, it takes 4.7 days to complete one orbit of its star, and is 0.02764 AU from its star. Its discovery was announced in 2017.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7181/yz-ceti-d/",
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
starMass: 0.13,
starRadius: 0.17},
//53
{name: "51 Eridani b",
type: "Gas Giant",
desc: "51 Eridani b is a gas giant exoplanet that orbits a F-type star. Its mass is 2 Jupiters, it takes 32 years to complete one orbit of its star, and is 12 AU from its star. Its discovery was announced in 2015.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7109/51-eridani-b/",
date: 2015,
mass: 2,
pRadius: 1.19,
massRadUnits: "Jupiter",
oRadius: 12.0,
eccentricity: 0.45,
oPeriod: 32,
oPeriodUnits: "years",
detectionMethod: "Direct Imaging",
star: "F-type",
distance: 96,
starMass: 1.75,
starRadius: 1.56},
//54
{name: "51 Pegasi b",
type: "Gas Giant",
desc: "51 Pegasi b is a gas giant exoplanet that orbits a G-type star. Its mass is 0.46 Jupiters, it takes 4.2 days to complete one orbit of its star, and is 0.0527 AU from its star. Its discovery was announced in 1995.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7109/51-pegasi-b/",
date: 1995,
mass: 0.46,
pRadius: 1.27,
massRadUnits: "Jupiter",
oRadius: 0.0527,
eccentricity: 0.01,
oPeriod: 4.2,
oPeriodUnits: "days",
detectionMethod: "Radial Velocity",
star: "G-type",
distance: 50,
starMass: 1.12,
starRadius: 1.2},
//55
{name: "55 Cancri b",
type: "Gas Giant",
desc: "55 Cancri b is a gas giant exoplanet that orbits a G-type star. Its mass is 0.8306 Jupiters, it takes 14.7 days to complete one orbit of its star, and is 0.115227 AU from its star. Its discovery was announced in 1996.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7002/55-cancri-b/",
date: 1996,
mass: 0.8306,
pRadius: 1.24,
massRadUnits: "Jupiter",
oRadius: 0.115227,
eccentricity: 0.0,
oPeriod: 14.7,
oPeriodUnits: "days",
detectionMethod: "Radial Velocity",
star: "G-type",
distance: 41,
starMass: 0.91,
starRadius: 0.91},
//56
{name: "55 Cancri c",
type: "Gas Giant",
desc: "55 Cancri c is a gas giant exoplanet that orbits a G-type star. Its mass is 0.1714 Jupiters, it takes 44.4 days to complete one orbit of its star, and is 0.241376 AU from its star. Its discovery was announced in 2004.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7003/55-cancri-c/",
date: 2004,
mass: 0.1714,
pRadius: 0.76,
massRadUnits: "Jupiter",
oRadius: 0.241376,
eccentricity: 0.02,
oPeriod: 44.4,
oPeriodUnits: "days",
detectionMethod: "Radial Velocity",
star: "G-type",
distance: 41,
starMass: 0.91,
starRadius: 0.91,
verified: true},
//57
{name: "55 Cancri d",
type: "Gas Giant",
desc: "55 Cancri d is a gas giant exoplanet that orbits a G-type star. Its mass is 3.878 Jupiters, it takes 13.2 years to complete one orbit of its star, and is 5.503 AU from its star. Its discovery was announced in 2002.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7004/55-cancri-d/",
date: 2002,
mass: 3.878,
pRadius: 1.16,
massRadUnits: "Jupiter",
oRadius: 5.503,
eccentricity: 0.02,
oPeriod: 13.2,
oPeriodUnits: "years",
detectionMethod: "Radial Velocity",
star: "G-type",
distance: 41,
starMass: 0.91,
starRadius: 0.91,
verified: true},
//58
{name: "55 Cancri f",
type: "Gas Giant",
desc: "55 Cancri f is a gas giant exoplanet that orbits a G-type star. Its mass is 0.141 Jupiters, it takes 262 days to complete one orbit of its star, and is 0.788 AU from its star. Its discovery was announced in 2007.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7006/55-cancri-f/",
date: 2007,
mass: 0.141,
pRadius: 0.677,
massRadUnits: "Jupiter",
oRadius: 0.788,
eccentricity: 0.31,
oPeriod: 262,
oPeriodUnits: "days",
detectionMethod: "Radial Velocity",
star: "G-type",
distance: 41,
starMass: 0.91,
starRadius: 0.91},
//59
{name: "6 Lyncis b",
type: "Gas Giant",
desc: "6 Lyncis b is a gas giant exoplanet that orbits a K-type star. Its mass is 2.01 Jupiters, it takes 2.6 years to complete one orbit of its star, and is 2.11 AU from its star. Its discovery was announced in 2008.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/6986/6-lyncis-b/",
date: 2008,
mass: 2.01,
pRadius: 1.19,
massRadUnits: "Jupiter",
oRadius: 2.11,
eccentricity: 0.07,
oPeriod: 2.6,
oPeriodUnits: "years",
detectionMethod: "Radial Velocity",
star: "K-type",
distance: 179,
starMass: 1.44,
starRadius: 5.2},
//60
{name: "70 Virginis b",
type: "Gas Giant",
desc: "70 Virginis b is a gas giant exoplanet that orbits a G-type star. Its mass is 7.49 Jupiters, it takes 116.7 days to complete one orbit of its star, and is 0.481 AU from its star. Its discovery was announced in 1996.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7010/70-virginis-b/",
date: 1996,
mass: 7.49,
pRadius: 1.13,
massRadUnits: "Jupiter",
oRadius: 0.481,
eccentricity: 0.4,
oPeriod: 116.7,
oPeriodUnits: "days",
detectionMethod: "Radial Velocity",
star: "G-type",
distance: 58,
starMass: 1.09,
starRadius: 1.89},
//61
{name: "75 Ceti b",
type: "Gas Giant",
desc: "75 Ceti b is a gas giant exoplanet that orbits a K-type star. Its mass is 3 Jupiters, it takes 1.9 years to complete one orbit of its star, and is 2.1 AU from its star. Its discovery was announced in 2012.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7011/75-ceti-b/",
date: 2012,
mass: 3,
pRadius: 1.17,
massRadUnits: "Jupiter",
oRadius: 2.1,
eccentricity: 0.12,
oPeriod: 1.9,
oPeriodUnits: "years",
detectionMethod: "Radial Velocity",
star: "K-type",
distance: 271,
starMass: 2.49,
starRadius: 10.5},
//62
{name: "7 Canis Majoris b",
type: "Gas Giant",
desc: "7 Canis Majoris b is a gas giant exoplanet that orbits a K-type star. Its mass is 1.85 Jupiters, it takes 2 years to complete one orbit of its star, and is 1.758 AU from its star. Its discovery was announced in 2011.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/6987/7-canis-majoris-b/",
date: 2011,
mass: 1.85,
pRadius: 1.2,
massRadUnits: "Jupiter",
oRadius: 1.758,
eccentricity: 0.06,
oPeriod: 2,
oPeriodUnits: "years",
detectionMethod: "Radial Velocity",
star: "K-type",
distance: 65,
starMass: 1.34,
starRadius: 4.87},
//63
{name: "7 Canis Majoris c",
type: "Gas Giant",
desc: "7 Canis Majoris c is a gas giant exoplanet that orbits a K-type star. Its mass is 0.87 Jupiters, it takes 2.7 years to complete one orbit of its star, and is 2.153 AU from its star. Its discovery was announced in 2019.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7505/7-canis-majoris-c/",
date: 2019,
mass: 0.87,
pRadius: 1.24,
massRadUnits: "Jupiter",
oRadius: 2.153,
eccentricity: 0.08,
oPeriod: 2.7,
oPeriodUnits: "years",
detectionMethod: "Radial Velocity",
star: "K-type",
distance: 65,
starMass: 1.34,
starRadius: 4.87},
//64
{name: "81 Ceti b",
type: "Gas Giant",
desc: "81 Ceti b is a gas giant exoplanet that orbits a K-type star. Its mass is 5.3 Jupiters, it takes 2.6 years to complete one orbit of its star, and is 2.5 AU from its star. Its discovery was announced in 2008.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7012/81-ceti-b/",
date: 2008,
mass: 5.3,
pRadius: 1.14,
massRadUnits: "Jupiter",
oRadius: 2.5,
eccentricity: 0.21,
oPeriod: 2.6,
oPeriodUnits: "years",
detectionMethod: "Radial Velocity",
star: "K-type",
distance: 331,
starMass: 2.4,
starRadius: 11.0},
//65
{name: "8 Ursae Minoris b",
type: "Gas Giant",
desc: "8 Ursae Minoris b is a gas giant exoplanet that orbits a K-type star. Its mass is 1.31 Jupiters, it takes 93.4 days to complete one orbit of its star, and is 0.49 AU from its star. Its discovery was announced in 2015.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7100/8-ursae-minoris-b/",
date: 2015,
mass: 1.31,
pRadius: 1.22,
massRadUnits: "Jupiter",
oRadius: 0.49,
eccentricity: 0.06,
oPeriod: 93.4,
oPeriodUnits: "days",
detectionMethod: "Radial Velocity",
star: "K-type",
distance: 533,
starMass: 1.44,
starRadius: 10.3},
//66
{name: "91 Aquarii b",
type: "Gas Giant",
desc: "91 Aquarii b is a gas giant exoplanet that orbits a K-type star. Its mass is 3.2 Jupiters, it takes 181.4 days to complete one orbit of its star, and is 0.7 AU from its star. Its discovery was announced in 2013.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7013/91-aquarii-b/",
date: 2013,
mass: 3.2,
pRadius: 1.17,
massRadUnits: "Jupiter",
oRadius: 0.7,
eccentricity: 0.03,
oPeriod: 181.4,
oPeriodUnits: "days",
detectionMethod: "Radial Velocity",
star: "K-type",
distance: 144,
starMass: 1.4,
starRadius: 11.0},
//67
{name: "AB Pictoris b",
type: "Gas Giant",
desc: "AB Pictoris b is a gas giant exoplanet that orbits a G-type star. Its mass is 13.5 Jupiters, it takes 4421.7 years to complete one orbit of its star, and is 260 AU from its star. Its discovery was announced in 2005.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7014/ab-pictoris-b/",
date: 2005,
mass: 13.5,
pRadius: 1.1,
massRadUnits: "Jupiter",
oRadius: 260.0,
eccentricity: 0.0,
oPeriod: 4421.7,
oPeriodUnits: "years",
detectionMethod: "Direct Imaging",
star: "G-type",
distance: 163,
starMass: 0.9,
starRadius: 1.0},
//68
{name: "Alpha Arietis b",
type: "Gas Giant",
desc: "Alpha Arietis b is a gas giant exoplanet that orbits a K-type star. Its mass is 1.8 Jupiters, it takes 380.8 days to complete one orbit of its star, and is 1.2 AU from its star. Its discovery was announced in 2010.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7038/alpha-arietis-b/",
date: 2010,
mass: 1.8,
pRadius: 1.2,
massRadUnits: "Jupiter",
oRadius: 1.2,
eccentricity: 0.25,
oPeriod: 380.8,
oPeriodUnits: "days",
detectionMethod: "Radial Velocity",
star: "K-type",
distance: 66,
starMass: 1.5,
starRadius: 13.9},
//69
{name: "Alpha Tauri b",
type: "Gas Giant",
desc: "Alpha Tauri b is a gas giant exoplanet that orbits a K-type star. Its mass is 6.47 Jupiters, it takes 1.7 years to complete one orbit of its star, and is 1.46 AU from its star. Its discovery was announced in 2015.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7107/alpha-tauri-b/",
date: 2015,
mass: 6.47,
pRadius: 1.13,
massRadUnits: "Jupiter",
oRadius: 1.46,
eccentricity: 0.1,
oPeriod: 1.7,
oPeriodUnits: "years",
detectionMethod: "Radial Velocity",
star: "K-type",
distance: 67,
starMass: 1.13,
starRadius: 45.1,
verified: true},
//70
{name: "BD+03 2562 b",
type: "Gas Giant",
desc: "BD+03 2562 b is a gas giant exoplanet that orbits a K-type star. Its mass is 6.4 Jupiters, it takes 481.9 days to complete one orbit of its star, and is 1.3 AU from its star. Its discovery was announced in 2017.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7176/bd03-2562-b/",
date: 2017,
mass: 6.4,
pRadius: 1.13,
massRadUnits: "Jupiter",
oRadius: 1.3,
eccentricity: 0.2,
oPeriod: 481.9,
oPeriodUnits: "days",
detectionMethod: "Radial Velocity",
star: "K-type",
distance: 8540,
starMass: 1.14,
starRadius: 32.35,
verified: true},
//71
{name: "BD-06 1339 c",
type: "Gas Giant",
desc: "BD-06 1339 c is a gas giant exoplanet that orbits a K-type star. Its mass is 0.17 Jupiters, it takes 125.9 days to complete one orbit of its star, and is 0.435 AU from its star. Its discovery was announced in 2013.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7074/bd-06-1339-c/",
date: 2013,
mass: 0.17,
pRadius: 0.747,
massRadUnits: "Jupiter",
oRadius: 0.435,
eccentricity: 0.31,
oPeriod: 125.9,
oPeriodUnits: "days",
detectionMethod: "Radial Velocity",
star: "K-type",
distance: 66,
starMass: 0.7,
starRadius: 0.67},
//72
{name: "BD-08 2823 c",
type: "Gas Giant",
desc: "BD-08 2823 c is a gas giant exoplanet that orbits a K-type star. Its mass is 0.33 Jupiters, it takes 237.6 days to complete one orbit of its star, and is 0.68 AU from its star. Its discovery was announced in 2009.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7072/bd-08-2823-c/",
date: 2009,
mass: 0.33,
pRadius: 1.11,
massRadUnits: "Jupiter",
oRadius: 0.68,
eccentricity: 0.19,
oPeriod: 237.6,
oPeriodUnits: "days",
detectionMethod: "Radial Velocity",
star: "K-type",
distance: 135,
starMass: 0.5,
starRadius: 0.71},
//73
{name: "BD-10 3166 b",
type: "Gas Giant",
desc: "BD-10 3166 b is a gas giant exoplanet that orbits a G-type star. Its mass is 0.59 Jupiters, it takes 3.5 days to complete one orbit of its star, and is 0.04 AU from its star. Its discovery was announced in 2000.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7070/bd-10-3166-b/",
date: 2000,
mass: 0.59,
pRadius: 1.26,
massRadUnits: "Jupiter",
oRadius: 0.04,
eccentricity: 0.02,
oPeriod: 3.5,
oPeriodUnits: "days",
detectionMethod: "Radial Velocity",
star: "K-type",
distance: 135,
starMass: 0.5,
starRadius: 0.71},
//74
{name: "BD-11 4672 b",
type: "Gas Giant",
desc: "BD-11 4672 b is a gas giant exoplanet that orbits a K-type star. Its mass is 0.53 Jupiters, it takes 4.6 years to complete one orbit of its star, and is 2.28 AU from its star. Its discovery was announced in 2014.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7069/bd-11-4672-b/",
date: 2014,
mass: 0.53,
pRadius: 1.27,
massRadUnits: "Jupiter",
oRadius: 2.28,
eccentricity: 0.05,
oPeriod: 4.6,
oPeriodUnits: "years",
detectionMethod: "Radial Velocity",
star: "K-type",
distance: 89,
starMass: 0.57,
starRadius: 0.52},
//75
{name: "BD-13 2130 b",
type: "Gas Giant",
desc: "BD-13 2130 b is a gas giant exoplanet that orbits a K-type star. Its mass is 9.78 Jupiters, it takes 2 years to complete one orbit of its star, and is 1.66 AU from its star. Its discovery was announced in 2007.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7068/bd-13-2130-b/",
date: 2007,
mass: 9.78,
pRadius: 1.11,
massRadUnits: "Jupiter",
oRadius: 1.66,
eccentricity: 0.21,
oPeriod: 2,
oPeriodUnits: "years",
detectionMethod: "Radial Velocity",
star: "K-type",
distance: 3095,
starMass: 2.12,
starRadius: 19.17},
//76
{name: "BD+14 4559 b",
type: "Gas Giant",
desc: "BD+14 4559 b is a gas giant exoplanet that orbits a K-type star. Its mass is 1.04 Jupiters, it takes 268.9 days to complete one orbit of its star, and is 0.78 AU from its star. Its discovery was announced in 2009.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7075/bd14-4559-b/",
date: 2009,
mass: 1.04,
pRadius: 1.23,
massRadUnits: "Jupiter",
oRadius: 0.78,
eccentricity: 0.29,
oPeriod: 268.9,
oPeriodUnits: "days",
detectionMethod: "Radial Velocity",
star: "K-type",
distance: 161,
starMass: 0.49,
starRadius: 0.86},
//77
{name: "BD+15 2375 b",
type: "Gas Giant",
desc: "BD+15 2375 b is a gas giant exoplanet that orbits a K-type star. Its mass is 1.061 Jupiters, it takes 153.2 days to complete one orbit of its star, and is 0.576 AU from its star. Its discovery was announced in 2016.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7025/bd15-2375-b/",
date: 2016,
mass: 1.061,
pRadius: 1.23,
massRadUnits: "Jupiter",
oRadius: 0.576,
eccentricity: 0.0,
oPeriod: 153.2,
oPeriodUnits: "days",
detectionMethod: "Radial Velocity",
star: "K-type",
distance: 2525,
starMass: 1.09,
starRadius: 8.95,
verified: true},
//78
{name: "BD+15 2940 b",
type: "Gas Giant",
desc: "BD+15 2940 b is a gas giant exoplanet that orbits a K-type star. Its mass is 1.11 Jupiters, it takes 137.5 days to complete one orbit of its star, and is 0.539 AU from its star. Its discovery was announced in 2013.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7076/bd15-2940-b/",
date: 2013,
mass: 1.1,
pRadius: 1.23,
massRadUnits: "Jupiter",
oRadius: 0.539,
eccentricity: 0.26,
oPeriod: 137.5,
oPeriodUnits: "days",
detectionMethod: "Radial Velocity",
star: "K-type",
distance: 1408,
starMass: 1.1,
starRadius: 14.7,
verified: true},
//79
{name: "BD-17 63 b",
type: "Gas Giant",
desc: "BD-17 63 b is a gas giant exoplanet that orbits a K-type star. Its mass is 5.1 Jupiters, it takes 1.8 years to complete one orbit of its star, and is 1.34 AU from its star. Its discovery was announced in 2008.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7067/bd-17-63-b/",
date: 2008,
mass: 5.1,
pRadius: 1.15,
massRadUnits: "Jupiter",
oRadius: 1.34,
eccentricity: 0.54,
oPeriod: 1.8,
oPeriodUnits: "years",
detectionMethod: "Radial Velocity",
star: "K-type",
distance: 112,
starMass: 0.74,
starRadius: 0.69},
//80
{name: "BD+20 2457 b",
type: "Gas Giant",
desc: "BD+20 2457 b is a gas giant exoplanet that orbits a K-type star. Its mass is 55.59 Jupiters, it takes 379.6 days to complete one orbit of its star, and is 1.05 AU from its star. Its discovery was announced in 2009.",
link: "https://exoplanets.nasa.gov/exoplanet-catalog/7078/bd20-2457-b/",
date: 2009,
mass: 55.59,
pRadius: 1.03,
massRadUnits: "Jupiter",
oRadius: 1.05,
eccentricity: 0.15,
oPeriod: 379.6,
oPeriodUnits: "days",
detectionMethod: "Radial Velocity",
star: "K-type",
distance: 112,
starMass: 10.83,
starRadius: 71.02,
verified: true},
]

//Text Algorithms
for (var i = 0; i < exo.length; i++) {
  var xmma = exo[i].name.toLowerCase();
  xmma = xmma.replace(/\s/g, "");
  exo[i].marker = xmma;
  exo[i].source = "img/" + xmma + ".JPG";
  var vmma = exo[i].type.toLowerCase();
  vmma = vmma.replace(/\s/g, "-");
  exo[i].loadName = vmma;
  var zmma = exo[i].name.substring(0, exo[i].name.length - 1);
  exo[i].starName = zmma;
  exo[i].contentNum = i;
  if (exo[i].oPeriodUnits=="years") {
    exo[i].days = exo[i].oPeriod * 365;
  } else if (exo[i].oPeriodUnits=="days") {
    exo[i].days = exo[i].oPeriod;
  } else {
    exo[i].days = 0;
  }
  if (exo[i].massRadUnits == "Jupiter") {
    exo[i].actMass = exo[i].mass * 317.8;
    exo[i].actRad = exo[i].pRadius * 43441;
  } else if (exo[i].massRadUnits == "Earth"){
    exo[i].actMass = exo[i].mass;
    exo[i].actRad = exo[i].pRadius * 3958.8;
  } else {
    exo[i].actMass = 0;
    exo[i].actRad = 0;
  }
}

var devTools = false;
var search = document.getElementById("planetSearch");
let typeSelected = "all"
let sTypeSelected = "all"

document.addEventListener("keydown", function(event) {
	if(event.key=="Z" && event.shiftKey && !devTools) {
		console.log("Developer Tools Enabled");
    console.log("Current number of entries: " + exo.length)
    console.log("Commands: \n Shift + L - Run copy analysis\n Ctrl + Shift + L - Run complex copy analysis")
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
				if ((exo[i].name == exo[j].name || exo[i].link == exo[j].link || exo[i].desc == exo[j].desc) && j>i) {
					var finMessage = "Found matching planet info: " + exo[i].name + " and " + exo[j].name + " at indices " + i + " and " + j + ".";
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

document.addEventListener("keydown", function(event) {
	if(event.key=="L" && event.shiftKey && event.ctrlKey && devTools) {
		match = false;
		for (var i=0; i<exo.length; i++) {
        j = i+1
				if ((exo[i].mass == exo[j].mass || exo[i].pRadius == exo[j].pRadius || exo[i].oRadius == exo[j].oRadius || (exo[i].eccentricity == exo[j].eccentricity && exo[i].eccentricity!=0) || exo[i].eccentricity == exo[j].oPeriod) && !exo[i].verified) {
					var finMessage = "Found matching possible distortion: " + exo[i].name + " and " + exo[j].name + " at indices " + i + " and " + j + ".";
					match = true;
					break;
				}
		}
		if (!match) {
			var finMessage = "No possible distortions observed; K to proceed.";
		}
		console.log("Program finished.");
		console.log(finMessage);
	}
});

var web = document.getElementById("webpage");
var con = document.createElement("div");
con.setAttribute("id", "content");



exo = exo.reverse();
//loadSearch("");
//newDec();
resetAll();

function loadSearch(z) {
  for (var i = 0; i < exo.length; i++) {
    if (exo[i].name.toLowerCase().includes(z) && (exo[i].loadName == typeSelected || typeSelected == "all") && (exo[i].star == sTypeSelected || sTypeSelected == "all")) {
	   var col = document.createElement("div");
     col.classList.add("planet-box");
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
     con.classList.add("content");
   }
 }
 if (firstLoad) {
    window.setTimeout(function() {
    web.appendChild(con);
    firstLoad = false;
    resetAll();
  }, 4000);

  } else {
    web.appendChild(con);
  }
}


function newDec() {
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
    var modal = document.getElementById("modal-box");
    modal.style.display = "block";
		for (var j = 0; j < exo.length; j++) {
			if (this.classList.contains(exo[j].marker)) {
				cr = j;
        console.log("Debug2")
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


		if (exo[cr].pRadius > 1) {
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
		if (exo[cr].starRadius > 1) {
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
}

function removeAll() {
  con.innerHTML = "";
  console.log("Elements Cleared")
}

function lessContent() {
var boxes = document.getElementsByClassName("planet-box");
  if(boxes.length < 1) {
    console.log("No results");
    var nada = document.createTextNode("Nothing to Show");
    var nadaCon = document.createElement("div");
    nadaCon.classList.add("nada-content")
    nadaCon.appendChild(nada);
    con.appendChild(nadaCon);
  }
}

search.addEventListener("keyup", function() {
  resetAll();
});

var gg2 = document.getElementById("gasGiantButton");
var nl2 = document.getElementById("neptuneLikeButton");
var se2 = document.getElementById("superEarthButton");
var tr2 = document.getElementById("terrestrialButton");
var uk2 = document.getElementById("unknownButton");
var al2 = document.getElementById("allButton");

al2.addEventListener("click", function() {
  typeSelected = "all";
  resetAll();
});

gg2.addEventListener("click", function() {
  typeSelected = "gas-giant";
  resetAll();
});

nl2.addEventListener("click", function() {
  typeSelected = "neptune-like";
  resetAll();
});

se2.addEventListener("click", function() {
  typeSelected = "super-earth";
  resetAll();
});

tr2.addEventListener("click", function() {
  typeSelected = "terrestrial";
  resetAll();
});

uk2.addEventListener("click", function() {
  typeSelected = "unknown";
  resetAll();
});

var droop = document.getElementById("dropdown");
var sDrop = document.getElementById("dropdown2");

droop.addEventListener("change", function() {
	if (droop.value == "dda") {
		exo = exo.sort(function (a, b) {
  		return a.date - b.date;
		});
		resetAll();
	} else if (droop.value == "ddd") {
		exo = exo.sort(function (a, b) {
  		return a.date - b.date;
		});
		exo = exo.reverse();
		resetAll();
	} else if (droop.value == "nasc") {
		exo.sort(function(a, b) {
  		var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  		var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  		if (nameA < nameB) {
    		return -1;
  		}
  		if (nameA > nameB) {
    		return 1;
  		}
  		// names must be equal
  		return 0;
		});
		resetAll();
	} else if (droop.value == "ndesc") {
		exo.sort(function(a, b) {
  		var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  		var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  		if (nameA < nameB) {
    		return -1;
  		}
  		if (nameA > nameB) {
    		return 1;
  		}
  		// names must be equal
  		return 0;
		});
		exo=exo.reverse();
		resetAll();
	} else if (droop.value == "ncon") {
		exo = exo.sort(function (a, b) {
  		return a.contentNum - b.contentNum;
		});
		exo=exo.reverse();
		resetAll();
	} else if (droop.value == "ocon") {
		exo = exo.sort(function (a, b) {
  		return a.contentNum - b.contentNum;
		});
		resetAll();
	} else if (droop.value == "pmasup") {
    exo = exo.sort(function (a, b) {
      return a.actMass - b.actMass;
		});
    resetAll();
  } else if (droop.value == "pmasdo") {
    exo = exo.sort(function (a, b) {
      return a.actMass - b.actMass;
		});
    exo=exo.reverse();
    resetAll();
  } else if (droop.value == "pradup") {
    exo = exo.sort(function (a, b) {
      return a.actRad - b.actRad;
		});
    resetAll();
  } else if (droop.value == "praddo") {
    exo = exo.sort(function (a, b) {
      return a.actRad - b.actRad;
		});
    exo=exo.reverse();
    resetAll();
  } else if (droop.value == "pyup") {
    exo = exo.sort(function (a, b) {
      return a.days - b.days;
		});
    resetAll();
  } else if (droop.value == "pydo") {
    exo = exo.sort(function (a, b) {
      return a.days - b.days;
		});
    exo=exo.reverse();
    resetAll();
  } else if (droop.value == "disup") {
    exo = exo.sort(function (a, b) {
      return a.distance - b.distance;
		});
    resetAll();
  } else if (droop.value == "disdo") {
    exo = exo.sort(function (a, b) {
      return a.distance - b.distance;
		});
    exo=exo.reverse();
    resetAll();
  }

});

sDrop.addEventListener("change", function() {
  if (sDrop.value == "al") {
    sTypeSelected = "all";
  } else if (sDrop.value == "u") {
    sTypeSelected = "unknown";
  } else if (sDrop.value == "sby") {

  } else {
    sTypeSelected = sDrop.value.toUpperCase() + "-type";
  }
  resetAll();
});



function resetAll() {
  removeAll();
  loadSearch(search.value.toLowerCase());
  newDec();
  lessContent();
}
