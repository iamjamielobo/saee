import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Header from './components/header'
import styles from '../styles/Contact.module.scss'
import global from '/styles/global.module.scss'

export default function Contact() {
	return (
		<div className={styles.container}>
			<Head>
				<title></title>
				<meta name="description" content="" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css" />
			</Head>
			<main>
				<Header />
				<div className={styles['contact-container'] }>
					<div className={`${global['wrapper']}`}>
                        <div className={styles['contact-header-grid']}>
                            <div className={styles['left']}>
                                <p className={styles['contact-header-title']}>Contact Us</p>
                                <div>
                                    <p className={styles['contact-header-sub-title']}>Address:</p>
                                    <p className={styles['contact-header-text']}>Vile Parle, Mumbai, India - 400057 <br /> | Abu Dhabi, UAE</p>
                                </div>
                                <div>
                                    <p className={styles['contact-header-sub-title']}>Website:</p>
                                    <p className={styles['contact-header-text']}>www.millennialaces.com </p>
                                </div>
                                <div className={styles['last-child']}>
                                    <p className={styles['contact-header-sub-title']}>Mail us at :</p>
                                    <p className={styles['contact-header-text']}>info@millennialaces.com  <br />/ saeejoshi@icloud.com </p>
                                </div>
                            </div>
                            <div className={styles['right']}>
                                <Image src="/contact/contactus.png" width="100%" height="100%" layout="responsive" objectFit="contain" />
                            </div>
                        </div>
                    </div>
                    <div className={styles['contact-form-section'] }>
                        <div className={global['wrapper']}>
                            <div className={styles['contact-form-section'] }>

                            </div>
                        </div>
                        <footer>
                            <div className={styles['footer-container']}>
                                <div className={`${global['wrapper']}`}>
                                    <div className={styles['social-container'] }>
                                        <a href="https://www.facebook.com/saeekjoshi" target='_blank'><Image src="/fb.png" width='65' height='65' /></a>
                                        <a href="https://www.linkedin.com/in/saee-joshi-89a841aa" target='_blank'><Image src="/linkedin.png" width='65' height='65' /></a>
                                        <a href="https://instagram.com/saee_joshii?utm_medium=copy_link" target='_blank'><Image src="/insta.png" width='65' height='65' /></a>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
			</main>
		</div>
	)
}
