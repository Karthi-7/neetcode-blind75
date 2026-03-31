class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
      let max=0
      let buy=prices[0]
      for(const ele of prices){
        if(buy > ele){
            buy=ele
        }
        else{
            max=Math.max(max,ele-buy)
        }
      }
      return max
    }
}
