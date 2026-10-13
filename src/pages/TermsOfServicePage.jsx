import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useDocumentTitle } from "../useDocumentTitle";
import { motion } from "framer-motion";
import { useAccessibleMotion } from "../motionPresets";
import { Link } from "react-router-dom";

export default function TermsOfServicePage() {
  useDocumentTitle("Terms of Service | GetDrives");
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
            Rider Terms of Service
          </h1>
          <p className="mb-2 text-sm text-brand-gray/70">GetDrives Rider Terms of Service</p>
          <p className="mb-8 font-semibold text-white">Effective Date: October 1, 2026 · Version 1.0</p>

          <div className="prose prose-invert prose-brand prose-p:leading-relaxed prose-li:leading-relaxed max-w-none text-brand-gray/80">
            <p>
              IMPORTANT NOTICE: By tapping “I Agree &amp; Book Ride”, creating or using a GetDrives Rider account, or booking or using any GetDrives service, you confirm that you have read, understood, and agreed to these Rider Terms of Service (“Terms”), together with the GetDrives Privacy Notice and any applicable in-app rules or notices expressly incorporated into these Terms.
            </p>
            <p>
              If you do not agree to these Terms, please do not use the GetDrives platform or book a GetDrives service.
            </p>
            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">1. Who We Are</h2>
            <p>
              GetDrives Limited (“GetDrives”, “we”, “us”, or “our”) operates a technology platform that connects riders, passengers, senders, customers, and independent drivers or service providers (“Driver” or “Drivers”) for transportation and delivery services.
            </p>
            <p>
              GetDrives provides technology and platform services, including Driver and rider matching; trip and delivery requests; fare estimation and in-app bidding; payment and wallet functionality; trip tracking and selected safety features; customer support and dispute-resolution tools; and other features made available through the GetDrives application.
            </p>
            <p>
              GetDrives is a technology platform and is not itself a transport company or the owner or operator of the vehicles used by Drivers. Drivers are independent service providers and are not employees of GetDrives solely by virtue of using the platform.
            </p>
            <p>
              The Driver providing your transportation or delivery service is responsible for complying with applicable laws and for providing the relevant service in accordance with the applicable booking terms.
            </p>
            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">2. GetDrives Services</h2>
            <p>
              Subject to availability, location, applicable laws, and the requirements displayed in the app, you may use GetDrives to request the following services.
            </p>
            <h3 className="mt-6 mb-3 text-lg font-semibold text-white">2.1 Standard Rides</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Mini — Small vehicles intended for affordable individual transportation. Vehicle requirement: 2006 model year or newer, subject to GetDrives' vehicle requirements.</li>
              <li>Economy — Everyday vehicles suitable for regular transportation, such as Toyota Corolla-class vehicles. Requirement: Functional air conditioning.</li>
              <li>Comfort — Newer and generally more comfortable vehicles. Vehicle requirement: 2012 model year or newer. Requirement: Functional air conditioning and applicable GetDrives vehicle standards.</li>
              <li>Premium — Higher-category vehicles and Drivers meeting additional GetDrives requirements. Vehicle requirement: 2016 model year or newer. Requirements: Functional air conditioning and other applicable vehicle and Driver standards. Where a rating requirement applies, the applicable minimum rating will be displayed by GetDrives.</li>
            </ul>
            <p>
              Availability of any vehicle category may vary by location and time.
            </p>
            <h3 className="mt-6 mb-3 text-lg font-semibold text-white">2.2 Solo Ride</h3>
            <p>
              A Solo Ride is intended for the rider and their accompanying passengers travelling directly to the requested destination.
            </p>
            <p>
              Unless otherwise stated in the app or required by law, a standard vehicle may carry a maximum of four (4) passengers.
            </p>
            <p>
              Riders must not request or pressure a Driver to carry more passengers than the permitted vehicle capacity.
            </p>
            <h3 className="mt-6 mb-3 text-lg font-semibold text-white">2.3 Shared Ride</h3>
            <p>
              Shared Ride is a lower-cost option available on Mini, Economy, and Comfort categories where offered.
            </p>
            <p>
              With Shared Ride:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>You may be matched with up to two (2) additional riders travelling in a similar direction.</li>
              <li>You may be picked up before or after another matched rider.</li>
              <li>A reasonable route adjustment may be required to collect or drop off another rider.</li>
              <li>Any estimated additional travel time or route adjustment will be communicated through the app where practicable.</li>
              <li>Shared Ride fares are fixed and cannot be negotiated through Fair Bid.</li>
              <li>Each booking covers one (1) seat. If two people are travelling together, two seats must be booked, subject to availability, or a Solo Ride should be requested.</li>
              <li>Shared Ride is intended for riders carrying small personal bags only. Large luggage, boxes, or other substantial loads should be transported using an appropriate Solo Ride or GetDrives Send service.</li>
            </ul>
            <p>
              Shared Ride Waiting Time: You must be ready at the designated pickup point when the Driver arrives. The Driver will wait for up to five (5) minutes after arrival, unless a different waiting period is displayed in the app or required by applicable law. If you do not arrive within the applicable waiting period, the booking may be treated as a no-show and the applicable cancellation fee may apply.
            </p>
            <h3 className="mt-6 mb-3 text-lg font-semibold text-white">2.4 Women-Only Shared Ride</h3>
            <p>
              Where available, a rider may request Women-Only Shared Ride. The platform will attempt to match the rider with female riders and, where available, a female Driver. Women-Only matching is subject to availability and cannot be guaranteed at every location or time.
            </p>
            <h3 className="mt-6 mb-3 text-lg font-semibold text-white">2.5 Keke</h3>
            <p>
              Keke services are available only within locations or zones approved and displayed by GetDrives. Passengers must comply with applicable vehicle capacity, safety, and regulatory requirements.
            </p>
            <h3 className="mt-6 mb-3 text-lg font-semibold text-white">2.6 GetDrives Send — Bike Delivery</h3>
            <p>
              GetDrives Send enables customers to request motorcycle/bike-based delivery of permitted parcels, food, documents, and other eligible items. GetDrives Send is a delivery service and not a passenger transportation service.
            </p>
            <p>
              You must not use GetDrives Send to transport:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Illegal drugs or controlled substances</li>
              <li>Weapons or prohibited items</li>
              <li>Explosives or hazardous materials</li>
              <li>Human beings</li>
              <li>Cash exceeding the limit displayed or permitted by GetDrives</li>
              <li>Any other item prohibited by applicable law or GetDrives' delivery rules</li>
            </ul>
            <p>
              You are responsible for accurately describing the item, packaging it appropriately, and ensuring that the item is lawful to transport. GetDrives may refuse, cancel, or report a delivery request where it reasonably suspects that the item violates applicable law or GetDrives' rules.
            </p>
            <h3 className="mt-6 mb-3 text-lg font-semibold text-white">2.7 Interstate</h3>
            <p>
              Interstate enables riders to join a verified Driver or vehicle owner travelling on an agreed intercity route, such as Lagos to Ibadan, subject to availability and applicable requirements.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>The fare is generally quoted per seat.</li>
              <li>Drivers and passengers may be subject to identity or other verification requirements.</li>
              <li>Riders must arrive at the agreed pickup location on time.</li>
              <li>Unless otherwise agreed or displayed in the app, luggage is limited to one (1) standard bag and one (1) small hand bag per passenger.</li>
              <li>Additional luggage may attract an applicable luggage fee.</li>
              <li>Riders should verify the Driver and vehicle before entering and use available trip-sharing and safety features.</li>
              <li>Interstate services remain subject to applicable transportation and road-traffic laws.</li>
            </ul>
            <h3 className="mt-6 mb-3 text-lg font-semibold text-white">2.8 Hourly Charter</h3>
            <p>
              Hourly Charter allows a rider to hire a Driver and vehicle for a specified number of hours. The minimum booking period is two (2) hours, unless otherwise stated in the app.
            </p>
            <p>
              The applicable charge is: Hourly Rate × Booked Hours + applicable additional charges. Where the rider continues using the vehicle beyond the booked period, additional charges may apply according to the rate displayed or agreed through the app. The Driver may wait for the rider during the booked period, subject to the applicable booking conditions.
            </p>
            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">3. Fair Bid — In-App Fare Negotiation</h2>
            <h3 className="mt-6 mb-3 text-lg font-semibold text-white">3.1 Services Eligible for Fair Bid</h3>
            <p>
              Fair Bid may be available for Standard Solo (Mini, Economy, Comfort, Premium), Keke, GetDrives Send, Interstate, and Hourly Charter. Fair Bid is not available for Shared Ride, which uses a fixed fare. Availability may vary by location, service, demand, time, or other platform conditions.
            </p>
            <h3 className="mt-6 mb-3 text-lg font-semibold text-white">3.2 How Fair Bid Works</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>You enter your pickup and destination or other applicable service details.</li>
              <li>GetDrives displays a Fair Fare or applicable Fair Range.</li>
              <li>You may submit an offer within the permitted range.</li>
              <li>A Driver may accept, decline, or submit a counter-offer within the permitted range.</li>
              <li>You may accept or decline the Driver's counter-offer.</li>
              <li>Once you and the Driver agree to a fare through the app, the agreed fare is confirmed for that booking.</li>
            </ul>
            <p>
              A booking may not be concluded through off-platform bargaining.
            </p>
            <h3 className="mt-6 mb-3 text-lg font-semibold text-white">3.3 Fair Bid Rules</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Your offer must remain within the Fair Range displayed by the app.</li>
              <li>The app may prevent offers outside the permitted range.</li>
              <li>You will not pressure or request a Driver to accept an amount below the permitted range.</li>
              <li>Once you accept a Driver's counter-offer, the agreed fare becomes binding for that booking, subject to these Terms and applicable law.</li>
              <li>You will not attempt to renegotiate an agreed fare outside the app.</li>
              <li>You will not make payment arrangements with a Driver outside the payment methods permitted by GetDrives.</li>
              <li>Repeated abuse of the bidding or cancellation system may result in temporary or permanent restrictions on bidding or use of the platform.</li>
            </ul>
            <p>
              GetDrives may adjust Fair Ranges from time to time based on factors including distance, operating costs, demand, location, service category, and other relevant factors.
            </p>
            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">4. Fares, Charges and Payment</h2>
            <h3 className="mt-6 mb-3 text-lg font-semibold text-white">4.1 Fare Calculation</h3>
            <p>
              Before confirming a booking, the GetDrives app will display the applicable fare or pricing information for the requested service, together with any applicable fees or charges that are required to be disclosed at that stage. By confirming a booking, you acknowledge and agree to the applicable fare and charges displayed in the app for that booking.
            </p>
            <p>
              Fares and applicable charges may vary depending on the service selected, route, distance, time, vehicle category, booking type, applicable pricing rules, or other factors disclosed through the app. Where a fare is agreed through GetDrives' Fair Bid feature, the agreed fare shown in the app will apply to that booking, subject to any separately disclosed applicable fees or charges.
            </p>
            <h3 className="mt-6 mb-3 text-lg font-semibold text-white">4.2 Traffic</h3>
            <p>
              For standard rides, fares are generally calculated based on distance rather than the amount of time spent in traffic. Accordingly, ordinary traffic delays will not automatically increase a standard ride fare solely because the vehicle spends additional time in traffic. This does not exclude charges expressly applicable to waiting, rider-requested stops, destination changes, tolls, airport fees, or other disclosed charges. Hourly Charter is charged according to the applicable hourly arrangement.
            </p>
            <h3 className="mt-6 mb-3 text-lg font-semibold text-white">4.3 Payment Methods</h3>
            <p>
              Depending on availability, GetDrives may accept Card, Bank transfer, GetDrives Wallet, Cash, and other payment methods introduced by GetDrives. Where a transfer is permitted, payment must be made in accordance with the instructions provided in the app. Riders must not falsely claim that a payment has been made or provide fraudulent payment evidence.
            </p>
            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">5. Cancellation, Waiting and No-Shows</h2>
            <p>
              Cancellation, waiting-time and no-show rules are set out in detail in our <Link to="/cancellation" className="text-brand-orange hover:underline">Cancellation, Waiting Time &amp; No-Show Policy</Link>. Key points include:
            </p>
            <h3 className="mt-6 mb-3 text-lg font-semibold text-white">5.1 Rider Cancellation</h3>
            <p>
              You may cancel a booking within the free-cancellation period displayed in the app. The applicable cancellation fee or charge, if any, will be displayed in the GetDrives app before the booking is confirmed or at the relevant stage permitted by the applicable booking rules.
            </p>
            <p>
              For Shared Ride, cancellation after matching may attract an applicable cancellation fee and may result in loss of the Shared Ride discount for up to 24 hours, subject to the applicable in-app rules.
            </p>
            <h3 className="mt-6 mb-3 text-lg font-semibold text-white">5.2 Driver Arrival and Rider No-Show</h3>
            <p>
              You must be ready at the pickup location when the Driver arrives. Unless a different waiting period is displayed in the app: Standard rides — Driver waits up to five (5) minutes; Shared Ride — Driver waits up to five (5) minutes. After the applicable waiting period, the Driver may leave and the booking may be treated as a no-show. The applicable cancellation or no-show fee may then be charged.
            </p>
            <h3 className="mt-6 mb-3 text-lg font-semibold text-white">5.3 Exceptional Circumstances</h3>
            <p>
              GetDrives may waive or modify a cancellation fee where appropriate, including where a cancellation results from a verified safety concern, a Driver failing to arrive, a significant technical problem, an incorrect Driver or vehicle, an emergency, or another circumstance determined by GetDrives to justify a waiver.
            </p>
            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">6. Rider Responsibilities</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Provide accurate booking and account information</li>
              <li>Be present at your pickup location on time</li>
              <li>Treat Drivers and other riders respectfully</li>
              <li>Follow applicable laws and safety requirements</li>
              <li>Use the appropriate service for your transportation or delivery needs</li>
              <li>Follow applicable vehicle capacity requirements</li>
              <li>Keep personal belongings secure</li>
              <li>Follow instructions relating to identity, OTP, vehicle, and Driver verification</li>
              <li>Not interfere with the safe operation of the vehicle</li>
              <li>Not request a Driver to violate traffic laws or other applicable laws</li>
            </ul>
            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">7. Prohibited Conduct</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Harass, threaten, assault, intimidate, or discriminate against a Driver or another rider</li>
              <li>Smoke or consume prohibited substances in a vehicle</li>
              <li>Consume alcohol in a vehicle where prohibited</li>
              <li>Damage the vehicle</li>
              <li>Carry prohibited or unlawful items</li>
              <li>Create a false account or impersonate another person</li>
              <li>Manipulate the referral, bidding, payment, cancellation, or rewards systems</li>
              <li>Circumvent GetDrives' platform or payment systems for the purpose of avoiding applicable charges</li>
              <li>Request a Driver to carry more passengers or luggage than legally or operationally permitted</li>
              <li>Use GetDrives to facilitate unlawful activity</li>
            </ul>
            <p>
              Serious or repeated violations may result in suspension or termination of your account and, where appropriate, reporting to relevant authorities.
            </p>
            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">8. Cleaning and Damage Charges</h2>
            <p>
              You are responsible for reasonable costs resulting from damage or unusual cleaning required because of your actions or those of your accompanying passengers.
            </p>
            <p>
              GetDrives will assess available information before determining whether a cleaning or damage charge is applicable and, where appropriate, the reasonable amount of such charge. GetDrives may request and review reasonable supporting evidence, which may include photographs, videos, trip records, inspection records, receipts, repair estimates, or other relevant information.
            </p>
            <p>
              Any applicable cleaning or damage charge will be disclosed or communicated through the applicable GetDrives process. A Rider may dispute a cleaning or damage charge through GetDrives Support.
            </p>
            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">9. Safety</h2>
            <p>
              GetDrives may provide safety features including GPS trip tracking, in-app emergency/SOS features, trip-sharing functionality, Driver and vehicle identification, OTP verification, Driver and rider verification, and safety reporting tools. These features are intended to support safety but cannot eliminate all risks associated with transportation or delivery services.
            </p>
            <h3 className="mt-6 mb-3 text-lg font-semibold text-white">9.1 Before Entering a Vehicle</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Check the vehicle registration/plate number shown in the app</li>
              <li>Check the Driver's identity and profile</li>
              <li>Confirm the vehicle corresponds with the booking</li>
              <li>Complete any required OTP or in-app verification</li>
            </ul>
            <p>
              If the Driver or vehicle does not match the information shown in the app, do not enter the vehicle. Cancel the booking and report the issue to GetDrives.
            </p>
            <h3 className="mt-6 mb-3 text-lg font-semibold text-white">9.2 Trip Sharing</h3>
            <p>
              Where available, you may share your trip information with a trusted contact. We encourage riders to use available safety features, particularly for unfamiliar routes and Interstate trips.
            </p>
            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">10. Lost Items</h2>
            <p>
              GetDrives does not guarantee recovery of personal property left in a vehicle. If you report a lost item within 24 hours, GetDrives may contact the Driver and facilitate communication where reasonably possible.
            </p>
            <p>
              GetDrives is not responsible for loss, theft, damage, or failure to recover an item, except to the extent liability cannot lawfully be excluded or limited. You should avoid leaving valuable or essential personal belongings in a vehicle.
            </p>
            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">11. Accidents, Insurance and Liability</h2>
            <p>
              Drivers are responsible for obtaining and maintaining the motor insurance required by applicable law for their vehicles and services, including applicable mandatory third-party motor insurance. GetDrives does not provide motor insurance coverage for Drivers.
            </p>
            <p>
              Eligible Riders may be covered by a personal accident and related insurance arrangement facilitated by Curacel as an intermediary, subject to the terms, conditions, limits and exclusions of the applicable policy.
            </p>
            <p>
              Subject to the applicable policy terms, the Rider coverage arrangement includes:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Medical expenses: up to ₦40,000 per person, subject to the applicable vehicle and policy limits</li>
              <li>Permanent disability: up to ₦250,000 per person, subject to the applicable vehicle and policy limits</li>
              <li>Death: up to ₦250,000 per person, subject to the applicable vehicle and policy limits</li>
              <li>Loss of personal effects: up to ₦100,000, subject to the applicable policy conditions and exclusions</li>
              <li>Aggregate policy-period limit: ₦50,000,000</li>
            </ul>
            <p>
              The applicable policy contains conditions and exclusions, including an age limit and exclusions relating to infectious diseases, as applicable to the policy. The existence of accident or insurance cover does not mean that every incident or loss will be covered.
            </p>
            <p>
              Riders should report accidents or potentially covered incidents to GetDrives Support as soon as reasonably practicable. Nothing in these Terms alters, expands or replaces the terms, conditions, limits or exclusions of the applicable insurance policy, or excludes or limits any liability or right that cannot lawfully be excluded or limited under applicable Nigerian law.
            </p>
            <p>
              To the extent permitted by law, GetDrives' role is primarily that of a technology platform connecting riders with independent Drivers and facilitating booking, payment, and related platform services.
            </p>
            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">12. Identity and Verification</h2>
            <p>
              GetDrives may require riders and Drivers to complete identity, telephone, NIN, OTP, vehicle, facial, or other verification processes. Where required, you agree to provide accurate information and complete the applicable verification process. Verification does not constitute a guarantee that a person is safe, trustworthy, or suitable for every circumstance. Riders should continue to use reasonable personal-safety precautions.
            </p>
            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">13. Rewards and Founding Rider Program</h2>
            <h3 className="mt-6 mb-3 text-lg font-semibold text-white">13.1 Founding Riders</h3>
            <p>
              The first 1,000 eligible riders may qualify as Founding Riders. Subject to the applicable Founding Rider programme rules, an eligible Founding Rider may receive a Founding Rider Gold Badge and ride credit equivalent to 0.01% of the applicable GetDrives revenue amount attributable to the rider, for a period of 12 months.
            </p>
            <p>
              The precise calculation, eligibility requirements, crediting method, exclusions, and applicable revenue definition will be disclosed in the Founding Rider programme rules. To maintain eligibility, a Founding Rider must complete at least 10 eligible rides per calendar month, unless the programme rules provide otherwise. Ride credits are promotional credits and are not cash unless GetDrives expressly states otherwise.
            </p>
            <h3 className="mt-6 mb-3 text-lg font-semibold text-white">13.2 Referrals</h3>
            <p>
              Where the referral programme is available, you may receive ₦1,000 in ride credit when an eligible referred user completes the required two (2) qualifying rides. Referral rewards are subject to the applicable programme rules and may not be exchanged for cash unless expressly permitted. Fraudulent, duplicate, self-referrals, fake accounts, or other forms of referral abuse may result in cancellation of rewards and suspension or termination of affected accounts.
            </p>
            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">14. Account Rules and Restrictions</h2>
            <p>
              Each person may maintain only one personal GetDrives Rider account, unless GetDrives expressly authorises otherwise. You are responsible for keeping your login credentials secure, preventing unauthorised use of your account, providing accurate information, and promptly reporting suspected unauthorised access.
            </p>
            <p>
              GetDrives may restrict, suspend or terminate access to an account where reasonably necessary, including where a Rider breaches these Terms, engages in prohibited or fraudulent activity, creates a safety or security risk, fails to meet applicable requirements, or otherwise misuses the GetDrives platform.
            </p>
            <p>
              Where reasonably practicable, GetDrives will notify the Rider of the relevant action and the reason for it. A Rider may appeal an account restriction or suspension through GetDrives Support within seven (7) days of receiving notice of the action, unless a different period is required by applicable law or specified in the relevant notice.
            </p>
            <p>
              GetDrives may take immediate action where reasonably necessary to protect users, prevent fraud or misuse, comply with applicable law, or address an urgent safety or security concern.
            </p>
            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">15. Platform Availability</h2>
            <p>
              GetDrives does not guarantee that the platform or any particular service will always be available. Service availability may be affected by Driver availability, demand, weather, road conditions, traffic, government restrictions, technical problems, network outages, safety concerns, regulatory requirements, or other circumstances outside GetDrives' reasonable control.
            </p>
            <p>
              GetDrives may temporarily suspend or restrict a service where reasonably necessary for safety, maintenance, fraud prevention, regulatory compliance, or other legitimate operational reasons.
            </p>
            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">16. Changes to These Terms</h2>
            <p>
              GetDrives may update these Terms and its commission rates, Fair Ranges, service requirements, vehicle requirements, rewards programmes, safety requirements, platform rules, or other applicable policies.
            </p>
            <p>
              For material changes, GetDrives will provide at least seven (7) days' notice through the app or another appropriate communication method, unless a shorter period is permitted or required because of applicable law or regulatory requirements, an urgent safety concern, fraud prevention or security requirements, or another circumstance where immediate action is reasonably necessary.
            </p>
            <p>
              If you continue using the GetDrives platform after the effective date, you will be deemed to have accepted the updated Terms to the extent permitted by applicable law. If you do not agree with a material change, you may stop using the platform before the change takes effect.
            </p>
            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">17. Disputes and Governing Law</h2>
            <p>
              If you have a complaint or dispute, you should first contact GetDrives through its customer-support or internal dispute-resolution process and provide the relevant details so that GetDrives can review and attempt to resolve the matter.
            </p>
            <p>
              Where a dispute cannot be resolved through GetDrives' internal resolution process, the parties may seek to resolve the matter through an appropriate alternative dispute resolution process, including mediation, where applicable. Where appropriate and legally applicable, the parties may use the Lagos Multi-Door Courthouse or another appropriate ADR forum.
            </p>
            <p>
              Nothing in this section prevents a party from exercising any right or seeking any remedy that cannot lawfully be excluded or restricted under applicable law, including urgent legal, injunctive or protective relief.
            </p>
            <p>
              These Terms are governed by the applicable laws of the Federal Republic of Nigeria and, where applicable, Lagos State.
            </p>
            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">18. Privacy and Personal Information</h2>
            <p>
              GetDrives collects, uses, stores and otherwise processes personal data in connection with the provision and operation of its services. By using the GetDrives platform, you acknowledge that your personal data will be processed in accordance with the <Link to="/privacy" className="text-brand-orange hover:underline">GetDrives Privacy Policy</Link> and applicable data-protection laws, including the Nigeria Data Protection Act 2023, where applicable.
            </p>
            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">19. Intellectual Property</h2>
            <p>
              The GetDrives name, trademarks, logos, software, platform, website, application, designs, text, graphics, content and other materials made available by GetDrives are owned by or licensed to GetDrives and are protected by applicable intellectual-property laws.
            </p>
            <p>
              Except as expressly permitted by GetDrives or applicable law, you may not copy, reproduce, modify, distribute, publicly display, reverse engineer, sell, license or otherwise exploit GetDrives' intellectual property or platform materials. Your use of the GetDrives platform does not transfer any ownership rights in GetDrives' intellectual property to you.
            </p>
            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">20. General Provisions</h2>
            <h3 className="mt-6 mb-3 text-lg font-semibold text-white">20.1 Severability</h3>
            <p>
              If any provision of these Terms is found to be invalid, unlawful, or unenforceable, that provision will be modified or severed to the minimum extent necessary, and the remaining provisions will continue to apply to the extent permitted by law.
            </p>
            <h3 className="mt-6 mb-3 text-lg font-semibold text-white">20.2 No Waiver</h3>
            <p>
              A failure or delay by GetDrives to enforce a provision of these Terms does not constitute a waiver of GetDrives' right to enforce that provision later.
            </p>
            <h3 className="mt-6 mb-3 text-lg font-semibold text-white">20.3 Entire Agreement</h3>
            <p>
              These Terms, together with the GetDrives Privacy Notice and any applicable in-app rules, policies, or notices expressly incorporated into these Terms, constitute the agreement governing your use of the GetDrives Rider platform.
            </p>
            <h3 className="mt-6 mb-3 text-lg font-semibold text-white">20.4 Assignment</h3>
            <p>
              You may not transfer or assign your rights or obligations under these Terms without GetDrives' prior written consent, except where otherwise permitted by law. GetDrives may transfer or assign its rights and obligations in connection with a merger, acquisition, restructuring, sale of assets, or other lawful corporate transaction.
            </p>
            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">21. Contact GetDrives</h2>
            <p>
              For questions, complaints, lost items, safety concerns, payment issues, or other support:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>In-App Chat: Available through the GetDrives application</li>
              <li>Email: riders@getdrives.com</li>
            </ul>
            <p>
              For urgent safety concerns, use the available in-app safety/SOS features and contact the appropriate emergency services where necessary.
            </p>

          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
