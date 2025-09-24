/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function countNodes(root: TreeNode | null): number {
    if (root === null) return 0

    const nodes = [root];
    let count = 0;

    while (nodes.length > 0) {
        count ++;
        const current = nodes.shift();
        if (current.left) nodes.push(current.left);
        if (current.right) nodes.push(current.right)
    }

    return count;
};