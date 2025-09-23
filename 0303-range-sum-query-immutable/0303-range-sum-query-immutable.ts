class NumArray {
    private numArray: number[];
    
    constructor(nums: number[]) {
        this.numArray = nums;
    }

    sumRange(left: number, right: number): number {
        return this.numArray.slice(left, right + 1).reduce((acc, cur) => acc + cur, 0)
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */