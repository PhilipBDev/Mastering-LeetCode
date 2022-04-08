/* 

Solution to Merge Two Sorted Lists
    Failed attempt. Haven't compared two linked lists before.

Resource: https://leetcode.com/problems/merge-two-sorted-lists/discuss/740060/JavaScript-with-existing-nodes-manipulation(no-fake-head)
* Comments in the code below are from this resource.

Linked List
    With linked lists, rather than looping like an array, we are constantly comparing the heads. We use if statements to compare the two heads from each list.
    We take the smaller head of the two and add the node to a new linked list. The list containing the lesser value will move its pointer to the next item. 
    


Time Complexity: O(n)

*/

var mergeTwoLists = function (l1, l2) {
  //if any one of them is null, return the non-null list
  if (!l1 || !l2) return l1 || l2;

  //temp will be the head of the final merged list
  let temp = null;
  let l3 = null;

  //while both the lists are not null
  while (l1 && l2) {
    if (l1.val < l2.val) {
      //if this is the first node of the mergedlist
      if (!l3) {
        temp = l1;
        l3 = l1;
      } else {
        l3.next = l1;
        l3 = l3.next;
      }
      l1 = l1.next;
    } else {
      //if this is the first node of the mergedlist
      if (!l3) {
        temp = l2;
        l3 = l2;
      } else {
        l3.next = l2;
        l3 = l3.next;
      }
      l2 = l2.next;
    }
  }

  //assign whichever list is remaining to the final merged list
  l3.next = l1 || l2;

  return temp;
};
