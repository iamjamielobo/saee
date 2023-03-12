// import Image from 'next/image'
import Link from 'next/link'

import { useRouter } from 'next/router'

import global from '/styles/global.module.scss'
import styles from '/styles/header.module.scss'

export default function Header() {

	const router = useRouter()
	const { asPath } = router

	return (
		<header className={styles['header-container']}>
			<div className={`${global['wrapper']} ${global.dfc} ${ global['z1'] } ${ styles['desktop-nav'] }`}>
				<div className={styles['header-wrapper']}>
					<div className={ styles['logo-container'] }>
						<Link href='/'><a><img src="/logo.png" alt='logo' /></a></Link>
					</div>
					<div className={`${ styles['nav-list'] } ${ global['f1'] }`}>
						<ul>
							<li className={ asPath === '/' ? styles['_active'] : '' }><Link href='/'><span className={ styles['nav-link-span'] }>Home</span></Link></li>
							<li className={ asPath === '/about-us' ? styles['_active'] : '' }>
								<Link href='/about-us'><span className={ styles['nav-link-span'] }>About Us</span></Link>
							</li>
							<li className={ asPath === '/portfolio' ? styles['_active'] : '' }><Link href='/portfolio'><span className={ styles['nav-link-span'] }>Portfolio</span></Link></li>
							<li className={ asPath === '/our-services' ? styles['_active'] : '' }><Link href='/our-services'><span className={ styles['nav-link-span'] }>Our Services</span></Link></li>
							<li className={ asPath === '/contact-us' ? styles['_active'] : '' }><Link href='/contact-us'><span className={ styles['nav-link-span'] }>Contact Us</span></Link></li>
						</ul>
					</div>
				</div>
			</div>
			<div className={`${ styles['mob-nav'] }`}>
				<div className={`${ styles['mob-nav-wrapper'] }`}>
					<div className={`${ styles['navbar'] }`}>
						<div className={`${ styles['container'] } ${ styles['nav-container'] }`}>
							<span className={ styles['logo-responsive'] }><Link href='/'><a><img src="/logo.png" alt='' /></a></Link></span>
							<input className={`${ styles['checkbox'] }`} type="checkbox" name="" id="" />
							<div className={`${ styles['hamburger-lines'] }`}>
							<span className={`${ styles['line'] } ${ styles['line1'] }`}></span>
							<span className={`${ styles['line'] } ${ styles['line2'] }`}></span>
							<span className={`${ styles['line'] } ${ styles['line3'] }`}></span>
						</div>
						<div className={`${ styles['menu-items'] }`}>
							<span className={ styles['logo-responsive-menu'] }><Link href='/'><a><img src="/logo.png" alt='' /></a></Link></span>
							<ul>
								<li className={ asPath === '/' ? styles['_active'] : '' }><Link href='/'><span>Home</span></Link></li>
								<li className={ asPath === '/about-us' ? styles['_active'] : '' }><Link href='/about-us'><span>About Us</span></Link></li>
								<li className={ asPath === '/our-services' ? styles['_active'] : '' }><Link href='/our-services'><span>Our Services</span></Link></li>
								<li className={ asPath === '/portfolio' ? styles['_active'] : '' }><Link href='/portfolio'><span>Portfolio</span></Link></li>
								<li className={ asPath === '/contact-us' ? styles['_active'] : '' }><Link href='/contact-us'><span>Contact Us</span></Link></li>
							</ul>
						</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}