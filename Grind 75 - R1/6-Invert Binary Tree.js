/* 

3 Solutions to Invert Binary Tree - Recursion, DFS, BFS
    Failed attempt. Did not know syntax. 

Resources: 
https://leetcode.com/problems/invert-binary-tree/discuss/399221/Clean-JavaScript-iterative-DFS-BFS-solutions
https://leetcode.com/problems/invert-binary-tree/discuss/1725229/JS-Heavily-Commented-Solution-Using-BFS

  1. Based off [2, 1, 3] -- this.val would represent 2, this.left would represent 1, this.right would represent 3.
  2. Recursion: Need more practive, but the gist is that we traverse down each side of the tree, then switch the values of left and right.
  3. DFS (Stack): First we insert the inputted root into a stack. While there is something within the stack.
  4. BFS: See comments from resource within code below.

*/

// Recursion (DFS)
function invertTree(root) {
  if (root == null) return root;
  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
  return root;
}

// DFS (Stack LIFO)
function invertTree(root) {
  const stack = [root];

  while (stack.length) {
    const node = stack.pop();
    if (node != null) {
      [node.left, node.right] = [node.right, node.left];
      stack.push(node.left, node.right);
    }
  }

  return root;
}

// BFS (Queue FIFO)
var invertTree = function (root) {
  // Initialize queue
  let queue = [root];

  while (queue.length) {
    // Get the first element of the queue
    let node = queue.shift();

    // If the node is empty, then move onto the next node
    if (!node) continue;

    // Invert the left and right child nodes
    [node.left, node.right] = [node.right, node.left];

    // Insert child nodes into the queue
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return root;
};
