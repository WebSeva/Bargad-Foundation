import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "../components/navbar";
import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";
import Footer from "@/components/Footer";
import Assistant from "@/components/Assistant";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [currentPhoto,setcurrentPhoto] = useState(0);
  const [currentTheme,setcurrentTheme] = useState(0);
  let photos = ['/home.jpg','/center.png','/image2.png','/image3.png','/image4.png'];
  let themes = ['linear-gradient(180deg, #FFF 0%, #419C70 100%)','linear-gradient(180deg, #FFF 0%, #1662D5 62.5%, #2B80BD 83.5%)','linear-gradient(180deg, #FFF 0%, #61A2C6 62.5%, #3A5783 83.5%)','linear-gradient(180deg, #FFF 0%, #ABABAB 62.5%, #BC884C 83.5%)','linear-gradient(180deg, #FFF 0%, #E9AAFF 62.5%, #7F50BC 83.5%)']
  useEffect(()=>{
     
      const intervalID = setInterval(() => {
                
                  setcurrentPhoto((prevPhoto)=>(prevPhoto + 1) % photos.length);
                  setcurrentTheme((prevTheme)=>(prevTheme + 1) % themes.length);
      }, (2000));
      return () => clearInterval(intervalID);
  },[])
  return (
    <>
      <Head>
        <title>Bargad NGO</title>
        <meta name="description" content="BARGAD Foundation is a non-profit organization dedicated to fostering peace, non-violence, and human development. Inspired by the principles of Vedic philosophy and great leaders like Swami Vivekananda and Mahatma Gandhi, we aim to create a harmonious and inclusive society. Through various social and cultural initiatives, we work to uplift communities and promote sustainable growth." />
        
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, viewport-fit=cover" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet"/>

        <link rel="icon" href="/logo.png" />
        
      </Head>
    
      <main className={`${styles.main} ${inter.className}`}>
      <Assistant/>
     
                  <div className={styles.topDiv} >
                         <Navbar/>
                        <div className={styles.topDiv_photoDiv}>
                      
                             
                                          {photos.map((src, index) => ( 
                                                <div
                                                      key={index}
                                                      className={`${styles.slide} ${
                                                            index === currentPhoto
                                                            ? styles.show : styles.show
                                                      }`}
                                                      >
                                                      <img className={`${styles.photoFrame_image} `} src={photos[currentPhoto]} width={850} height={450}/>
                                                </div>
                                          ))}
                        
                        
                             
                        </div>
                       
                    
                  </div>

            <div className={styles.infoDiv}>
                <h2 className={styles.infoDiv_header}>WHO WE ARE</h2>
                <div className={styles.infoDiv_spacer}></div>
                <div className={styles.infoDiv_descriptionDiv}>
                  <p className={styles.infoDiv_paragraph}>
                      <span className={styles.infoDiv_highlightedtext}>BARGAD (Bhartiye Alteriye Research Growth and Diversity Foundation)</span> is a non-profit organization dedicated to fostering peace, non-violence, and human development. Inspired by the principles of Vedic philosophy and great leaders like Swami Vivekananda and Mahatma Gandhi, we aim to create a harmonious and inclusive society. Through various social and cultural initiatives, we work to uplift communities and promote sustainable growth.
                  </p>
                  <p className={styles.infoDiv_paragraph}>
                  At BARGAD, we are more than just an organization; we are a movement dedicated to the holistic development of society. Join us in our mission to create a peaceful and egalitarian world, where every individual has the opportunity to thrive.
                  </p>
                </div>
                {/* <div className={styles.infoDiv_founderDiv}>
                        <div className={styles.infoDiv_founderDiv_left}>
                              <img src="/founder.jpeg" className={styles.founderDiv_image} width={400} height={250}/>
                        </div>
                        <div className={styles.infoDiv_founderDiv_right}>
                                    <h2 className={styles.founderDiv_header}>Dr Kishor Pant, Founder & President</h2>
                                    <p className={styles.founderDiv_description}>He has an experience of over 15 years in giving back to the community, and is leading Abhilasha Samiti with the vision of improving lives of people in remote areas of Uttarakhand</p>
                        </div>

                </div> */}
            </div>
            
            <div className={styles.milestoneDiv}>
                <div className={styles.milestoneDiv_body}>
                      <div className={styles.milestoneDiv_left}>
                              <h2 className={styles.milestoneDiv_left_header}>Our Milestones</h2>
                            
                      </div>

                      <div className={styles.milestoneDiv_right}>


                               <div className={styles.milestoneDiv_right_top}>
                                     
                                      <div className={styles.milestoneDiv_right_top_block_second}>
                                            <div className={styles.block_top}>
                                                <img className={styles.block_top_image} src="location.png" width={80} height={80}/>
                                                <h2 className={styles.block_top_header}>30 +</h2>
                                            </div>
                                            <div className={styles.block_top_description}>
                                                  <p>Bargad serves <br/>in over 30+ cities</p>
                                            </div>
                                      </div>

                                      <div className={styles.milestoneDiv_right_bottom_block_second}>
                                            <div className={styles.block_top}>
                                                <img className={styles.block_top_image} src="experience.png" width={80} height={80}/>
                                                <h2 className={styles.block_top_header}>10yrs +</h2>
                                            </div>
                                            <div className={styles.block_top_description}>
                                                  <p>Bargad has over<br/>10+ years of experience</p>
                                            </div>
                                      </div>
                               </div>


                               <div className={styles.milestoneDiv_right_bottom}>
                                      
                                    
                               </div>
                      </div>

                </div>

            </div>

            
            <div className={styles.newsDiv}>
                  <div className={styles.newsDiv_top}>

                        <h2 className={styles.newsDiv_top_header}>What&apos;s new in Bargad?</h2>

                  </div>

                  <div className={styles.newsDiv_bottom}>
                              <div className={styles.newsDiv_block}>
                                          <div className={styles.newsDiv_block_left}>
                                                <div className={styles.newsDiv_block_left_top}>
                                                      <h2 className={styles.newsDiv_block_header}>SBI Asha Scholarship</h2>
                                                      <div className={styles.newsDiv_block_spacer}></div>
                                                </div>

                                                <div className={styles.newsDiv_block_left_bottom}>
                                                      <p>The SBIF Asha Scholarship Program 2024, one of India's largest scholarship programs, is an initiative of the SBI Foundation under its education vertical. <Link href={"https://www.sbifashascholarship.org/#scholarships"} style={{color:"blue"}}>Apply Now</Link></p>
                                                </div>
                                          </div>
                                          <div className={styles.newsDiv_block_right}>
                                                      <div className={styles.newsDiv_block_right_photo}>
                                                            <img src="/children.jpg" className={styles.newsDiv_block_right_photo_image} width={150} height={150}/>
                                                      </div>
                                          </div>
                              </div>

                              <div className={styles.newsDiv_block_second}>
                                          <div className={styles.newsDiv_block_second_left}>
                                                      <div className={styles.newsDiv_block_second_left_photo}>
                                                            <img src="/pm.png" className={styles.newsDiv_block_second_left_photo_image} width={150} height={150}/>
                                                      </div>
                                          </div>

                                          <div className={styles.newsDiv_block_second_right}>
                                                <div className={styles.newsDiv_block_second_right_top}>
                                                      <h2 className={styles.newsDiv_block_header}>PM Intership Scheme 2024</h2>
                                                      <div className={styles.newsDiv_block_spacer}></div>
                                                </div>

                                                <div className={styles.newsDiv_block_second_right_bottom}>
                                                      <p>The Indian Corporate Affairs Ministry launched the PM Internship Scheme 2024 in an attempt to empower youth. Registrations began on 12 October 2024, offering a one-year internship program. <Link href={"https://pminternship.mca.gov.in/"} style={{color:'blue'}}>Apply Now</Link></p>
                                                </div>
                                          </div>
                                          
                              </div>

                  </div>


            </div>
            <div className={styles.volunteerDiv}>

                  <div className={styles.volunteerDiv_top}>
                              <h2 className={styles.volunteerDiv_top_header}>Bergad Needs You</h2>
                  </div>
                  <div className={styles.volunteerDiv_bottom}>
                        <div className={styles.volunteerDiv_bottom_div}>
                              <div className={styles.volunteerDiv_card}>
                                    <div className={styles.volunteerDiv_card_top}>
                                          <img src="/donate.png" width={140} height={140}/>
                                          <h2 className={styles.volunteerDiv_card_header_first}>DONATE</h2>
                                          <p className={styles.volunteerDiv_card_paragraph}>Join us in our mission <br/> to create a better future <br/> Every donation counts.</p>
                                    </div>
                                   
                                    <div className={styles.volunteerDiv_card_bottom}>
                                          <Link href={"/Donate"} className={styles.volunteerDiv_card_button}>
                                                <h2 className={styles.volunteerDiv_card_button_text}>Support Us</h2>
                                          </Link>
                                    </div>
                              </div>
                              <div className={styles.volunteerDiv_card}>
                                    <div className={styles.volunteerDiv_card_top}>
                                          <img src="/volunteer.png" width={140} height={140}/>
                                          <h2 className={styles.volunteerDiv_card_header_middle}>VOLUNTEER</h2>
                                      <p className={styles.volunteerDiv_card_paragraph}>Make a Difference with Us.<br/> Join us and become <br/> a volunteer!</p>
                                         
                                    </div>
                                    <div className={styles.volunteerDiv_card_bottom}>
                                                <Link href={"https://forms.gle/igj1sS3Cu1FCwd2XA"} className={styles.volunteerDiv_card_button} target="on_blank">
                                                      <h2 className={styles.volunteerDiv_card_button_text}>Join</h2>
                                                </Link>
                                          </div>
                                    
                              </div>
                              <div className={styles.volunteerDiv_card}>
                                    <div className={styles.volunteerDiv_card_top}>
                                          <img src="/intern.png" width={140} height={140}/>
                                          <h2 className={styles.volunteerDiv_card_header_last}>INTERN</h2>
                                          <p className={styles.volunteerDiv_card_paragraph}>Gain valuable experience <br/> Apply now for our<br/>internship program</p>
                                    </div>
                                  
                                    <div className={styles.volunteerDiv_card_bottom}>
                                          <Link href={"https://forms.gle/d7MJx3s5CwGNVDVG6"} className={styles.volunteerDiv_card_button} target="on_blank">
                                                <h2 className={styles.volunteerDiv_card_button_text}>Apply</h2>
                                          </Link>
                                    </div>
                              </div>
                        </div>
                        
                  </div>
                 
            
                 

            </div>

            <div className={styles.footerContainer}>
                               <Footer/>
            </div>
            

      </main>
    </>
  );
}
