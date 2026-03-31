class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
       let res=0
       let i=0
       let j=heights.length -1
       while(i<j){
        let area=(j-i) * Math.min(heights[i],heights[j])
        res=Math.max(res,area)
        if(heights[i] < heights[j]){
            i++;
        }
        else if(heights[i] > heights[j] ){
            j--;
        }
        else{
            j--;
        }
       }
        return res
    }
   
    
}
