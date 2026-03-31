class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphaNum(char){
        return((char >= 'a' && char <= 'z') ||
        (char >= "A" && char <= 'Z') || 
        (char >= '0' && char <= '9')
         )

    }
    isPalindrome(s) {
        let newStr=''
        for(let ele of s){
            if(this.isAlphaNum(ele)){
                newStr += ele.toLowerCase()
            }
        }
        return newStr === newStr.split('').reverse().join('')
    }
}
