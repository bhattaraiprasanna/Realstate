import React from 'react'
import{
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState,
}from 'react-accessible-accordion';
import "react-accessible-accordion/dist/fancy-example.css"
import { MdOutlineArrowDropDown } from 'react-icons/md'
import './Value.css'
import data from '../utils/accordion';
const Value = () => {
  return (
    <div>
      <section className="v-wrapper">
        <div className="padding innerWidth flexCenter v-container">
            {/*leftside*/}
            <div className="v-left">
                <div className="image-container">
                    <img src="./value.png" alt="" />
                </div>
            </div> 

            {/*rightside*/}
            <div className="flexColStart v-right">
                <span className='orangeText'>Our Value</span> 
                <span className='primaryText'>Value we give to you</span>
                <span className='secondaryText'>
                We always ready to help by providing the best services for you.<br />
                We beleive a good blace to live can make your life better
                </span>

                <Accordion className='accordion' 
                allowMultipleExpanded={false}
                preExpanded={[0]}>
                    {
                        data.map((item,i)=>{
                            return(
                                <AccordionItem className='accordionItem'key={i} vvid={i}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton className='flexCenter accordionButton'>

                                        <div className="flexCenter icon">{item.icon}
                                        </div>
                                            <span className="primaryText">
                                                {item.heading}
                                            </span>
                                            <div className="flexCenter icon">
                                                <MdOutlineArrowDropDown size={20}/>
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>

                                    <AccordionItemPanel>
                                        <p className="secondaryText">{item.detail}</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            )
                        }
                    )
                    }
                </Accordion>
            </div>

        </div>
      </section>
    </div>
  )
}

export default Value
