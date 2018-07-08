var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Project',['hospital']);

describe('Test by hospital name, hospital ownership',function(){
	before(function(done){
		db.hospital.aggregate([{$match:{"Hospital Name":"MONTEFIORE MEDICAL CENTER","Hospital Ownership":"Voluntary non-profit - Private",
                                  "Hospital overall rating":{$ne:"Not Available"}}},
                         {$sort:{
                                  "Hospital overall rating":-1
                                }}],function(err,res){
			city_count = res[0]["Hospital Name"];
			done();
		});
	});

	it('sort',function(){
		expect(city_count).to.equal("MONTEFIORE MEDICAL CENTER");
	});
});