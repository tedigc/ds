import React from "react";
import Head from "next/head";
import { Input } from "../../components";

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
    </>
  );
};

export default Page;
