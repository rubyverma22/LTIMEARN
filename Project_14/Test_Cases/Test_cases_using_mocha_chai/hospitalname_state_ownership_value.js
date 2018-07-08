var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Project',['hospital']);

describe('Test by city, hospital ownership and get Hospital name',function(){
	before(function(done){
		db.hospital.find({"Hospital Name":"WOODHULL MEDICAL AND MENTAL HEALTH CENTER",State:"NY","Hospital Ownership":"Government - Local"},function(err,res){
			city_count = res[0]["Hospital Name"];
			done();
		});
	});

	it('value by city name',function(){
		expect(city_count).to.equal("WOODHULL MEDICAL AND MENTAL HEALTH CENTER");
	});
});