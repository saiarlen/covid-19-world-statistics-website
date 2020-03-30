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
                    scale: ['#c45252', '#ed1515'],
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
                    '<img src="' + cFlag[code] + '">' +
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

