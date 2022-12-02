import React from "react";
import Visionbox from "./Visionbox";
import pimage1 from '../images/vision.jpg'
import pimage2 from '../images/vision.jpg'
import pimage3 from '../images/vision.jpg'

function Vision() {
  return (
    <div className="product">
      <div className="p-heading">
        <h3> Our Vision</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quis
          voluptates odit facilis, laborum excepturi corporis repellendus
          voluptas eum corrupti non blanditiis consectetur? Natus rem dolores
          blanditiis soluta nisi! Dolores neque ut, doloribus magnam a earum
          sint tempore ullam tempora blanditiis eius nostrum? Voluptatem, itaque
          cupiditate magni error aliquid praesentium?
        </p>
        <button>Thodi Aur Jaankari</button>
      </div>

          <div className="product-container">
            <Visionbox image={pimage1}  name="Not Found"/>
            <Visionbox image={pimage2} name="Not Found"/>
            <Visionbox image={pimage3} name="Not Found"/>

      </div>
    </div>
  );
}

export default Vision;
