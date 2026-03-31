class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
      let mpp={
        ']':'[',
        '}' : '{',
        ')' : '('
      }
      let stack=[]
      for(const c of s){
        if(mpp[c]){
            if(stack.length > 0 && stack[stack.length-1] == mpp[c]){
                stack.pop()
            }
            else{
                return false
            }
        }
        else{
            stack.push(c)
        }
      }
      return stack.length == 0

    }
}
