function groupAnagrams(strs: string[]): string[][] {
    const groups = new Map<string, string[]>();
    const getId = (text: string) => {
        return text.split('').toSorted().join('');
    }

    strs.forEach((str) => {
        const id = getId(str);
        const group = groups.get(id);
        if (group) {
            groups.set(id, [...group, str]);
        } else {
            groups.set(id, [str]);
        }
    })

    return Array.from(groups.values())
};