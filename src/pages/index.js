import React, {useState} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const [count, setCount] = useState(0)
  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <h3>Go ahead and increase the count</h3>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Click Me!</button>
      </div>  
      <Link to="/blog">View Blog</Link>
    </Layout>
)
}

export default IndexPage
