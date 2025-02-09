import React from 'react'
import styles from "./Faq.module.css"
import Accordian from '../Accordion/Accordion'
import { faqs } from '@/app/lib/placeholder-data';

function Faq() {

    return (
        <div className={styles.faq} >
            <h2 className={styles.faqHeading}>Frequently asked questions</h2>
            <Accordian faqs={faqs} />
        </div >
    )
}

export default Faq