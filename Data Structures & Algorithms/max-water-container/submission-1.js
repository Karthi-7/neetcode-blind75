class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
    let l=0,r=heights.length - 1;
    let maxWater=0
    while(l < r){
        let minHeight=Math.min(heights[l],heights[r])
        let width= r-l
        let area=minHeight * width
        maxWater=Math.max(area,maxWater)
       if(heights[l] <= heights[r]){
        l++
       }
       else{
        r--
       }

    }
    return maxWater
    }
}
