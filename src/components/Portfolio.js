import React, { Component } from 'react';
import Modal from './Modal';
export default class Porfolio extends Component {
  state = {
    modalOpen: false,
    stateIndex: 0
  }

  modalToggle = (i=this.state.stateIndex) => {
    this.setState({
      modalOpen: !this.state.modalOpen,
      stateIndex: i
    })
  }
  render() {
    let resumeData = this.props.resumeData;
    const {modalOpen, stateIndex} = this.state;

    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item, index) => {
              return(
                <div className="columns portfolio-item">
                  {(modalOpen && index===stateIndex) ? <Modal modalToggle={e => {this.modalToggle(index)}} item={item} id={`${'#modal_0'+index}`} /> : ''}
                  <div className="item-wrap">
                    <div onClick={e => {this.modalToggle(index)}}>
                      <img src={`${item.imgurl}`} className="item-img" alt={`${item.imgurl}`}/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}