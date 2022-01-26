import Head from 'next/head'
import Header from '../components/header'
import styles from '../styles/About.module.scss'
import global from '/styles/global.module.scss'

export default function About() {
	return (
		<div className={styles.container}>
			<Head>
				<title>About Us</title>
				<meta name="description" content="About Us" />
				<link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css" />
			</Head>
			<main>
				<Header />
				<div className={styles['about-page-wrapper'] }>
                    <div className={styles['about-container'] }>
                        <div className={global['wrapper']}>
                            <div className={styles['abs-doodle-1']}>
                                <div><img src="/home_hero_doodle.png" /></div>
                            </div>
                            <div className={styles['about-grid']}>
                                <div className={styles['title-container']}>
                                    <div className={styles['title']}>About Us</div>
                                    <div className={styles['text']}>At Millennial Aces, we are a small yet mighty bunch of digitally savvy, passionate millennials who love technology and creativity.</div>
                                    {/* <div className={styles['button-container']}>
                                        <Link href="/our-services">
                                            <span className={global['button']}>
                                                Read More
                                            </span>
                                        </Link>
                                    </div> */}
                                </div>
                                <div className={styles['img']}>
                                    <div className={styles['img-wrapper']}>
                                        <img src="/about.png" />
                                    </div>
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
