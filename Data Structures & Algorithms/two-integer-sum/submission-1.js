class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
       let prefixSum={}
       for(let i=0;i<nums.length;i++){
        let x=target - nums[i]
        if(prefixSum[x] != undefined){
            return[prefixSum[x],i]
        }
        prefixSum[nums[i]]=i
       }
       return [-1,-1]
    }
}
