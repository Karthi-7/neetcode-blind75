class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let n=height.length
        let leftMax=height[0]
        let rightMax=height[n-1]
        let left=0,right=n-1
        let result=0
        while(left < right){
            if(height[left] <= height[right]){
                if(leftMax < height[left]){
                    leftMax = height[left]
                }
                else{
                     result+= leftMax - height[left]

                }
                left++;
               
            }
            else{
                if(height[right] > rightMax){
                    rightMax=height[right]
                }
                else{
                    result+=rightMax - height[right]
                }
                right -- ;
            }
            
            }
        return result
    }
}
