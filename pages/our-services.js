import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Header from './components/header'
import styles from '../styles/Services.module.scss'
import global from '/styles/global.module.scss'

export default function Services() {
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
				<div className={styles['services-container'] }>
					<div className={`${global['wrapper']} ${styles['services-title-container']}`}>
                        <div className={styles['services-header-grid']}>
                            <div className={styles['comp']}>
                                <Image src="/services/services_comp_new.png" width="100%" height="100%" layout="responsive" objectFit="contain" priority />
                            </div>
                            <div className={styles['text']}>
                                <Image src="/services/services_title.png" width="100%" height="100%" layout="responsive" objectFit="contain" />
                            </div>
                        </div>
                    </div>
                    <div className={styles['our-services'] }>
                        <div className={global['wrapper']}>
                            <div className={styles['services-grid'] }>
                                <Image src="/services/1.png" width="100%" height="100%" layout="responsive" objectFit="contain" />
                                <Image src="/services/2.png" width="100%" height="100%" layout="responsive" objectFit="contain" />
                                <Image src="/services/3.png" width="100%" height="100%" layout="responsive" objectFit="contain" />
                                <Image src="/services/4.png" width="100%" height="100%" layout="responsive" objectFit="contain" />
                                <Image src="/services/5.png" width="100%" height="100%" layout="responsive" objectFit="contain" />
                            </div>
                        </div>
                        {/* <div className={styles['abs-doodle-1']}>
                            <div><Image src="/home_hero_doodle.png" width="100%" height="100%"  layout="responsive"  objectFit='contain' /></div>
                        </div> */}
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
