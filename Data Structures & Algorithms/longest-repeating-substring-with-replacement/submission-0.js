class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let count= new Map()
        let l=0,r=0,maxlen=0,maxf=0
        while(r < s.length){
            count.set(s[r], (count.get(s[r]) || 0) + 1)
        maxf=Math.max(maxf,count.get(s[r]))
        if((r-l+1)- maxf > k){
            count.set(s[l],count.get(s[l])-1)
            l++
        }
        maxlen=Math.max(r-l+1,maxlen)
        r++
        }
        return maxlen
    }
}
