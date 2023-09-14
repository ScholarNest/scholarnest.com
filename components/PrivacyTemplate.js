import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
// import Solutions from "../components/Solutions";
import classes from "./style/privacy.module.css";

function PrivacyTemplate() {
    const listOfData = [
        {
            head: "Account Data",
            para: "To use certain features (like accessing content), you need to create a user account. When you create or update your account, we collect and store the data you provide, such as your email address, password, phone number, gender, date of birth, and account settings (“Account Data“)."
        },
        {
            head: "Profile Data",
            para: "You can also choose to provide profile information like a photo, headline, biography, language, website link, social media profiles, country, or other data. Your Profile Data will be publicly viewable by others."
        },
        {
            head: "Shared Content",
            para: "Parts of the Services let you interact with other users or share content publicly, including posting reviews about content, asking or answering questions, sending messages to students or instructors, or posting photos or other work you upload. Such shared content may be publicly viewable by others depending on where it is posted."
        },
        {
            head: "Educational Content Data",
            para: "We collect specific data when you access content, including which courses, assignments, and quizzes you’ve started and completed. We collect your content purchases, subscriptions, completion certificates, exchanges with instructors, teaching assistants, and other students, answers to questions, and other items submitted to satisfy course and related content requirements. If you are an instructor, we store your educational content, which may contain data about you."
        },
        {
            head: "Student Payment Data",
            para: "If you make purchases, we collect specific data about your purchase (such as your name and ZIP code) as necessary to process your order. You must provide payment and billing data directly to our payment service providers, including your name, credit card information, billing address, and ZIP code. We may also receive limited information from payment service providers to facilitate payments, like the fact that you have a new card and the last four digits of that card. ScholarNest does not collect or store sensitive cardholder data for security, such as full credit card numbers or card authentication data."
        },
        {
            head: "Instructor Payment Data",
            para: "If you are an instructor, you can use your PayPal or another payment account to the Services to receive payments. When you provide a payment account, we collect and use certain information, including your payment account email address, account ID, physical address, or other data necessary for us to send payments to your account. In some instances, we may collect ACH or wire information to send payments to your account. We also work with trusted third parties who collect tax information as legally required to comply with applicable laws. This tax information may include residency information, tax identification numbers, biographical information, and other personal information necessary for taxation purposes. The collection, use, and disclosure of your payment, billing, and taxation data are subject to your payment account provider’s privacy policy and other terms."
        },
        {
            head: "Data About Your Accounts on Other Services",
            para: "We may obtain certain information through your social media or other online accounts if connected to your ScholarNest account. If you log in to ScholarNest via Facebook or another third-party platform or service, we ask your permission to access certain information about that other account. For example, depending on the platform or service, we may collect your name, profile picture, account ID number, login email address, location, the physical location of your access devices, gender, birthday, and list of friends or contacts.",
            para2: "Those platforms and services make information available to us through their APIs. The information we receive depends on what information you (via your privacy settings) or the platform or service decide to give us.",
            para3: "If you access or use our Services through a third-party platform or service or click on any third-party links, the collection, use, and sharing of your data will also be subject to that third party’s privacy policies and other agreements."
        },
        {
            head: "Sweepstakes, Promotions, and Surveys",
            para: "We may invite you to complete a survey or participate in a promotion (like a contest, sweepstakes, or challenge) through the Services or a third-party platform. If you participate, we will collect and store the data you provide as participants, such as your name, email address, postal address, date of birth, or phone number. That data is subject to this Privacy Policy unless otherwise stated in the promotion’s official rules or another privacy policy. The data collected will be used to administer the promotion or survey, including notifying winners and distributing rewards. To receive a reward, you may be required to allow us to post some of your information publicly (like on a winner’s page). Where we use a third-party platform to administer a survey or promotion, the third party’s privacy policy will apply."
        },
        {
            head: "Communications and Support",
            para: "Suppose you contact us for support or report a problem or concern (regardless of whether you have created an account). In that case, we collect and store your contact information, messages, and other data about you like your name, email address, messages, location, refund transaction IDs, and any other data you provide or that we collect through automated means. We use this data to respond to you and research your question or concern according to this Privacy Policy.",
            para2: "The data listed above is stored by us and associated with your account."
        },
    ]

    return (
        <>
            {/* <div className={classes.tagdiv + " container my-1 "}>
                <p class="mb-1">Home  &gt;&gt; Privacy</p>

                <hr />
            </div> */}
            <br />
            <br />
            <div className={classes.privacy + " container "}>
                <h1>Privacy Policy</h1>
                <br />
                <p >This Privacy Policy was last updated on September 1, 2021.</p>
                <br />
                <p>Thank you for joining our online learning platform. We at ScholarNest (“ScholarNest,” “we,” “us”) respect your privacy and want you to understand how we collect, use, and share data about you. This Privacy Policy covers our data collection practices and describes your rights to access, correct, or restrict our use of your personal data.</p>
                <br />
                <p>Unless we link to a different policy or state otherwise, this Privacy Policy applies when you visit or use the ScholarNest websites, mobile applications, APIs, or related services (the “Services”). It also applies to prospective customers of our business and enterprise products.</p>
                <br />
                <p>
                    By using the Services, you agree to the terms of this Privacy Policy. You shouldn’t use the Services if you don’t agree with this Privacy Policy or any other agreement that governs your use of the Services.</p>
                <br />
                <h2>1. What Data We Get</h2>
                <p class="my-3">We collect specific data from you directly, like the information you enter yourself, data about your consumption of content, and data from third-party platforms you connect with ScholarNest. We also collect some data automatically, like information about your device and what parts of our Services you interact with or spend time using.</p>
                <h3>1.1 Data You Provide to Us</h3>
                <br />
                <p>We may collect different data from or about you depending on how you use the Services. Below are some examples to help you better understand the data we collect.
                    When you create an account and use the Services, including through a third-party platform, we collect any data you provide directly, including:</p>
                <br />
                {
                    listOfData.map((data) => {
                        return (
                            <div>
                                <h4>{data.head}</h4>
                                <br />
                                <p>{data.para}</p>
                                <br />
                                <p class="my-3">{data.para2} </p>
                                <p class="my-3">{data.para3} </p>
                            </div>
                        );
                    }



                    )
                }
                <br />
                <h3>1.2 Data We Collect through Automated Means</h3>
                <br />
                <p>When you access the Services (including browsing content), we collect certain data by automated means, including:</p>
                <br />
                <h4>    System Data</h4>
                <br />
                <p>
                    System Data is the technical data about your computer or device, like your IP address, device type, operating system type, and version, unique device identifiers, browser, browser language, domain, and other systems data, and platform types (“System Data”).
                </p>
                <br />
                <h4>
                    Usage Data
                </h4>
                <br />
                <p>
                    Usage statistics about your interactions with the Services, including content accessed, time spent on pages or the Service, pages visited, features used, your search queries, click data, date and time, referrer, and other data regarding your use of the Services <strong> (“Usage Data”).</strong>
                </p>
                <br />
                <h4>
                    Approximate Geographic Data
                </h4>
                <br />
                <p>
                    An approximate geographic location, including information like country, city, and geographic coordinates, is calculated based on your IP address.
                </p>
                <br />
                <h3>
                    1.3 Data From Third Parties
                </h3>
                <br />
                <p>
                    If you are a ScholarNest through enterprise or corporate accounts, we may collect certain business contact information from third-party commercial sources.
                </p>
                <br />
                <h2>2. How We Get Data About You</h2>
                <br />
                <p>We use tools like cookies, web beacons, and similar tracking technologies to gather the data listed above. Some of these tools offer you the ability to opt-out of data collection.</p>
                <br />
                <h3>2.1 Cookies and Data Collection Tools
                </h3>
                <br />
                <p>We use cookies, which are small text files stored by your browser, to collect, store, and share data about your activities across websites, including on ScholarNest. They allow us to remember things about your visits to ScholarNest, like your preferred language, and to make the site easier to use. To learn more about cookies, visit <a href="https://cookiepedia.co.uk/all-about-cookies"> https://cookiepedia.co.uk/all-about-cookies.</a>
                    ScholarNest and service providers acting on our behalf (like Google Analytics and third-party advertisers) use server log files and automated data collection tools like cookies, tags, scripts, customized links, device or browser fingerprints, and web beacons (together, “Data Collection Tools“) when you access and use the Services. These Data Collection Tools automatically track and collect certain System Data and Usage Data when you use the Services. In some cases, we tie data gathered through those Data Collection Tools to other data that we collect as described in this Privacy Policy.</p>
  <br />
  <h3>2.2 Why We Use Data Collection Tools
</h3>
<br />
<p>ScholarNest uses the following types of Data Collection Tools for the purposes described:</p>
<br />
<h4>
Strictly Necessary:
</h4>
<br />
<p>
These Data Collection Tools enable you to access the site, provide basic functionality (like logging in or accessing content), secure the site, protect against fraudulent logins, and detect and prevent abuse or unauthorized use of your account. These are required for the Services to work properly, so if you disable them, parts of the site will break or be unavailable.
</p>
<br />
<h4>
Functional:
</h4>
<br />
<p>
These Data Collection Tools remember data about your browser and your preferences, provide additional site functionality, customize content to be more relevant to you, and remember settings affecting the appearance and behavior of the Services (like your preferred language or volume level for video playback).
</p>
<br />
<h4>
Performance:
</h4>
<br />
<p>
These Data Collection Tools help measure and improve the Services by providing usage and performance data, visit counts, traffic sources, or where an application was downloaded from. These tools can help us test different versions of ScholarNest to see which features or content users prefer and determine which email messages are opened.
</p>
<br />
<h4>
Advertising:
</h4>
<br />
<p>
These Data Collection Tools are used to deliver relevant ads (on the site and/or other sites) based on things we know about you, like your Usage and System Data, and things that the ad service providers know about you based on their tracking data. The ads can be based on your recent activity or activity over time and across other sites and services. To help deliver tailored advertising, we may provide these service providers with a hashed, anonymized version of your email address (in a non-human-readable form) and content that you share publicly on the Services.
</p>
<br />
<h4>
Social Media:
</h4>
<br />
<p>
These Data Collection Tools enable social media functionality, like sharing content with friends and networks. These cookies may track a user or device across other sites and build a profile of user interests for targeted advertising purposes.
</p>
<br />
<p>
You can set your web browser to alert you about attempts to place cookies on your computer, limit the types of cookies you allow, or refuse cookies altogether. If you do, you may not be able to use some or all features of the Services, and your experience may be different or less functional. To learn more about managing Data Collection Tools, refer to Section (Your Choices About the Use of Your Data) below.
</p>
<br />
<h2>
3. What We Use Your Data For
</h2>
<br />
<p>
We use your data to do things like provide our Services, communicate with you, troubleshoot issues, secure against fraud and abuse, improve and update our Services, analyze how people use our Services, serve personalized advertising, and as required by law or necessary for safety and integrity.
</p>
<p class="my-2">
We use the data we collect through your use of the Services to:
</p>
<ul>
    <li>
Provide and administer the Services, including facilitating participation in educational content, issue completion certificates, display customized content, and facilitate communication with other users.
</li>
<li>

Process payments to instructors and other third parties.
</li>
<li>
Process your requests and orders for educational content, products, specific services, information, or features.
</li>
<li>
Communicate with you about your account by:</li>
<div class="ml-5">
<li>Responding to your questions and concerns. </li>
<li>
Sending you administrative messages and information, including messages from instructors, students, and teaching assistants. Notifications about changes to our Service and updates to our agreements.
</li>
<li>
Sending you information, such as by email or text messages, about your progress in courses and related content, rewards programs, new services, new features, promotions, newsletters, and other available instructor-created content.
</li>
<li>
Sending push notifications to your wireless device to provide updates and other relevant messages (which you can manage from the “options” or “settings” page of the mobile app).
</li>
</div>
<li>
Manage your account and account preferences.
</li>
<li>
Facilitate the Services’ technical functioning, including troubleshooting and resolving issues, securing the Services, and preventing fraud and abuse.
</li>
<li>
Solicit feedback from users.
</li>
<li>
Market products, services, surveys, and promotions.
</li>
<li>
Market Subscription Plans to prospective customers.
</li>
<li>
Learn more about you by linking your data with additional data through third-party data providers and/or analyzing the data with the help of analytics service providers.
</li>
<li>
Identify unique users across devices.
</li>
<li>
Tailor advertisements across devices.
</li>
<li>
Improve our Services and develop new products, services, and features.
</li>
<li>
Analyze trends and traffic, track purchases, and track usage data.
</li>
<li>
Advertise the Services on third-party websites and applications.
</li>
<li>
As required or permitted by law
</li>
<li>
As we, in our sole discretion, otherwise determine to be necessary to ensure the safety or integrity of our users, employees, third parties, the public, or our Services.
</li>
</ul>
<br />
<h2>
4. Who We Share Your Data With
</h2>
<br />
<p>
We share certain data about you with instructors, other students, companies performing services for us, ScholarNest affiliates, our business partners, analytics and data enrichment providers, your social media providers, companies helping us run promotions and surveys, and advertising companies who help us promote our Services. We may also share your data as needed for security, legal compliance, or as part of a corporate restructuring. Lastly, we can share data in other ways if it is aggregated or de-identified or if we get your consent.
</p>
<p>
We may share your data with third parties under the following circumstances or as otherwise described in this Privacy Policy:
</p>
<br />
<h4>
With Your Instructors:
</h4>
<br />
<p>
We share data that we have about you (except your email address and phone numbers) with instructors or teaching assistants for educational content you access or request information about, so they can improve their content for you and other students. This data may include things like your city, country, browser language, operating system, device settings, the site that brought you to ScholarNest, and your activities on ScholarNest. If we collect additional data about you (like age or gender), we may share that too. We will not share your email address with instructors or teaching assistants.
</p>
<br /><h4>
With Other Students and Instructors:
</h4>
<br /><p>
Depending on your settings, your shared content, and profile data may be publicly viewable, including to other students and instructors. If you ask a question to an instructor or teaching assistant, your information (including your name) may also be publicly viewable.
</p>
<br /><h4>
With Service Providers, Contractors, and Agents:
</h4><br /><p>
We share your data with third-party companies who perform services on our behalf, like payment processing, fraud, and abuse prevention, data analysis, marketing, and advertising services (including retargeted advertising), email and hosting services, and customer services, and support. These service providers may access your personal data and are required to use it solely as we direct to provide our requested service.
</p><br /><h4>
With ScholarNest Affiliates:
</h4><br /><p>
We may share your data within our corporate family of companies that are related by common ownership or control to enable or support us in providing the Services.

With Business Partners: We have agreements with other websites and platforms to distribute our Services and drive traffic to ScholarNest. Depending on your location, we may share your data with these partners.
</p><br /><h4>
With Analytics and Data Enrichment Services:
</h4><br />
<p>
As part of our use of third-party analytics tools like Google Analytics and data enrichment services like ZoomInfo, we share certain contact information, Account Data, System Data, Usage Data (as detailed in Section 1), or de-identified data as needed. De-identified data means data where we’ve removed things like your name and email address and replaced it with a token ID. This allows these providers to provide analytics services or match your data with publicly available database information (including contact and social information from other sources). We do this to communicate with you in a more effective and customized manner.
</p><br /><h4>
To Power Social Media Features:
</h4><br /><p>
The social media features in the Services (like the Facebook Like button) may allow the third-party social media provider to collect things like your IP address and which page of the Services you’re visiting and setting a cookie to enable the feature. Your interactions with these features are governed by the third-party company’s privacy policy.
</p> <br /><h4>
To Administer Promotions and Surveys:
</h4>
<br /><p>
We may share your data as necessary to administer, market, or sponsor promotions and surveys you choose to participate in, as required by applicable law (like to provide a winners list or make required filings), or in accordance with the rules of the promotion or survey.
</p> <br /><h4>
    For Advertising:
    </h4><br /><p>
If we decide to use an advertising-supported revenue model in the future, we may use and share certain System Data and Usage Data with third-party advertisers and networks to show general demographic and preference information among our users. We may also allow advertisers to collect System Data through Data Collection Tools to use this data to offer you targeted ad delivery to personalize your user experience (through behavioral advertising) and to undertake web analytics. Advertisers may also share with us the data they collect about you. To learn more or opt-out from participating ad networks’ behavioral advertising, see Section (Your Choices About the Use of Your Data) below. Note that if you are opt-out, you’ll continue to be served generic ads.
</p> <br /><h4>
For Security and Legal Compliance:
</h4><br /><p>
We may disclose your data to third parties if we (in our sole discretion) have a good faith belief that the disclosure is:
</p> <br />
<ul class="ml-5">
    <li>
Permitted or required by law.
</li>
<li>
Requested as part of a judicial, governmental, or legal inquiry, order, or proceeding.
</li>
<li>
Reasonably necessary as part of a valid subpoena, warrant, or other legally valid requests.
</li>
<li>
Reasonably necessary to enforce our Terms of Use, Privacy Policy, and other legal agreements.
</li>
<li>
Required to detect, prevent, or address fraud, abuse, misuse, potential violations of law (or rule or regulation), or security or technical issues.
</li>
<li>
Reasonably necessary in our discretion to protect against imminent harm to the rights, property, or safety of ScholarNest, our users, employees, members of the public, or our Services.
</li>
<li>
We may also disclose data about you to our auditors and legal advisors in order to assess our disclosure obligations and rights under this Privacy Policy.
</li>
</ul>
<br />
<h4>
During a Change in Control:
</h4><br /><p>
If ScholarNest undergoes a business transaction like a merger, acquisition, corporate divestiture, or dissolution (including bankruptcy), or a sale of all or some of its assets, we may share, disclose, or transfer all of your data to the successor organization during such transition or in contemplation of a transition (including during due diligence).
</p>
<br /><h4>
After Aggregation/De-identification:
</h4>
<br /> <p>
We may disclose or use aggregated or de-identified data for any purpose.
</p> <br /> <h4>
With Your Permission:
</h4><br /><p>
With your consent, we may share data with third parties outside the scope of this Privacy Policy.
</p>
<br />
<h2>5. Security</h2>
<br />
<p>
We use appropriate security based on the type and sensitivity of data being stored. As with any internet-enabled system, there is always a risk of unauthorized access, so it’s important to protect your password and to contact us if you suspect any unauthorized access to your account.
</p> <br /> <p>
ScholarNest takes appropriate security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal data that we collect and store. These measures vary based on the type and sensitivity of the data. Unfortunately, however, no system can be 100% secured, so we cannot guarantee that communications between you and ScholarNest, the Services, or any information provided to us in connection with the data we collect through the Services will be free from unauthorized access by third parties. Your password is an important part of our security system, and it is your responsibility to protect it. You should not share your password with any third party, and if you believe your password or account has been compromised, you should change it immediately and contact our Support Team with any concerns.
</p>
<br /><h2>
6. Your Rights</h2>
<br /> <p>
You have certain rights around the use of your data, including the ability to opt-out of promotional emails, cookies, and collection of your data by certain third parties. You can update or terminate your account from within our Services and can also contact us for individual rights requests about your personal data. Parents who believe we’ve unintentionally collected personal data about their underage child should contact us for help deleting that information.
</p>
<br />
<h3>
6.1 Your Choices About the Use of Your Data
</h3>
<br /><p>
You can choose not to provide certain data to us, but you may not be able to use certain features of the Services.
</p> <br />
<ul class="ml-5">
<li>
To stop receiving promotional communications from us, you can opt-out by using the unsubscribe mechanism in the promotional communication you receive or by changing the email preferences in your account. Note that regardless of your email preference settings, we will send you transactional and relationship messages regarding the Services, including administrative confirmations, order confirmations, important updates about the Services, and notices about our policies.
</li> <li>
If you’re located in the European Economic Area, you may opt-out of certain Data Collection Tools by clicking the “Cookie settings“ link at the bottom of any page.
</li> <li>
The browser or device you use may allow you to control cookies and other types of local data storage. To learn more about managing cookies, visit https://cookiepedia.co.uk/how-to-manage-cookies. Your wireless device may also allow you to control whether location or other data is collected and shared.
</li> <li>
To get information and control cookies used for tailored advertising from participating companies, see the consumer opt-out pages for the Network Advertising Initiative and Digital Advertising Alliance, or if you’re located in the European Economic Area, visit the Your Online Choices site. To opt out of Google’s display advertising or customize Google Display Network ads, visit the Google Ads Settings page. To opt-out of Taboola’s targeted ads, see the Opt-out Link in their Cookie Policy.
</li><li>
To opt-out of allowing Google Analytics, Mixpanel, ZoomInfo, or Clearbit to use your data for analytics or enrichment, see the Google Analytics Opt-out Browser Add-on, Mixpanel Opt-Out Cookie, ZoomInfo’s policy, and Clearbit data claiming mechanism.
</li><li>
Apple iOS, Android OS, and Microsoft Windows each provide their own instructions on how to control in-app tailored advertising. For other devices and operating systems, you should review your privacy settings on that platform.
</li>
</ul>
<br /><p>
If you have any questions about your data, our use of it, or your rights, contact us at privacy@scholarnest.com.
</p>
<br />
<h3>
6.2 Accessing, Updating, and Deleting Your Personal Data
</h3>
<br />
<p>
You can access and update your personal data that ScholarNest collects and maintains as follows:
</p> <br />
<ul class="ml-5">
<li>To update data, you provide directly, log into your account and update your account at any time.
</li> <li>
To terminate your account, please contact our Support Team.
<li style={{marginLeft:"20px"}}>
Please note: even after your account is terminated, some or all of your data may still be visible to others, including without limitation any data that has been (a) copied, stored, or disseminated by other users (including comments on content); (b) shared or disseminated by you or others (including in your shared content); or (c) posted to a third-party platform. Even after your account is terminated, we retain your data for as long as we have a legitimate purpose of doing so (and in accordance with applicable law), including assisting with legal obligations, resolve disputes, and enforce our agreements. We may retain and disclose such data pursuant to this Privacy Policy after your account has been terminated.
</li> </li>  <li>
To request to access, correct, or delete your personal data, please use our online contact forms. You can also submit these requests by emailing privacy@scholarnest.com. Please allow up to 30 days for a response. For your protection, we may require that the request be sent through the email address associated with your account, and we may need to verify your identity before implementing your request. Please note that we retain certain data where we have a lawful basis for doing so, including for mandatory record-keeping and to complete transactions.
</li>
</ul>
<br />
<h3>
6.3 Our Policy Concerning Children
</h3> <br /><p>
We recognize the privacy interests of children and encourage parents and guardians to take an active role in their children’s online activities and interests. Individuals younger than the required age for consent to use online services may not use the Services. If we learn that we’ve collected personal data from a child under those ages, we will take reasonable steps to delete it.
</p>
<br /><p>
Parents who believe that ScholarNest may have collected personal data from a child under those ages can submit a request that it be removed to privacy@scholarnest.com.
</p>
<br />
<h2>
7. Jurisdiction-Specific Rules
</h2><br />
<p>
You may have certain legal rights in your personal information. If you reside in the European Economic Area, these rights are governed by the European Union’s General Data Protection Regulation <strong> (“GDPR”);</strong> if you are a resident of California, these rights are governed by the California Consumer Privacy Act <strong> (“CCPA”);</strong> if you reside or are located in a different jurisdiction, these rights may be governed by the applicable data protection laws of your jurisdiction. We are committed to complying with these data and privacy laws.
</p>
<br /><h3>
7.1 Users in California
</h3><br /><p>
Users who are California residents have certain rights under the California Consumer Privacy Act strong(“CCPA”). If you are an eligible California user, included in these rights are:
</p>
<br />
<ul>
    <li>
        <strong>
“Right to Know”</strong> — You have the right to request to know more about the categories and specific pieces of personal information that we have collected about you and access a copy of your personal information.
</li>
<li>
    <strong>
“Right to Deletion”</strong> — You have the right to request deletion of personal information that we have collected about you.
</li>
<li>
    <strong>
“Right to Non-Discrimination”</strong> — If you choose to exercise any of your rights under CCPA, ScholarNest will treat you like all other users. In other words, there is no penalty for exercising your rights under CCPA.
</li>
<li>
    <strong>
“Right to Opt-Out”</strong> – You have the right to opt-out of the sale of your personal information.
</li>
</ul>
<br /><p>
CCPA has a specific definition of a “sale,” and while ScholarNest does not, in the traditional sense, sell your personal information or the personal information of any of our users, we do use cookies that make non-personally identifiable information available to select third parties. To opt-out of such a “sale,” click on the “Do Not Sell My Personal Information” link at the bottom of this page or email to privacy@scholarnest.com with the subject “Do Not Sell My Personal Information.”
</p>
<br />
<p>
To exercise any of these rights under CCPA, please email privacy@scholarnest.com CCPA allows you to designate an authorized agent to make these requests on your behalf. For your protection, we may require that the request be sent through the email address associated with your account, and we may need to verify you and/or your agent’s identity before fulfilling your request.
</p>
<br /><p>
Additionally, for more information about the personal information we collect and how we collect it, please see the sections above entitled “What Data We Get” and “How We Get Data About You.”
</p>
<br /><p>

To learn about the business and commercial purposes for which your personal information is collected and the categories of service providers who have access to your personal information, please see the sections above entitled “What We Use Your Data For” and “Who We Share Your Data With.”
</p>
<br /><p>
As a California resident, you also have the right to request certain details about what personal information we share with third parties for those third parties’ direct marketing purposes. To submit your request, send an email to privacy@scholarnest.com with the phrase “California Shine the Light” and include your mailing address, state of residence, and email address.
</p> <br /><p>
Since there is no widely accepted standard for the browser-initiated Do Not Track signal, we do not currently recognize or respond to Do Not Track signals.
</p> <br />
<h3>
7.2 Users in the EEA. or other Countries
</h3>
<br /><p>
In order to provide the Services to you, we must transfer your data to Singapore and India and process it there. By visiting or using our Services, you consent to the storage of your data on servers located in Singapore and India. If you are using the Services from outside these countries, you consent to the transfer, storage, and processing of your data in and to Singapore, India, and/or other countries. Specifically, personal data collected in the United Kingdom (“U.K.”), Switzerland, the European Economic Area (“EEA”), and the United States is transferred and stored outside those areas. Additionally, if you are located in the U.S., EEA, U.K., or Switzerland, you also have the right to lodge a complaint with your supervisory data authority.
</p> <br /> <p>
Personal data is also processed outside of the U.S., U.K., Switzerland, and the EEA by ScholarNest, or our service providers, including to process transactions, facilitate payments, and provide support services. We use Standard Contractual Clauses adopted by the European Commission to facilitate transfers of personal data from the EEA to third countries and have entered into data processing agreements with our service providers to restrict and regulate their processing of your data. By submitting your data or using our Services, you consent to this transfer, storage, and processing by ScholarNest and its processors.
</p> <br />
<h2> 8. Updates & Contact Info</h2 ><br /><p>
When we make a material change to this policy, we’ll notify users via email, in-product notice, or another mechanism required by law. Changes become effective the day they’re posted. Please contact us via email or postal mail with any questions, concerns, or disputes.
</p> <br />
<h3>

8.1 Modifications to This Privacy Policy
</h3> <br /> <p>
From time to time, we may update this Privacy Policy. If we make any material change to it, we will notify you via email, through a notification posted on the Services, or as required by applicable law. We will also include a summary of the key changes. Unless stated otherwise, modifications will become effective on the day they are posted.
</p> <br /> <p>

As permitted by applicable law, if you continue to use the Services after the effective date of any change, then your access and/or use will be deemed an acceptance of (and agreement to follow and be bound by) the revised Privacy Policy. The revised Privacy Policy supersedes all previous Privacy Policies.
</p> <br />
<h3>
8.2 Interpretation</h3> <br />
<p>

Any capitalized terms not defined in this policy are defined as specified in Udemy’s Terms of Use. Any version of this Privacy Policy in a language other than English is provided for convenience. If there is any conflict with a non-English version, you agree that the English language version will control.
</p> <br />
<h3>
8.3 Questions</h3> <br />
<p>
If you have any questions, concerns, or disputes regarding our Privacy Policy, please feel free to contact our privacy team at  <a href="privacy@scholarnest.com" class="text-info"> privacy@scholarnest.com.</a>
</p> <br />
 </div>

        </>
    );
}

export default PrivacyTemplate;
