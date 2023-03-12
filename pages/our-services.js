import Head from 'next/head'
import Header from '../components/header'
import styles from '../styles/Services.module.scss'
import global from '/styles/global.module.scss'

const testimonials = [{
    text: "Saee was really pleasant to work with, and she responded really fast.",
    person: 'Diabelle Cosmetics, India'
}, {
    text: 'Saee worked with us on a range of projects as a brand strategist and copywriter. She has a great eye for detail, creative vision, and a zealous spirit brimming with unique ideas. She’s not afraid to try new approaches that help brands stand out! She is also a wonderful content writer and has written some great blogs for our client’s website. It’s been a pleasure working with her, and we hope to collaborate on more projects with her in the near future!',
    person: 'The Content Lab, India'
}, {
    text: 'Saee did an excellent job of writing five articles for me. She was very cooperative and responsive. Really a pleasant person to work with. I am really happy with her work. I wish her the very best. I will hire her in the future for sure.',
    person: 'Balance Coffee, UK'
}, {
    text: 'Another excellent article. Well written and researched. I look forward to a long-lasting professional relationship with this freelancer.',
    person: 'Digital D, UK'
}, {
    text: 'Saee is a top notch copywriter. She understood our requirements and delivered way beyond our expectations. I\'ll be using her services again.',
    person: 'Digiarc Solutions, India'
}, {
    text: 'I am Anirudh, the founder and CEO of Qualia Life - an upcoming health tech platform. I had consulted with Millennial aces for co-creating blogs in the mental health space. Three things that stood out with Millennial aces were their (1).cost, (2).openess to change and (3). commitment towards to project completion on time. Blogs go through a number iterations and Millennial aces was quick to pivot and make these changes which was essential for on time project completion. I highly recommend Millennial aces for any blog related projects.',
    person: 'Anirudh Jegenathan, Founder and CEO of Qualia Life'
}]

export default function Services() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Services we provide</title>
				<meta name="description" content="Services we provide" />
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
                                <img src="/services/services_comp_new.png"  />
                            </div>
                            <div className={styles['text']}>
                                <img src="/services/services_title.png" />
                            </div>
                        </div>
                    </div>
                    <div className={styles['our-services'] }>
                        <div className={global['wrapper']}>
                            <div className={styles['services-grid'] }>
                                <div className={ styles['img-container'] }><img src="/services/1.png" width="302" height="316" /></div>
                                <div className={ styles['text-container'] }>Our social media services help you easily navigate the complex social media space by managing your social media pages at scale. We research and identify the right platform that can produce the greatest ROI for your company.</div>
                                <div className={ styles['img-container'] }><img src="/services/2.png" width="302" height="316" /></div>
                                <div className={ styles['text-container'] }>We provide you a cost-effective solution to increase rankings and traffic to your website through search engines. Our SEO Services can help your business grow by focusing on Better SERP Ranking, Web Traffic and Quantifiable ROI.</div>
                                <div className={ styles['img-container'] }><img src="/services/3.png" width="302" height="316" /></div>
                                <div className={ styles['text-container'] }>With the finest analytical skills, Our SEM/PPC Services helps your business grow, generate high-quality traffic, increase conversions and customers with the most effective search engine marketing tools and strategies.</div>
                                <div className={ styles['img-container'] }><img src="/services/4.png" width="302" height="316" /></div>
                                <div className={ styles['text-container'] }>With our Google Analytics Services, whether you’re looking to increase brand recognition, customer engagements or conversions, we provide a solution that’s perfect for your business.</div>
                                <div className={ styles['img-container'] }><img src="/services/5.png" width="302" height="316" /></div>
                                <div className={ styles['text-container'] }>Get more traffic and increase revenue with a customized email marketing strategy to engage your customers. With our creative designs, we help you increase revenue and build engagement.</div>
                                <div className={ styles['img-container'] }><img src="/services/6.png" width="302" height="316" /></div>
                                <div className={ styles['text-container'] }>We are here for all your creative design needs. Our talented and skilled designers are here to serve all your creative needs for social media, Paid Ads for SEM, SEO and any other services while tending to your specific brand needs.</div>
                            </div>
                        </div>
                        <div className={styles['abs-doodle-1']}>
                            <div><img src="/home_hero_doodle.png" width="100%" height="100%" /></div>
                        </div>
                        <div className={styles['testimonials']}>
                            <div className={global['wrapper']}>
                                <div className={ styles['testimonials--title'] }>Client Testimonials</div>
                                <div className={ styles['testimonials--content'] }>
                                    {
                                        testimonials.map( testi => {
                                            return (
                                                <div className={ styles['testimonials--block'] }>
                                                    <div className={ styles['testimonials--text'] }>"{ testi.text }"</div>
                                                    <div className={`${ styles['testimonials--person'] } ${ global.bold }`}>- { testi.person }</div>
                                                </div>
                                            )
                                        } )
                                    }
                                </div>
                            </div>
                        </div>
                        <footer>
                            <div className={styles['footer-container']}>
                                <div className={`${global['wrapper']}`}>
                                    <div className={styles['social-container'] }>
                                        <a href="https://www.facebook.com/saeekjoshi" target='_blank'><img src="/fb.png" width='65' height='65' /></a>
                                        <a href="https://www.linkedin.com/in/saee-joshi-89a841aa" target='_blank'><img src="/linkedin.png" width='65' height='65' /></a>
                                        <a href="https://instagram.com/saee_joshii?utm_medium=copy_link" target='_blank'><img src="/insta.png" width='65' height='65' /></a>
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
