import {useState} from "react";
import {IoIosAddCircle} from "react-icons/io";
import {AiFillMinusCircle} from "react-icons/ai";

export const FAQsItem = ({faq, isOpen }) => {
    const [isOpenState, setIsOpenState] = useState(isOpen);
    const {id, question, answer} = faq;
    return (
        <div className="faq" id={id}>
            <div className="faq-question">
                <div className="faqsItem" onClick={()=>setIsOpenState(!isOpenState)}>
                    <span>{question}</span>
                    <span className="icon-container">
                        {isOpenState ? <AiFillMinusCircle/> : <IoIosAddCircle/>}
                    </span>
                </div>
            </div>
            <div className={`collapsible ${!isOpenState ? 'hidden' : ''}`}>
                <p>{answer}</p>
            </div>
        </div>
    )
}