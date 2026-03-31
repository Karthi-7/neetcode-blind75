class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let mainStr=""
        let ans=[]
        for(let ele of strs){
            let encodeStr= ele.length + '#' + ele;
            mainStr+=encodeStr
        }
        return mainStr
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i=0
        let ans=[]
       while( i < str.length){
        let j=i
        while ( str[j] != "#") j++;
        const len= parseInt(str.slice(i,j))
        let tempStr= str.slice(j+1,j+len+1)
        ans.push(tempStr)
        i=j+1+len
       }
    return ans

    }
}
