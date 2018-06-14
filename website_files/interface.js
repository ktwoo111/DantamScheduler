function plan(catalog, student_values){
	//mimic

	/*var request = new XmlRpcRequest('localhost:8080/RPC2', 'plan');
	request.addParam(catalog);
	request.addParam(student_values);
	var response = request.send();
	return response.parseXML();
	alert('this shouldnt happen')*/


	//jQuery xmlrpc
	$.xmlrpc({
		url: "http://localhost:8080/RPC2",
		methodName: "plan",
		params:[catalog, student_values],
		success: function(response, status, jqXHR){return response;},
		error: function(jqXHR, status, error){return error;}
	});
}

//test dummies
cTest ='[{"Id": "A1", "Name":"A1name","Credits":3.0,"Pre_req":[]},{"Id": "A2", "Name":"A2name","Credits":3.0,"Pre_req":["A1"]}]';
sTest = '{"taken":[], "degree":["A1","A2"], "modify":[]}';

var result = plan(cTest,sTest);
document.write(result);
