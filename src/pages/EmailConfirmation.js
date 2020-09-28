import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>Thank you</h1>
    <p>we will contact you soon </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
