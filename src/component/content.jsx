
// react
import React from "react";

// lib
import 'react-confirm-alert/src/react-confirm-alert.css';
import Swal from 'sweetalert2'

// style
import '../style/App.css';
import '../style/style';
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

    // lib react-confirm-alert

    // reset = (set_default_color)=>{
    //     confirmAlert({
    //         title: 'ยืนยันว่าต้องเริ่มต้นใหม่',
    //         message: 'ถ้าคุณต้องการกดปุ่มใช่',
    //         buttons: [
    //           {
    //             label: 'ใช่',
    //             onClick: () => {
    //                     this.count = 0
    //                     set_default_color = document.querySelector('#render').style.color = 'black'
    //                     this.setState({ number: this.count});
    //             }
    //           },{
    //             label: 'ไม่',
    //           }]
    //       });
    // };


    // sweatalert2

    reset = (set_default_color)=>{
        Swal.fire({
            title: 'คุณต้องการนับเลขใหม่ไหม?',
            text: "ถ้าคุณต้องการกดปุ่มใช่",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'ใช่',
            cancelButtonText: 'ไม่'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'สำเร็จ',
                'โปรแกรมทำการนับจำนวนใหม่เรียบร้อย',
                'success'
              )
              this.count = 0
                set_default_color = document.querySelector('#render').style.color = 'black'
                this.setState({ number: this.count});
            }
          });
        };
    
    render(){

        return (
            <>

            <section style={margintop}></section>

                <div className="container" >
                    <div className="row">
                        <div className="col-lg-2"></div>
                            <div className="col-lg-8" id="fontthai">
                                <section>
                                    <div class="card text-center shadow-lg">
                                        <div class="card-body">
                                            <h1 class="card-title" >โปรแกรมนับจำนวน</h1>
                                                <p className="card-text text-muted">ลองกดที่ปุ่มดูสิ !</p>
                                                <h1 id="render">{this.state.number}</h1><br />
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

