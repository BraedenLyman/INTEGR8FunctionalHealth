import './App.css';

function App() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-brand">
            <a href="/">Integr8 Functional Health</a>
          </div>
          <ul className="navbar-menu">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <main>
        <section className='about'>
          <h2>About</h2>
          <p>
            Briea completed her Bachelors in Science in Kinesiology at Brock University before becoming a certified person trainer which led her to pursue a career in massage therapy. Briea was first registered in 2016 and has been providing comprehensive care to each client ever since. She focuses on fascia which allows for deep release of adhesions that cause many different dysfunctions. 
            Briea is certified in Fascial Stretch Therapy, Neurostim Scar Tissue Release and Deep Tissue Techniques. 
            Briea sees every client through a wholistic lens which means their lifestyle, diet and physical activity are all important factors in their massage therapy treatments. 
          </p>
        </section>

        <section className='contact'>
          <h2>Contact </h2>
          <p>
            Phone: 289.377.8904
            Email: integr8functionalhealth@gmail.com
          </p>
        </section>

        <section className='services'>
          <h2>Services - All massages are mobile at this time</h2>
            <div className='serviceList'>
              <ul className='list'>
                <li>Services</li>
                <li>Sports Massage</li>
                <li>Fascial Stretch Therapy</li>
              </ul>

              <ul className='list'>
                <li>1 Hour</li>
                <li>$115</li>
                <li>$120</li>
              </ul>

              <ul className='list'>
                <li>45 Min</li>
                <li>$95</li>
                <li>$100</li>
              </ul>

              <ul className='list'>
                <li>90 Min</li>
                <li>$150</li>
                <li></li>
              </ul>
            </div>
            <div className='serviceList'>
              <ul className='list2'>
                <li>Deep Tissue Massage</li>
                <li>Relaxation Massage</li>
                <li>Prenatal Massage</li>
              </ul>

              <ul className='list list2'>
                <li>$115</li>
                <li>$115</li>
                <li>$115</li>
              </ul>

              <ul className='list list2'>
                <li>$95</li>
                <li>$95</li>
                <li>$95</li>
              </ul>

              <ul className='list list2'>
                <li>$150</li>
                <li>$150</li>
                <li>$150</li>
              </ul>
            </div>
            
        </section>
      </main>
    </div>
  );
}

export default App;
