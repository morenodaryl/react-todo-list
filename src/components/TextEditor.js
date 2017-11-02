import React, {Component} from "react";
import {connect} from 'react-redux';

import "../css/texteditor.css"
import {addNote} from '../actions/notesActions'

class TextEditor extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: props.name,
            content: props.content
        }
        console.log(this.state);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    getInitialState() {
        const initialState = {
            name: "",
            content: ""
        }
        return initialState;
    }
    componentWillReceiveProps(nextProps){
        this.setState({...nextProps})
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }
    addNote(e){
        this.props.addNote(this.state.name,this.state.content);
        this.setState(this.getInitialState());
        e.preventDefault();
    }
    render () {
        return (
            <form className="text-editor" onSubmit={this.addNote.bind(this)}>
                <input type='text' name="name" className="editor-title" value={this.state.name} onChange={this.handleInputChange} />
                <div className='content'>
                    <textarea className="description" name="content" value={this.state.content} onChange={this.handleInputChange}></textarea>
                    <button>+</button>
                </div>
            </form>
        )
    }
}

const mapDistpatchToProps = (distpatch) => {
    return {
        addNote: (title, content) =>{
            distpatch( addNote(title, content) );
        }
    }
}

export default connect(null, mapDistpatchToProps)(TextEditor);