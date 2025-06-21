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
          <nav>
            <label className="logo">CODECORDS</label>
            <div className="single-line-text">
              <h2>Farmer Web application</h2>
            </div>
            <div className="logo">
              <img src='/images/logo.png' alt="Logo" className="logo" width="120" height="110" />
            </div>
            <ul>
              <li><a className="actions" href="/home.html">Home</a></li>
              <li><a className="actions" href="/about.html">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contacts</a></li>
              <li><a href="#">Weather</a></li>
            </ul>
          </nav>
        </header>

        <main>
          <section className="firstsection">
            <div className="leftsection">
              <span>Farming is backbone of Youth Creation</span><br />
              <span id="element"></span>
            </div>
            <div className="rightsection">
              <img src="images/ansh.jpg" alt="Farming" />
            </div>
          </section>

          <div className="rabbit">
            <h1>Our web application Services</h1>
          </div>

          <div className="features">
            <div className="card">
              <div className="Heading">
                <h2>About Modern Technology</h2>
              </div>
              Modern farming uses technologies like drones, robots, sensors, and GPS to increase efficiency and productivity.{" "}
              <a href="https://www.nifa.usda.gov/topics/agriculture-technology" target="_blank" rel="noreferrer">Read More</a>
            </div>

            <div className="card">
              <div className="Heading">
                <h2>About Government Policy</h2>
              </div>
              Government policy refers to the decisions and actions...{" "}
              <a href="https://pib.gov.in/PressReleaseIframePage.aspx?PRID=2002012" target="_blank" rel="noreferrer">Read More</a>
            </div>

            <div className="card">
              <div className="Heading">
                <h2>Registration of Policy</h2>
              </div>
              The registration of policy is a crucial process...{" "}
              <a href="https://mkisan.gov.in/Alpha/registration.aspx" target="_blank" rel="noreferrer">Read More</a>
            </div>

            <div className="card">
              <div className="Heading">
                <h2>Market Grains Prices Insights</h2>
              </div>
              As of February 8, 2025, the average price of wheat in India...{" "}
              <a href="https://dir.indiamart.com/impcat/wheat-grains.html" target="_blank" rel="noreferrer">Read More</a>
            </div>

            <div className="card">
              <div className="Heading">
                <h2>Welcome to Rooftop Farming Shop</h2>
              </div>
              "We have been feeding your family fresh for years."{" "}
              <a href="https://www.paradisefarmmarkets.com.au/" target="_blank" rel="noreferrer">Read more</a>
            </div>
          </div>
        </main>

        <footer>
          <p>&copy; 2024 Modern Technology and Government Policy</p>
        </footer>

        {/* JS libraries */}
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js"></script>
        <script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script>
      </body>
    </>
  );
}

export default App;

