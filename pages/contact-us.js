// import React, { Component, createRef } from 'react';
// import Head from 'next/head'
// import Link from 'next/link'
// import Image from 'next/image'
// import Header from './components/header'
// import styles from '../styles/Contact.module.scss'
// import global from '/styles/global.module.scss'
// import emailjs from '@emailjs/browser';
// export default class Contact extends Component {

//     form = createRef()

//     state = {
//         name: '',
//         email: '',
//         phone: '',
//         company: '',
//         request: ''
//     }

//     changeInputState = (key, value) => {
//         this.setState({
//             [key]: value
//         })
//     }

//     submitValues = (e) => {

//         const { name, email, phone, company, request } = this.state

//         e.preventDefault()

//         console.log('===> this.form.current', this.form.current)

//         emailjs.sendForm('service_j8cxt6b', 'template_0h9co4p', this.form.current, 'user_FbDv53Orxp3pdUmdbxjey')
//             .then((result) => {
//                 this.setState({
//                     name: '',
//                     email: '',
//                     phone: '',
//                     company: '',
//                     request: ''
//                 })
//             }, (error) => {
//                 console.log('===>', error.text);
//             });
//     }

// 	render() {

//         const { name, email, phone, company, request } = this.state

//         return (
//             <div className={styles.container}>
//                 <Head>
//                     <title></title>
//                     <meta name="description" content="" />
//                     <link rel="icon" href="/favicon.ico" />
//                     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css" />
//                 </Head>
//                 <main>
//                     <Header />
//                     <div className={styles['contact-container'] }>
//                         <div className={`${global['wrapper']}`}>
//                             <div className={styles['contact-header-grid']}>
//                                 <div className={styles['left']}>
//                                     <div className={styles['hero-doodle']}><Image src="/home_hero_doodle.png" layout='fill' objectFit='contain' /></div>
//                                     <p className={styles['contact-header-title']}>Contact Us</p>
//                                     <div>
//                                         <p className={styles['contact-header-sub-title']}>Address:</p>
//                                         <p className={styles['contact-header-text']}>Vile Parle, Mumbai, India - 400057 <br /> | Abu Dhabi, UAE</p>
//                                     </div>
//                                     <div>
//                                         <p className={styles['contact-header-sub-title']}>Website:</p>
//                                         <p className={styles['contact-header-text']}>www.millennialaces.com </p>
//                                     </div>
//                                     <div className={styles['last-child']}>
//                                         <p className={styles['contact-header-sub-title']}>Mail us at :</p>
//                                         <p className={styles['contact-header-text']}>info@millennialaces.com  <br />/ saeejoshi@icloud.com </p>
//                                     </div>
//                                 </div>
//                                 <div className={styles['right']}>
//                                     <Image src="/contact/contactus.png" width="100%" height="100%" layout="responsive" objectFit="contain" />
//                                 </div>
//                             </div>
//                         </div>
//                         <div className={styles['contact-form-section'] }>
//                             <div className={styles['wrapper']}>
//                                 <form ref={this.form} onSubmit={ this.submitValues } className={styles['contact-form-section'] }>
//                                     <div className={styles['contact-form-block'] }>
//                                         <input name="input_name"  onChange={ e => this.changeInputState('name', e.currentTarget.value) } type={'text'} placeholder='NAME' value={ name } />
//                                     </div>
//                                     <div className={styles['contact-form-block'] }>
//                                         <input name="input_email" onChange={ e => this.changeInputState('email', e.currentTarget.value) } type={'text'} placeholder='EMAIL' value={ email } />
//                                     </div>
//                                     <div className={styles['contact-form-block'] }>
//                                         <input name="input_phone" onChange={ e => this.changeInputState('phone', e.currentTarget.value) } type={'text'} placeholder='PHONE' value={ phone } />
//                                     </div>
//                                     <div className={styles['contact-form-block'] }>
//                                         <input name='input_company' onChange={ e => this.changeInputState('company', e.currentTarget.value) } type={'text'} placeholder='COMPANY' value={ company } />
//                                     </div>
//                                     <div className={styles['contact-form-block'] }>
//                                         <textarea name="input_request" onChange={e => this.changeInputState('request', e.currentTarget.value) } rows="4" value={ request } placeholder='ENTER YOUR REQUEST'  />
//                                     </div>
//                                     <div className={`${styles['contact-form-block']} ${styles['dfcc']}`}>
//                                         <input type="submit" value="Submit" className={styles['contact-form-submit'] } />
//                                     </div>
//                                 </form>
//                             </div>
//                             <footer>
//                                 <div className={styles['footer-container']}>
//                                     <div className={`${global['wrapper']}`}>
//                                         <div className={styles['social-container'] }>
//                                             <a href="https://www.facebook.com/saeekjoshi" target='_blank'><Image src="/fb.png" width='65' height='65' /></a>
//                                             <a href="https://www.linkedin.com/in/saee-joshi-89a841aa" target='_blank'><Image src="/linkedin.png" width='65' height='65' /></a>
//                                             <a href="https://instagram.com/saee_joshii?utm_medium=copy_link" target='_blank'><Image src="/insta.png" width='65' height='65' /></a>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </footer>
//                         </div>
//                     </div>
//                 </main>
//             </div>
//         )
//     }
// }
