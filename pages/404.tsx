import { useRouter } from "next/router";
import { css } from "@emotion/css";
import React from "react";

const NotFoundPage = () => {
  const route = useRouter();

  return (
    <>
      <div
        css={css({
          backgroundColor: "darkgrey",
          display: "flex",
          justifyContent: "center",
        })}
      >
        <h1 css={css``}>404 Error</h1>
      </div>
    </>
  );
};

export default NotFoundPage;
