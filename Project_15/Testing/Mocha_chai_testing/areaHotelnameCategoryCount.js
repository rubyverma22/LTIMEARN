var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('project',['hotel']);

var count = 0;
describe('TestMongoDB',function(){

	before(function (done){
		   db.hotel.find({property_name:"Balaji Residency",hotel_category:"regular",area:"Kalkaji",property_type:"Hotel"}, 
		   function (err,res){ 
				console.log(res.length); 
				count=res.length;
				done();
			 });
		});
	it('by area,hotelname and hotel category count',function(){
		const result = count;
		expect(result).to.equal(1);
	});
});