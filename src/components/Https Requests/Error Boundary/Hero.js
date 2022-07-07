import React from 'react';


function Hero({heroName}) {
   if (heroName === 'jokr'){
      throw new Error("Something Went Wrong")
   }
   return ( 
      <h1>{heroName}</h1>
    );
}

export default Hero;