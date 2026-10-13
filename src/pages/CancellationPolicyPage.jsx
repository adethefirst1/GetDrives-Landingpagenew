import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useDocumentTitle } from "../useDocumentTitle";
import { motion } from "framer-motion";
import { useAccessibleMotion } from "../motionPresets";
import { Link } from "react-router-dom";

export default function CancellationPolicyPage() {
  useDocumentTitle("Cancellation Policy | GetDrives");
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
            Cancellation, Waiting Time &amp; No-Show Policy
          </h1>
          <p className="mb-2 text-sm text-brand-gray/70">Cancellation, waiting time, no-show and refund rules</p>
          <p className="mb-8 font-semibold text-white">Effective Date: October 1, 2026 · Version 1.0</p>

          <div className="prose prose-invert prose-brand prose-p:leading-relaxed prose-li:leading-relaxed max-w-none text-brand-gray/80">
            <p>
              This Policy explains cancellation, waiting time, no-show, refund, and related account-management rules for Riders and Drivers using GetDrives. The applicable rules may vary depending on the service, timing of the cancellation, and payment method.
            </p>
            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">1. Standard Ride Cancellation Policy</h2>
            <h3 className="mt-6 mb-3 text-lg font-semibold text-white">Rider Cancellation</h3>
            <p>
              Riders may cancel a Standard Ride before the Driver arrives, subject to any cancellation terms displayed in the GetDrives app at the time of booking.
            </p>
            <h3 className="mt-6 mb-3 text-lg font-semibold text-white">Driver Waiting Time</h3>
            <p>
              Once the Driver arrives at the pickup location, the Driver will wait for 5 minutes. After the 5-minute waiting period: if the Rider has not arrived or is unable to take the ride, the Driver may mark the Rider as a No-Show.
            </p>
            <p>
              Where a cancellation or no-show fee applies, the applicable fee will be disclosed in the GetDrives app at the relevant stage of booking.
            </p>
            <p>
              For cash or bank-transfer bookings, GetDrives may be unable to deduct an applicable fee automatically. The applicable fee nevertheless remains payable by the Rider. Repeated unpaid cancellation or no-show fees may result in restrictions on future bookings, including temporary suspension of certain booking options or a requirement to use a supported prepaid payment method.
            </p>
            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">2. Interstate Ride Cancellation Policy</h2>
            <p>
              Interstate rides require Drivers to plan ahead and may involve longer travel distances. Accordingly, stricter cancellation rules apply.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>6 hours or more before the trip: A Rider may cancel without a cancellation fee.</li>
              <li>Less than 6 hours before the trip: Cancellation fees may apply. The applicable fee will be displayed in the GetDrives app before the booking is confirmed.</li>
              <li>1 hour or less before the trip: A higher cancellation fee may apply and will be displayed in the app before confirmation.</li>
            </ul>
            <p>
              For cash or bank-transfer bookings, GetDrives may not have a practical way to automatically collect an applicable cancellation fee. The fee nevertheless remains payable where it applies. Repeated unpaid fees or late cancellations/no-shows may affect the Rider's ability to make future bookings.
            </p>
            <p>
              Exceptional circumstances may be reviewed in accordance with Section 9 of this Policy.
            </p>
            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">3. Interstate Rider No-Show Policy</h2>
            <p>
              A Rider is considered a No-Show when: the Driver arrives at the agreed pickup location; the Rider does not appear within the permitted waiting period; and the Rider has not successfully contacted the Driver or GetDrives to arrange an alternative.
            </p>
            <p>
              For Interstate rides, the Driver will wait for a maximum of 20 minutes at the agreed pickup location. After the 20-minute waiting period, the Driver may leave and the trip may be recorded as a Rider No-Show. Where a No-Show fee applies, the applicable fee will be displayed in the GetDrives app in accordance with the booking terms.
            </p>
            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">4. Interstate Driver Cancellation Policy</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>More than 8 hours before the trip: Drivers may cancel without an automatic late-cancellation penalty, although repeated cancellations may be reviewed by GetDrives.</li>
              <li>Less than 8 hours before the trip: Treated as a Late Driver Cancellation. Three (3) Late Driver Cancellations within any 30-day period will result in a 5-day suspension from accepting Interstate Rides.</li>
            </ul>
            <p>
              After a suspension, continued or repeated late cancellations may result in further review or additional restrictions. Where an approved exceptional circumstance applies, GetDrives may exclude the cancellation from the applicable cancellation history after review.
            </p>
            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">5. Interstate Driver No-Show</h2>
            <p>
              A Driver must arrive at the agreed pickup location and remain available for the Rider. If a Driver fails to arrive for a confirmed Interstate booking without properly cancelling, this may be treated as a Driver No-Show.
            </p>
            <p>
              Where the Rider has made a payment for the affected booking, the Rider will be entitled to a refund of the amount actually paid, subject to the applicable payment-processing procedures. Where no payment has been made, no refund is due.
            </p>
            <p>
              GetDrives may additionally provide GetDrives credit or other appropriate compensation where considered appropriate. The Driver may be temporarily restricted from accepting Interstate trips. GetDrives may review or take further action where there is a repeated pattern of cancellations or no-shows.
            </p>
            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">6. Waiting Time Policy</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Standard Rides: Driver waits 5 minutes after arriving at the pickup location. After 5 minutes, the Driver may cancel as a Rider No-Show. Any applicable fee will be displayed in the app.</li>
              <li>Interstate Rides: Driver waits a maximum of 20 minutes at the agreed pickup location.</li>
            </ul>
            <p>
              Riders are strongly encouraged to be ready before the scheduled pickup time. If the Rider does not arrive within the permitted waiting period and cannot be reached, the Driver may leave and the booking may be treated as a No-Show.
            </p>
            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">7. Changes to Pickup Location or Trip Details</h2>
            <p>
              A Rider should not substantially change the agreed pickup location after the Driver has started travelling to the pickup point without first confirming with the Driver. If a requested change causes significant additional travel, waiting time, or expense, the Driver may contact GetDrives for assistance.
            </p>
            <p>
              For Interstate trips, changes to the departure location, destination, date, or time may be treated as a cancellation and new booking where the change cannot reasonably be accommodated.
            </p>
            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">8. Communication During a Cancellation or No-Show</h2>
            <p>
              Both Riders and Drivers are expected to make reasonable efforts to communicate when they are delayed or unable to complete a trip.
            </p>
            <p>
              Before leaving a pickup location because of a No-Show, Drivers should, where reasonably possible: attempt to contact the Rider through the GetDrives app or available contact method; confirm that they are at the correct pickup location; allow the applicable waiting period to expire; and record the trip as a No-Show through the appropriate GetDrives process.
            </p>
            <p>
              Riders should similarly contact the Driver or GetDrives as soon as possible if they are delayed.
            </p>
            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">9. Exceptional Circumstances</h2>
            <p>
              GetDrives may review a cancellation or No-Show where a Rider or Driver was prevented from completing a booking due to an exceptional circumstance, including: a serious medical emergency; a major or verified road closure or road incident; severe weather or other conditions that make travel unsafe; a significant technical or platform issue affecting the booking; or an incorrect booking or system error caused by GetDrives.
            </p>
            <p>
              GetDrives may request reasonable supporting information or evidence where necessary. Where an exceptional circumstance is verified, GetDrives may waive or reverse an applicable cancellation or No-Show fee, or take other appropriate action. The existence of an exceptional circumstance does not automatically guarantee that a fee will be waived or reversed.
            </p>
            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">10. Payment Method and Cancellation Fees</h2>
            <p>
              Applicable cancellation and No-Show fees are disclosed in the GetDrives app at the relevant stage of booking and before confirmation.
            </p>
            <p>
              Card and Supported Electronic Payments: Where applicable, GetDrives may automatically charge a cancellation or No-Show fee to the payment method associated with the booking.
            </p>
            <p>
              Cash and Bank Transfer: Where a cancellation or No-Show fee applies to a booking paid by cash or bank transfer, GetDrives may be unable to deduct the fee automatically. The applicable fee nevertheless remains payable by the Rider. Repeated unpaid fees may result in restrictions on future bookings.
            </p>
            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">11. Refunds and Credits for Driver No-Show</h2>
            <p>
              Where a Driver fails to arrive for a confirmed booking and the booking is determined to be a Driver No-Show, any amount actually paid by the Rider for the affected booking will be refunded through the applicable payment method. Where no payment has been made, no refund will be due.
            </p>
            <p>
              The method and timing of any refund will depend on the payment method used and the applicable payment-processing procedures. GetDrives may additionally provide GetDrives credit or other appropriate compensation where considered appropriate.
            </p>
            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">12. Account and Booking Restrictions</h2>
            <p>
              GetDrives may take reasonable account-level action against Riders or Drivers who repeatedly cancel bookings, fail to show up, or otherwise misuse the cancellation system. Possible actions include: warning the account holder; reducing account reliability or rating; temporarily restricting Interstate bookings; temporarily restricting access to certain booking features; requiring additional verification; and suspending an account in cases of serious or repeated abuse.
            </p>
            <p>
              Where reasonably practicable, the affected user will be notified of the action and the reason for it. A Rider or Driver may appeal an account restriction or suspension by contacting GetDrives Support within 7 days of receiving notice of the decision. GetDrives will review the appeal and may maintain, modify, or reverse the action based on the circumstances and information available.
            </p>
            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">13. Driver Cancellation Thresholds</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Standard Rides: Two (2) Late Driver Cancellations within any 30-day period will result in a 7-day suspension from accepting Standard Rides.</li>
              <li>Interstate Rides: Three (3) Late Driver Cancellations within any 30-day period will result in a 5-day suspension from accepting Interstate Rides.</li>
            </ul>
            <p>
              After the suspension, continued or repeated late cancellations may result in further review or additional restrictions. Where an approved exceptional circumstance applies, GetDrives may exclude the cancellation from the applicable cancellation history after review.
            </p>
            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">14. Booking Confirmation and Acceptance</h2>
            <p>
              By confirming a booking through the GetDrives app, the Rider acknowledges and agrees to the cancellation, waiting time, and No-Show terms applicable to that booking, including any applicable fees displayed in the app at the time of booking.
            </p>
            <p>
              By accepting a booking through the GetDrives app, the Driver acknowledges and agrees to the applicable cancellation, waiting time, and No-Show requirements under this Policy.
            </p>
            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">15. Cancellation Policy Summary</h2>
            <h3 className="mt-6 mb-3 text-lg font-semibold text-white">Standard Ride</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Driver waiting period: 5 minutes</li>
              <li>After the waiting period, the ride may be marked as a Rider No-Show</li>
              <li>Any applicable cancellation or No-Show fee is displayed in the GetDrives app</li>
              <li>Cash/bank-transfer fees may not be automatically deductible but remain payable where applicable</li>
              <li>Two (2) Late Driver Cancellations within 30 days result in a 7-day suspension from accepting Standard Rides</li>
            </ul>
            <h3 className="mt-6 mb-3 text-lg font-semibold text-white">Interstate Ride</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>6 hours or more before the trip: free cancellation</li>
              <li>Less than 6 hours / 1 hour or less: applicable fees displayed in the app</li>
              <li>Rider No-Show: applicable fee displayed in the app</li>
              <li>Interstate waiting time: 20 minutes</li>
              <li>Three (3) Late Driver Cancellations within 30 days result in a 5-day suspension from accepting Interstate Rides</li>
              <li>Qualifying Driver No-Show: any amount actually paid by the Rider is refundable through the applicable payment method</li>
            </ul>
            <h2 className="mt-10 mb-4 text-xl font-bold uppercase tracking-wide text-white">16. Policy Enforcement and Updates</h2>
            <p>
              By booking or accepting a ride through GetDrives, Riders and Drivers agree to comply with this Cancellation, Waiting Time &amp; No-Show Policy.
            </p>
            <p>
              GetDrives reserves the right to review individual cases and make reasonable adjustments where circumstances warrant. GetDrives may update this Policy from time to time. Material changes will be communicated through the GetDrives platform or other appropriate channels.
            </p>
            <p>
              Related documents: <Link to="/terms" className="text-brand-orange hover:underline">Rider Terms of Service</Link> · <Link to="/faq" className="text-brand-orange hover:underline">FAQ</Link>
            </p>

          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
