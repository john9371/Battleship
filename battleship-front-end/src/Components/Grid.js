import React, { Component } from 'react';
import '../App.css';
import { Row, Col } from 'react-bootstrap'
const Board = require('./Game.js')
export default class Rows extends Component {
    constructor(props) {
        super(props)
    }
    fire(e){

    }
    placeShip(e){

    }
    render() {
        return (
            <>
                <Row style={{ width: 360 }}>
                    <Column RowNum={this.props.RowNum} ColNum={0} WhoBoard={this.props.WhoBoard} />
                    <Column RowNum={this.props.RowNum} ColNum={1} WhoBoard={this.props.WhoBoard} />
                    <Column RowNum={this.props.RowNum} ColNum={2} WhoBoard={this.props.WhoBoard} />
                    <Column RowNum={this.props.RowNum} ColNum={3} WhoBoard={this.props.WhoBoard} />
                    <Column RowNum={this.props.RowNum} ColNum={4} WhoBoard={this.props.WhoBoard} />
                    <Column RowNum={this.props.RowNum} ColNum={5} WhoBoard={this.props.WhoBoard} />
                    <Column RowNum={this.props.RowNum} ColNum={6} WhoBoard={this.props.WhoBoard} />
                    <Column RowNum={this.props.RowNum} ColNum={7} WhoBoard={this.props.WhoBoard} />
                    <Column RowNum={this.props.RowNum} ColNum={8} WhoBoard={this.props.WhoBoard} />
                    <Column RowNum={this.props.RowNum} ColNum={9} WhoBoard={this.props.WhoBoard} />
                    <Column RowNum={this.props.RowNum} ColNum={10} WhoBoard={this.props.WhoBoard} />
                </Row>
                {this.props.RowNum < 10 &&
                    <Rows RowNum={this.props.RowNum +1} WhoBoard={this.props.WhoBoard}/>
                }
            </>
        )
    }
}
class Column extends Component {
    constructor(props) {
        super(props)
        this.state = {
            baseRow: ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
        }
    }

    render() {
        let that = this
        if (this.props.ColNum === 0) {
            if (this.props.RowNum === 0) {
                return (
                    <Col id={this.props.WhoBoard +"-"+ this.props.RowNum +'-' + this.props.ColNum}  style={{ width: 30, height: 30, borderWidth: 1, borderStyle: 'solid', borderColor: 'black' }}>

                    </Col>
                )
            } else {
                return (
                    <Col id={this.props.WhoBoard +"-"+ this.props.RowNum +'-' + this.props.ColNum} style={{ width: 30, height: 30, borderWidth: 1, borderStyle: 'solid', borderColor: 'black' }}>
                        {this.props.RowNum}
                    </Col>
                )
            }
        } else if (this.props.RowNum === 0) {
            return (
                <Col id={this.props.WhoBoard +"-"+ this.props.RowNum +'-' + this.props.ColNum} style={{ width: 30, height: 30, borderWidth: 1, borderStyle: 'solid', borderColor: 'black' }}>
                    {this.state.baseRow[this.props.ColNum]}
                </Col>
            )
        } else {
            if(this.props.WhoBoard == 'O'){
                return (
                    <Col id={this.props.WhoBoard +"-"+ this.props.RowNum +'-' + this.props.ColNum} onClick={(e) => {Rows.fire(e)}} style={{ width: 30, height: 30, borderWidth: 1, borderStyle: 'solid', borderColor: 'black' }}>

                    </Col>
                )
            }else{
                return (
                    <Col id={this.props.WhoBoard +"-"+ this.props.RowNum +'-' + this.props.ColNum} onClick={(e)=>{Rows.placeShip(e)}} onClick={Board.nextShip()} style={{ width: 30, height: 30, borderWidth: 1, borderStyle: 'solid', borderColor: 'black' }}>

                    </Col>
                )
            }
        }
    }
}