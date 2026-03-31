class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
      nums.sort((a,b)=> a-b)
      let output=[]
      for(let i=0;i< nums.length;i++){
        if(i >0 && nums[i-1] == nums[i] ) continue;
        let j=i+1,k=nums.length-1
        while(j < k){
          
            let sum=nums[i]+nums[j]+nums[k];
            if(sum === 0){
              
                output.push([nums[i],nums[j],nums[k]])
                j++
                k--
                while(j < k && nums[j-1] == nums[j])j++
                while (j < k && nums[k] === nums[k + 1]) k--;
                

            }
            else if(sum > 0){
                k--
            }
            else{
                j++
            }
        }
      }
      return output
    }
}
