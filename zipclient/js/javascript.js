$("#submit").click(loadDoc); // add onClick when DOM loads

function cityHandler(city) {
    var zipselect = document.getElementById("zipselect");
    var stateselect = document.getElementById("stateselect");
    zipselect.innerHTML = "";
    stateselect.innerHTML = "";
    
    for(i = 0; i < city.length; i++) {
        var zipOption = document.createElement("option");
        zipOption.appendChild(document.createTextNode(city[i].Code));
        zipselect.appendChild(zipOption);

        var stateOption = document.createElement("option");
        stateOption.appendChild(document.createTextNode(city[i].State));
        stateselect.appendChild(stateOption);
    }
};
    
function loadDoc(event) {
    event.preventDefault();
    var query = "http://localhost:8080/zips/" + $("#cityname").val();
    $.ajax({url: query, success: cityHandler});
}