import React from "react";
import "./header.css";
import Navigation from "./Navigation";
import { Container } from "../container/Container";
export default function Header() {
  return (
    <header className="header">
      <Container>
        <div className="header__box">
          <Navigation />
        </div>
      </Container>
    </header>
  );
}
