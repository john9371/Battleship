import React, { Component } from 'react';
import '../CSS/Queue.css'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
//import Rows from './Grid.js'
const setupJS = require('../JS/gameJS.js').setupJS

class Board extends Component {
    constructor(props) {
        super(props)
        this.state = {
            GameReady: {},
            x: 0,
            Grid: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
            shipNum: 0,
            ships: [[1, 1], [1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1], [1, 1], [1, 1], [1, 1, 1], [1, 1], [1, 1, 1, 1, 1, 1]],
            // true is Horizontal false is Vertical
            Rotation: true

        }
        this.convertToInt = this.convertToInt.bind(this);
        this.placeShip = this.placeShip.bind(this);
        this.fire = this.fire.bind(this);
    }

    // componentDidMount(){

    //     fetch("localhost:5001/?name=" + this.props.id,
    //     {method: 'get'})
    //     .then((response)=>{
    //         response.json();
    //     })
    //     .then(next => {
    //         this.setState({GameReady: next})
    //         this.setState({x: 1})
    //     })
    //     if(this.state.x===1){

    //     }
    // }
    convertToInt(x) {
        console.log(x)
        for (var j = 0; j < 10; j++) {
            if (x.includes(j)) {
                return j;
            }
        }
    }
    placeShip(e) {
        var alreadyShipped = false;

        var toLong = true;
        if (this.state.shipNum < 10 && this.convertToInt(e.target.id.slice(2, 3)) + this.state.ships[this.state.shipNum].length < (11) && this.state.Rotation === true) {
            toLong = false
        } else if (this.state.shipNum < 10 && this.convertToInt(e.target.id.slice(4, 5)) + this.state.ships[this.state.shipNum].length < (11) && this.state.Rotation === false) {
            toLong = false
        }
        if (toLong === false) {
            for (var i = 0; i < this.state.ships[this.state.shipNum].length; i++) {
                if (this.state.Rotation === true) {
                    console.log("P-" + (this.convertToInt(e.target.id.slice(1, 3)) + i) + e.target.id.slice(3, 5))
                    if (document.getElementById("P-" + (this.convertToInt(e.target.id.slice(1, 3)) + i) + e.target.id.slice(3, 5)).style.backgroundColor === 'blue') {
                        alreadyShipped = true
                    }
                } else {
                    console.log("P-" + (e.target.id.slice(2, 3)) + "-" + (this.convertToInt(e.target.id.slice(4, 5)) - 1))
                    if (document.getElementById("P-" + (e.target.id.slice(2, 3)) + "-" + (this.convertToInt(e.target.id.slice(4, 5)) + i)).style.backgroundColor === 'blue') {
                        alreadyShipped = true
                    }
                }
            }
            if (this.state.shipNum < 10 && alreadyShipped === false) {
                for (var i = 0; i < this.state.ships[this.state.shipNum].length; i++) {
                    if (this.state.Rotation === true) {
                        console.log("P-" + (this.convertToInt(e.target.id.slice(1, 3)) + i) + e.target.id.slice(3, 5))
                        document.getElementById("P-" + (this.convertToInt(e.target.id.slice(1, 3)) + i) + e.target.id.slice(3, 5)).style.backgroundColor = 'blue';
                        this.setState({ Rotation: true })
                    } else {
                        console.log("P-" + (e.target.id.slice(2, 3)) + "-" + (this.convertToInt(e.target.id.slice(4, 5)) - 1))
                        document.getElementById("P-" + (e.target.id.slice(2, 3)) + "-" + (this.convertToInt(e.target.id.slice(4, 5)) + i)).style.backgroundColor = 'blue';
                        this.setState({ Rotation: false })
                    }
                }
                this.setState({ shipNum: this.state.shipNum + 1 })

            }
        }
    }
    fire(e) {
        
    }
    render() {
        let that = this
        // if(this.state.x===0){
        //     return (
        //         <div>

        //             waiting on game
        //         </div>
        //     );
        // }else{
        return (
            <>
                <Row>
                    <Col>
                        <h3>Opponenet's Board</h3>
                    </Col>
                    <Col>

                        <Container>
                            <Rows RowNum={0} WhoBoard={'O'} thatlldo={that} />
                        </Container>
                    </Col>
                    <Col>
                        next piece: {this.state.shipNum < 10 && <NextShipFun numCol={this.state.ships[this.state.shipNum].length} CurrCol={0} Rotation={this.state.Rotation} />}
                    </Col>
                </Row>
                <br /><br /><br />
                <Row>
                    <Col>
                        <h3>Your Board</h3>
                    </Col>
                    <Col>
                        <Container>
                            <Rows RowNum={0} WhoBoard={'P'} thatlldo={that} />
                        </Container>
                    </Col>
                    <Col id='Holding'>
                        <Button id="Horizontal" onClick={function (e) {
                            if (that.state.Rotation === true) {
                                e.target.textContent = "Currently Vertical";
                                e.target.id = "Vertical";
                                that.setState({ Rotation: false })
                            } else {
                                e.target.textContent = "Currently Horizontal";
                                e.target.id = "Horizontal";
                                that.setState({ Rotation: true })
                            }
                        }}>Currently Horizontal</Button>
                    </Col>
                </Row>
            </>)
        // }
    }
}
class NextShipFun extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        // console.log(this.props.Rotation)
        // console.log("numCol = " + this.props.numCol)
        if (this.props.Rotation === true) {
            console.log('rip')
            return (

                <><br />
                    <BuildCubeHor numCol={this.props.numCol} CurrCol={this.props.CurrCol} />
                </>

            )
        }
        else {
            console.log("e")
            return (
                <><br />
                    <BuildCubeVert numCol={this.props.numCol} CurrCol={this.props.CurrCol} />
                </>
            )
        }
    }
}
class BuildCubeHor extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log("numCol = " + this.props.numCol)
        if (this.props.numCol === this.props.CurrCol + 1) {
            return (
                <div style={{ width: 30, height: 30, borderWidth: 1, borderStyle: 'solid', borderColor: 'black', backgroundColor: 'blue', float: 'left', display: "inline" }}></div>
            )
        } else {
            return (
                <>

                    <div style={{ width: 30, height: 30, borderWidth: 1, borderStyle: 'solid', borderColor: 'black', backgroundColor: 'blue', float: 'left', display: "inline" }}>

                    </div>
                    <BuildCubeHor numCol={this.props.numCol} CurrCol={this.props.CurrCol + 1} />
                </>
            )
        }
    }
}
class BuildCubeVert extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log("numCol = " + this.props.numCol)
        if (this.props.numCol === this.props.CurrCol + 1) {
            return (
                <div style={{ width: 30, height: 30, borderWidth: 1, borderStyle: 'solid', borderColor: 'black', backgroundColor: 'blue' }}>

                </div>
            )
        } else {
            return (
                <>
                    <div style={{ width: 30, height: 30, borderWidth: 1, borderStyle: 'solid', borderColor: 'black', backgroundColor: 'blue' }}>

                    </div>

                    <BuildCubeVert numCol={this.props.numCol} CurrCol={this.props.CurrCol + 1} />
                </>
            )
        }
    }
}
class Rows extends Component {
    constructor(props) {
        super(props)
    }
    fire(e) {

    }
    placeShip(e) {

    }
    render() {
        return (
            <>
                <Row style={{ width: 360 }}>
                    <Column RowNum={this.props.RowNum} ColNum={0} WhoBoard={this.props.WhoBoard} thatlldo={this.props.thatlldo} />
                    <Column RowNum={this.props.RowNum} ColNum={1} WhoBoard={this.props.WhoBoard} thatlldo={this.props.thatlldo} />
                    <Column RowNum={this.props.RowNum} ColNum={2} WhoBoard={this.props.WhoBoard} thatlldo={this.props.thatlldo} />
                    <Column RowNum={this.props.RowNum} ColNum={3} WhoBoard={this.props.WhoBoard} thatlldo={this.props.thatlldo} />
                    <Column RowNum={this.props.RowNum} ColNum={4} WhoBoard={this.props.WhoBoard} thatlldo={this.props.thatlldo} />
                    <Column RowNum={this.props.RowNum} ColNum={5} WhoBoard={this.props.WhoBoard} thatlldo={this.props.thatlldo} />
                    <Column RowNum={this.props.RowNum} ColNum={6} WhoBoard={this.props.WhoBoard} thatlldo={this.props.thatlldo} />
                    <Column RowNum={this.props.RowNum} ColNum={7} WhoBoard={this.props.WhoBoard} thatlldo={this.props.thatlldo} />
                    <Column RowNum={this.props.RowNum} ColNum={8} WhoBoard={this.props.WhoBoard} thatlldo={this.props.thatlldo} />
                    <Column RowNum={this.props.RowNum} ColNum={9} WhoBoard={this.props.WhoBoard} thatlldo={this.props.thatlldo} />
                    <Column RowNum={this.props.RowNum} ColNum={10} WhoBoard={this.props.WhoBoard} thatlldo={this.props.thatlldo} />
                </Row>
                {this.props.RowNum < 10 &&
                    <Rows RowNum={this.props.RowNum + 1} WhoBoard={this.props.WhoBoard} thatlldo={this.props.thatlldo} />
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
                    <Col style={{ width: 30, height: 30, borderWidth: 1, borderStyle: 'solid', borderColor: 'black' }}>

                    </Col>
                )
            } else {
                return (
                    <Col style={{ width: 30, height: 30, borderWidth: 1, borderStyle: 'solid', borderColor: 'black' }}>
                        {this.props.RowNum}
                    </Col>
                )
            }
        } else if (this.props.RowNum === 0) {
            return (
                <Col style={{ width: 30, height: 30, borderWidth: 1, borderStyle: 'solid', borderColor: 'black' }}>
                    {this.state.baseRow[this.props.ColNum]}
                </Col>
            )
        } else {
            if (this.props.WhoBoard === 'O') {
                return (
                    <Col id={this.props.WhoBoard + "-" + (this.props.ColNum - 1) + '-' + (this.props.RowNum - 1)} onClick={(e) => { this.props.thatlldo.fire(e) }} style={{ width: 30, height: 30, borderWidth: 1, borderStyle: 'solid', borderColor: 'black' }}>

                    </Col>
                )
            } else {
                return (
                    <Col id={this.props.WhoBoard + "-" + (this.props.ColNum - 1) + '-' + (this.props.RowNum - 1)} onClick={(e) => { this.props.thatlldo.placeShip(e) }} style={{ width: 30, height: 30, borderWidth: 1, borderStyle: 'solid', borderColor: 'black' }}>

                    </Col>
                )
            }
        }
    }
}
export default Board;