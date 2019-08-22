//var request = new XMLHttpRequest()
/* Open a new connection, put the FIT Tool url
request.open("GET", "10.108.151.11", true);
request.responseType = 'json';
*/

//Check the status of the server to see if it is online
function checkServerStatus() {
	var checkRequest = new XMLHttpRequest(); // establish a new connection
	var file = ""; //FIT Tool. Check to see if this is the correct URL
	var ran = Math.round(Math.random() * 10000); //bleh
	checkRequest.open('HEAD', file + "" + r, false);
		//Try and catch exceptions
	try {
	checkRequest.send(); //once the connection is established, send the request
		if(this.readyState == 4 && this.status == 200) {
			return true;
		} else {
			return false; //lol fail :(
		}
	} catch (e) {
		return false;
	}
};

//Submit a10.108.151.11 response to the FIT Tool
function submitRequestToFITtool(){
	var submitRequestToFITtool = new XMLHttpRequest();
	var fitIP = {
		"STG" : "10.108.188.128:3105",
   		"PROD" : "10.108.189.128:3105",
		"DEMO" : "10.108.189.128:3105"
	}
	//select the environment
	var selectEnvironment = $("#environment").find(":selected").text();
	alert(fitIP[selectEnvironment]);
	var isselect = $("#inputscript").find(":selected").text();
			alert (isselect);
	var testCase = $("#test_Case_No").find(":selected").text();
	alert (testCase);
	var ipurl = "http://" + fitIP[selectEnvironment] + "/sendfpe/True/" + selectEnvironment + "/" + isselect + "/" + testCase;
			alert (ipurl);
	submitRequestToFITtool.onreadystatechange = function () {
				if (submitRequestToFITtool.readyState === 4 && submitRequestToFITtool === 200) {
						alert(submitRequestToFITtool.response);
		document.getElementById("submitButton").style.color="red";
				}
		}
		submitRequestToFITtool.open('get', ipurl , true);
		submitRequestToFITtool.send();
};

//catch whatever errors I find
.catch(function(error){
	console.log(JSON.stringify(error));
});
