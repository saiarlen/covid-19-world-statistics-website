/* Json data request */
var xmlhttp = new XMLHttpRequest();
var url = "https://corona.lmao.ninja/countries";


xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        coronaFunction(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();



/* Looping array of data*/
function coronaFunction(arr) {

    var totalCases = {};
    var cActive = {};
    var cRecover = {};
    var cDead = {};
    var cToday = {};
    var cFlag = {};


    var i;
    for (i = 0; i < arr.length; i++) {
        totalCases[arr[i]["countryInfo"]["iso2"]] = arr[i]["cases"];
        cActive[arr[i]["countryInfo"]["iso2"]] = arr[i]["active"];
        cRecover[arr[i]["countryInfo"]["iso2"]] = arr[i]["recovered"];
        cDead[arr[i]["countryInfo"]["iso2"]] = arr[i]["deaths"];
        cToday[arr[i]["countryInfo"]["iso2"]] = arr[i]["todayCases"];

        cFlag[arr[i]["countryInfo"]["iso2"]] = arr[i]["countryInfo"]["flag"];

    }




    /* Map Init and setup */
    jQuery(function() {
        var $ = jQuery;

        $('#wmap').vectorMap({
            map: 'world_mill_en',
            panOnDrag: true,
            focusOn: {
                x: 0.5,
                y: 0.5,
                scale: 1,
                animate: true
            },
            series: {
                regions: [{
                    scale: ['#8c0000', '#f70000'],
                    normalizeFunction: 'polynomial',
                    values: totalCases,
                    cActive,
                    cRecover,
                    cDead,
                    cToday,
                    cFlag
                }]
            },
            onRegionTipShow: function(e, el, code) {

                el.html(
                    '<img src="img/flags/' + code.toLowerCase() + '.png">' +
                    '<div class="title"><span><b>' + el.html() + '</b><span><br><span class="tiny">' + totalCases[code] + ' total cases</span></span></span></div>' +
                    '<div class="info" style="background-color: #961515">' +
                    '<span><span id="tipactive">' + cActive[code] + '</span> active</span><br>' +
                    '<span><span id="tiprecovered">' + cRecover[code] + '</span> recovered</span><br>' +
                    '<span><span id="tipdead">' + cDead[code] + '</span> dead</span><br>' +
                    '<hr><div class="changed"><span style="color: #ffbb11">TODAY</span><br><span>+ ' + cToday[code] + ' cases</span><br>' +
                    '</div></div>'

                );


            },

        });

    });
    /* End of map init */


}
/* End of function */


/* Particle Effect Js Start */
var options = {
    particles: {
        number: {
            value: 99,
            density: { enable: true, value_area: 552.4033491425909 }
        },
        color: { value: "#ffffff" },
        shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 3 },
            image: { src: "img/github.svg", width: 70, height: 100 }
        },
        opacity: {
            value: 1,
            random: true,
            anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
        },
        size: {
            value: 2,
            random: true,
            anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
        },
        line_linked: {
            enable: false,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 1.5782952832645452,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 1200 }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: false, mode: "repulse" },
            onclick: { enable: true, mode: "repulse" },
            resize: true
        },
        modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 }
        }
    },
    retina_detect: false
};
particlesJS("particle", options);

/* Particle Effect Js End */

/* Social Share Init */
$("#share").jsSocials({
    showLabel: false,
    showCount: false,
    shares: ["email", "twitter", "facebook", "linkedin", "pinterest", "whatsapp"]
});