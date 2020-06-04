let tempConv = require('./script')
describe('Temperature Conversion', function(){
    test('Test Freezing F to C',function(){
        expect(tempConv(32,'C')).toEqual(0);        
    })
    test('Test Freezing C to F',function(){
        expect(tempConv(0,'F')).toEqual(32);        
    })
    test('Convert 68 F',function(){
        expect(tempConv(68,'C')).toEqual(20);        
    })
    test('Test Freezing with lowercase f',function(){
        expect(tempConv(0,'f')).toEqual(32);        
    })
    test('Test no unit passed',function(){
        expect(tempConv(0)).toBeUndefined();        
    })
})