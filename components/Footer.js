 import styles from '@/styles/Footer.module.css';
import Link from 'next/link';
export default function Footer (){
    return(
        <div className={styles.footerDiv}>
             <div className={styles.footerDiv_body}> 
                <div className={styles.footerDiv_top_left}>
                        <div className={styles.left_body}>
                                <h2 className={styles.left_header}>Bargad <br/> Foundation</h2>
                                <div className={styles.left_bottom}>
                                    <img src='/mail.png' width={25} height={25}/>
                                    <p className={styles.left_paragraph}>bargad.ngo@gmail.com</p>
                                </div>

                                <div className={styles.left_bottom_two}>
                                    <img src='/phone.png' width={25} height={25}/>
                                    <p className={styles.left_paragraph}>99111 97344</p>
                                </div>

                                <div className={styles.left_bottom_two}>
                                    <img src='/location.png' width={25} height={25}/>
                                    <p className={styles.left_paragraph}> B- 59/C Shiv Park Khanpur , Delhi, India, Delhi</p>
                                </div>

                                
                        </div>
                </div>
                <div className={styles.footerDiv_top_right}>
                    <div className={styles.link_list}>
                            <Link href={'https://forms.gle/igj1sS3Cu1FCwd2XA'} className={styles.link} target='on_blank'>
                                Volunteer
                            </Link>
                            <Link href={'/Donate'} className={styles.link} target='on_blank'>
                                Donate
                            </Link>
                            <Link href={'https://forms.gle/d7MJx3s5CwGNVDVG6'} className={styles.link} target='on_blank'>
                                Intern
                            </Link>
                            {/* <Link href={'https://maps.app.goo.gl/K4ubxyUtebVNjRRi6'} className={styles.link} target='on_blank'>
                                Directions
                            </Link> */}
                    </div>
                    <div className={styles.link_list_two}>
                            {/* <Link href={'/AboutUs'} className={styles.link}>
                                About Us
                            </Link> */}
                            <Link href={'/ContactUs'} className={styles.link}>
                                Contact Us
                            </Link>
                            <Link href={'/Projects'} className={styles.link}>
                                Projects
                            </Link>
                    </div>
                </div>
            </div> 
            <div className={styles.footerDiv_bottom}>
                <div className={styles.footerDiv_bottom_body}>
                    <div className={styles.footerDiv_bottom_left}>
                            <div>
                                <img src='/copyright2.png' width={25} height={25}/>
                            
                            </div>
                            <p className={styles.footerDiv_bottom_left_header}>Bargad Foundation, 2024</p>
                    </div>
                    <div className={styles.footerDiv_bottom_right}>
                        
                        

                        <Link href={''} target='on_blank'>
                             <img src='/linkedin.png' className={styles.social_image} width={30} height={30}/>  
                        </Link>
                        <Link href={'https://www.facebook.com/bargadngo.org/'} target='on_blank'>
                            <img src='/facebook.png' className={styles.social_image} width={30} height={30}/>
                        </Link>
                            
                            <img src='/instagram.png' className={styles.social_image} width={30} height={30}/>
                            <img src='/social.png' className={styles.social_image} width={30} height={30}/>
                            
                    </div>
                </div>
            </div>
        </div>
    )
}