class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        //obj freq
        //count index => number push
        let obj={}
        let freqArr=Array.from({length:nums.length+1},()=>[])
        for(let ele of nums){
            obj[ele]=(obj[ele] || 0) + 1
        }
        for(let ele in obj){
            freqArr[obj[ele]].push(ele)
        }
        let res=[]
        for(let i=freqArr.length -1 ;i>0;i--){
            for(let ele of freqArr[i]){
                 res.push(ele)
                if(res.length == k){
                    return res
                }
               

            }
        }
    }
}
