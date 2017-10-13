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

    updateTeaser() {
        this.setState({
            isEdit: !this.state.isEdit,
            //teaserText: this.state.teaserText
        });
    }

    render() {
        let element = this.state.isEdit ? 
                <input onClick={ this.updateTeaser.bind(this) } type='text' value={this.state.teaserText} /> :
                <p onClick={ this.updateTeaser.bind(this) }>{ this.state.teaserText } </p> ;
        return (
            <div>
               { element }
            </div>
        );
    }
}