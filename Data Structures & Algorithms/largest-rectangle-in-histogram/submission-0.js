class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let stack = []
        let maxArea=0
        for(let i = 0 ;i<=heights.length ; i++){
            let currentbar = i == heights.length ? 0 : heights[i]
            while(stack.length  && currentbar < heights[stack[stack.length -1]]){
                const top = stack.pop()
                let width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;

                const area = width * heights[top]
                maxArea=Math.max(maxArea,area)
            }
            stack.push(i)
        }
        return maxArea;
    }
}
