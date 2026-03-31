class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows=Array.from({length:9},()=>new Set())
        const cols=Array.from({length:9},()=> new Set())
        const box=Array.from({length:9},()=> new Set())
        for(let r=0;r<9;r++){
            for(let c=0;c<9;c++){
                let val= board[r][c]
                if(val == '.') continue;
                let boxIdx= Math.floor(r/3) * 3 + Math.floor(c/3); 
                if(rows[r].has(val) || cols[c].has(val) || box[boxIdx].has(val)){
                    return false
                }
                rows[r].add(val)
                cols[c].add(val)
                box[boxIdx].add(val)
            }
        }
        return true
    }
}
