class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let obj={}
        
        for(let s of strs){
            let freqArr=new Array(26).fill(0)
            for(let c of s){
            freqArr[c.charCodeAt(0) - 'a'.charCodeAt(0)]+=1
            }
            const key=freqArr.join(',')
            if(!obj[key]){
             obj[key]=[]
            }
            obj[key].push(s)
        }
        return Object.values(obj)
    }
}
