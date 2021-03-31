import React, { SyntheticEvent } from "react";
import Head from "next/head";
import { Button, Input } from "../../components";
import {
  InputGroup,
  InputPrefix,
  InputSuffix,
} from "../../components/Input/Input";

const Page = () => {
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <Head>
        <title>Examples - Forms</title>
      </Head>
      <div className="border-1 border-gray-50 p-8 rounded shadow-lg mb-6">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <h1 className="font-bold text-xl mb-2">Log in</h1>

          <div className="flex flex-col">
            <label className="text-sm mb-1">Username</label>
            <Input type="text" />
          </div>

          <div className="flex flex-col mb-3">
            <label className="text-sm mb-1">Password</label>
            <Input type="password" />
          </div>

          <Button>Submit</Button>
        </form>
      </div>

      <div className="border-1 border-gray-50 p-8 rounded shadow-lg">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <h1 className="font-bold text-xl mb-2">Company settings</h1>

          <div className="flex flex-col">
            <label className="text-sm mb-1">Company name</label>
            <Input type="text" />
          </div>

          <div className="flex flex-col mb-3">
            <label className="text-sm mb-1">Website</label>
            <InputGroup>
              <InputPrefix>https://</InputPrefix>
              <Input type="text" />
              <InputSuffix>.com</InputSuffix>
            </InputGroup>
          </div>

          <Button>Submit</Button>
        </form>
      </div>
    </>
  );
};

export default Page;
