import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
  title: "FAQ",
  rows: [
    {
      title: "What is IPFS",
      content:
        "The InterPlanetary File System is a protocol and peer-to-peer network for storing and sharing data in a distributed file system. IPFS uses content-addressing to uniquely identify each file in a global namespace connecting all computing devices.",
    },
    {
      title: "What is blockchain",
      content:
        "In a blockchain, each node has a full record of the data that has been stored on the blockchain since its inception. For Bitcoin, the data is the entire history of all Bitcoin transactions. If one node has an error in its data it can use the thousands of other nodes as a reference point to correct itself.",
    },
  ],
};

const styles = {
  bgColor: "None",
  titleTextColor: "black",
  rowTitleColor: "black",
  rowContentColor: "pink",
  arrowColor: "white",
};

const config = {
  animate: true,
  tabFocus: false,
};

export default function FaqPage() {
  return <Faq data={data} styles={styles} config={config} />;
}
