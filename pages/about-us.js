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
                        <div className={styles['about-grid']}>
                            <div className={styles['title-container']}>
                                <div className={styles['title']}>About Us</div>
                                <div className={styles['text']}>At Millennial Aces, we are a small yet mighty bunch of digitally savvy, passionate millennials who love technology, creativity</div>
                                <div className={styles['button-container']}>
									<span className={global['button']}>
										<Link href="/blog/hello-world">
											<a>Read More</a>
										</Link>
									</span>
                                </div>
                            </div>
                            <div className={styles['img']}>
                                <Image src="/about.png" width="100%" height="100%" layout="responsive" objectFit="contain" />
                            </div>
                        </div>
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
