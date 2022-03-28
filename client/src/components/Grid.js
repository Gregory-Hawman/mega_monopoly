export default function Grid() {
    const grid = []
    for (let row = 0; row < 11; row++){
        grid[row] = [];
        for (let col = 0; col < 11; col++){
            if (row === 0 || row === 10 || col === 0 || col === 10){
                grid[row][col] = row + col
            } else{
                grid[row][col] = 0
            }
        }
    }

  return grid;
}

// add more detail to each grid
// {
//     value: 1,
//     players: []
// }