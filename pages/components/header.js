import Image from 'next/image'
import Link from 'next/link'

import { useRouter } from 'next/router'

import global from '/styles/global.module.scss'
import styles from '/styles/header.module.scss'

export default function Header() {

	const router = useRouter()
	const { asPath } = router

	console.log('===> router.asPath', router.asPath)
	console.log('===> asPath condition', asPath === '/')

	return (
		<div className={styles['header-container']}>
			<div className={`${global['wrapper']} ${global.dfc} ${ global['z1'] }`}>
				<div className={ styles['logo-container'] }>
					<Image src="/logo.png" width="378" height="102" />
				</div>
				<div className={`${ styles['nav-list'] } ${ global['f1'] }`}>
					<ul>
						<li className={ asPath === '/' ? styles['_active'] : '' }><Link href='/'><span >Home</span></Link></li>
						<li className={ asPath === '/about-us' ? styles['_active'] : '' }><Link href='/about-us'><span >About Us</span></Link></li>
						<li className={ asPath === '/our-services' ? styles['_active'] : '' }><Link href='/our-services'><span >Our Services</span></Link></li>
						<li className={ asPath === '/contact' ? styles['_active'] : '' }><Link href='/contact-us'><span >Contact Us</span></Link></li>
					</ul>
				</div>
			</div>
		</div>
	)
}