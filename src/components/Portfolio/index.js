import React from "react";
import {
  MDBCardGroup,
  MDBIcon,
  MDBContainer,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
} from "mdbreact";

const Projects = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBCardGroup deck className="mt-3">
        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ width: "500px" }}
            src="https://raw.githubusercontent.com/bruno192000/portfolio-2021/main/assets/images/Screenshot%20(16).png"
            alt="Get Beilingual"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Get Bilingual</MDBCardTitle>
            <MDBCardText>
            This is my second project. An app that will help you learn a new language by communicating with other people.
            </MDBCardText>
            <MDBBtn
              href="https://dry-river-69092.herokuapp.com/login"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              Try it here
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border border-dark">
          <MDBCardImage
            className="img-fluid"
            src="https://raw.githubusercontent.com/bruno192000/portfolio-2021/main/assets/images/Screenshot%20(9).png"
            alt="Note Taker"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Note Taker</MDBCardTitle>
            <MDBCardText>
            A helpfull note taker that will help you organize your plans or ideas. 
            </MDBCardText>
            <MDBBtn
              href="https://notetaker02.herokuapp.com/"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              Try it here
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ height: "283px" }}
            className="img-fluid"
            src="https://raw.githubusercontent.com/bruno192000/portfolio-2021/main/assets/images/partyrama%20scree.jpg"
            alt="PartyRama"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">PartyRama</MDBCardTitle>
            <MDBCardText>
            The first project I did with a team: PartyRama, an App that will help you find the best theme for a party acording to the date you type.
            </MDBCardText>
            <MDBBtn
              href="https://bruno192000.github.io/Holiday/"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              Try it here
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCardGroup>
      <MDBCardGroup deck className="mt-3">
        <MDBCard className="border border-dark">
          <MDBCardImage
            className="img-fluid"
            src="https://raw.githubusercontent.com/bruno192000/budget-tracker/main/assets/Screenshot%20(33).png"
            alt="Budget-tracker"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Budget-tracker</MDBCardTitle>
            <MDBCardText>
            A good way to track your transaccions, link a real bank!. Add or subtrack Funds with Budget Tracker. Even offline!
            </MDBCardText>
            <MDBBtn
              href="https://murmuring-mountain-03974.herokuapp.com/"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              Try it here
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ height: "225px" }}
            className="img-fluid"
            src="https://raw.githubusercontent.com/bruno192000/Weather-Dashboard/main/Web%20capture_6-6-2021_184918_.jpeg"
            alt="Weather-Dashboard"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Weather Dashboard</MDBCardTitle>
            <MDBCardText>
            we have this weather dashboard that will inform you how the weather will be the present day and the 5 next.
            </MDBCardText>
            <MDBBtn
              href="https://bruno192000.github.io/Weather-Dashboard/"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              Try it here
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ height: "225px" }}
            className="img-fluid"
            src="https://raw.githubusercontent.com/bruno192000/Work-Day-scheduler/main/Web%20capture_31-5-2021_19306_.jpeg"
            alt="Work-scheduler"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Work day Schedule</MDBCardTitle>
            <MDBCardText>
            I created work day scheduler that will help you to organize your time better
            </MDBCardText>
            <MDBBtn
              href="https://bruno192000.github.io/Work-Day-scheduler/"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              Try it here
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCardGroup>
    </MDBContainer>
  );
};

export default Projects;
