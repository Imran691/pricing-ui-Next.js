//CharkaProvider is a client component, so add "use client" at the top of page.
// Can be added in "layout.tsx" file but it is a bad practice, because we will have to "use client", so we will not be able to add server components in layout.tsx file.
// Comment out global.cc from layout.tsx fire for this project.

// Chakra has provided its own componets imstead of HTML, That is why it is called a component library.
// <Heading> in place of <h1>, <h2> etc. We use a prop as="h2" etc to 
// <Text> in palce of <p>


"use client";
import { Heading } from "@chakra-ui/layout";
import { ChakraProvider } from "@chakra-ui/react";
import Features from "./Features";
import Header from "./Header";
import Practice from "./Practice";
import Pricing from "./Pricing";

export default function Home() {
  return <ChakraProvider> 
    {/* <Practice/> */}
    <Header/>
    <Pricing/>
    <Features/>
    </ChakraProvider>;
}
