import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const AboutMe = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="12">
          <h2>About Me</h2>
          <hr class="solid bg-dark" />
          <img
            style={{ height: "500px" }}
            src="https://avatars.githubusercontent.com/u/81443002?s=400&u=b3662ceea9e23fb2ee04488e82cd1c49dd8440b5&v=4"
            class="float-left pr-4 pb-3 img-fluid"
            alt="Bruno Calderon"
          />
          <p style={{ fontSize: "40px" }}>
            Hi there, I'm Bruno Calderon. I'm a student from OSU bootcamp.
            Currently, I live in Columbus, OH. For now, my goal is to finish the course and try to get a job as soon as porssible.
            If you are interest in see my projects go ahead and take a look on this page.
          </p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default AboutMe;
