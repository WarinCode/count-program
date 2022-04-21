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
        increase = this.count += 1
        this.setState({ number: increase });
        let green_color = document.querySelector('#render')
        green_color.style.color = 'green'
    };

    reduce_the_number = (reduce)=>{  
        reduce = this.count -= 1
        this.setState({ number: reduce});
        let red_color = document.querySelector('#render')
        red_color.style.color = 'red'
    };

    reset =(set_default_color)=>{
        this.count = 0
        set_default_color = document.querySelector('#render').style.color = 'black'
        this.setState({ number: this.count});
    };

    render(){

        return (
            <>
            <section style={margintop}></section>

                <div className="container" >
                    <div className="row">
                        <div className="col-lg-2"></div>
                        <div className="col-lg-8">
            <section>
                    <div class="card text-center shadow-lg">
                        <div class="card-body">
                    <h1 class="card-title" >Count Program.</h1>
                        <p className="card-text text-muted">Try pressing the button.</p>
                        <h3 id="render">{this.state.number}</h3><br />
                        <div className="btn-group">
                            <button className ="btn btn-primary me-3" onClick={this.increase_the_number}>เพิ่มจำนวน</button>
                        <button className ="btn btn-danger btn-warning ms-3" onClick={this.reduce_the_number}>ลดจำนวน</button>
                        </div><br/>
                        <button className ="btn btn-warning mt-4" onClick={this.reset}>นับใหม่</button>
                    </div>
                </div>
            </section>
                        </div>
                        <div className="col-lg-2"></div>
                    </div>
                </div>
            </>
        );

    };
};

