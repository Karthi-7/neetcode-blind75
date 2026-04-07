class MyHashSet {
    constructor(data=[]) {
        this.map=data
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        if(!this.map.includes(key)) this.map.push(key)
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
       let index=this.map.indexOf(key)
       if(index != -1){
       this.map.splice(index,1)
       }
       
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
       return this.map.includes(key)
      
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
