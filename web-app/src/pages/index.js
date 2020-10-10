import React from 'react';
import HomeView from 'views/home';

import Layout from 'components/layout';
import SEO from 'components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Regular Payments" />
      <HomeView/>
  </Layout>
);

export default IndexPage;
