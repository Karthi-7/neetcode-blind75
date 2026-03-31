class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let obj={}
        let ans=[]
        for(let ele of strs){
            let x= ele.split('').sort().join('')
            if(obj[x]){
                  obj[x].push(ele)
            }
            else{
 obj[x]=[ele]
            }  
        }
        for(const[key,val] of Object.entries(obj)){
         ans.push(val)
        }
        return ans
        
    }
}
