import React from 'react';
import { object } from 'prop-types';
import queryString from 'query-string';
import EditView from 'views/edit';

import Layout from 'components/layout';
import SEO from 'components/seo';

const EditPage = ({ location = {} }) => {
  const { search = '' } = location;
  const { id = '' } = queryString.parse(search);

  return (
    <Layout>
      <SEO title="Edit A Bill" />
      <EditView id={id} />
    </Layout>
  );
};

EditPage.propTypes = {
  location: object,
};

EditPage.defaultProps = {
  location: {},
};

export default EditPage;
