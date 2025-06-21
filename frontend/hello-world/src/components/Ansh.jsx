import React from 'react';

function App() {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700&display=swap"
          rel="stylesheet"
        />
        <title>Ansh Raj Portfolio</title>
        <link rel="stylesheet" href="main.css" />
      </head>

      <body>
        <header>
          <nav className="navbar">
  <div className="navbar-left">
    <label className="logo-text">CODECORDS</label>
    <div className="title"></div>
    <img src="/images/logo.jpg" alt="Logo" width="100" height="100" className="logo-img" />
  </div>

  <div className="navbar-center">
    <h2>GHAR KI KHETI</h2>
  </div>

  <ul className="nav-links">
    <li><a className="actions" href="/">Home</a></li>
    <li><a className="actions" href="/">About</a></li>
    <li><a className="actions" href="#">Services</a></li>
    <li><a className="actions" href="#">Contacts</a></li>
    <li><a className="actions" href="#">Weather</a></li>
  </ul>
</nav>


        </header>

        <main>
          <section className="firstsection">
            <div className="leftsection">
              
              <span>Farming is backbone of Youth Creation
                </span>
                
                <span>"Grow More With Less Space – Rooftop Farming Made Simple!"
                </span>
              <span id="element"></span>
            </div>
            <div className="rightsection">
              <img src="/src/images/ansh.jpg" alt="Farming" />
            </div>
          </section>

          <div className="rabbit">
            <h1>Our web application Services</h1>
          </div>

          <div className="features">
            <div className="card">
              <div className="Heading">
                <h2>Modern Farming Techniques
</h2>
              </div>
              📘Soil-less growing (cocopeat, hydroponics).{" "}
              <a href="https://www.agritecture.com/blog/2019/3/7/soilless-agriculture-an-in-depth-overview" target="_blank" rel="noreferrer">Read More</a>
            </div>

            <div className="card">
              <div className="Heading">
                <h2> Watering Schedule Generator</h2>
              </div> 💧Option to email or download the schedule...{" "}
              <a href="https://www.smwd.com/189/Create-a-Watering-Schedule" target="_blank" rel="noreferrer">Read More</a>
            </div>

            <div className="card">
              <div className="Heading">
                <h2> Guided Tutorials & Learning</h2>
              </div>
               🎓Step-by-step video guides--Search by topic: soil, irrigation, pruning, etc....{" "}
              <a href="https://youtu.be/lczgUj4InX0?si=CnSOSSOY3WY-3f9g" target="_blank" rel="noreferrer">Read More</a>
            </div>

            <div className="card">
              <div className="Heading">
                <h2>Request Rooftop Setup Service</h2>
              </div>
               🛠️Simple form to request on-site setup...{" "}
              <a href="https://dir.indiamart.com/impcat/rooftop-farming.html" target="_blank" rel="noreferrer">Read More</a>
            </div>

            <div className="card">
              <div className="Heading">
                <h2>Welcome to Rooftop Farming Shop</h2>
              </div>
               🛒"We have been feeding your family fresh for years."{" "}
              <a href="https://www.trustbasket.com/collections/rooftop-organic-farming-kit?srsltid=AfmBOoryoQN7kWvOdIEnT6r6wzC3dcBigK3N2b1wdSW1dmn8LgDo48J_" target="_blank" rel="noreferrer">Read more</a>
            </div>
          </div>
        </main>

        
        {/* JS libraries */}
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js"></script>
        <script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script>
        <footer class="simple-footer">
          <p>&copy; 2025 Modern Technology and Rooftop Farming</p>
        </footer> 
      </body>
    </>
  );
}

export default App;
