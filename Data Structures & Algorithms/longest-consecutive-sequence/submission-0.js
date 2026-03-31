class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const hashSet=new Set(nums)
        //[2,20,4,10,3,5]
        let count = 0
        for(const ele of hashSet){
            let length=0
            if(!hashSet.has(ele -1)){
                length = 0
            }
            while(hashSet.has(ele + length)){
                length++
            }
            count=Math.max(length,count)

        }
        return count

    }
}
