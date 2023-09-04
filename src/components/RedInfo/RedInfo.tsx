import React from 'react';
import styled from "styled-components";

const CSSRedInfo = styled.div`
  background: var(--main-2);
  padding: 20px 0;
  color: #FFF;
  text-align: center;
  font-size: 55px;
  font-style: normal;
  font-weight: 400;
  line-height: 71px;

  @media only screen and (max-width: 900px) {
    font-size: 30px;
    line-height: 50px;
  }
`

const RedInfo = (props: any) => {
    return (
        <CSSRedInfo>
            <div className="container">
                {props.text}
            </div>
        </CSSRedInfo>
    );
};

export default RedInfo;