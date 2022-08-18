import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/Gurunameh.jpeg`} alt="" />
      </Link>
      <header>
        <h2>Gurunameh Singh Chhatwal</h2>
        <p><a href="mailto:gurunameh.work@gmail.com">gurunameh.work@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Gurunameh. I like building things.
        Strong operations professional with a Banchelor of Engineering -
        B.E. (currently enrolled) focused in Electronics and Communications Engineering
        from <a href="https://puchd.ac.in" target="blank">Panjab University</a>. Self taught programmer seeking opportunities to
        make an impact with what I learn.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Gurunameh Singh Chhatwal <Link to="/">gurunameh.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
