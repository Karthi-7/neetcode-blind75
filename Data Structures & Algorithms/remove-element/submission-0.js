class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
      let k=0
       for(const ele of  nums){
        if(ele != val){
            nums[k]=ele
            k++
        }
       }
       return k
    }
}
