import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Header from './components/header'
import styles from '../styles/About.module.scss'
import global from '/styles/global.module.scss'

export default function About() {
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
				<div className={styles['about-container'] }>
					<div className={global['wrapper']}>
                        <div className={styles['abs-doodle-1']}>
                            <div><Image src="/home_hero_doodle.png" width='1102' height='956' objectFit='contain' /></div>
                        </div>
                        <div className={styles['about-grid']}>
                            <div className={styles['title-container']}>
                                <div className={styles['title']}>About Us</div>
                                <div className={styles['text']}>At Millennial Aces, we are a small yet mighty bunch of digitally savvy, passionate millennials who love technology, creativity</div>
                                {/* <div className={styles['button-container']}>
                                    <Link href="/our-services">
                                        <span className={global['button']}>
                                            Read More
                                        </span>
                                    </Link>
                                </div> */}
                            </div>
                            <div className={styles['img']}>
                                <Image src="/about.png" width="100%" height="100%" layout="responsive" objectFit="contain" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={ styles['about-text-container'] }>
					<div className={global['wrapper']}>
                        <p>What happens when you combine Content, Social media, Research and Strategy in the world of Digital?</p>
                        <p className={ global.bold }>WE CALL IT GROWTH!</p>
                        <p>At <span className={ global.bold }>Millennial Aces</span>, we are a small yet mighty bunch of digitally savvy, passionate millennials who love technology, creativity and customer service in equal measure.</p>
                        <p>We are dedicated to help provide solutions with optimum value to all your business problems. We believe that for truly real, impressive, and outstanding work, there needs to be an equally real, passionate, and driven workforce to be reckoned with. Which is why, we treat your business as our own, your brands as our own and take care of it ensuring it gets the best returns in every way. We confront our dynamic world with vigour, we respect the shades that make each of us unique, and we are connected by an incessant drive toward excellence.</p>
                    </div>
                </div>
                <footer>
                    <div className={styles['footer-container']}>
                        <div className={`${global['wrapper']}`}>
                            <div className={styles['social-container'] }>
								<a href="https://instagram.com/saee_joshii?utm_medium=copy_link" target='_blank'><Image src="/insta.png" width='65' height='65' /></a>
								<a href="https://www.linkedin.com/in/saee-joshi-89a841aa" target='_blank'><Image src="/linkedin.png" width='65' height='65' /></a>
								<a href="https://www.facebook.com/saeekjoshi" target='_blank'><Image src="/fb.png" width='65' height='65' /></a>
                            </div>
                        </div>
                    </div>
                </footer>
			</main>
		</div>
	)
}
