import Head from "next/head";
import { Button } from "../components";

const Page = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Button>Hello</Button>
    </div>
  );
};

export default Page;
