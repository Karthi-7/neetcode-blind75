class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
let ansArr=[]
ansArr[0]=1
for(let i=1;i<nums.length;i++){
    ansArr[i]=nums[i-1]*ansArr[i-1]
}
let right=1
for(let i=nums.length-1;i>=0;i--){
    ansArr[i]=ansArr[i]* right
    right*=nums[i]
}
return ansArr
    }
    // [1,2,4,6]
    // [0,0,0,0] -> 1
    // [1,1,2,8]

    // [0,0,0,0] -> 2
    // [48,24,6,1]

    // [48,24,12,8]
   
}
