import { Component } from "react";
class Hello extends Component {
    render(){
        return <div> Hello, {this.props.who}</div>
    }
}
export default Hello;