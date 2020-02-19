import React from "react";
import { ClipLoader } from "react-spinners";
import { css } from '@emotion/core';

const center = css`
  display: block;
  margin: 0 auto;
  margin-top: 100px;
`;

const Spin = () => {
  return(
    <ClipLoader
      css={center}
      size={100}
      color={"#123abc"}
    />
  );
}

export default Spin;
