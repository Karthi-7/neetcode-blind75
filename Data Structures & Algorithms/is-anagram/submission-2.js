class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
         if(s.length != t.length) return false;
         let obj1={},obj2={}
         for(let ele of s){
            obj1[ele] = (obj1[ele] || 0)+1
         }
         for(let ele of t){
            obj2[ele] = (obj2[ele] || 0)+1
         }
        for(const key in obj1){
            if(obj1[key] != obj2[key]){
                return false
            }
        }
       return true  
    }
}
