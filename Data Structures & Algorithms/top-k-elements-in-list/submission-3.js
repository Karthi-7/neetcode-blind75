class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map=new Map()
        for(const ele of nums){
            map.set(ele,(map.get(ele) || 0) + 1)
        }
       return [...map.entries()]
       .sort((a,b)=> b[1] - a[1])
       .slice(0,k)
       .map(([key,val]) => Number(key))
       
    }
}
