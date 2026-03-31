class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length) return false
        let obj1={} // {c:1,a:1,r:1}
        let obj2={}//{c:1,a:1,r:1}
        for(let ele of s){
            if(obj1[ele]){
                obj1[ele]++
            }
            else{
                obj1[ele]=1
            }
        }
        for(let ele of t){
            if(obj2[ele]){
                obj2[ele]++
            }
            else{
                obj2[ele]=1
            }
        }
        
        for(const ele in obj1){
            if(obj1[ele] != obj2[ele]){
                return false
            }
        }
        return true;
    }
}
