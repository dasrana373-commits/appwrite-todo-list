import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterWrapper>
      <p>
        © {new Date().getFullYear()} Todo List. All Rights Reserved.
      </p>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  width: 100%;
  padding: 20px;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  background: #0a192f;

  p {
    margin: 0;
    color: #a0aec0;
    font-size: 14px;
    line-height: 1.6;
  }
`;

export default Footer;