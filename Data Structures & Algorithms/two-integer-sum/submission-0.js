class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let mpp=new Map()
        for(let i=0;i<nums.length;i++){
            let x= target - nums[i]
            if(mpp.has(x)){
                return [i,mpp.get(x)]
            }
            mpp.set(nums[i],i)
        }
        return [-1,-1]
    }
}
