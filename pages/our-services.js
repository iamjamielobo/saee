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
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
                                <div className={ styles['img-container'] }><Image src="/services/1.png" width="302" height="316" /></div>
                                <div className={ styles['text-container'] }>Our social media services help you easily navigate the complex social media space by managing your social media pages at scale. We research and identify the right platform that can produce the greatest ROI for your company.</div>
                                <div className={ styles['img-container'] }><Image src="/services/2.png" width="302" height="316" /></div>
                                <div className={ styles['text-container'] }>We provide you a cost-effective solution to increase rankings and traffic to your website through search engines. Our SEO Services can help your business grow by focusing on Better SERP Ranking, Web Traffic and Quantifiable ROI.</div>
                                <div className={ styles['img-container'] }><Image src="/services/3.png" width="302" height="316" /></div>
                                <div className={ styles['text-container'] }>With the finest analytical skills, Our SEM/PPC Services helps your business grow, generate high-quality traffic, increase conversions and customers with the most effective search engine marketing tools and strategies.</div>
                                <div className={ styles['img-container'] }><Image src="/services/4.png" width="302" height="316" /></div>
                                <div className={ styles['text-container'] }>With our Google Analytics Services, whether you’re looking to increase brand recognition, customer engagements or conversions, we provide a solution that’s perfect for your business.</div>
                                <div className={ styles['img-container'] }><Image src="/services/5.png" width="302" height="316" /></div>
                                <div className={ styles['text-container'] }>Get more traffic and increase revenue with a customized email marketing strategy to engage your customers. With our creative designs, we help you increase revenue and build engagement.</div>
                                <div className={ styles['img-container'] }><Image src="/services/6.png" width="302" height="316" /></div>
                                <div className={ styles['text-container'] }>We are here for all your creative design needs. Our talented and skilled designers are here to serve all your creative needs for social media, Paid Ads for SEM, SEO and any other services while tending to your specific brand needs.</div>
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
