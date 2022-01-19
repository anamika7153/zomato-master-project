import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// Layout
import HomeLayout from '../layouts/Homepage.layout';

function HomeLayoutHoc({component: Component,path, ...rest}) {
    return (
        <>
        
        <Route
          {...rest}
          path={path}
         component={
             (props) => (
                <HomeLayout {...props}>
                <Component {...props}/>
            </HomeLayout>
             )
         } 
         />   
      </>
    );
}

export default HomeLayoutHoc;