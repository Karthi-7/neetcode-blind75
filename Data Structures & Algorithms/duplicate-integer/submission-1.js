class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let map={}
        for(let ele of nums){
            map[ele]= (map[ele] || 0 )+1
        }
        for(const ele in map){
            if(map[ele] > 1){
                return true
            }
        }
     return false;
    }
  
}
