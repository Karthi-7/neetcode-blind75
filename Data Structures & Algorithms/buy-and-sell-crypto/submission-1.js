class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buy=prices[0]
        let max=0
        for(const ele of prices){
            buy=Math.min(buy,ele)
            if(ele > buy){
              max=Math.max(max,ele-buy)
            }
        }
        return max
    }
}
