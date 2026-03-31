class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
       let count={}
       let freq=Array.from({length:nums.length + 1},()=>[])
       for(let ele of nums){
        count[ele]=(count[ele] || 0)+1
       }
       for(const key in count){
        freq[count[key]].push(parseInt(key))
       }
       let res=[]
       for(let i=freq.length-1;i>=0;i--){
        for(let ele of freq[i]){
            res.push(ele)
            if(res.length == k){
                return res;
            }
        }
       }



    }
}
