class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length) return false
        let obj1={} 
        for(const ele of s){
            obj1[ele] =(obj1[ele] || 0) +1
        }
        for(const ele of t){
            if(!obj1[ele])return false
            
            obj1[ele]--
            
        }
      return true
    }
}
