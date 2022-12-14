import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useRouter } from "next/router";

const Header = () => {
  const route = useRouter();

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
            color: "deeppink",
          })}
        >
          hello my name is suyeon
        </h2>
      </div>
    </>
  );
};

export default Header;
