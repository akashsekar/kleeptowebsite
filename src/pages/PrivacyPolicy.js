import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import BreadCrumbOne from '../elements/breadcrumb/BreadCrumbOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import SEO from '../common/SEO';


const PrivacyPolicy = () => {

    return (
        <>
            <SEO title="Privacy Policy" />
            <ColorSwitcher />
            <main className="main-wrapper">
                <HeaderOne />
                <BreadCrumbOne 
                title="Privacy Policy"
                page="Privacy Policy"
                />
                <div className="section-padding privacy-policy-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="privacy-policy-content">
                                <div className="section-title">
                                    <h5 className="title">This Privacy policy was published on December 23rd, 2023.</h5>
                                </div>
                                {/* <h4>GDPR compliance</h4> */}
                                <p>At Kleepto.com, we understand the importance of privacy in the web3 ecosystem. This policy outlines how we respect your privacy regarding any information we may collect while operating our website and services.

                                </p>
                                <h4>Information Collection and Use</h4>
                                <p>We collect information to provide better services to all of our users. This may include personal information such as names, email addresses, and transaction details when necessary for the provision of our services or when users voluntarily provide it.</p>
                                {/* <h4>When we collect personal data about you</h4>
                                <ul>
                                    <li>Email is a crucial channel in any marketing.</li>
                                    <li>Curious what to say? How to say it?</li>
                                    <li>Whether you’re kicking off a new campaign.</li>
                                    <li>Habitasse per feugiat aliquam luctus accumsan curae</li>
                                </ul> */}
                                <h4>Data Security</h4>
                                <p className="mb--20">We implement a variety of security measures to maintain the safety of your personal information.</p>
                                {/* <ul>
                                    <li>Nulla facilisi. Sed pulvinar nec purus eu sollicitudin. Quisque ut tempus quam, in cursus eros.</li>
                                    <li>Fusce malesuada luctus velit eu tempor. Pellentesque habitant morbi tristique senectus et netus et.</li>
                                    <li>Pellentesque ornare nulla est, non blandit sapien lacinia nec. Nulla ac velit id est mattis faucibus.</li>
                                    <li>Aliquam lacus nisi, lobortis non diam eget, malesuada bibendum justo. Praesent fringilla sagittis ex, ac molestie ipsum ullamcorper a.</li>
                                    <li>Vestibulum nulla tortor, aliquam at porta in, hendrerit sed nibh.</li>
                                </ul> */}
                                <h4>Sharing of Data</h4>
                                <p>We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.</p>
                                <h4>Your Rights</h4>
                                <p>You have the right to access, correct, amend, or delete any personal information we have about you</p>
                                <h4>Contact Us</h4>
                                <p className="mb--20">If you have any questions about this Privacy Policy, please contact us. <a href="mailto:kleeptoofficial@gmail.com">kleeptoofficial@gmail.com</a></p>
                                {/* <p className="mb--20">may log information using digital images called web beacons on our Site or in our emails.</p>
                                <p>This information is used to make our Site work more efficiently, as well as to provide business and marketing information to the owners of the Site, and to gather such personal data as browser type and operating system, referring page, path through site, domain of ISP, etc. for the purposes of understanding how visitors use our Site. Cookies and similar technologies help us tailor our Site to your personal needs, as well as to detect and prevent security threats and abuse. If used alone, cookies and web beacons do not personally identify you.</p>
                                <h4>How long we keep your data</h4>
                                <p className="mb--20">We store personal data for as long as we find it necessary to fulfill the purpose for which the personal data was collected, while also considering our need to answer your queries or resolve possible problems. This helps us to comply with legal requirements under applicable laws, to attend to any legal claims/complaints, and for safeguarding purposes.</p>
                                <p>We store personal data for as long as we find it necessary to fulfill the purpose for which the personal data was collected, while also considering our need to answer your queries or resolve possible problems. This helps us to comply with legal requirements under applicable laws, to attend to any legal claims/complaints, and for safeguarding purposes.</p>
                                <h4>Your rights to your personal data</h4>
                                <p>We store personal data for as long as we find it necessary to fulfill the purpose for which the personal data was collected, while also considering our need to answer your queries or resolve possible problems. This helps us to comply with legal requirements under applicable laws, to attend to any legal claims/complaints, and for safeguarding purposes.</p>
                                <h4>Hotjar’s privacy policy</h4>
                                <p>Pellentesque vestibulum venenatis iaculis. Aliquam viverra sodales ultrices. Quisque sed purus id massa consequat consectetur eu vel lorem. Maecenas lectus velit, cursus quis orci non, laoreet hendrerit mi. Nulla vitae ipsum fringilla, placerat metus eu, malesuada velit. Quisque viverra risus ex. Aenean commodo vestibulum efficitur. Nullam ligula orci, aliquet sed luctus vel, luctus vel dui. Sed pulvinar, ipsum at mattis imperdiet, diam augue tempor diam, sed porttitor odio elit ut ante. In posuere mi at mi pellentesque ornare sit amet gravida nisi. Praesent ac blandit odio. Curabitur iaculis ante elit, et imperdiet leo mollis at.</p>
                                <h4>Changes to this Privacy Policy</h4>
                                <p>Integer eu ornare lectus, ornare ullamcorper tellus. Morbi in urna a justo dignissim luctus. Nam sagittis ante ut lorem feugiat, sed consectetur ligula lacinia. Vestibulum quis mauris sed lectus pretium dictum sed vitae orci. Vestibulum facilisis facilisis mauris non maximus. Nam tristique ipsum egestas, suscipit orci sit amet, rutrum ante. Proin in felis pellentesque, ullamcorper enim vel, molestie ipsum. </p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <CtaLayoutOne />
            <FooterOne parentClass="" />
            </main>
        </>
    )
}

export default PrivacyPolicy;