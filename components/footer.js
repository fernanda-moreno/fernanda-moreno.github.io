const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
  <style>
    #lab_social_icon_footer {
        padding: 40px 0;
        background-color: #474747;
        max-width: 100%;
      }
    
      #lab_social_icon_footer a {
        color: white;
        margin: 5px;
        font-size: 18px;
      }
      #container {
        width: 600px;
        margin: auto;
      }
      @media only screen and (max-width: 60em) {
        .container {
          margin-left: 10px;
          margin-right: 10px;
        }
      }
      @media only screen and (max-width: 60em) {
        #container {
          max-width: 100%;
        }
      }
      .top-link {
        transition: all 0.25s ease-in-out;
        position: fixed;
        bottom: 0;
        right: 0;
        display: inline-flex;
        cursor: pointer;
        align-items: center;
        justify-content: center;
        margin: 0 3em 3em 0;
        border-radius: 50%;
        padding: 0.25em;
        width: 40px;
        height: 40px;
        background-color: #F8F8F8;
      }
      .top-link.show {
        visibility: visible;
        opacity: 1;
      }
      .top-link.hide {
        visibility: hidden;
        opacity: 0;
      }
      .top-link svg {
        fill: #000;
        width: 24px;
        height: 20px;
        margin-top: 0.3em;
      }
      .top-link:hover {
        background-color: #E8E8E8;
      }
      .top-link:hover svg {
        fill: #000000;
      }
      .screen-reader-text {
        position: absolute;
        clip-path: inset(50%);
        margin: -1px;
        border: 0;
        padding: 0;
        width: 1px;
        height: 1px;
        overflow: hidden;
        word-wrap: normal !important;
        clip: rect(1px, 1px, 1px, 1px);
      }
      .screen-reader-text:focus {
        display: block;
        top: 5px;
        left: 5px;
        z-index: 100000;
        clip-path: none;
        background-color: #eee;
        padding: 15px 23px 14px;
        width: auto;
        height: auto;
        text-decoration: none;
        line-height: normal;
        color: #444;
        font-size: 1em;
        clip: auto !important;
      }
      
  </style>
  <footer>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="style/style.css">
  <section id="lab_social_icon_footer">
    <div class="container">
      <div class="text-center center-block">
        <a href="FernandaMorenoResume2022-web.pdf" target="_blank"
          rel="noreferrer" style="margin: 8px"><i class="fas fa-briefcase fa-2x"></i></a>
        <a href="mailto:fern@gatech.edu" style="margin: 8px"><i class="fas fa-envelope fa-2x"></i></a>
        <a href="https://www.linkedin.com/in/fernandamoreno99/" target="_blank" rel="noreferrer" style="margin: 8px"><i
            class="fab fa-linkedin fa-2x"></i></a>
        <a href="https://fernanda-moreno.medium.com/" target="_blank" rel="noreferrer" style="margin: 8px"><i
            class="fab fa-medium fa-2x"></i></a>
      </div>
    </div>
  </section>
  <p style="font-size: 14px; margin-bottom: 2vh; margin-top: 2vh">Made with ❤️ and ☕ by Fernanda Moreno. © 2023.</p>
  </footer>
`;

class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const fontAwesome = document.querySelector('link[href*="font-awesome"]');
        const shadowRoot = this.attachShadow({ mode: 'closed' });

        if (fontAwesome) {
            shadowRoot.appendChild(fontAwesome.cloneNode());
        }

        shadowRoot.appendChild(footerTemplate.content);
    }
}

customElements.define('footer-component', Footer);