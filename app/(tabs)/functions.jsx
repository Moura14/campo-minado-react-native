const createBoard = (row, columns) => {
    return Array(row).fill(0).map((_, row) => {
        return Array(columns).fill(0).map((_, columns) => {
            return {
                row: row,
                column: columns,
                oppended: false,
                flagged: false,
                mined: false,
                exploded: false,

            }
        })
    })
}


const spredMines = (board, minesAmount) => {
    const rows = board.length
    const columns = board[0].length
    let minesPlanted = 0
    while(minesPlanted < minesAmount){
        const rowsSel = parseInt(Math.random() * rows, 10)
        const columnSel = parseInt(Math.random() * columns, 10)

        if(!board[rowsSel][columnSel].mined){
            board[rowsSel][columnSel].mined = true
            minesPlanted++
        }
    }
}

const createMineBoard = (rows, columns, minesAmount) => {
    const board = createBoard(rows, columns)
    spredMines(board, minesAmount)
    return board
}


const cloneBoard = board => {
    return board.map(row => {
        return row.map(field => {
            return {...field}
        })
    })
}

const getNeighbors = (board, row, column) => {
    const neighbors = []
    const rows = [row - 1, row + 1]
    const columns = [column - 1, column + 1]
    row.forEach(r => {
        columns.forEach(c => {
            const diferent = r !== row || c !== column
            const validRow = r>= 0 && board.length
            const validColumn = c >= 0 && c < board[0].length
            if(diferent && validRow && validColumn){
                neighbors.push(board[r][c])
            }
        })
    })
    return neighbors
}


const safeNeighborhood = (board, row, column) => {
    const safes = (result, neighbor) => result && !neighbor.mined
    return getNeighbors(board, row, column).reduce(safes, true)
}

export {createMineBoard}