// 정렬이 되어있으므로 투 포인터 활용
function twoSum(numbers: number[], target: number): number[] {
    const getPair = (leftIndex: number, rightIndex: number) => {
        const sum = numbers[leftIndex] + numbers[rightIndex];
        if (sum === target) return [leftIndex + 1, rightIndex + 1];
        else if (sum < target) return getPair(leftIndex + 1, rightIndex);
        else return getPair(leftIndex, rightIndex - 1)
    }

    return getPair(0, numbers.length - 1)
};

// // 중복이 있는 경우 사용 불가
// function twoSum(numbers: number[], target: number): number[] {
//     // 값을 key로, 인덱스를 value로 가지는 맵
//     const numMap = new Map(numbers.map((num, index) => [num, index + 1]));
//     let index = 0;

//     while (index < numMap.size) {
//         const current = numbers[index];
//         if (current === undefined) {
//             index ++;
//             continue;
//         }

//         const pair = target - current;
//         if (numMap.has(pair)) {
//             const curIndex = numMap.get(current);
//             const pairIndex =  numMap.get(pair);

//             if (curIndex === pairIndex) {
//                 index ++;
//                 continue;
//             }

//             return [curIndex, pairIndex];
//         } 

//         numMap.delete(current);
//         numMap.delete(pair);
//         index ++;
//     }
// };