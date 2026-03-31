class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
    if(t.length == 0 || s.length == 0 ) return ''
    let need=new Map()
    let want=new Map()
    let left=0,right= 0
    for(const ele of t){
      need.set(ele,(need.get(ele) || 0) + 1)
    }
    let required=need.size
    let formed=0
    let minLen=Infinity
    let start=0
    while(right < s.length){
      let ele=s[right]
      want.set(ele,(want.get(ele) || 0 ) +1)
      if(need.has(ele) && need.get(ele) == want.get(ele)){
         formed+=1
      }
      while(left <= right && required == formed ){
         if(right - left + 1 < minLen){
            minLen=Math.min(minLen,right-left+1)
            start=left
         }
         want.set(s[left],want.get(s[left]) - 1)
         
         if(need.has(s[left]) && want.get(s[left]) < need.get(s[left])){
            formed --;
         }
 left++
      }
      right++
    }
return minLen ==Infinity ? "" : s.substring(start,start+minLen)
    }
}
