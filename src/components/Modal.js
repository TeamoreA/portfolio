import React, { Component } from 'react';
// import './modal.css';
export default class Modal extends Component {
  render() {
    let {item, modalToggle, id} = this.props;
    return (
        <div id={id} className="modal">
        <div className="modal-content">
            <span className="close" onClick={modalToggle}>&times;</span>
                <p>{item.about}</p>
                <a href={`${item.project_url}`} target="_blank" rel="noopener noreferrer">Link to project</a>
            </div>
        </div>
        );
  }
}