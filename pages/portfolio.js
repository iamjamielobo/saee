import Head from 'next/head'
import Header from '../components/header'
import styles from '../styles/Portfolio.module.scss'
import global from '/styles/global.module.scss'
import React, { useState, setState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


export default function Portfolio() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const nextPage = () => {
        setPageNumber(pageNumber + ((pageNumber < numPages) ? 1 : 0));
    };
    const prevPage = () => {
        setPageNumber(pageNumber - ((pageNumber > 1) ? 1 : 0));
    };
    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };
    return (
        <div className={styles.container}>
            <Head>
                <title>Portfolio</title>
                <meta name="description" content="About Us" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css" />
            </Head>
            <main>
                <Header />
                <div className={styles['about-page-wrapper']}>
                    <div className={styles['about-container']}>
                        <div className={global['wrapper']}>
                            <div className={styles['abs-doodle-1']}>
                                <div><img src="/home_hero_doodle.png" /></div>
                            </div>
                            <div className={styles['about-grid']}>
                                <div className={styles['title-container']}>
                                    <div className={styles['title']}>Portfolio</div>
                                    <div className={styles['text']}>
                                        Hi! My name is Saee Joshi. I am a passionate content writer, strategist and digital marketer with over 3 years of experience in the field of marketing.
                                        I have had the opportunity to work with several well-known and reputed clients ranging from Retail, Health and Beauty to the FMCG and BFSI sector from all around the globe such as Balenciaga (UK) Heineken (ME), Sephora (ME), Lipton, Lacnor, Nobel Hygiene, Reset Life, Kirtimahal Legacy, Emedlife and many more.
                                        See my work below!
                                    </div>
                                </div>
                                <div className={styles['img']}>
                                    <div className={styles['img-wrapper']}>
                                        <img src="/saee.jpg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles['portfolio-container']}>
                        <p>
                            <button type="button" onClick={prevPage}>Prev</button>
                            Page {pageNumber} of {numPages}
                            <button type="button" onClick={nextPage}>Next</button>
                        </p>
                        <div className={`${global['wrapper']}`}>
                            <Document
                                file="/portfolio.pdf"
                                onLoadSuccess={onDocumentLoadSuccess}
                            >
                                <Page pageNumber={pageNumber} />
                            </Document>
                        </div>
                    </div>
                    <div className={`${global['wrapper']}`}>
                        <div className={styles['about-text-container']}>
                            <p>
                                With Millennial Aces, I aim to bring my passion for content creation to life. We help you ace your content game with the right punches, and hard hits delivered through every copy. We make sure you connect with the right audience through words that redefine your brand.
                            </p>
                            <p>
                                I would love to discuss how we can work together and collaborate to create better content that brings the right value to your business.
                                <a href="/contact-us">Contact us</a> for any requirements that you may have.
                            </p>
                        </div>
                    </div>
                    <footer>
                        <div className={styles['footer-container']}>
                            <div className={`${global['wrapper']}`}>
                                <div className={styles['social-container']}>
                                    <a href="https://instagram.com/saee_joshii?utm_medium=copy_link" target='_blank'><img src="/insta.png" /></a>
                                    <a href="https://www.linkedin.com/in/saee-joshi-89a841aa" target='_blank'><img src="/linkedin.png" /></a>
                                    <a href="https://www.facebook.com/saeekjoshi" target='_blank'><img src="/fb.png" /></a>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </main>
        </div>
    )
}
