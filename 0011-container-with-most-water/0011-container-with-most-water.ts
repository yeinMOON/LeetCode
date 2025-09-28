function maxArea(height: number[]): number {
    let start = 0;
    let end = height.length - 1;
    let max = 0;

    while (start < end) {
        const w = end - start;
        const h = Math.min(height[start], height[end]);
        const area = w * h;

        if (area > max) max = area;
        if (height[start] < height[end]) start++;
        else end--;
    }

    return max;
}

//  시간 복잡도 개선 필요
function maxArea_1(height: number[]): number {
    const getContainer = (index, arr) => {
        return index * Math.min(arr[0], arr[index]);
    }

    let start = 0;
    let max = 0;

    while (start < height.length - 1) {
        const target = height.slice(start);
        if (max <= height[start] * target.length) {
           for (let end = 0; end < target.length; end ++) {
                const container = getContainer(end, target);
                if (container > max) max = container;
            }
        }
        start ++
    }

    return max;
};