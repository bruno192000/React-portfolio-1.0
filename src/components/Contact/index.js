import React from "react";
import { MDBContainer, MDBRow, MDBCol} from "mdbreact";

const ContactInfo = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="12" className="text-center">
          <h2>Contact me Any time</h2>
          <hr class="solid bg-dark" />
          <img
            style={{ height: "500px" }}
            src="https://avatars.githubusercontent.com/u/81443002?s=400&u=b3662ceea9e23fb2ee04488e82cd1c49dd8440b5&v=4"
            class="pr-4 pb-8 img-fluid"
            alt="Bruno's picture"
          />
          <h4>
            Don't be afraid and contact me any time you want. You have the links of my githug page, my phone number and G-mail.
          </h4>
          <hr className="hr-light w-25" />
          <h3>Cell Phone</h3>
          <hr className="hr-dark w-25" />
          <a href="tel:6146959922">
             6146959922
          </a>
          <hr className="hr-light w-25" />
          <h3>E-mail</h3>
          <hr className="hr-dark w-25" />
          <a href="mailto:slardaromg@gmail.com">
            slardaromg@gmail.com
          </a>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default ContactInfo;
