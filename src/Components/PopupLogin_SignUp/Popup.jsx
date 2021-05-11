import React, {Fragment} from 'react';
import './Popup.css'
import InnerPopup from './InnerPopup.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const Popup =  ({revele,cache,type}) => revele ? (
        <Fragment>
            <div className="overlay"/>
            <div className="wrapper">
                <FontAwesomeIcon icon={faTimes} className="wrapper_close" onClick={cache}/>
                <InnerPopup />
            </div>
        </Fragment>
    ) : null ;

export default Popup;