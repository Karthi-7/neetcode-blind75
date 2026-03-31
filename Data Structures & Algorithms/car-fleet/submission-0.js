class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let stack =[]
        const cars=position.map((pos,i)=> [pos,speed[i]])
        cars.sort((a,b) => b[0] - a[0] )
        for(const [pos,spd] of cars){
            let time = (target - pos) / spd
            if(stack.length == 0 || time > stack[stack.length -1]){
                stack.push(time)
            }
        }
        return stack.length
    }
}
