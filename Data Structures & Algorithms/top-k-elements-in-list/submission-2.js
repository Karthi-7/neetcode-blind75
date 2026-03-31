class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let obj={}
        for(let ele of nums){
           obj[ele]=(obj[ele] || 0) + 1
        }
        let entries=Object.entries(obj)
       const data= entries.sort((a,b) => a[1] - b[1]).slice(-k)
       return data.map(([key])=> Number(key))

       
    }
}
