class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let map=new Map()
        for(const ele of nums){
            map.set(ele,(map.get(ele) || 0 )+1)
        }
        let max=0
        let result=null
        for(const[key,val] of map.entries()){
            if(val > max){
                max=Math.max(val,max)
                result=key
            }
        }
    return result
    }
}
