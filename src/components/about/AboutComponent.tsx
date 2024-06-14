import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaPuzzlePiece,
  FaUsers,
} from "react-icons/fa";
import { GiSpellBook, GiSpookyHouse } from "react-icons/gi";

const AboutComponent = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            La Maison Horrifique
          </h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400">
            Des sessions d'escape game hors du commun, des énigmes à résoudre en
            équipe, des décors immersifs et des scénarios palpitants. Venez
            vivre une expérience unique dans notre escape game à Paris.
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <GiSpookyHouse className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
              Décors immersifs
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Plongez dans un univers réaliste et saisissant grâce à des décors
              minutieusement conçus pour offrir une expérience visuelle
              inoubliable.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <GiSpellBook className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
              Scénarios palpitants
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Chaque session propose des histoires captivantes et intrigantes
              qui vous tiendront en haleine jusqu'à la fin.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <FaPuzzlePiece className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
              Énigmes stimulantes
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Relevez des défis intellectuels variés et exigeants, conçus pour
              tester votre logique, votre esprit d’équipe et votre créativité.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <FaUsers className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
              Expérience unique en équipe
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Renforcez la cohésion de votre groupe en collaborant étroitement
              pour résoudre les énigmes et progresser dans le jeu.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <FaMapMarkerAlt className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
              Localisation pratique
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Située en plein cœur de Paris, La Maison Horrifique est facilement
              accessible, ce qui en fait une activité idéale pour une sortie
              entre amis ou collègues.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <FaCalendarAlt className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
              Sessions sur mesure
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Des options personnalisées sont disponibles pour répondre aux
              besoins spécifiques des groupes, que ce soit pour des
              anniversaires, des événements d'entreprise ou des occasions
              spéciales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
