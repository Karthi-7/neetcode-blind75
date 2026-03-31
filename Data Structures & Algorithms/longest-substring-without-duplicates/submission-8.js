class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
       let freq=new Map()
       let count=0
       let i=0,j=0
       while(j<s.length){
        while(freq.get(s[j]) > 0){
            freq.set(s[i],freq.get(s[i]) - 1)
            i++
        }
        count=Math.max(j-i+1,count)
        freq.set(s[j],(freq.get(s[j]) || 0)+1)
        j++
       }
       return count
    }
}
