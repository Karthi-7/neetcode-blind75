class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result=''
        for(const ele of strs){
            result+=ele.length+'#'+ele
        }
        return result
    
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result=[]
       let i=0;
       while(i<str.length){
        let j=i
        while(str[j] !== '#') j++
        let len=parseInt(str.slice(i,j))
        let wrd=str.slice(j+1,j+1+len)
        result.push(wrd)
        i=j+1+len
       } 
return result
    }
}
