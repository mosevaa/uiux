import { Providers } from "./providers";
import React from "react";
import { Flex, Text} from "@chakra-ui/react";

export default function RootLayout({children}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
      <body>
      <Providers>
          <Flex position="relative" height="100vh" width="100wh" bg="gray.800">
              <Flex position="absolute">
                  <svg xmlns="http://www.w3.org/2000/svg" width="268" height="271" viewBox="0 0 268 271" fill="none">
                      <path d="M0 269.3L104.277 269.3C115.275 269.3 126.004 265.61 134.228 258.999L218.302 191.417C223.518 187.224 227.517 182.022 229.95 176.266L263.159 97.7056C266.292 90.2941 266.688 82.2986 264.291 74.8572L240.466 0.898393" stroke="#F7FAFC" stroke-width="3"/>
                  </svg>
              </Flex>
              <Flex position="absolute">
                  <svg xmlns="http://www.w3.org/2000/svg" width="305" height="176" viewBox="0 0 305 176" fill="none">
                      <path d="M0.467285 163.335L76.7758 173.61C85.1113 174.732 93.4961 173.665 100.873 170.542L200.346 128.438C204.154 126.826 207.627 124.695 210.644 122.117L275.481 66.732C280.491 62.4518 284.115 57.0544 286.012 51.0454L303.074 -3.00001" stroke="#F7FAFC" stroke-width="3"/>
                  </svg>
              </Flex>
              <Text color="gray.100" fontSize="5xl" as="b" fontStyle="normal" fontWeight="700" position="absolute" top="47" left="30">
                  PICTU
              </Text>
              {children}
              <Flex position="absolute" right="0px" bottom="0px">
                  <svg xmlns="http://www.w3.org/2000/svg" width="395" height="217" viewBox="0 0 395 217" fill="none">
                      <path d="M394.582 15.1554L291.811 2.18742C283.416 1.12814 275.032 2.11702 267.679 5.03357L133.375 58.3077C129.611 59.801 126.179 61.775 123.194 64.1647L35.3503 134.487C30.3431 138.496 26.7175 143.572 24.8027 149.256L1.8212 217.476" stroke="#F7FAFC" stroke-width="3"/>
                  </svg>
              </Flex>
              <Flex position="absolute" right="0px" bottom="0px">
                  <svg xmlns="http://www.w3.org/2000/svg" width="348" height="330" viewBox="0 0 348 330" fill="none">
                      <path d="M348.188 2.26526L208.292 2.26526C196.945 2.26526 185.812 5.874 177.243 12.3296L62.8926 98.4719C57.4101 102.602 53.2017 107.73 50.6469 113.394L5.3788 213.752C2.12491 220.965 1.70126 228.718 4.16867 235.896L36.0812 328.735" stroke="#F7FAFC" stroke-width="3"/>
                  </svg>
              </Flex>
          </Flex>
      </Providers>
      </body>
      </html>
  );
}
