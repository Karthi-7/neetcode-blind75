class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
       let mpp=new Map()
       for(let ele of strs){
        let x=new Array(26).fill(0)
        for(const letr of ele){
             let idx=letr.charCodeAt(0) - 'a'.charCodeAt(0)
        x[idx]++

        }
       
        let uniqueKey=x.join('#');
        if(!mpp.has(uniqueKey)){
            mpp.set(uniqueKey,[])
        }
        mpp.get(uniqueKey).push(ele)
       }
       return Array.from(mpp.values())
    }
}
