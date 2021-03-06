import React, { Component } from "react";
import M from 'materialize-css';

export default class ModalCard extends Component {

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.modal');
            var instances = M.Modal.init(elems, {});
          });
    }
    render() {
        return (
          
            <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>
          
           
            <div id="modal1" class="modal">
              <div class="modal-content">
                <h4>Modal Header</h4>
                <p>A bunch of text</p>
              </div>
              <div class="modal-footer">
                <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
              </div>
            </div>
            
        );
    }
}


