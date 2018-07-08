var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('project',['hotel']);

var val_count=0;

describe('TestMongoDB',function(){
    before(function(done){
        db.hotel.find({property_name:"Vedas",hotel_category:"regular",city:"Rishikesh",area:"Tapovan",property_type:"Hotel"},
        {_id:0,property_name:1,address:1,area:1,city:1,hotel_star_rating:1},
        function(err,res){
            val_count = Object.keys(res[0]).length;
            done(); 
        });
    });
    it('city, area and name projection',function(){
        expect(val_count).to.equal(5);
    });
});
