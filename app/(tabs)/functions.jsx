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
    const rows = board.lenght
    const columns = board[0].lenght
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


export {createMineBoard}