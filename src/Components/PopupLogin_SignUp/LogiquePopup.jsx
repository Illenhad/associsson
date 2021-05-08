import {useState} from 'react'

const LogiquePopup = () => {
    const [revele, changeRevele] = useState(false);

    function toggle(){
        changeRevele(!revele);
    }

    return {
        revele,
        toggle
    }
};

export default LogiquePopup;