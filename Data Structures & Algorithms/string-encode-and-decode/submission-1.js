class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let s=''
        for(const str of strs){
            s+= str.length + '#' + str
        }
        return s
    
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i=0
      
        let res=[]
        while(i < str.length){
            let j=i
            while(str[j] != '#') j++
            let len =parseInt(str.substring(i,j))
            i=j+1
            j=i+len
            let ele=str.substring(i,j)
            res.push(ele)
            i=j

        }
        return res
      
    }
}
