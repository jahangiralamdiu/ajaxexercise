function getHTTPObject() {
var xhr = false;
if (window.XMLHttpRequest) {
xhr = new XMLHttpRequest();
} else if (window.ActiveXObject) {
try {
xhr = new ActiveXObject("Msxml2.XMLHTTP");
} catch(e) {
try {
xhr = new ActiveXObject("Microsoft.XMLHTTP");
} catch(e) {
xhr = false;
		}
	}
}
return xhr;
}
	
	//grabFile function - set the request in motion using the send method.

	function grabFile(file) {
               
		var request = getHTTPObject();
		if (request) {
		request.onreadystatechange = function() {
		displayResponse(request);

		};
		request.open("GET", file, true);
		request.send(null);
		}
	}

	//displayResponse function
	function displayResponse(request) {
		if (request.readyState == 4) {
		if (request.status == 200 || request.status == 304) {
				//alert(request.responseText);
				var options="";
				var countryNames = JSON.parse(request.responseText);
				for(var i=0; i<=countryNames.countries.length; i++)	{		
					options+="<option value='"+countryNames.countries[i].country.country_id+"'>"+countryNames.countries[i].country.country_name+"</option>"	;
				
					document.getElementById('sel').innerHTML=options;


                           //document.writeln("ID : Name = "+countryNames.countries[i].country.country_id + " : ");
                           //document.writeln(countryNames.countries[i].country.country_name);
                           //document.write("<br/>");
				}		
			}
		}
	}

	//var datafile = "country.txt";

