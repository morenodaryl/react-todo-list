import React, { Component } from "react";
import { connect } from 'react-redux';
import { setSelectedNote } from '../actions/notesActions'
import {Icon} from 'react-fa';

import Item from "./Item.js";
import TextEditor from "./TextEditor.js"
import "../css/list.css";

class MainList extends Component {
    constructor(props){
        super(props);
        this.onItemClick = this.onItemClick.bind(this);
        this.state = {
            selectedItem: {
                id: null,
                name: "",
                content: ""
            }
        };
    }
    onItemClick(item){
        this.props.setSelectedNote(item.id);
        this.setState({
            selectedItem: item
        });
    }
    render () {
        return (
            <div id="mainlist">
                <section className="left-section">
                    <Icon spin name="spinner"/>
                    <ul>
                        {this.props.items.map(function(item) {
                            return <Item name={item.title} content={item.content} key={item.id} onItemClick={this.onItemClick} id={item.id}/>
                        }, this)}
                    </ul>
                </section>
                <section className="right-section">
                    <TextEditor name={this.state.selectedItem.name} content={this.state.selectedItem.content} id={this.state.selectedItem.id}/>
                </section>
            </div>
        )
    }
}

const mapDistpatchToActions = (distpatch) => {
    return {
        setSelectedNote: (id) => {
            distpatch(setSelectedNote(id));
        }
    }
}

export default connect(null, mapDistpatchToActions)(MainList);