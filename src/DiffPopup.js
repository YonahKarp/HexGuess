import React, { Component } from 'react'
import { connect } from 'react-redux'
import './scss/diffPopup.scss'

import { setColor, setDiff } from './actions'
import { foreColor, RGBtoHex } from './utils';


export class DiffPopup extends Component {


    constructor(props) {
        super(props);

        this.state = {
            shouldHide: false,
            color: props.color
        }
    }

    nextColor(){
        this.props.onSetColor()
        setTimeout(()=> {
            this.props.onSetDiff(false)
        }, 1000)

        this.setState({shouldHide: true})


    }


	render() {

        const [redDiff, greenDiff, blueDiff] = this.props.diff

        const sum = this.props.diff.reduce((a, b) => a + b)
        let message = ''

        if(sum < 16)
            message = 'You are a Hex God!'
        else if(sum < 64)
            message = 'Awesome Job!'
        else if(sum < 128)
            message = 'Nice Job!'
        else if(sum < 192)
            message = 'Not Bad...'
        else if(sum < 256)
            message = 'Maybe next time'
        else
            message = 'Ouch...'

		return (
			<div className={'diffPopup ' + (this.state.shouldHide ? 'hide' : '')}>

                <h3>{message}</h3>

                <div className='colorCompare'>
                    <div className='swatch guessColor' style={{
                        background: `rgb(${this.props.guess})`,
                        color: `rgb(${foreColor(this.props.guess)})`
                    }}>
                        #{RGBtoHex(this.props.guess)}
                    </div>
                    <div className='swatch actualColor' style={{
                        background: `rgb(${this.state.color})`,
                        color: `rgb(${foreColor(this.state.color)})`
                    }}>
                        #{RGBtoHex(this.state.color)}
                    </div>
                </div>
                <div className='stats'>
                    <p>You were off by...</p>
                    <div>
                        <span className='colorName'>Red</span><span>{redDiff}</span>
                    </div>
                    <div>
                        <span className='colorName'>Green</span><span>{greenDiff}</span>
                    </div>
                    <div>
                        <span className='colorName'>Blue</span><span>{blueDiff}</span>
                    </div>
                    <hr/>
                    <div className='total'>
                        <span className='colorName'>Total</span><span>{sum}</span>
                    </div>


                </div>

                <div className='btn' onClick={()=> this.nextColor()}>
                    Next Color
                </div>
                
                
                
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
		},
        onSetColor: () => {
			dispatch(setColor())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(DiffPopup)

