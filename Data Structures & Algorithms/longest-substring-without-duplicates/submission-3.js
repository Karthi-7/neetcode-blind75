class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let map=new Map()
        let maxCount=0
        let i=0,j=0
        let n=s.length
        while(j < n){
            if(map.has(s[j])){ 
                i=Math.max(map.get(s[j])+1,i)       
            }
            map.set(s[j],j)
            maxCount=Math.max(j-i+1,maxCount)
            j++     
        }
return maxCount
        
    }
}
