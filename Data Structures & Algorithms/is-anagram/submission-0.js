class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length) return false;
        let map1={}
        let map2={}
        for(let i=0;i<s.length;i++){
            map1[s[i]]= (map1[s[i]] || 0)+1
            map2[t[i]]= (map2[t[i]] || 0)+1
        }
      
        for (const key in map1){
            if(map1[key] != map2[key]){
                return false
            }
        }
     
        return true
       
    }
}
