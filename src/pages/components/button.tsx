import React from "react"
import { Button } from "../../components"
import { Layout } from "../../layouts"

const Page = () => {
  return (
    <Layout>
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Button</h1>

      <div className="mb-4"><Button variant="primary">Primary button</Button></div>
      <Button variant="secondary">Secondary button</Button>
    </Layout>
  )
}

export default Page