class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length) return false
        let map=new Map()
        for(const ele of s){
          map.set(ele,(map.get(ele) || 0) + 1)
        }
        for(const ele of t){
          if(!map.has(ele)){
            return false
          }
          else{
            map.set(ele,map.get(ele) - 1)
          }
        }
        for(const item of map.values()){
          if(item > 0){
            return false
          }
        }
        return true
    }
}
