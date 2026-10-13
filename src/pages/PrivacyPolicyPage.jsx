import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useDocumentTitle } from "../useDocumentTitle";
import { motion } from "framer-motion";
import { useAccessibleMotion } from "../motionPresets";
import { Link } from "react-router-dom";

export default function PrivacyPolicyPage() {
  useDocumentTitle("Privacy Policy | GetDrives");
  const m = useAccessibleMotion();

  return (
    <div className="min-h-screen bg-brand-bg">
      <Navbar />
      <main id="main-content" className="py-16 md:py-24">
        <motion.div
          className="mx-auto max-w-3xl px-6"
          {...m.heroTextBlock}
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-brand-orange" aria-hidden />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-orange">
              LEGAL
            </p>
          </div>

          <h1 className="mb-4 font-extrabold leading-[0.95] text-4xl sm:text-5xl md:text-6xl text-white">
            Privacy Policy
          </h1>
          <p className="mb-2 text-sm text-brand-gray/70">Privacy, Data Protection &amp; User Information</p>
          <p className="mb-8 font-semibold text-white">Effective Date: October 1, 2026 · Version 1.0</p>

          <div className="prose prose-invert prose-brand prose-p:leading-relaxed prose-li:leading-relaxed max-w-none text-brand-gray/80">
            <p>
              This Privacy Policy explains how GetDrives collects, uses, stores, protects and otherwise processes personal data when you use the GetDrives website, mobile application, platform, products and services.
            </p>
            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">1. Introduction</h2>
            <p>
              GetDrives Limited (“GetDrives”, “we”, “us” or “our”) respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how GetDrives collects, uses, stores, protects and otherwise processes personal data when you access or use our website, mobile application, platform, products and services (collectively, the “Services”).
            </p>
            <p>
              This Privacy Policy also explains the role of third-party service providers that support the Services, including Prembly for identity verification, Flutterwave for payment processing and related financial verification, Termii for SMS and OTP services, Google Maps and Google infrastructure, and Curacel for insurance-related services where applicable.
            </p>
            <p>
              By creating an account or using the Services, you acknowledge that you have had an opportunity to review this Privacy Policy. Where applicable law requires consent, GetDrives will obtain consent or rely on another lawful basis before processing the relevant personal data.
            </p>
            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">2. Who Is Responsible for Your Personal Data?</h2>
            <p>
              GetDrives is the data controller responsible for personal data that we process in connection with the Services, except where a third-party provider independently determines the purposes and means of processing information that you provide directly to that provider.
            </p>
            <p>
              GetDrives is committed to complying with applicable Nigerian data-protection laws and regulations, including the Nigeria Data Protection Act 2023 (NDPA) and applicable requirements of the Nigeria Data Protection Commission (NDPC).
            </p>
            <p>
              Where a third-party provider processes personal data independently through its own service, that provider may have separate controller responsibilities under applicable law.
            </p>
            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">3. Information We Collect</h2>
            <h3 className="mt-6 mb-3 text-lg font-semibold text-white">3.1 Identity and Registration Information</h3>
            <p>
              Depending on how you use GetDrives, we may collect or receive:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Full name and date of birth</li>
              <li>Residential or business address</li>
              <li>Email address and telephone number</li>
              <li>Profile photograph and profile information</li>
              <li>Trip and booking information</li>
              <li>Bid and fare information</li>
              <li>Username and account information</li>
              <li>Government-issued identification information where required</li>
              <li>Driver, Rider, guarantor or emergency-contact information where required</li>
              <li>Vehicle and service-related information</li>
              <li>Payment or payout information to the extent necessary to facilitate transactions</li>
              <li>Pickup and destination information</li>
              <li>Customer-support communications</li>
              <li>Information required to establish or verify eligibility to use the Services</li>
              <li>Other information you voluntarily provide</li>
            </ul>
            <h3 className="mt-6 mb-3 text-lg font-semibold text-white">3.2 Verification Information</h3>
            <p>
              Where identity or eligibility verification is required, you may be asked to provide identification information or documentation. GetDrives uses Prembly to facilitate identity verification, and the verification process may occur directly through Prembly's systems.
            </p>
            <p>
              Depending on the verification required, information may include NIN, BVN, driver's licence, Rider identification, LASDRI or other applicable identification, vehicle documentation, facial identity and liveness information, biometric or other verification information, and other compliance information.
            </p>
            <p>
              Where you interact directly with Prembly's verification interface, information submitted through that interface may be collected and processed directly by Prembly. GetDrives may receive a verification result or limited information necessary to operate the Services without necessarily receiving or storing every piece of information submitted directly to Prembly.
            </p>
            <p>
              GetDrives does not intend to store complete NIN or BVN numbers where verification can be completed through Prembly without GetDrives receiving or retaining those complete identifiers.
            </p>
            <p>
              Sensitive personal data, including identity or biometric information where applicable, is subject to appropriate safeguards. GetDrives will collect and process such information only where necessary and on an applicable lawful basis, including consent where consent is required.
            </p>
            <h3 className="mt-6 mb-3 text-lg font-semibold text-white">3.3 Payment and Banking Information</h3>
            <p>
              GetDrives uses Flutterwave for payment processing and certain payment-related services. Where you make or receive a payment through Flutterwave, Flutterwave may collect financial information directly from you, including bank account number, bank name, card information, BVN where applicable, beneficiary information, transaction information and other information required to process or verify a transaction.
            </p>
            <p>
              GetDrives does not request or require you to provide complete banking or payment credentials directly to GetDrives where those details are collected through Flutterwave's payment interface.
            </p>
            <p>
              Flutterwave may independently perform payment verification, bank-account verification, KYC, fraud prevention and regulatory checks. Where Flutterwave independently determines the purposes and means of processing information collected through its services, Flutterwave may act as an independent data controller for that processing.
            </p>
            <h3 className="mt-6 mb-3 text-lg font-semibold text-white">3.4 Device and Technical Information</h3>
            <p>
              When you use the Services, we may automatically collect information such as:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>GPS/location information while you are online or on an active trip</li>
              <li>Device type and model</li>
              <li>Operating system</li>
              <li>IP address</li>
              <li>Application and device identifiers</li>
              <li>Login and usage information</li>
              <li>Trip acceptance and cancellation information</li>
              <li>Bidding and fare-related activity</li>
              <li>Ratings and service-performance information</li>
              <li>Masked-call and in-app communication metadata</li>
              <li>Safety and SOS information</li>
              <li>Relevant trip or incident information</li>
              <li>Vehicle or trip-related telemetry where applicable</li>
              <li>Proof-of-delivery photographs where applicable</li>
            </ul>
            <p>
              We collect this information only to the extent reasonably necessary for the Services, safety, security, fraud prevention, dispute resolution, analytics and other legitimate purposes described in this Privacy Policy.
            </p>
            <h3 className="mt-6 mb-3 text-lg font-semibold text-white">3.5 Communications</h3>
            <p>
              If you contact us, we may collect information contained in your communications with us, including support requests, complaints, enquiries and correspondence.
            </p>
            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">4. How We Use Your Personal Data</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Creating and managing your GetDrives account</li>
              <li>Providing and administering the Services</li>
              <li>Verifying identity and eligibility</li>
              <li>Facilitating transactions and payouts</li>
              <li>Connecting Riders and Drivers with relevant services</li>
              <li>Communicating about accounts, bookings and transactions</li>
              <li>Providing customer support</li>
              <li>Preventing fraud, abuse, unauthorised activity and other unlawful conduct</li>
              <li>Maintaining the security and integrity of the platform</li>
              <li>Complying with legal, regulatory, tax, accounting and reporting obligations</li>
              <li>Responding to lawful requests from government authorities or regulators</li>
              <li>Enforcing our terms and policies</li>
              <li>Investigating and resolving disputes</li>
              <li>Improving the Services and user experience</li>
              <li>Conducting analytics and service-performance monitoring</li>
              <li>Performing other purposes disclosed at the time information is collected</li>
            </ul>
            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">5. Legal Bases for Processing</h2>
            <p>
              Where required by applicable law, we process personal data on one or more lawful bases, including:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Performance of a contract, where processing is necessary to provide requested Services</li>
              <li>Legal obligation, where processing is required by law, regulation, court order or regulatory requirement</li>
              <li>Consent, where we ask for and rely upon your consent</li>
              <li>Legitimate interests, where processing is reasonably necessary for legitimate business purposes and those interests are not overridden by applicable rights</li>
              <li>Protection of vital interests, where processing is necessary to protect an individual's vital interests in circumstances recognised by applicable law</li>
            </ul>
            <p>
              Where consent is the applicable legal basis, you may withdraw consent subject to applicable legal limitations and the consequences of withdrawal. Withdrawal of consent does not affect processing lawfully carried out before withdrawal.
            </p>
            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">6. Identity Verification Through Prembly</h2>
            <p>
              GetDrives uses Prembly as an identity-verification service provider. The verification process may occur through Prembly's systems, meaning information required for verification may be submitted directly to and processed directly by Prembly.
            </p>
            <p>
              Prembly may use information provided to perform identity verification and related compliance checks on behalf of GetDrives or in connection with its verification services. GetDrives may receive verification results or information necessary to determine whether a verification requirement has been satisfied.
            </p>
            <p>
              Where appropriate, users should also review Prembly's applicable privacy terms for information about how Prembly independently processes information through its verification services.
            </p>
            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">7. Payments and Verification Through Flutterwave</h2>
            <p>
              GetDrives uses Flutterwave for payment processing. When you make a payment or provide financial information through Flutterwave, the information may be collected directly by Flutterwave rather than by GetDrives.
            </p>
            <p>
              Flutterwave may collect or process identity information, government-issued identification, bank-account information, card information, BVN and transaction information, including for identity verification, KYC, fraud prevention and regulatory compliance.
            </p>
            <p>
              Flutterwave may retain information where required by applicable law or regulatory requirements and may conduct fraud and transaction-risk checks. Flutterwave's own privacy notice and terms also apply to processing carried out directly by Flutterwave.
            </p>
            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">8. Marketing</h2>
            <p>
              Where required by law, we will obtain consent before sending marketing communications. Marketing communications may include promotions, referral programmes, discounts, fuel bonuses, new-service announcements and other promotional offers.
            </p>
            <p>
              You may opt out of marketing communications through relevant settings in the GetDrives app or by following unsubscribe instructions. Opting out of marketing does not prevent essential service, transaction, account, security or safety communications.
            </p>
            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">9. Sharing of Personal Data</h2>
            <p>
              GetDrives does not sell personal data. We may share personal data where necessary and lawful with:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Prembly, for identity verification</li>
              <li>Flutterwave, for payment processing, payment verification and related services</li>
              <li>Technology and infrastructure service providers</li>
              <li>Cloud hosting and security providers</li>
              <li>Professional advisers</li>
              <li>Auditors and compliance providers</li>
              <li>Government agencies, regulators, courts, law-enforcement authorities or other authorised bodies where legally required</li>
              <li>Service providers assisting with fraud prevention or platform security</li>
              <li>Other parties where you have provided appropriate authorisation or where sharing is otherwise permitted by applicable law</li>
            </ul>
            <p>
              We seek to ensure that third parties handling personal data on our behalf are subject to appropriate confidentiality, security and data-protection obligations.
            </p>
            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">10. Fair Bid, Shared Ride and Interstate Services</h2>
            <h3 className="mt-6 mb-3 text-lg font-semibold text-white">10.1 Fair Bid</h3>
            <p>
              GetDrives may process historical bid, fare, trip and market information to operate and improve the Fair Bid system. Bid and trip history may be used to determine or refine a reasonable fare range for relevant trips. Fare-range methodology may change over time based on operational, market, safety and other relevant factors.
            </p>
            <h3 className="mt-6 mb-3 text-lg font-semibold text-white">10.2 Shared Ride</h3>
            <p>
              For Shared Ride services, GetDrives may use pickup locations, destinations, travel direction, timing and other relevant trip information to identify compatible Riders. A Shared Ride may include up to three Riders, depending on the service.
            </p>
            <p>
              Other users in the same trip will receive only information reasonably necessary to identify and coordinate with one another, which may include first name, profile photograph, verification status, rating, and relevant trip information.
            </p>
            <p>
              Full phone numbers, NIN, BVN, identity documents and other sensitive verification information are not disclosed to other Riders or Drivers through the normal Shared Ride interface.
            </p>
            <h3 className="mt-6 mb-3 text-lg font-semibold text-white">10.3 Interstate Services</h3>
            <p>
              Where GetDrives requires enhanced verification for Interstate services, Riders, Drivers or other participants may be required to complete identity verification through Prembly. Participants may see limited identity information such as first name, photograph, verification status and rating where necessary for trip identification and safety. Where OTP verification is required before a trip begins, users must complete the applicable verification process before the trip proceeds.
            </p>
            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">11. Location, Calls, Messages and Safety Information</h2>
            <p>
              Location data is an important part of the GetDrives platform. We may use location information to match Riders and Drivers, provide navigation and dispatch, track active trips, calculate or verify trip-related information, provide safety and SOS services, investigate complaints and incidents, prevent fraud, and resolve disputes.
            </p>
            <p>
              GetDrives may use masked calling or other privacy-preserving communication features so users can communicate without unnecessarily revealing personal telephone numbers.
            </p>
            <p>
              Where in-app chat or other communications are provided, relevant records or metadata may be retained for security, customer support, dispute resolution, fraud prevention or legal purposes.
            </p>
            <p>
              Where a safety feature involves audio recording or another enhanced monitoring function, users will be informed through the relevant feature or interface where required by applicable law.
            </p>
            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">12. Information Shared with Other Users</h2>
            <p>
              During a trip, Riders and Drivers may receive limited information necessary to identify one another and complete the trip.
            </p>
            <p>
              A Rider may see a Driver's name, photograph, vehicle details, rating, and verification status.
            </p>
            <p>
              A Driver may see a Rider's first name, photograph, rating, pickup information, and other information reasonably necessary to complete the trip.
            </p>
            <p>
              Sensitive identity-verification information is not disclosed to other users through the normal service interface.
            </p>
            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">13. Third-Party Services</h2>
            <p>
              Some parts of the Services are provided through or supported by third-party platforms. Important providers include Prembly for identity verification, Flutterwave for payment processing and related financial verification, Termii for SMS and OTP services, Google Maps for mapping and navigation, Google infrastructure where applicable, and Curacel for insurance-related services where applicable.
            </p>
            <p>
              When you interact directly with a third-party service, that third party may process your information under its own privacy policy and terms. We encourage you to review the applicable privacy policies of third-party providers before submitting information directly to them.
            </p>
            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">14. Data Security</h2>
            <p>
              We take reasonable technical and organisational measures designed to protect personal data against unauthorised access, unauthorised disclosure, accidental loss, destruction, alteration, misuse, and other unlawful or unauthorised processing.
            </p>
            <p>
              Security measures may include access controls, authentication mechanisms, encryption or secure transmission where appropriate, monitoring, internal controls and other technical and organisational safeguards appropriate to the nature of the information and the risks involved.
            </p>
            <p>
              No electronic system or method of transmission can be guaranteed to be completely secure.
            </p>
            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">15. Data Retention</h2>
            <p>
              GetDrives retains personal data only for as long as reasonably necessary to fulfil the purpose for which it was collected, provide the Services, comply with applicable legal and regulatory obligations, resolve disputes, prevent fraud and abuse, enforce agreements, and protect the rights and legal interests of GetDrives and its users.
            </p>
            <p>
              Where no specific statutory or contractual retention period applies, GetDrives applies retention periods appropriate to the nature and purpose of the information. As a general framework, account and platform information may be retained for up to three (3) years after the user's last active use of the Services, while transaction and related contractual records may be retained for up to six (6) years after the last transaction, subject to applicable law and legitimate retention requirements.
            </p>
            <p>
              Certain information may be retained for shorter or longer periods where necessary because of the nature of the information, an ongoing dispute, investigation, fraud or security matter, legal proceedings, regulatory requirements, accounting or tax obligations, or another lawful basis.
            </p>
            <p>
              When personal data is no longer required, GetDrives will take reasonable steps to delete, anonymise or otherwise securely dispose of it in accordance with applicable law and its internal retention and deletion procedures.
            </p>
            <p>
              Where a third-party provider processes personal data directly, including Prembly or Flutterwave, that provider may retain information in accordance with its own legal, regulatory, contractual and retention requirements.
            </p>
            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">16. Your Data Protection Rights</h2>
            <p>
              Subject to applicable law and relevant exceptions, you may have the right to:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Be informed about how your personal data is processed</li>
              <li>Request access to personal data we hold about you</li>
              <li>Request correction of inaccurate or incomplete information</li>
              <li>Request deletion or erasure in appropriate circumstances</li>
              <li>Object to certain processing</li>
              <li>Request restriction of processing in appropriate circumstances</li>
              <li>Withdraw consent where processing is based on consent</li>
              <li>Request portability of personal data where applicable</li>
              <li>Lodge a complaint with the relevant data-protection authority</li>
            </ul>
            <p>
              To exercise these rights, contact GetDrives using the privacy contact details in Section 24. We may request information reasonably necessary to verify your identity and process the request. We will respond within the timeframe required by applicable law and will explain where a request cannot be fully granted because of a legal or regulatory exception.
            </p>
            <p>
              If the information you wish to access, correct or delete is held directly by Prembly or Flutterwave, you may also need to exercise your applicable rights directly with that provider.
            </p>
            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">17. Cookies and Similar Technologies</h2>
            <p>
              GetDrives may use cookies and similar technologies to keep you signed in, remember preferences, understand how users interact with the Services, improve functionality, monitor performance and security, and support analytics and service improvement.
            </p>
            <p>
              You may be able to control cookies through your browser or device settings. Disabling certain cookies may affect functionality of some parts of the Services. See also our <Link to="/cookies" className="text-brand-orange hover:underline">Cookie Policy</Link>.
            </p>
            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">18. Children's Privacy and Age Verification</h2>
            <p>
              The Services are not intended for individuals who are legally unable to enter into the applicable agreements required to use the Services. GetDrives does not knowingly collect personal data from children in circumstances where such collection is prohibited by applicable law.
            </p>
            <p>
              Where appropriate to the service, GetDrives may request a user's date of birth, age declaration, identity document or other information reasonably necessary to verify that the user meets applicable age or eligibility requirements.
            </p>
            <p>
              If we become aware that personal data has been collected from a child in circumstances where such collection is not permitted, we will take reasonable steps to address the situation in accordance with applicable law.
            </p>
            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">19. International Data Transfers</h2>
            <p>
              Some service providers, technology providers or other recipients may process personal data outside Nigeria.
            </p>
            <p>
              Where personal data is transferred across borders, GetDrives will take the steps required by applicable data-protection law to ensure that the transfer is subject to appropriate safeguards and lawful transfer mechanisms.
            </p>
            <p>
              Third-party providers may also have their own arrangements for international data transfers. Users should consult the applicable privacy policies of those providers for additional information.
            </p>
            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">20. Third-Party Websites and Services</h2>
            <p>
              The Services may contain links to third-party websites, applications, payment platforms or other services. GetDrives is not responsible for the privacy practices, security, content or policies of third-party services that GetDrives does not control.
            </p>
            <p>
              Important providers include Prembly (identity verification), Flutterwave (payment processing and related financial verification), Termii (SMS and OTP services), Google Maps (mapping and navigation), Google infrastructure where applicable, and Curacel (insurance-related services).
            </p>
            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">21. Fraud Prevention and Compliance</h2>
            <p>
              We may process personal data to detect, prevent, investigate and respond to fraud, identity theft, account misuse, unauthorised transactions, money laundering and other financial crime, security incidents, and violations of applicable law or our terms.
            </p>
            <p>
              Our payment and verification providers may independently conduct additional checks as required for their services and applicable regulatory obligations.
            </p>
            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">22. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes to our Services, applicable laws and regulations, business practices, third-party service providers or data-protection requirements.
            </p>
            <p>
              When we make material changes, we will provide notice through the website, application, email or another appropriate means where reasonably practicable and required by applicable law. The “Last Updated” date at the beginning of this Privacy Policy indicates when it was most recently revised.
            </p>
            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">23. Privacy Requests and Complaints Process</h2>
            <p>
              If you have a question, concern, complaint or request relating to this Privacy Policy or the processing of your personal data by GetDrives, contact us using the details in Section 24.
            </p>
            <p>
              GetDrives will acknowledge a privacy complaint within seven (7) days of receipt and will aim to resolve the complaint within thirty (30) days. Where a matter is complex, requires information from a third party, or cannot reasonably be resolved within that period, we may extend the review period where permitted by applicable law and will communicate the reason for the delay and, where appropriate, the expected next step.
            </p>
            <p>
              You may also have the right to lodge a complaint with the Nigeria Data Protection Commission (NDPC) or another competent data-protection authority, subject to applicable law.
            </p>
            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">24. Contact Us</h2>
            <p>
              For privacy questions, requests or complaints concerning GetDrives' processing of personal data:
            </p>
            <address className="not-italic">
              <strong className="text-white">GetDrives Limited</strong><br />
              Suite D5, Mazado Plaza<br />
              Behind Julius Berger Yard<br />
              Utako, Abuja FCT, Nigeria<br />
              Privacy Email: <a href="mailto:privacy@getdrives.com" className="text-brand-orange hover:underline">privacy@getdrives.com</a>
            </address>
            <p>
              For information processed directly by Flutterwave or Prembly through their own services, you may also need to contact the relevant provider through its applicable privacy or support channels.
            </p>
            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">25. Acceptance and Privacy Consent</h2>
            <p>
              By accessing or using the GetDrives Services, you acknowledge that you have had an opportunity to review this Privacy Policy and understand how personal data may be processed as described above.
            </p>
            <p>
              Where applicable law requires consent or another specific legal basis, GetDrives will obtain or rely upon the appropriate legal basis before processing the relevant personal data.
            </p>

          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
