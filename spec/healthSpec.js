var request = require("request");
var server = require("../app.js");
var base_url = "http://localhost:3000/";

describe("Health check", function() {
  describe("GET /health", function() {
  	console.log("lalalalala");
  	it("returns status code 200", function() {
  	  console.log("lalalalala POR DOS");
  	  url = base_url + "health";
  	  console.log("URL: " + url);
  	  // request.get(url, function(error, response, body) {
  	  request.get(url, function(error, response, body) {
  	    console.log("Request a: " + url);
  	    console.log("Error: " + error);
  	    console.log("Response: " + response);
  	    console.log("Body: " + body);
  	    expect(response.statusCode).toBe(200);
  	    // expect(body).toBe('{"status":"OK"}');
  	    expect(body).toBe('fwfefesf');
  	    server.closeServer();
  	    done();
  	  });
  	});
  });
});
