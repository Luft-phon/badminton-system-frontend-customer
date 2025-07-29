import { Element } from 'react-scroll';
import '../../css/landingPage.css';
import { FaArrowAltCircleRight, FaClock, FaEnvelope, FaMapMarkedAlt, FaMapMarkerAlt, FaPhoneAlt, FaShower, FaUserFriends, FaUsers } from 'react-icons/fa';
import { Fade } from "react-awesome-reveal";
import AboutCard from '../../component/member/landing/AboutCard';
import ContactForm from '../../component/member/landing/ContactForm';
import ContactItem from '../../component/member/landing/ContactItem';
import LessonCard from '../../component/member/landing/LessonCard';
function LandingPage() {

    const cards = [
        {
            icon: <FaMapMarkedAlt size={32} />,
            title: "Tournament-Standard Courts",
            content: "Our courts are built to official specifications, featuring non-slip surfaces and competition-grade lighting systems."
        },
        {
            icon: <FaClock size={32} />,
            title: "Flexible Court Booking",
            content: "Easily book online, choosing times that fit your personal schedule."
        },
        {
            icon: <FaUsers size={32} />,
            title: "Inclusive for All",
            content: "From beginners to professional athletes, everyone is supported."
        },
        {
            icon: <FaShower size={32} />,
            title: "Full Amenities",
            content: "Changing rooms, rest areas, and drinking water... all fully equipped and clean."
        }
    ];

    const lessons = [
        { title: "Beginner's Course", content: "Learn the basics of badminton, including rules, techniques, and basic strategies.", timeIcon: <FaClock color="var(--highlight)" />, time: "1 hour", price: "$20", people: "1-2 people", peopleIcon: <FaUserFriends color="var(--highlight)" /> },
        { title: "Intermediate Course", content: "Improve your skills with advanced techniques and strategies.", timeIcon: <FaClock color="var(--highlight)" />, time: "1.5 hours", price: "$30", people: "1-2 people", peopleIcon: <FaUserFriends color="var(--highlight)" /> },
        { title: "Advanced Course", content: "Master your skills with expert coaching and competitive play.", timeIcon: <FaClock color="var(--highlight)" />, time: "2 hours", price: "$40", people: "1-2 people", peopleIcon: <FaUserFriends color="var(--highlight)" /> },
    ]
    const contactData = [
        {
            icon: <FaMapMarkerAlt color="var(--highlight)" size={20} />,
            label: "Address",
            value: "123 Edita Ave, Westminster",
        },
        {
            icon: <FaPhoneAlt color="var(--highlight)" size={20} />,
            label: "Hotline",
            value: "(028) 3456-7890",
        },
        {
            icon: <FaEnvelope color="var(--highlight)" size={20} />,
            label: "Email",
            value: "info@badminton.com",
        },
        {
            icon: <FaClock color="var(--highlight)" size={20} />,
            label: "Opening Hour",
            value: "Monday - Sunday: 11:00 - 22:00",
        },
    ];
    return (
        <div>
            <Element name="Home">
                <section id='welcome' >
                    <img src="/photos/cover.jpg" alt="" className='welcome-photo' />
                    <div className="content">
                        <Fade direction="down" duration={1000}>
                            <h1>Westminster Badminton Court</h1>
                            <h3>Revervable everywhere, everytime by a click</h3>
                        </Fade>
                        <Fade direction='up' duration={1000}>
                            <button className='landing-btn'>Book a court now</button>
                        </Fade>
                    </div>
                </section>
            </Element>
            <Element name="About">
                <section id='about'>
                    <Fade direction="up" duration={1000}>
                        <h1 className="about-title">Why do you choose our court</h1>
                        <p className="about-subtitle">We pride ourselves on our commitment to quality, tradition and customer satisfaction. These are what make us special..</p>
                    </Fade>
                    <Fade duration={1000}>
                        <div className="cards"> {cards.map((card) =>
                            (<AboutCard card={card} />)
                        )}</div>
                    </Fade>
                    <div id='event'>
                        <div className="event-content">
                            <div className="event-content-title"><h2>Special Events</h2></div>
                            <p>Our restaurant is the perfect venue for any special occasion. From birthdays, anniversaries to corporate meetings, we offer a full-service event planning service with custom menus and private spaces.</p>
                            <Fade cascade damping={0.2} direction='left'>
                            <ul>
                                <li><FaArrowAltCircleRight color="var(--highlight)" size={20} /> Practice and compete with friends</li>
                                <li><FaArrowAltCircleRight color="var(--highlight)" size={20} /> Family & Colleague Socializing</li>
                                <li><FaArrowAltCircleRight color="var(--highlight)" size={20} /> School and corporate sports events</li>
                            </ul>
                            </Fade>
                            <button className='landing-btn'>Book a court now</button>
                        </div>
                        <div className="event-image">
                            <img src="/photos/event.jpg" alt="" />
                        </div>
                    </div>
                </section>
            </Element>
            <Element name="Lesson">
                <section id='lesson'>
                    <h1 className="lesson-title">Private Lessons</h1>
                    <p className="lesson-subtitle">We pride ourselves on our commitment to quality, tradition and customer satisfaction. These are what make us special..</p>
                    <Fade duration={1500}>
                    <div className="cards"> {lessons.map((lesson) =>
                        (<LessonCard info={lesson} />)
                    )}</div>
                    </Fade>
                </section>
            </Element>
            <Element name="Contact">
                <section id="contact" >
                    <h1 className="contact-title">Contact to us</h1>
                    <p className="contact-subtitle">We pride ourselves on our commitment to quality, tradition and customer satisfaction. These are what make us special..</p>
                    <div className="contact-content">
                        <ContactForm />
                        <div className="contact-section">
                            {contactData.map((item, index) => (
                                <ContactItem key={index} item={item} />
                            ))}
                        </div>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.0045892691064!2d-118.03270512336516!3d33.76054727326833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd2f5ab74b14b9%3A0xc9b96d77bc9d8812!2sEdita%20Ave%2C%20Westminster%2C%20CA%2092683!5e0!3m2!1sen!2sus!4v1751524181087!5m2!1sen!2sus" width="70%" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                </section>
            </Element>
        </div>
    )
}

export default LandingPage