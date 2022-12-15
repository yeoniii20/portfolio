import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { useRouter } from "next/router";

const Hero = () => {
  const route = useRouter();

  return (
    <>
      <div
        css={css({
          display: "flex",
          backgroundColor: "green",
          flexDirection: "column",
        })}
      >
        <div css={css({})}>Hero</div>
      </div>
    </>
  );
};

export default Hero;
