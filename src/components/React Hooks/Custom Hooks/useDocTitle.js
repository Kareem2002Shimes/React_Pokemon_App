import {useEffect} from 'react';


function useDocTitle(count) {
    return ( 
        useEffect(()=>{
            document.title = `Count - ${count}`
        },[count])
     );
}

export default useDocTitle;