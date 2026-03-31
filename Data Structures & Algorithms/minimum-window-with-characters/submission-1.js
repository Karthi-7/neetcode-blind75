class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let map=new Map()
        let count=0,minlen=Infinity,l=0,r=0,minIdx=0
        for(const ele of t){
            map.set(ele,(map.get(ele) || 0) +1)
        }
        while(r < s.length){
            if(map.has(s[r])){
                if(map.get(s[r]) > 0)count++
                map.set(s[r],map.get(s[r])-1)
            }
            while(count == t.length){
                if(r-l+1 < minlen){
                    minlen=r-l+1
                    minIdx=l
                }
                if(map.has(s[l])){
                    map.set(s[l],map.get(s[l])+1)
                    if(map.get(s[l]) > 0){
                      count--
                    }
                }
               l++ 
            }
            r++
        }
        return minlen == Infinity ? '' : s.substring(minIdx,minIdx+minlen)
    }
}
