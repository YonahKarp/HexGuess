import React, { Component } from 'react'
import { connect } from 'react-redux'
import './scss/index.scss'

import { setColor } from './actions'
import HexQuiz from './HexQuiz'


export class App extends Component {


	async componentDidMount() {
		this.props.onSetColor()
	}


	render() {

		return (
			<HexQuiz/>
		)
	}
}

const mapStateToProps = (state) => ({
    doneLoading: state.doneLoading
})

const mapDispatchToProps = (dispatch) => {
	return {
		onSetColor: () => {
			dispatch(setColor())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

