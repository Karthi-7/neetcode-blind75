class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix=1
        let n =nums.length
        let ans=[]
        for(let i=0;i<nums.length ; i++){
            ans[i]=prefix
            prefix*=nums[i]
        }
        console.info(ans)
        let suffix=1
        for(let i=n-1 ; i >=0 ;i--){
            ans[i]*=suffix
            suffix*=nums[i]
             
        }
        return ans

    }
}
