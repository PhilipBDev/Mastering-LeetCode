<h1>DSA Cheat Sheet</h1>

<!-- TABLE OF CONTENTS -->

<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li><a href="#arrays-&-hashing">Arrays & Hashing</a></li>
    <li><a href="#two-pointers">Two Pointers</a></li>
    <li><a href="#sliding-window">Sliding Window</a></li>
    <li><a href="#stack">Stack</a></li>
  </ol>
</details>

<!-- CONTENT -->

## Arrays & Hashing

---

## Two Pointers

---

## Sliding Window

Sliding Window is an extension of the two pointer approach where we use two pointers (left and right) to create a “window”. The problem will ask us to return the maximum or minimum subrange that satisfies a given condition. Thus the “window” in between our left and right pointers will be that subrange we are looking for. The sliding window involves expanding and contracting our “window” to find the optimal range.

# SLIDING WINDOW PSEUDOCODE

```
def sliding_window(nums):
    Iterate over elements in our input
        Expand the window
        Meet the condition to stop expansion
            Process the current window
            Contract the window
```

Following are some ways you can identify that the given problem might require a sliding window:

- The problem input is a linear data structure such as a linked list, array, or string
- You’re asked to find the longest/shortest substring, subarray, or a desired value

--

## Stack

--
