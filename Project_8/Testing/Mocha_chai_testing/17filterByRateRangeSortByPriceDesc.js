var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('amazon',['toys']);

var noOfDocuments = 0
var noOfFields    = 0
var typeOfProduct
var productName
describe('17. filter by rate range sort by price descending',function(){
	before(function (done){
				var result = [2.1,3.2]
				var order= -1
				db.toys.aggregate([
														 {$match:{$and:[
																								 {average_review_rating: {$gte:parseFloat(result[0])}},
																								 {average_review_rating: {$lte:parseFloat(result[1])}},
																								]
																					 }
														 },
														 {$project:{_id:0,uniq_id:1,product_name:1,price:1,average_review_rating:1}},
														 {$sort:{price:order}}
														],
														function(err,res){
																	noOfDocuments  = res.length
																	noOfFields     = Object.keys(res[0]).length
																	typeOfProduct  = typeof res[0].product_name
																	productName    = res[0].product_name
																	//console.log(noOfDocuments+"\n"+noOfFields+"\n"+typeOfProduct+"\n"+productName)
																	done()
														}
					)



		});

	it('Count  : should fetch 4 documents',function(){
		const result = noOfDocuments
		expect(result).to.equal(4)
	})

  it('Length : should fetch 4 fields',function(){
		const result = noOfFields
		expect(result).to.equal(4)
	})

  it('Type   : product name should be of type string',function(){
		const result = typeOfProduct
		expect(result).to.equal('string')
	})

  it('Value  : product name should be equal to Transformers',function(){
		const result = productName.split(" ")[0]
		expect(result).to.equal("Transformers")
	})

});
