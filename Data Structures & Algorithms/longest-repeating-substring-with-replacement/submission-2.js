class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let map=new Map()
        let l=0,r=0,maxf=0,maxlen=0
        while(r < s.length){
             map.set(s[r],(map.get(s[r]) || 0) + 1 )
             maxf=Math.max(maxf,map.get(s[r]))
            if(r-l+1 - maxf > k){
                map.set(s[l],map.get(s[l]) - 1)
                l++
            }
            if(r-l+1-maxf <= k){
                maxlen=Math.max(r-l+1,maxlen)
            }
            r++
        }
    return maxlen    
    }
}
