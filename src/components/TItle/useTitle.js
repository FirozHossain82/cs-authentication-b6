import React, { useEffect } from 'react';

const useTitle = (title) => {
   useEffect(()=>{
    document.title = `Control-Authentication ${title}`;
    window.scrollTo(0,0)
   },[title])
};

export default useTitle;