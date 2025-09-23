function isPalindrome(x: number): boolean {
    const reversed = x.toString().split('').reverse().join('');
    return x.toString() === reversed
};