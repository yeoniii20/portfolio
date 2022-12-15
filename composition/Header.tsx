import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useRouter } from "next/router";
import { useResponsive } from "../hooks/useResponsive";

const Header = () => {
  const route = useRouter();
  const { responsiveCSS } = useResponsive();

  return (
    <>
      <div
        css={css({
          display: "flex",
          backgroundColor: "lightpink",
        })}
      >
        <h1
          css={css({
            display: "flex",
          })}
        >
          Header
        </h1>
        <h2
          css={css({
            color: responsiveCSS("deepPink", "gray"),
          })}
        >
          hello my name is suyeon
        </h2>
      </div>
    </>
  );
};

export default Header;
