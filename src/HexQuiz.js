import React, { Component } from 'react'
import { connect } from 'react-redux'

import DiffPopup from './DiffPopup'
import {hexToRGB} from './utils'


import './scss/hexquiz.scss'
import { setDiff } from './actions'


export class HexQuiz extends Component {

    constructor(props) {
        super(props);
        this.state = {
            guess: '',
            rgbGuess: [0,0,0]
        };
    }


    onTextChange(e){
        const value = e.target.value
        if(/^[0-9a-fA-F]{0,6}$/.test(value))
            this.setState({guess: value})
    }

    runGuess(){
        let rgb = hexToRGB(this.state.guess)
        let diff = rgb.map((color,i) => Math.abs(color - this.props.color[i]))

        this.setState({rgbGuess: rgb, guess: ''})
        this.props.onSetDiff(diff)
    }



	render() {
        const isValidHex = /^[0-9a-fA-F]{6}$/.test(this.state.guess)

		return (
			<div className='hexquiz' style={{background: `rgb(${this.props.color})`}}>

                <div className='quizContainer'>
                    <h1>Guess The Hex</h1>

                    <div className='inputHolder'>
                        <input type='text' placeholder='ffffff' 
                            value={this.state.guess} onChange={(e)=>this.onTextChange(e)}/>
                        <span className='hash'>#</span>
                    </div>

                    <div className={'btn ' + (isValidHex ? '':'disabled')} onClick={
                        isValidHex ? ()=> this.runGuess() : ()=> {}
                    }>
                        {isValidHex ? null :<div className='hoverMsg'>Enter a valid 6 char hex</div> }

                        Guess
                    </div>
				    
                </div>

                {this.props.diff ? <DiffPopup diff={this.state.diff} guess={this.state.rgbGuess}/> : null}
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
    color: state.color,
    diff: state.diff
})

const mapDispatchToProps = (dispatch) => {
	return {
		onSetDiff: (diff) => {
			dispatch(setDiff(diff))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HexQuiz)