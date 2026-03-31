class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let map=new Map()
        for(let i=0; i<numbers.length ; i++){
            let x =target - numbers[i]
            if(map.has(x)){
                return [map.get(x)+1, i+1]
            }
            else{
                map.set(numbers[i],i)
            }
        }
        return [-1,-1]
    }
}
