import React, { Component } from "react";
import "./know-more-modal.css";
class KnowMore extends Component {
 

  render() {    
    return (
      <div className="w3-modal">
            <div className="w3-modal-content w3-animate-zoom">
            <div className="close">
            <span onClick={() =>this.props.hide(!this.props.state.isHidden)}>&times;</span>
            </div>
             <div className="w3-container ">
                <div className="mdl-grid">
                     <div className="mdl-cell mdl-cell--12-col">
                         <div className="brand-new-fashion">
                         Prime offers an exclusive collection of designer wear.Be the first one to rent it.
                         </div>
                     </div>
                     <div className="mdl-cell mdl-cell--12-col">
                         <div className="collection-preview">
                         COLLECTION PREVIEW
                        </div>   
                     </div>
                     <div className="mdl-cell mdl-cell--2-col" style={{display: "-webkit-box"}}>
                         <a href="https://flyrobe.com/women/prime-collection" className="collection-pre-button-border-women ">
                            <div className="collection-pre-button-label">
                                WOMEN COLLECTIONS
                            </div>
                         </a>
                         <a href="https://flyrobe.com/men/prime-collection" className="collection-pre-button-border-women">
                         <div className="collection-pre-button-label">
                              MEN COLLECTIONS
                         </div>
                        </a>
                     </div>
                </div>
          </div>
        </div>
      </div>
    );
  }
}

export default KnowMore;
