// Vendors
import React, { useState } from "react";
import { Button, notification } from "antd";
import fire from "../utils/fire";

// Next
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import { Wrapper } from "../styles/pages/home/style";

//style

export default function Home({ appName }) {
   const [whatsap, setwhatsap] = useState(
      "https://api.whatsapp.com/send?phone=81932622629&text=Assalamu'alaikum%20,%20Saya%20mendapatkan%20info%20dari%20website%20claudmedia"
   );
   const [dataEmail, setDataEmail] = useState("");
   const [isLoading, setLoading] = useState(false);
   const [email, setEmail] = useState({
      value: "",
      isValid: true,
      errorMessage: "",
   });

   const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

   const asdasd = () => {
      if (!email.value || !regexEmail.test(email.value)) {
         let errorMessage = "";
         if (!regexEmail.test(email.value)) {
            errorMessage = t(
               "BulkPurchaseRegisterScreen.RegisterForm.FormValidation.EmailIncorrect"
            );
         }
         if (!email.value) {
            errorMessage = t(
               "BulkPurchaseRegisterScreen.RegisterForm.FormValidation.EmailEmpty"
            );
         }

         setEmail({
            value: email.value,
            isValid: false,
            errorMessage: errorMessage,
         });
      }
   };
   const _handleOpenMassage = () => {
      notification.open({
         message: "Sucess",
         description: "Thank you So much :)",
         onClick: () => {
            console.log("Notification Clicked!");
         },
      });
   };

   const _handleSubmit = (event) => {
      event.preventDefault();
      setLoading(true);
      setTimeout(() => {
         fire.firestore().collection("email").add({
            email: dataEmail,
         });

         _handleOpenMassage();
         setLoading(false);
         setDataEmail("");
      }, 2000);
   };

   return (
      <>
         <Head>
            <title>
               Claudmedia — Creative & Digital Agency Based in Jakarta,
               Indonesia{" "}
            </title>
            <meta
               name="title"
               content="Claudmedia — Creative & Digital Agency Based in Jakarta, Indonesia "
            />
            <meta
               name="description"
               content="Claudmedia Is a Digital  Agency Based In Jakarta, Indonesia. We Provide Website development ,  Website Design and Brand , Mobile development"
            />

            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://claudmedia.com/" />
            <meta
               property="og:title"
               content="Claudmedia — Creative & Digital Agency Based in Jakarta, Indonesia "
            />
            <meta
               property="og:description"
               content="Claudmedia Is a Digital  Agency Based In Jakarta, Indonesia. We Provide Website development ,  Website Design and Brand , Mobile development"
            />
            <meta
               property="og:image"
               content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
            />
            <link rel="canonical" href="https://claudmedia.com/" />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://claudmedia.com/" />
            <meta
               property="twitter:title"
               content="Claudmedia — Creative & Digital Agency Based in Jakarta, Indonesia "
            />
            <meta
               property="twitter:description"
               content="Claudmedia Is a Digital  Agency Based In Jakarta, Indonesia. We Provide Website development ,  Website Design and Brand , Mobile development"
            />
            <meta
               property="twitter:image"
               content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
            />
         </Head>
         <Layout>
            <Wrapper>
               <div className="section-1">
                  <div className="container">
                     <div className="section-1_content">
                        <h1>
                           Innovative and intelligent technology solutions and
                           services
                        </h1>
                        <p>
                           Strong management and security for powerful features.
                           Clean and creative design for you.
                        </p>
                        <div className="btn-content">
                           <Link href={whatsap}>
                              <a target="_blank">Let's Talk</a>
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="section-2">
                  <div className="container">
                     <div className="section-2_content">
                        <div className="row">
                           <div className="col-md-6">
                              <div className="content-1">
                                 <h4>Our Service</h4>
                                 <h2>
                                    Create your awesome digital product with us.
                                 </h2>
                                 <p>
                                    Using cutting edge technologies to build
                                    scalable solutions, innovating where
                                    necessary. Never being restricted to a
                                    single solution, we like to break new
                                    ground.
                                 </p>
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="content-2">
                                 <div className="content-2_list">
                                    <div className="content-2_list-item">
                                       <img
                                          src="/img/web-dev.png"
                                          alt="Web Development"
                                          title="Web Development"
                                       />
                                       <div className="desc">
                                          <h5>Web Development</h5>
                                          <span>
                                             Operational improvements through
                                             technology enhancements and/or
                                             service functions, we provide a
                                             fresh lens in helping you achieve
                                             your goals.
                                          </span>
                                       </div>
                                    </div>
                                    <div className="content-2_list-item">
                                       <img
                                          src="/img/mobile-dev.png"
                                          alt="Mobile Development"
                                          title="Mobile Development"
                                       />
                                       <div className="desc">
                                          <h5>Mobile Development</h5>
                                          <span>
                                             Operational improvements through
                                             technology enhancements and/or
                                             service functions, we provide a
                                             fresh lens in helping you achieve
                                             your goals.
                                          </span>
                                       </div>
                                    </div>
                                    <div className="content-2_list-item">
                                       <img
                                          src="/img/brand-dev.png"
                                          alt="Branding Identity"
                                          title="Branding Identity"
                                       />
                                       <div className="desc">
                                          <h5>Visual Design and Branding</h5>
                                          <span>
                                             We believe that technology works
                                             for human and not the other way
                                             around. Crafting of digital
                                             experiences through interaction
                                             design by cultivating understanding
                                             and empathy for end-users.
                                          </span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="section-3">
                  <div className="container">
                     <div className="section-3_content">
                        <h2>Transform your business with us right now</h2>
                        <p>
                           We Help Entrepreneurs / Companies / Founder Execute
                           Impactful Website & Mobile Apps
                        </p>
                        <div className="btn-content">
                           <Link href="/works">
                              <a target="_blank">See Our Work</a>
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="section-4">
                  <div className="container">
                     <div className="section-4_content">
                        <div className="row">
                           <div className="col-md-6">
                              <div className="desc">
                                 <h4>
                                    We work together with our client to execute
                                    impactful websites and apps.
                                 </h4>
                                 <span>
                                    Thus we work closely with Entrepreneurs,
                                    Founders and Companies, altogether to
                                    establish an iterative process of design,
                                    development and ongoing optimization. We
                                    join forces with our clients and work as
                                    one, see our process.
                                 </span>
                                 <div className="desc-list">
                                    <div className="desc-list_item">
                                       <img
                                          src="/img/rec.png"
                                          alt="Experience"
                                          title="Experience"
                                       />
                                       <div className="content">
                                          <h5>Requirement Gathering</h5>
                                          <p>
                                             This phase is critical to the
                                             success of the project.
                                             Expectations need to be fleshed out
                                             in great detail and documented.
                                             This is an iterative process with
                                             much communication taking place
                                             between stake-holders, end users
                                             and the project team.
                                          </p>
                                       </div>
                                    </div>
                                    <div className="desc-list_item">
                                       <img
                                          src="/img/analisis.png"
                                          alt="Comfortable"
                                          title="Comfortable"
                                       />
                                       <div className="content">
                                          <h5>Analysis</h5>
                                          <p>
                                             During this second stage, the
                                             system is analyzed in order to
                                             properly generate the models and
                                             business logic that will be used in
                                             the application. This stage largely
                                             covers technical design
                                             requirements, such as programming
                                             language, data layers, services,
                                             etc.
                                          </p>
                                       </div>
                                    </div>
                                    <div className="desc-list_item">
                                       <img
                                          src="/img/ui.png"
                                          alt="Easy Communication"
                                          title="Easy Communication"
                                       />
                                       <div className="content">
                                          <h5>UI/UX Design</h5>
                                          <p>
                                             After the FSD (Functional
                                             Specification Document) has been
                                             approved by both sides, then we
                                             will enter the design mock-up
                                             phase. The design foundation will
                                             follow the wireframe, business flow
                                             and use cases that are contained in
                                             the functional specifications
                                             document.
                                          </p>
                                       </div>
                                    </div>
                                    <div className="desc-list_item">
                                       <img
                                          src="/img/develop.png"
                                          alt="Easy Communication"
                                          title="Easy Communication"
                                       />
                                       <div className="content">
                                          <h5>Development</h5>
                                          <p>
                                             This phase is the actual coding by
                                             the development team. Implementing
                                             all models, business logic, and
                                             service integrations that were
                                             specified in prior stages. After
                                             each stage, the developer may
                                             demonstrate the work accomplished
                                             to the Business Analyst and tweaks
                                             and enhancement may be required.
                                             This normally the longest phase
                                             compare to others phases.
                                          </p>
                                       </div>
                                    </div>
                                    <div className="desc-list_item">
                                       <img
                                          src="/img/testing.png"
                                          alt="Easy Communication"
                                          title="Easy Communication"
                                       />
                                       <div className="content">
                                          <h5>Testing</h5>
                                          <p>
                                             Once the application is migrated to
                                             a test environment, different types
                                             of testing will be performed
                                             including integration and system
                                             testing. User acceptance testing is
                                             the last part of testing and is
                                             performed by the end users to
                                             ensure the system meets their
                                             expectations. At this point defects
                                             may be found and more work may be
                                             required in the analysis, design or
                                             coding.
                                          </p>
                                       </div>
                                    </div>
                                    <div className="desc-list_item">
                                       <img
                                          src="/img/deploy.png"
                                          alt="Easy Communication"
                                          title="Easy Communication"
                                       />
                                       <div className="content">
                                          <h5>Deployment & Maintenance</h5>
                                          <p>
                                             Finally, the application is ready
                                             for deployment to a production
                                             environment. This stage entails not
                                             jest the deployment of the
                                             application, but also subsequent
                                             support and maintenance that may be
                                             required to keep it functional and
                                             up-to-date
                                          </p>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-6">
                              <img
                                 src="/img/bitmap.png"
                                 className="img-fluid img-sction-4"
                                 alt="bitmap"
                                 title="bitmap"
                              />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="section-5">
                  <div className="container">
                     <div className="section-5_content">
                        <div className="desc">
                           <h4>
                              Some of our clients who have collaborated with us
                           </h4>
                        </div>
                        <div className="slider-5">
                           <div className="slide-list">
                              <div className="slide-list_item">
                                 <img
                                    src="/img/client/sariayu-logo.png"
                                    alt="sariayu martathilaar"
                                    title="sariayu martathilaar"
                                 />
                              </div>
                              <div className="slide-list_item">
                                 <img
                                    src="/img/client/stickearn.png"
                                    alt="stickearn"
                                    title="stickearn"
                                 />
                              </div>
                           </div>
                        </div>
                        <div className="drop-email">
                           <div className="row">
                              <div className="col-md-6">
                                 <div className="decs">
                                    <span>
                                       Are you interested for using our
                                       services?
                                    </span>
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="form-email">
                                    <div className="select-input">
                                       <input
                                          value={dataEmail}
                                          onChange={({ target }) =>
                                             setDataEmail(target.value)
                                          }
                                          placeholder="Drop your email here..."
                                       />
                                       <Button
                                          onClick={_handleSubmit}
                                          type="primary"
                                          loading={isLoading}
                                       >
                                          <img
                                             src="/img/ic-send.png"
                                             alt="kirim pesan"
                                             title="kirim pesan"
                                          />
                                          Send
                                       </Button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </Wrapper>
         </Layout>
      </>
   );
}
