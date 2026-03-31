class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numset=new Set(nums)
        let length=0
        for(const num of numset){
            if(!numset.has(num -1)){
                  let curLen=1
                  while(numset.has(num+curLen)){
                    curLen+=1
                  }
                  length=Math.max(length,curLen)
                
            }
        }
        return length
    }

}
