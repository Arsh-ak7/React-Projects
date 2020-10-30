import React from 'react'
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';

export default function Accordion({title, active,setActive,content}) {
    return (        
        <ul className="faq-list">
            <li className="faq-list-item">
                <button className="faq-list-btn" onClick={()=>setActive(title)}>{title}
                    {(active===title)?<CloseIcon className="list-btn-icon"/>:<AddIcon className="list-btn-icon" />}
                </button>
                <div className= {`faq-answer ${(active===title) ? "open":"closed"}`}>
                    <span className="faq-answer-details">
                       {content}
                    </span>
                </div>
            </li>
        </ul>   
    )
}
