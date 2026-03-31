class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
       let buy=prices[0]
       let profit=0
       for(const ele of prices){
         buy=Math.min(buy,ele)
         profit=Math.max(profit,ele-buy)
       }
       return profit
    }
}
