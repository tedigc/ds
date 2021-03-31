import React from "react";
import Head from "next/head";
import { Input } from "../../components";
import {
  InputGroup,
  InputPrefix,
  InputSuffix,
} from "../../components/Input/Input";

const Page = () => {
  return (
    <>
      <Head>
        <title>Input</title>
      </Head>
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Input</h1>

      <h2 className="text-lg font-bold text-gray-800 mb-2 flex">Default</h2>
      <div className="flex mb-5">
        <Input />
      </div>

      <h2 className="text-lg font-bold text-gray-800 mb-2 flex">Placeholder</h2>
      <div className="flex mb-5">
        <Input placeholder="Placeholder text" />
      </div>

      <h2 className="text-lg font-bold text-gray-800 mb-2 flex">Error</h2>
      <div className="flex mb-5">
        <Input error />
      </div>

      <h2 className="text-lg font-bold text-gray-800 mb-2 flex">Disabled</h2>
      <div className="flex mb-5">
        <Input disabled value="Can't type here" />
      </div>

      <h2 className="text-lg font-bold text-gray-800 mb-2 flex">With prefix</h2>
      <div className="flex mb-5">
        <InputGroup>
          <InputPrefix>£</InputPrefix>
          <Input placeholder="0.00" />
        </InputGroup>
      </div>

      <h2 className="text-lg font-bold text-gray-800 mb-2 flex">
        With prefix and suffix
      </h2>
      <div className="flex mb-5">
        <InputGroup>
          <InputPrefix>£</InputPrefix>
          <Input />
          <InputSuffix>.00</InputSuffix>
        </InputGroup>
      </div>
    </>
  );
};

export default Page;
