import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const messages = [
  'Hello everyone!',
  '¡Hola a todos!',
  'सभी को नमस्कार',
  'Bonjour tout le monde!',
  'ਸਾਰੀਆਂ ਨੂੰ ਸਤ ਸ੍ਰੀ ਅਕਾਲ',
  'Hallo alle zusammen!',
  'Buongiorno a tutti!',
  'Olá a todos!',
  'Всем привет!',
  '大 家 好！',
  'こんにちは、みんな',
  'Ciao a tutti',
  'எல்லோருக்கும் வணக்கம்',
  'مرحبا جميعا',
  'ಎಲ್ಲರಿಗೂ ನಮಸ್ಕಾರ',
];

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay) {
      const id = setInterval(() => {
        savedCallback.current();
      }, delay);
      return () => clearInterval(id);
    }
    return () => {}; // pass linter
  }, [delay]);
};

const Hello = ({ loopMessage }) => {
  const hold = 50; // ticks to wait after message is complete before rendering next message
  const delay = 50; // tick length in mS

  const [idx, updateIter] = useState(0); // points to current message
  const [message, updateMessage] = useState(messages[idx]);
  const [char, updateChar] = useState(0); // points to current char
  const [isActive, setIsActive] = useState(true); // disable when all messages are printed

  useInterval(() => {
    let newIdx = idx;
    let newChar = char;
    if (char - hold >= messages[idx].length) {
      newIdx += 1;
      newChar = 0;
    }
    if (newIdx === messages.length) {
      if (loopMessage) {
        updateIter(0);
        updateChar(0);
      } else {
        setIsActive(false);
      }
    } else {
      updateMessage(messages[newIdx].slice(0, newChar));
      updateIter(newIdx);
      updateChar(newChar + 1);
    }
  }, isActive ? delay : null);

  return (
    <div
      className="inline-container"
      style={{}}
    //   onMouseEnter={() => setIsActive(false)}
    //   onMouseLeave={() => (idx < messages.length) && setIsActive(true)}
    >
      <h2 data-testid="heading"><Link to="/">{message}</Link></h2>
    </div>
  );
};

Hello.defaultProps = {
  loopMessage: false,
};

Hello.propTypes = {
  loopMessage: PropTypes.bool,
};

export default Hello;
