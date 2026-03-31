class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let res=new Array(nums.length).fill(1)
        let prev=1
        for(let i=0;i<nums.length;i++){
            res[i]=prev
            prev*=nums[i]
        }
        let postfix=1
        for(let i=nums.length-1;i>=0;i--){
            res[i]*=postfix
            postfix*=nums[i]
        }
        return res
    }

}
