class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
         let stack=[]
    for(const ele of tokens){
        if(isNaN(ele)){
             const a=stack.pop()
                const b=stack.pop()
            if(ele == '+'){
               
                stack.push(a+b)
            }
            else if(ele == '-'){
                
                stack.push(b - a)

            }
            else if (ele == '*'){
                
                stack.push(a * b)
            }
            else{
                
                stack.push(parseInt(b / a))

            }
        }
        else{
            stack.push(Number(ele))
        }
    }
    return stack.pop()
    
    }
}
