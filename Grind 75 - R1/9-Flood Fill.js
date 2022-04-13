/* 

DFS + BFS Solutions to Flood Fill

Resources: 
DFS: https://learnersbucket.com/examples/algorithms/flood-fill-algorithm-in-javascript/
BFS: https://leetcode.com/problems/flood-fill/discuss/1583131/JavaScript-BFS-Solution

The flood fill algorithms works by replacing all the similar elements 4-directionally.
Above, below, before, after and plus any pixels connected to those in all the directions.

    1. We will create a function which will fill the color by calling itself recursively in all the 4-directions.
    2. But before that check if the input to be replaced and the new input are same or not.
    3. If they are same then return the original array because it will result in infinite loop.
    4. Otherwise check all the boundaries and fill the color only if it is within the bound and is not different input.

*/

// DFS
const floodFillDFS = (image, sr, sc, newColor) => {
  //Get the input which needs to be replaced.
  const current = image[sr][sc];

  //If the newColor is same as the existing
  //Then return the original image.
  if (current === newColor) {
    return image;
  }

  //Other wise call the fill function which will fill in the existing image.
  fill(image, sr, sc, newColor, current);

  //Return the image once it is filled
  return image;
};

const fill = (image, sr, sc, newColor, current) => {
  //If row is less than 0
  if (sr < 0) {
    return;
  }

  //If column is less than 0
  if (sc < 0) {
    return;
  }

  //If row is greater than image length
  if (sr > image.length - 1) {
    return;
  }

  //If column is greater than image length
  if (sc > image[sr].length - 1) {
    return;
  }

  //If the current pixel is not which needs to be replaced
  if (image[sr][sc] !== current) {
    return;
  }

  //Update the new color
  image[sr][sc] = newColor;

  //Fill in all four directions
  //Fill Prev row
  fill(image, sr - 1, sc, newColor, current);

  //Fill Next row
  fill(image, sr + 1, sc, newColor, current);

  //Fill Prev col
  fill(image, sr, sc - 1, newColor, current);

  //Fill next col
  fill(image, sr, sc + 1, newColor, current);
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// BFS
floodFillBFS = function (image, sr, sc, newColor) {
  //Save old color
  let oldColor = image[sr][sc];

  // SPECIAL CASE: new color is the same as the old color (no sence here, just return the current image)
  if (oldColor === newColor) return image;

  //BFS for adjacent cells
  let BFS = (cell) => {
    let q = [];
    q.push(cell);

    while (q.length > 0) {
      let currCell = q.shift();
      //Modify colors with the new color just if it is equal to the old color
      image[currCell[0]][currCell[1]] = newColor;
      let directions = [
        [-1, 0],
        [0, -1],
        [0, 1],
        [1, 0],
      ];

      for (let dir of directions) {
        let newRow = currCell[0] + dir[0];
        let newCol = currCell[1] + dir[1];

        if (
          newRow < 0 ||
          newRow >= image.length ||
          newCol < 0 ||
          newCol >= image[0].length ||
          image[newRow][newCol] !== oldColor
        ) {
          continue;
        }
        q.push([newRow, newCol]);
      }
    }
  };

  BFS([sr, sc]);
  //return modified image
  return image;
};
