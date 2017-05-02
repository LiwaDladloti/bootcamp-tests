describe('Should count the number of car plate from Paarl', function(){

    it('should return the exact number of Paarl car plates ', function(){
        assert.equal(countAllPaarl('CJ 452345,CJ 040400,CY 19076,CJ 90443'),3);
    });
  });
