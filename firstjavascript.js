var message="hello world"
console.log("global: message =+message");

var a=function(){
	var message="inside a ";
	console.log("a: message="+message);
	return;
	/*function b(){
	console.log("b: message="+message);
	}b();*/
	
};
