import React from 'react'
import {BsTwitter,BsInstagram} from 'react-icons/bs';
import {FaFacebook} from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <a href='https://twitter.com/i/flow/login'><BsTwitter/></a>
      </div>
      <div>
        <FaFacebook/>
      </div>
      <div>
        <BsInstagram/>
      </div>
    </div>
  )
}

export default SocialMedia
