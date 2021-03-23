import React from "react";
import { Button } from "../../components";
import { Layout } from "../../layouts";

const Page = () => {
  return (
    <Layout>
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Button</h1>

      <Button className="mb-2">Button</Button>
      <Button className="mb-2" variant="secondary">
        Button
      </Button>
      <Button className="mb-2" variant="outline">
        Button
      </Button>
      <Button disabled>Button</Button>
    </Layout>
  );
};

export default Page;
