import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Header from './components/header'
import styles from '../styles/Home.module.scss'
import global from '/styles/global.module.scss'

export default function Home() {
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
				<div className={styles['main-container']}>
				<div className={styles['right-place']}>
						<div className={global['wrapper']}>
							<div className={`${styles['right-place--container']} ${ global['dgc'] }`}>
								<div className={styles['right-place--left']}>

								</div>
								<div className={`${styles['right-place--right']}`}>
									<p>Then you’ve come to the right place! At Millennial Aces, we build memorable brand experiences through strategies that ensure you ace, especially in the long.</p>
									<div>
										<span className={global['button']}>
											<Link href="/blog/hello-world">
												<a>Read More</a>
											</Link>
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className={styles['our-expertise']}>
						<div className={global['wrapper']}>
							<div className={`${styles['expertise-container']} ${ global['dgc'] }`}>
								<div className={`${styles['expertise-text']} ${ global['dgc'] }`}>
									Our expertise lies in the wide spectrum of digital, design, content, and copywriting, wherein we integrate creativity with digital technology to help you get the results you deserve. Our
								</div>
								<div>
									<span className={global['button']}>
										<Link href="/blog/hello-world">
											<a>Read More</a>
										</Link>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<footer>
					<div className={styles['footer-container']}>
						<div className={`${global['wrapper']}`}>
							<div className={styles['social-container'] }>
								<a href="https://www.facebook.com/saeekjoshi" target='_blank'><Image src="/fb.png" width='65' height='65' /></a>
								<a href="https://instagram.com/saee_joshii?utm_medium=copy_link" target='_blank'><Image src="/insta.png" width='65' height='65' /></a>
								<a href="https://www.linkedin.com/in/saee-joshi-89a841aa" target='_blank'><Image src="/linkedin.png" width='65' height='65' /></a>
							</div>
						</div>
					</div>
				</footer>
			</main>
		</div>
	)
}