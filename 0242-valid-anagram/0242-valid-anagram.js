/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    /*let sArray = s.split('');
    const tArray = t.split('');
    tArray.map((item)=>{
        let idx = sArray.indexOf(item);
        if(idx === -1) return false;
        const newArray = [...sArray.splice(0,idx-1),...sArray.splice(idx+1)];
        sArray = newArray;
    })
    return true;*/
    if(s.length !== t.length) return false;
    const anagramObj = {};
    const anagramObj2 = {};
    const arrayS = s.split('');
    const arrayT = t.split('');
    for(let item of arrayS){
        anagramObj[item] = (anagramObj[item] || 0) + 1;
    }
    for(let item of arrayT){
        anagramObj2[item] = (anagramObj2[item] || 0) + 1;
    }
    for(let key in anagramObj){
        if(anagramObj[key] !== anagramObj2[key]) return false;
    }
    return true;
};