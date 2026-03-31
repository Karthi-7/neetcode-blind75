class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const freqMap = new Map()
        for(const ele of strs){
            const freqKey=ele.split("").sort().join("")
            if(!freqMap.has(freqKey)){
                freqMap.set(freqKey,[])
            }
            
        freqMap.get(freqKey).push(ele)
            
        }
        return Array.from(freqMap.values())
    }
}
