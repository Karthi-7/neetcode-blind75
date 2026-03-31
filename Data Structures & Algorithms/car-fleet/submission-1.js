class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let cars=position.map((item,i)=>[item,speed[i]])
        cars.sort((a,b)=> a[0] - b[0])
        let stack=[]
        for(let i=cars.length -1 ;i >=0;i--){
            let hr=(target-cars[i][0]) / cars[i][1]
            if(stack.length == 0 || hr > stack[stack.length -1]){
                stack.push(hr)
            }
           
        }
        return stack.length
    }
}
