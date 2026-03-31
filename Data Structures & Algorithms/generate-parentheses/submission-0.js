class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let result=[]
        this
        .backtracking(0,0,'',n,result)
        return result
    }
        
   backtracking(open,close,str,n,result){
    if(2*n == str.length){
        result.push(str)
        return
    }
    if(open < n){
        this.backtracking(open+1,close,str+'(',n,result)
    }
    if(close < open){
        this.backtracking(open,close+1,str+')',n,result)

    }
   
  }
}
