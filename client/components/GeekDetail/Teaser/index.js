import React from 'react';
import ReactDOM from 'react-dom';

export default class Teaser extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            isEdit: false,
            teaserText: props.teaserText
         };
      }

    updateTeaser(teaserText) {
        this.setState({
            teaserText: teaserText
        });
    }

    updateIsEdit() {
        this.setState({
            isEdit: !this.state.isEdit
        });
    }

    render() {
        let element = this.state.isEdit ? 
                <input onChange={ (event) => { this.updateTeaser(event.target.value); } } onBlur = { () => { this.updateIsEdit(); }} type='text' value={this.state.teaserText} /> :
                <p onClick={ () =>  { this.updateIsEdit(this.state.teaserText); }}>{ this.state.teaserText } </p> ;
        return (
            <div>
               { element }
            </div>
        );
    }
}