import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shareButtonHandle from '../services/Sharebuttonhandle';
import shareIcon from '../images/shareIcon.svg';
import './ShareButton.css'


function ShareButton(props) {
  const [copiedbutton, setcopy] = useState(false);
  const { id, type, datatestid } = props;
  const onclickHandle = () => {
    const timeout = 3000;
    shareButtonHandle(type, id);
    setcopy(true);
    setTimeout(() => {
      setcopy(false);
    }, timeout);
    return null;
  };

  return (
    <div>
      <img className='shareConfig' type="button" onClick={ () => { onclickHandle(); } } src={ shareIcon } />
      <p>
        {copiedbutton ? <p>Link copiado!</p> : ''}
      </p>
    </div>
  );
}

const { string } = PropTypes;
ShareButton.propTypes = {
  id: string.isRequired,
  type: string.isRequired,
  datatestid: string.isRequired,
};

export default ShareButton;
