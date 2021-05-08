import React, {Fragment} from 'react';
import './Popup.css'
import InnerPopup from './InnerPopup.jsx'

const Popup =  ({revele,cache,type}) => revele ? (
        <Fragment>
            <div className="overlay"/>
            <div className="wrapper">
                <button className="wrapper_close" onClick={cache}/>
                <InnerPopup />
            </div>
        </Fragment>
    ) : null ;

export default Popup;