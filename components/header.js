const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <style>
  .navbar, .navbar-inverse {
	border-radius: 0;
	border: none;
	margin-bottom: 0;
  min-height: 80px;
  background-color: transparent;
}
@media only screen and (max-width: 767px){
  .navbar, .navbar-inverse {
    background-color: transparent;
  }
}

.nav li {
	display: inline;
  color: white;
}

.navbar-inverse .navbar-nav > li > a {
	color: #ffffff;
	font-family: Lato;
	font-size: 1.7vh;
	font-weight: 300;
  /* padding: 30px 25px 33px 25px; */
}

.navbar-inverse .navbar-nav li a:hover {
	background-color: #444444;
	transition: 0.7s all linear;
  height: 100%;
  text-decoration: none;
}

#navbar > ul {
    display: block;
    margin: 4vh 3vw;
    /* padding-bottom: 3vh; */
    list-style: none;
    /* width: 100%; */
    text-align: center;
    /* position: absolute; */
    font-size: 15px;
    text-decoration: none;
}

.love {
  text-align: left;
  font-size: 20px;
  line-height: 36px;
  margin-left: 2.5vw;
}

@media only screen and (min-width: 1600px){
  #navbar > ul {
      float: right;
      margin: 4vh 4vw;
      /* padding-bottom: 3vh; */
      width: 100%;
      display: flex;
      flex-direction: row-reverse;
  }
}

@media only screen and (max-width: 1024px){
  #navbar > ul {
      padding-bottom: 3vh;
  }
}

@media only screen and (max-width: 767px){
  #navbar > ul {
    display: flex;
    flex-direction: column-reverse;
    margin-bottom: 0;
    line-height: 5vh;
    font-size: 2.2vh;
    padding: 0;
  }
}

#navbar > ul > li {
    margin: 0 1em;
    float: right;
    /* border-bottom: solid transparent 2px; */
    color: white;
}

#port > ul {
  margin: 0px;
  padding: 0px;
  list-style: none;
  display: grid;
  cursor: pointer;
  position: absolute;
}
#port > ul > li {
    margin: 0;
    margin-left: -1.1vw;
    padding: 0;
    border-bottom: solid #7f8c8d 2px;
    background-color: #272727;
    line-height: 6.5vh;
    text-align: center;
    border-bottom: none;
}

#port > ul > li > a {
  text-decoration: none;
  color: lightgray;
  display: grid;
  position: relative;
}

#port > ul > li > a:hover {
  background-color: black;
}

ul > li > ul > li {
  display: none;
}

ul > li:active > ul > li, ul > li:hover > ul > li {
  display: grid;
}

.home, .nav-link {
    width: 100%;
    height: 100%;
    margin: 0;
    text-decoration: none;
    color: white;
}

.home:hover, .nav-link:hover {
    color:grey;
    text-decoration: none;
}

.bio > .nav-link {
  color: grey;
}
  </style>
  <header>
  <!-- Navigation -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="style/style.css">

  <nav class="navbar navbar-inverse navbar-static-top" role="navigation">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
          data-target="#bs-example-navbar-collapse-1">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div>

      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

        <div class="nav" id="navbar">
          <ul>
            <li>
              <a href="features.html" class="nav-link">Features</a>
            </li>
            <li>
              <a href="photo.html" class="nav-link">Photography</a>
            </li>
            <li>
              <a href="video.html" class="nav-link">Videography</a>
            </li>
            <li>
              <a href="design.html" class="nav-link">Design</a>
            </li>
            <li>
              <a href="coding.html" class="nav-link">Code</a>
            </li>
            <li>
              <a href="index.html">Home</a>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </nav>
  </header>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define('header-component', Header);