class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
     let map={
      ']' : '[',
      '}' : '{',
      ')' : '('
     }
     let ans=[]
     for(const ele of s){
     if(map[ele]){
      if(ans.length && ans[ans.length - 1] == map[ele]){
        ans.pop()
      }
      else{
        return false
      }
     }
      else{
      ans.push(ele)
     }
    
     }
return ans.length == 0
    }
}
