import React, { useState } from "react";
import { Box, Center, SimpleGrid } from "@chakra-ui/react";

const invisButton = (onClick: () => void, bottom = false) => {
  return (
    <button
      style={{
        position: "absolute",
        zIndex: 10,
        width: "100%",
        height: "25%",
        backgroundColor: "Transparent",
        backgroundRepeat: "no-repeat",
        border: "none",
        cursor: "pointer",
        overflow: "hidden",
        outline: "none",
        marginTop: bottom ? "25vh" : 0,
      }}
      onClick={onClick}
    ></button>
  );
};

export const Counter = () => {
  const [top, setTop] = useState(20);
  const [bottom, setBottom] = useState(20);

  return (
    <SimpleGrid>
      <Box bg="#b3faff" fontSize={"40vw"}>
        {invisButton(() => setTop(top + 1))}
        {invisButton(() => setTop(top - 1), true)}
        <Center height="50vh">{top}</Center>
      </Box>
      <Box bg="#ccff99" fontSize={"40vw"}>
        {invisButton(() => setBottom(bottom + 1))}
        {invisButton(() => setBottom(bottom - 1), true)}
        <Center height={"50vh"}>{bottom}</Center>
      </Box>
    </SimpleGrid>
  );
};
