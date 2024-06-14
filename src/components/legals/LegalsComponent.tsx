import React, { useState } from "react";
import LegalsSectionComponent from "./LegalsSectionComponent";
import { FaSun, FaMoon } from "react-icons/fa";

const LegalsComponent = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <section className="pt-8 pb-8">
      <div className="max-w-4xl mx-auto p-6 bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Mentions Légales</h1>
        </div>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            1. Identification de la Société
          </h2>
          <p>Nom de la société : La Maison Horrifique</p>
          <p>Forme juridique : Société à Responsabilité Limitée (SARL)</p>
          <p>Adresse du siège social : 242 Rue du Faubourg Goofy</p>
          <p>Téléphone : 09 48 35 67 89</p>
          <p>
            Email :
            <a
              href="mailto:contact@maison-horrifique.com"
              className="text-blue-500 dark:text-blue-300"
            >
              contact@maison-horrifique.com
            </a>
          </p>
          <p>Numéro SIRET : 551 178 639 00132</p>
          <p>Directeur de la publication : Kyllian Mbappé</p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            2. Hébergement du Site
          </h2>
          <p>Nom de l'hébergeur : Kyllian Mbappé & Co.</p>
          <p>
            Adresse de l'hébergeur : 4 allée des apagnans, Goofy-ville 90434,
            Territoire de Belfort
          </p>
          <p>Téléphone : Unknown</p>
        </section>

        <LegalsSectionComponent
          title="3. Propriété Intellectuelle"
          content="L'ensemble des éléments présents sur le site (textes, graphismes, logos, images, etc.) est la propriété de La Maison Horrifique ou de ses partenaires et est protégé par les lois relatives à la propriété intellectuelle. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de La Maison Horrifique."
        />

        <LegalsSectionComponent
          title="4. Données Personnelles"
          content="Les informations recueillies sur le site sont destinées à La Maison Horrifique et font l'objet d'un traitement informatique destiné à la gestion des réservations et à l'amélioration de l'expérience utilisateur. Conformément à la loi 'Informatique et Libertés' du 6 janvier 1978 modifiée, vous bénéficiez d'un droit d'accès et de rectification aux informations qui vous concernent, que vous pouvez exercer en vous adressant à contact@maison-horrifique.com."
        />

        <LegalsSectionComponent
          title="5. Cookies"
          content="Le site de La Maison Horrifique utilise des cookies pour améliorer la navigation et réaliser des statistiques de visites. Vous pouvez configurer votre navigateur pour refuser les cookies, mais certaines fonctionnalités du site pourraient ne plus être accessibles."
        />

        <LegalsSectionComponent
          title="6. Limitation de Responsabilité"
          content="La Maison Horrifique s'efforce de fournir sur le site des informations aussi précises que possible. Toutefois, elle ne pourra être tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations."
        />

        <LegalsSectionComponent
          title="7. Liens Hypertextes"
          content="Le site de La Maison Horrifique peut contenir des liens hypertextes vers d'autres sites, mis en place avec l'autorisation de La Maison Horrifique. Cependant, La Maison Horrifique n'a pas la possibilité de vérifier le contenu des sites ainsi visités et n'assumera en conséquence aucune responsabilité de ce fait."
        />

        <LegalsSectionComponent
          title="8. Droit Applicable et Attribution de Juridiction"
          content="Tout litige en relation avec l'utilisation du site www.lamaisonhorrifique.fr est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents de Goofy-Ville."
        />

        <LegalsSectionComponent
          title="Contact"
          content="Pour toute question relative aux mentions légales du site, vous pouvez nous contacter à contact@maison-horrifique.com ou par téléphone au 09 48 35 67 89."
        />
      </div>
    </section>
  );
};

export default LegalsComponent;
