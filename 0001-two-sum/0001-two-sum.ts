function twoSum(nums: number[], target: number): number[] {
    let indexA = nums.length - 1;

    while (indexA > 0) {
        const a = nums.pop();
        const indexB = nums.findIndex((num) => num === target - a);
        if (indexB < 0) indexA --
        else return [indexA, indexB]
    }
};