function romanToInt(s: string): number {
    const romanMap = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000]
    ]);

    const arr = s.split('');
    let sum = 0;

    for (let i = 0; i < arr.length; i ++) {
        const cur = romanMap.get(arr[i]);
        const next = romanMap.get(arr[i + 1]);
        if (next === undefined) sum += cur;
        else if (cur < next) sum -= cur;
        else sum += cur;
    }

    return sum;
};