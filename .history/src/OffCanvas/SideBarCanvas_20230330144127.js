import { useState } from "react";
import { Offcanvas } from "react-bootstrap";

function SideBarCanvas(props) {
  return (
    <Offcanvas show={show} onHide={}>
    <Offcanvas.Header closeButton>
      <Offcanvas.Title>Offcanvas</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
      Some text as placeholder. In real life you can have the elements you
      have chosen. Like, text, images, lists, etc.
    </Offcanvas.Body>
  </Offcanvas>
  );
}


export default SideBarCanvas

