import React from 'react';
import PropTypes from 'prop-types';

export default function UserColor({ match }) {
  return <div style={{ width: '500px', height: '500px', backgroundColor: match.params.color }}></div>;
}
UserColor.propTypes = {
  match: PropTypes.string.isRequired
};
