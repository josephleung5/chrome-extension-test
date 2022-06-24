class Modal extends HTMLElement {
  constructor() {
    super();
    this._modalVisible = false
    this._modal = ''
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
    <style>
      /* The Modal (background) */
      .modal {
        display: none; 
        position: fixed; 
        z-index: 1; 
        padding-top: 25vh; 
        left: 0;
        top: 0;
        width: 100%; 
        height: 100%; 
        overflow: auto; 
        background-color: rgba(0,0,0,0.4); 
      }
      /* Modal Content */
      .modal-content {
        position: relative;
        background-color: #fefefe;
        margin: auto;
        padding: 0;
        border: 1px solid #888;
        width: 50%;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
        -webkit-animation-name: animatetop;
        -webkit-animation-duration: 0.4s;
        animation-name: animatetop;
        animation-duration: 0.4s;
      }
      /* Add Animation */
      @-webkit-keyframes animatetop {
        from {top:-300px; opacity:0} 
        to {top:0; opacity:1}
      }
      @keyframes animatetop {
        from {top:-300px; opacity:0}
        to {top:0; opacity:1}
      }
      .modal-header {
        padding: 1rem 1rem 0.65rem;
        font-size: 1rem;
        background-color: rgb(255,138,76);
        color: white;
        text-align: center;
      }
      .modal-body {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem; 
        margin: 1.5rem 0.2rem;
        flex-wrap: wrap;
        gap: .5rem;
      }
      button {
        font-size: .875rem;
        line-height: 1.25rem;
        padding-bottom: 0.625rem;
        border-radius: 0.5rem;
        padding-top: 0.625rem;
        text-align: center;
        width: 8.75rem;
        cursor: pointer;
        border: none;
      }
      #yes-btn {
        background-color: rgb(255,138,76);
        color: #ffffff;
        cursor: pointer;
      }
      #no-btn {
        background-color: #e7e7e7;
        color: #000000;
        cursor: pointer;
      }
      #yes-btn:hover, #no-btn:hover {
        filter: brightness(150%);
        cursor: pointer;
      }
    </style>
    <div class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <slot></slot>
        </div>
        <div class="modal-body">
          <button id="yes-btn">Yes</button>
          <button id="no-btn">No</button>
        </div>
      </div>
    </div>
    `
  }
  connectedCallback() {
    this._modal = this.shadowRoot.querySelector(".modal")
    this._modal.style.display = 'block'
    this._modalVisible = true
    this.shadowRoot.querySelector("#no-btn").addEventListener('click', this._hideModal.bind(this))
    this.shadowRoot.querySelector('#yes-btn').addEventListener('click', () => {
      window.open('https://help.nickelled.com/', '_blank')
    })
  }
  disconnectedCallback() {
    this.shadowRoot.querySelector("#no-btn").removeEventListener('click', this._hideModal)
  }
  _hideModal() {
    this._modalVisible = false
    this._modal.style.display = 'none'
  }
}

window.customElements.define('pp-modal', Modal)
