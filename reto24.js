function canExit(maze) {
    const startRow = maze.findIndex(row => row.includes('S'));
    const startCol = maze[startRow].findIndex(cell => cell === 'S');
  
    const visited = [];
    const queue = [[startRow, startCol]];
    const allowedMoves = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0]
    ];
  
    while (queue.length > 0) {
      const [row, col] = queue.shift();
  
      if (maze[row][col] === 'E') return true;
  
      allowedMoves.forEach(([rowMove, colMove]) => {
        const newRow = row + rowMove;
        const newCol = col + colMove;
  
        const isInBounds = newRow >= 0 && newRow < maze.length && newCol >= 0 && newCol < maze[newRow].length;
        const isPassable = isInBounds && maze[newRow][newCol] !== 'W';
        const isVisited = visited.some(p => p[0] === newRow && p[1] === newCol);
  
        if (isPassable && !isVisited) {
          queue.push([newRow, newCol]);
          visited.push([newRow, newCol]);
        }
      });
    }
  
    return false;
}

const result1 = canExit([
  [' ', ' ', 'W', ' ', 'S'],
  [' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', 'W', ' '],
  ['W', 'W', ' ', 'W', 'W'],
  [' ', ' ', ' ', ' ', 'E']
]) // -> true
console.log(result1);
// Se puede salir porque empezamos en [0, 4]
// y hay un camino hasta la salida que es [4, 4]

const result2 = canExit([
  [' ', ' ', 'W', 'W', 'S'],
  [' ', ' ', ' ', 'W', ' '],
  [' ', ' ', ' ', 'W', ' '],
  ['W', 'W', ' ', 'W', 'W'],
  [' ', ' ', ' ', ' ', 'E']
]) // -> false
console.log(result2);
// No hay manera de llegar de [0, 4] a [4, 4]