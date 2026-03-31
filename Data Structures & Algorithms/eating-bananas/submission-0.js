class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let res=Math.max(...piles);
        let left = 1
        let right=res
        while(left <= right){
            let mid = Math.floor((left+right)/2);
            let totalHours=0
            for(const pile of piles){
                totalHours+=Math.ceil(pile/mid)
            }
            if(totalHours <= h){
                right=mid - 1
                res=mid
            }
            else{
                left=mid+1
            }
        }
        return res
        
    }
}
