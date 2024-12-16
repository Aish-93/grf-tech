import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Typing.css';

const TYPING_SPEED = 150;
const DELETING_SPEED = 30;

export const Typing = ({ heading, dataText }) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(TYPING_SPEED);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % dataText.length;
      const fullText = dataText[i];

      setText((prev) =>
        isDeleting
          ? fullText.substring(0, prev.length - 1)
          : fullText.substring(0, prev.length + 1)
      );

      setTypingSpeed(isDeleting ? DELETING_SPEED : TYPING_SPEED);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const typingTimeout = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, loopNum, typingSpeed, dataText]);

  return (
    <div className='typing-container'>
      {/* {heading}&nbsp; */}
      <div className='typing-text'>
        <p>
          <span className='typing-span'>{text}</span>
          <span id='cursor'></span>
        </p>
      </div>
    </div>
  );
};
