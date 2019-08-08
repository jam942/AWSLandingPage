// Create variable called test cases to store the results somewhere??
var testCase;

// Create a request and assign a new XMLHttpRequest object to it
var request = new XMLHttpRequest()
// Open a new connection, put the FIT Tool url
request.open("GET", "UI HTML", true);
request.responseType = 'json';

request.loadResponse (){
	if (this.readyState == 4 && this.status == 200) {
		testCase = request.response;
		initialise();
	} else {
		//if this fails
		console.log('Cannot get test cases' + request.status + ': ' + request.statusText)
	}
};

// Send request
request.send()

//--------------

/*
//init
function createNode (element){
	return document.createElement(element);
}

function append(parent, el){
	return parent.appendChild(el);
}
//Trying to call the relevant test case
const ul = document.getElementById("testcases");

//PUT THE FIT URL in here
const url = 'http fit tool';

//Make the URL CALL
fetch(url)
.then((resp) => resp.JSON())
.then(function(data){
	let testcase = data.results;

	return testcase.map(function(testcases){
		let li = createNode();
	})
})
*/

//catch whatever errors I find
.catch(function(error){
	console.log(JSON.stringify(error));
});