import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";
export default function RootLayout({children}){
  return(
    <html>
      <body>
        <Header/>
        <div className="container">{children}</div>
        <Footer/>
      </body>
    </html>
  );
}