import React from 'react';
import PropTypes from 'prop-types';

const Pub = ({ data }) => (
  <article className="pub-container">
    <header>
      <h4><a href={data.link} target="_blank" rel="noreferrer">{data.title}</a></h4>
      <p className="daterange">{data.publisher} - {data.date}</p>
    </header>
    <p className="desc">{data.desc}</p>
  </article>
);

Pub.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    publisher: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default Pub;
