import React from "react";
import Head from "next/head";
import { Button } from "../../components";
import { Layout } from "../../layouts";

const Page = () => {
  return (
    <>
      <Head>
        <title>Button</title>
      </Head>
      <Layout>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Button</h1>

        <h2 className="text-lg font-bold text-gray-800 mb-2 flex">Primary</h2>
        <div className="flex mb-5">
          <Button variant="primary" className="mr-2">
            Button
          </Button>
          <Button disabled>Button</Button>
        </div>

        <h2 className="text-lg font-bold text-gray-800 mb-2 flex">Secondary</h2>
        <div className="flex mb-5">
          <Button variant="secondary" className="mr-2">
            Button
          </Button>
          <Button disabled>Button</Button>
        </div>

        <h2 className="text-lg font-bold text-gray-800 mb-2 flex">Outline</h2>
        <div className="flex mb-5">
          <Button variant="outline" className="mr-2">
            Button
          </Button>
          <Button disabled>Button</Button>
        </div>
      </Layout>
    </>
  );
};

export default Page;
