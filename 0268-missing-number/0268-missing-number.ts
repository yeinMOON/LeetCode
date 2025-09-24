function missingNumber(nums: number[]): number {
    const sorted = nums.toSorted((a, b) => a - b);
    const breakpoint = sorted.findIndex((item, index) => item !== index)

    if (breakpoint >= 0) return breakpoint;
    return sorted[0] === 0 ? nums.length : 0;
};