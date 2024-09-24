import { useState } from "react"
import './styles.css';

export default function Accordion({ data }) {
    console.log("Data", data)


    const [isOpen, setIsOpen] = useState(null);


    const handleToggle = (id) => {
        console.log("toggle button clicked")

        setIsOpen(isOpen === id ? null : id)
    }

    return (
        <div className="accordion-container" >



            {
                data.map((el, id) =>
                (
                    <div key={el.id} className="accordion-item">
                        <h4 onClick={() => handleToggle(id)} className={`accordion-header ${isOpen === id ? 'open' : ''}`}>{el.question}  {isOpen === id ? '▲ ' : '▼ '} </h4>
                        {isOpen === id && <p className="accordion-content"> {el.answer}</p>}

                    </div>
                )



                )
            }



            {/* {data.map((el => (<li>{el.question}</li>)))} */}
        </div>
    )

}