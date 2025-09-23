function isPalindrome(x: number): boolean {
    // from minus to 99
    if (x < 0) return false;
    if (x >= 0 && x <= 9) return true;
    if (x >= 10 && x <= 19) return x === 11;

    const array = x.toString().split('');
    const middle = Math.ceil((array.length - 1) / 2);
    const head = array.slice(0, middle);
    const tail = array.slice(middle + (x % 2 ? 0 : -1)).reverse();

    return head.some((num, index) => num !== tail[index]) ? false : true
};