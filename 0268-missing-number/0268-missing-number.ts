function missingNumber(nums: number[]): number {
    const sorted = nums.toSorted((a, b) => a - b);
    const breakpoint = sorted.findIndex((item, index) => item !== index);

    if (breakpoint >= 0) return breakpoint;
    return sorted[0] === 0 ? nums.length : 0;
};

// 천잰가
// function missingNumber(nums: number[]): number {
//     const n = nums.length;
//     const expected = (n * (n + 1)/2);
//     const actual = nums.reduce((a, b) => a + b, 0);
//     return expected - actual;
// };