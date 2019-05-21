import React from 'react';

export default class AddSub extends React.Component{
    state = {
        title: ''
    };

    onTextCh = (e) =>{
        this.setState({
            title: e.target.value
        });
    };

    onSubmit = (e) =>{
        e.preventDefault();
        if (this.state.title !== ''){
            this.props.onAdd(this.state.title);
            this.setState({
                title: ''
            });
        }
    };

    render(){
        return(
            <form onSubmit={this.onSubmit}>

              <input name='addItem'
              onChange={this.onTextCh}
              value={this.state.title}
              />

              <button>
              Add subject
              </button>
            </form>
        );
    }
}