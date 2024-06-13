import ContactComponent from "../components/contact/ContactComponent";
import QuickSessionPreviewComponent from "../components/sessions/QuickSessionPreviewComponent";
import TestimonialComponent from "../components/TestimonialComponent";
import AboutComponent from "../components/about/AboutComponent";

const Home = () => {
  return (
    <>
      <QuickSessionPreviewComponent />
      <TestimonialComponent comment="La Maison Horrifique offre une expérience immersive incroyable avec des décors réalistes et des scénarios palpitants qui captivent dès le début. Les énigmes stimulantes et la collaboration en équipe renforcent la cohésion tout en offrant des défis intellectuels passionnants." author="John Doe" authorRole="Client de La Maison Horrifique" />
      <AboutComponent />
      <TestimonialComponent comment="J'ai adoré mon expérience à La Maison Horrifique. Les décors sont incroyables et les énigmes sont vraiment stimulantes. C'était une expérience unique et palpitante que je recommande vivement à tous les amateurs d'escape game." author="Jane Smith" authorRole="Client de La Maison Horrifique" />
      <ContactComponent />
    </>
  );
};

export default Home;
