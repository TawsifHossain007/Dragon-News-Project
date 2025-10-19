import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from '../../Components/FindUs/FindUs';
import QZone from '../../Components/QZone/QZone';

const RightAside = () => {
    return (
        <div className='ml-0 mt-10 md:ml-5 md:mt-0 space-y-8'>
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <QZone></QZone>
        </div>
    );
};

export default RightAside;