import React, { Component } from "react";
import KnowMore from './know-more-modal'
import "./content1.css";
class Content1 extends Component {
  state = {};
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      data: [],
      isHidden : true
    };
    
  }
  modalOpen=()=>
{
    this.setState({
        isHidden:!this.state.isHidden
    })
}
hideModal = (hidemodalfromChild) =>
{
    this.setState({
        isHidden:hidemodalfromChild
    })
} 
  render() {

    const {error,isLoaded,data,isHidden} = this.state;  
    return (
      <div className="content">
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--12-col">
            <img
              src="https://ik.imagekit.io/flyrobe/Prime_Banner_2x.jpg"
              className="prime-banner"
            />
          </div>
        </div>
        <div className="mdl-grid center-items">
          <div className="mdl-cell mdl-cell--3-col">
            <div className="Now-Rent-Brand-New-M">
              Now Rent<br />Brand New<br />Made-to-Measure designer wear<br /> at just 40% of the MRP
            </div>
          </div>
        </div>
        <div className="mdl-grid " style={{marginLeft: "21%",marginRight: "21%"}}>
          <div className="mdl-cell mdl-cell--12-col">
            <img
              src="https://ik.imagekit.io/flyrobe/list-banner/store-02_2x.png"
              className="prime-banner"
            />
          </div>
          <div className="mdl-cell mdl-cell--4-col">
            <img
              src="https://ik.imagekit.io/flyrobe/insta-home00002_HkrxhXycX.jpg"
              className="prime-banner"
            />
          </div>
          <div className="mdl-cell mdl-cell--4-col">
            <img
              src="https://ik.imagekit.io/flyrobe/insta-home00002_HkrxhXycX.jpg"
              className="prime-banner"
            />
          </div>
          <div className="mdl-cell mdl-cell--4-col">
            <img
              src="https://ik.imagekit.io/flyrobe/insta-home00002_HkrxhXycX.jpg"
              className="prime-banner"
            />
          </div>
          <div className="mdl-cell mdl-cell--4-col">
            <img
              src="https://ik.imagekit.io/flyrobe/insta-home00002_HkrxhXycX.jpg"
              className="prime-banner"
            />
          </div>
          <div className="mdl-cell mdl-cell--4-col">
            <img
              src="https://ik.imagekit.io/flyrobe/insta-home00002_HkrxhXycX.jpg"
              className="prime-banner"
            />
          </div>
          <div className="mdl-cell mdl-cell--4-col">
            <img
              src="https://ik.imagekit.io/flyrobe/insta-home00002_HkrxhXycX.jpg"
              className="prime-banner"
            />
          </div>
        </div>
        <div className="mdl-grid center-items">
          <div className="mdl-cell mdl-cell--6-col" style={{textAlign:"center"}}>
             <button className="know-more" onClick={this.modalOpen}>
               <span className="text">Know More</span>
             </button>
                {!isHidden && <KnowMore state={this.state} hide={this.hideModal}/>} {/*model declare*/}
          </div>
        
        </div>
      </div>
    );
  }
}
export default Content1;
