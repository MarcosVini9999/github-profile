import React from "react";
import { LoadingContainer } from "./Loading.style";

export const Loading: React.FC = () => {
  const loading = ["l", "o", "a", "d", "i", "n", "g", "."];

  return (
    <LoadingContainer>
      {loading.map((letter, index) => (
        <span style={{ "--i": 1 + index } as React.CSSProperties} key={index}>
          {letter}
        </span>
      ))}
    </LoadingContainer>
  );
};
