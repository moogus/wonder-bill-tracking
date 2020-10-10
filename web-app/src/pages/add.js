import React from 'react';

import Layout from 'components/layout';
import SEO from 'components/seo';
import AddView from 'views/add';

const AddPage = () => (
  <Layout>
    <SEO title="Add A Bill" />
    <AddView/>
  </Layout>
);

export default AddPage;
