import RegulationCard from "../component/RegulationCard"
import "../css/RegulationPage.css"
function RegulationPage() {
    const regulations = [
        {
            id: 1,
            title: "Facility Access",
            description: "OCBC is a court rental facility only. Non-paying spectators are not allowed."
        },
        {
            id: 2,
            title: "Court Booking & Guest Policy",
            description: "Courts must be reserved in advance. $40/hour per court. Up to 6 players free; $15 flat fee for 7th or 8th guest."
        },
        {
            id: 3,
            title: "Booking Platform",
            description: "Reservations are recommended at https://ocbadminton.skedda.com with a minimum of 1 hour per booking."
        },
        {
            id: 4,
            title: "Weekend Booking Times",
            description: "Bookings must start and end on the hour. Bookings at :30 or 1.5h/2.5h durations are not allowed."
        },
        {
            id: 5,
            title: "Drop-in Rentals",
            description: "Allowed if courts are available. First-come, first-serve at the pro shop."
        },
        {
            id: 6,
            title: "Player Registration",
            description: "Up to 8 players per court. Registered names must stay the same during reservation."
        },
        {
            id: 7,
            title: "Court Time Limits",
            description: "Players must leave after their reserved time and stay only on their assigned court."
        },
        {
            id: 8,
            title: "Cancellation Policy",
            description: "Cancellations under 48h will be charged as no-shows. Email requests only; Skedda changes not allowed."
        },
        {
            id: 9,
            title: "Health Protocol",
            description: "Anyone showing respiratory illness symptoms may be denied entry."
        },
        {
            id: 10,
            title: "Arrival Time",
            description: "Arrive no earlier than 5 minutes before reservation and leave promptly after."
        },
        {
            id: 11,
            title: "Rental Equipment",
            description: "Rackets and shoes are available for $6 each and sanitized after each use."
        },
        {
            id: 12,
            title: "Private Lessons",
            description: "$110/hour with coaches. Full payment is required for cancellations within 48h unless waived by OCBC."
        },
        {
            id: 13,
            title: "Unauthorized Coaching",
            description: "Only OCBC staff may conduct professional coaching. All others are prohibited unless family."
        },
        {
            id: 14,
            title: "Check-in Requirements",
            description: "All guests must check in at the front desk with valid ID."
        },
        {
            id: 15,
            title: "Liability Waiver",
            description: "A signed waiver is required to enter past the front desk."
        },
        {
            id: 16,
            title: "Guest Limitations",
            description: "OCBC may limit number of players or guests at any time."
        },
        {
            id: 17,
            title: "Shuttlecock Policy",
            description: "Only Yonex or pro shop shuttlecocks allowed. Violators will be removed without refund."
        },
        {
            id: 18,
            title: "Food & Drink Policy",
            description: "Only water allowed inside. Food/drinks not allowed on hardwood floor. Violators will be asked to leave."
        },
        {
            id: 19,
            title: "Gym Equipment Use",
            description: "Players may not use weight/running equipment without written permission from OCBC."
        },
        {
            id: 20,
            title: "Warranty Policy",
            description: "Yonex rackets have a 14-day warranty with receipt. Other items are sold as-is."
        },
        {
            id: 21,
            title: "Prohibited Behavior",
            description: "No smoking, vaping, gum, animals or weapons. Offenders will be removed and may be banned."
        },
        {
            id: 22,
            title: "Children Policy",
            description: "Children must be supervised in the parking lot."
        },
        {
            id: 23,
            title: "Lost or Stolen Items",
            description: "OCBC is not responsible for lost or stolen belongings."
        },
        {
            id: 24,
            title: "Right to Refuse Service",
            description: "OCBC reserves the right to refuse service to anyone."
        },
        {
            id: 25,
            title: "Conduct",
            description: "Players must follow staff guidance, behave respectfully, and not interfere with club operations."
        },
        {
            id: 26,
            title: "Dress Code",
            description: "Proper attire is required. No profane messages. Non-marking athletic shoes only."
        },
        {
            id: 27,
            title: "Health Responsibility",
            description: "Players must consult a physician before use. OCBC reserves the right to deny access for safety concerns."
        },
        {
            id: 28,
            title: "Waiver & Risk Acceptance",
            description: "All activity is at the player’s own risk. A liability waiver is required before using the facility."
        },
        {
            id: 29,
            title: "Locker Policy",
            description: "Lockers available for rent. No perishables. OCBC not responsible for theft or damage."
        },
        {
            id: 30,
            title: "Locker Room Rules",
            description: "No hair dyeing, bleaching, perming or glass containers allowed in locker rooms."
        }
    ];

    return (
        <div className="regulation">
            <div className="regulation-title">
                <h1>Regulations and Rules</h1>
                <p>Here you can find the regulations of the badminton court.</p>
            </div>
            <div className="regulation-list">
                {regulations.map((regulation) => <RegulationCard key={regulation.id} regulation={regulation} />)}
            </div>
        </div>
    )
}

export default RegulationPage