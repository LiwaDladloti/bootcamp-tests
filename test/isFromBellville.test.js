describe('Output Reg numbers only if it is from Bellville', function () {
    'use strict';
    it('should only print reg numbers from Bellville', function () {
        assert.equal(isFromBellville('CY 568'), true);
    });
});