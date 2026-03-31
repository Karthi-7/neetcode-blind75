class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let str=''
        for(const ele of s){
            if(this.isAlphaNumeric(ele)){
                str+=ele.toLowerCase()
            }
            }
    return str == str.split('').reverse().join('')

    }
    isAlphaNumeric(ele){
        return(( ele >= 'a' && ele <= 'z' ) ||
        (ele >= 'A' && ele <= 'Z' ) ||
        (ele >= '0' && ele <= '9')
        )
    }
}
