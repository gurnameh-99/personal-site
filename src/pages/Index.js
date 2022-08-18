import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import Hello from '../components/hello/hello';

const Index = () => (
  <Main
    description={"Gurunameh Singh Chhatwal's personal website. Senior at UIET, Panjab University."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <Hello loopMessage />
          <p>
            Wanna meet me? <a href="https://calendly.com/gurunameh/30min" target="_blank" rel="noreferrer">Click here</a> to make it happen.
          </p>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
