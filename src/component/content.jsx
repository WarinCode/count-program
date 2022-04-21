import React from "react";

// style
import '../style/App.css'
import '../style/style'
import { margintop } from "../style/style";


// const input = React.createRef()

export default class Content extends React.Component{

    state = { number: 0};
    count = this.state.number;
    

    increase_the_number = (increase)=>{  
        increase = this.count++
        this.setState({ number: increase });
    };

    reduce_the_number = (reduce)=>{  
        reduce = this.count--
        this.setState({ number: reduce});
    };

    reset =()=>{
        this.count = 0
        this.setState({ number: this.count});
    };


    render(){

        return (
            <>
            <section style={margintop}></section>
            <section>
                    <div class="card text-center shadow-lg">
                        <div class="card-body">
                    <h1 class="card-title">Count Program.</h1>
                        <p className="card-text text-muted">Try pressing the button.</p>
                        <h3>{this.state.number}</h3>
                        <div className="btn-group">
                            <button className ="btn btn-primary me-3" onClick={this.increase_the_number}>เพิ่มจำนวน</button>
                        <button className ="btn btn-danger ms-3" onClick={this.reduce_the_number}>ลดจำนวน</button>
                        </div><br/>
                        <button className ="btn btn-warning mt-4" onClick={this.reset}>นับใหม่</button>
                    </div>
                </div>
            </section>
            </>
        );

    };
};