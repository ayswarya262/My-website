export default function Services() {
  return (
    <div className="service">
      <h1 style={{color:"white"}}> Our Services 📈</h1>

      <p className="about-intro">
        We are a modern digital solutions team specializing in web development,
        app development, and UI design. Our goal is to transform ideas into
        powerful, user-friendly digital experiences that drive growth and
        innovation.
      </p>

      <div className="service-cards">

        <div className="service-card">
          <h2>🌐 Web Development</h2>
          <p>
            We build fast, secure, and scalable websites that perform seamlessly
            across all devices. Our focus is on performance, responsiveness, and
            delivering a smooth user experience.
          </p>
        </div>

        <div className="service-card">
          <h2>📱 App Development</h2>
          <p>
            We develop high-performance mobile applications with intuitive
            interfaces, ensuring reliability and efficiency across Android and
            iOS platforms.
          </p>
        </div>

        <div className="service-card">
          <h2>🎨 UI Design</h2>
          <p>
            Our UI design focuses on creating visually appealing, user-friendly
            interfaces that enhance engagement and provide a seamless experience.
          </p>
        </div>

      </div>
    </div>
  );
}