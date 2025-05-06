import { StyleSheet, View, Text } from 'react-native'
import params from './params'
import MineField from './componentes/mineField'
import { createMineBoard } from './functions'
import { Component } from 'react'

interface AppState {
  board: any[][] 
}

export default class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props)
    this.state = this.createState()
  }

  minesAmount = () => {
    const cols = params.getColumns()
    const rows = params.getRowsAmount()
    return Math.ceil(cols * rows * params.difficultLevel)
  }

  createState = (): AppState => {
    const cols = params.getColumns()
    const rows = params.getRowsAmount()
    return {
      board: createMineBoard(rows, cols, this.minesAmount())
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Iniciando o Mines!</Text>
        <Text>Tamanho da grade: 
          {params.getRowsAmount()}x{params.getColumns()}
        </Text>
        <View style={styles.board}>
          <MineField board={this.state.board} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA'
  }
})
