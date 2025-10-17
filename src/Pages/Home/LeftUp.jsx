import React, { Suspense } from 'react';
import Category from '../Category.jsx/Category';

const LeftUp = () => {
    return (
        <div>
            <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>  
                <Category></Category>
            </Suspense>
           
        </div>
    );
};

export default LeftUp;