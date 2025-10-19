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

function findTarget(root: TreeNode | null, k: number): boolean {
    const visited = new Set();

    const dfs = (node: TreeNode | null) => {
        if (node === null) return false;

        const current = node.val;
        if (visited.has(k - current)) {
            return true;
        } else {
            visited.add(current);
            return dfs(node.left) || dfs(node.right);
        }
    }

    return dfs(root);
};