export default function Contactus() {
  return (
    <div className="box">
    <form className="contact">

      <h1 style={{color:"black"}}>Contact Us 🎯</h1>

   <label style={{color:"black"}} > Name:</label> 
   <input type="text"  placeholder="Enter your name"/>

     <label style={{color:"black"}}>Mobile:</label>
      <input type="number"  placeholder="Enter your mobile number"/>

     <label style={{color:"black"}}> E-mail:</label> 
     <input type="text"  placeholder="Enter your email"></input>
<label style={{color:"black"}}>Select Domain:</label>
        
         <select>
              <option></option>
             <option>Web Development</option>
            <option>App Development</option>
            <option>UI Design</option>
        </select>

        <div className="btns">
    <button type="submit">Submit</button>
    <button type="Reset" >Reset</button>
    </div>
    </form>
    </div>
  );
}

   

  
