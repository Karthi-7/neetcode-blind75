class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let stack=[]
        let res=new Array(temperatures.length).fill(0)
        for(let i=0;i<temperatures.length;i++){
            let t=temperatures[i]
            while(stack.length && t > stack[stack.length-1][0]){
                const [t,ind]=stack.pop()
                res[ind]=i-ind
            }
            stack.push([t,i])
        }
        return res
    }
}
