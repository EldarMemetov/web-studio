'use client';
import React, { useState, useEffect } from 'react';

const FadeError = ({ message, className }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [message]);

  return visible ? <p className={className}>{message}</p> : null;
};

export default FadeError;
