export default function Home() {
  return (
    <div className="home">

           <div className="hero">
        <h1>Build Your Digital Future Here.!🚀</h1>
        <p>
          We create powerful solutions in Web Development, App Development,
          and UI Design to help your business grow.
        </p>

        <button className="button">Get Started!</button>
      </div>

      
      <div className="services">

        <div className="card">
          <img src="/web.png" alt="Web" />
          <h3>Web Development</h3>
          <p>Fast, responsive and modern websites.</p>
        </div>

        <div className="card">
          <img src="/app.png" alt="App" />
          <h3>App Development</h3>
          <p>High-performance mobile applications.</p>
        </div>

        <div className="card">
          <img src="/ui.png" alt="UI" />
          <h3>UI Design</h3>
          <p>Beautiful and user-friendly designs.</p>
        </div>

      </div>

    </div>
  );
}