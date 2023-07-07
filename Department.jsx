import React from "react";
// import Card from "./Card";

function Department() {
  return (
    <section class="white-section" id="department">
      <div class="card-fluid">
        <div className="dtitle">
          <center><span>DEPARTMENTS</span></center>
        </div>
      </div>
        {/* Trial */}
        <div className="Department">
          <Card 
            title = "SOT"
            imageUrl = "images/SOT image.jpeg"
            body = "I am SOT."
          />
        </div>
        {/* Trial */}
      
    </section>
  );
}

export default Department;
