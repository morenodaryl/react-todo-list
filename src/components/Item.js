import React, {Component} from "react";

class Item extends Component{
    constructor(props) {
        super(props);
        this.state = {
            description: this.props.description
        }
    }

    static defaultProps = {
        description: "doesn't have a description..."
    }

    onItemClick(){
        this.props.onItemClick({
            id: this.props.id,
            name: this.props.name,
            content: this.props.content
        });
    }

    render(){
        return (
            <li onClick={this.onItemClick.bind(this)}>
                <span className="title">{this.props.name}</span>
                <span className="description">{this.props.content.substring(0,40) + "..."}</span>
            </li>
        )
    }
}

export default Item;