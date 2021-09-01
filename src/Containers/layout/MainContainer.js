import { useEffect } from 'react';
import Main from '../../Components/Main.jsx';

function MainContainer() {

    useEffect(()=>{
        console.log('Render MainContainer')
    },[])

    return <Main />
}

export default MainContainer;