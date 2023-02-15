/**
 * @param {number} num
 * @return {string}
 25분
 */
var intToRoman = function(num) {
    let intAndRoman = {
         1000: 'M',
           500: 'D',
           100: 'C',           
         50: 'L',    
           10: 'X',
           5: 'V',      
        1:  'I',
    };
    const romanMap = new Map([
    [1000, 'M'],
    [500, 'D'],
    [100, 'C'],
    [50, 'L'],
    [10, 'X'],
    [5, 'V'],
    [1, 'I'],
  ]);
    // let intAndRoman = {
    //             1:  'I',
    //                5: 'V',     
    //                10: 'X',
    //            50: 'L',  
    //               100: 'C',  
    //              500: 'D',
    //      1000: 'M',    
    // };
    let romanString = '';
  
        for(const [key,symbol] of romanMap){
            while(num >= key*1){
                num -= key*1;
                romanString += symbol;
            }
        }    
   romanString = romanString.replaceAll('DCCCC','CM');
    romanString = romanString.replaceAll('CCCC', 'CD');
    romanString = romanString.replaceAll('LXXXX', 'XC');
    romanString = romanString.replaceAll('XXXX', 'XL');
    romanString = romanString.replaceAll('VIIII', 'IX');
    romanString = romanString.replaceAll('IIII', 'IV');
    return romanString;
};