var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Project',['hotel']);

var count = "";
describe('TestMongoDB 4',function(){

before(function (done){
  db.hotel.find({"property_name":"Hotel Mountain Face"},
	{_id:0,property_name:1,state:1,city:1}, function (err,res){ 
//console.log(res.length); 
count=typeof res[0].property_name;
console.log(count);
done();
});
});

it('by_name_type',function(){
const result = count;
expect(result).to.equal("string");
});
});