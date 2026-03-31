class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let map={}
        for(let ele of nums){
            if(map[ele]){
                map[ele]++
            }
            else{
                map[ele]=1
            }
        }
          for (let key in map) {
            if( map[key] > 1){
                return true
            }
          }
           return false
    }
   
  
}
