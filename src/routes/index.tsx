import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";


import heroProducts from "@/assets/hero-products.jpg";
import athlete1 from "@/assets/athlete-1.jpg";
import athlete2 from "@/assets/athlete-2.jpg";
import athlete3 from "@/assets/athlete-3.jpg";
import lab from "@/assets/lab.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "OXY PHARMA — Sports Pharmacology & Peptides" },
      {
        name: "description",
        content:
          "OXY PHARMA — sports pharmacology and peptides with laboratory quality control and athlete support.",
      },
      { property: "og:title", content: "OXY PHARMA — Sports Pharmacology" },
      {
        property: "og:description",
        content:
          "Product catalog, laboratory quality protocols and the team behind OXY PHARMA.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const LANGS = ["RUS", "ENG", "DE", "FR"] as const;
type Language = (typeof LANGS)[number];


const translations = {
  RUS: {
    heroEyebrow: 'OXY PHARMA',
    heroTitle: 'Спортивная фармакология',
    heroDescription: 'Надёжный производитель препаратов для спортсменов: собственная лаборатория, проверка каждой партии и поддержка на всём курсе.',
    years: '12+',
    positions: '140+',
    clients: '10K+',
    productionLabel: 'Производство',
    assortmentLabel: 'Ассортимент',
    anonymityLabel: 'Анонимность',
    supportLabel: 'Поддержка',
    newsTitle: 'Новости',
    advantagesTitle: 'Почему OXY',
    readMore: 'Подробнее',
    request: 'Оставить заявку',
    send: 'Отправить',
    phone: 'Телефон',
    telegram: 'Telegram',
    email: 'Email',
    copyright: '© 2026 OXY PHARMA. Все права защищены.',
    close: "Закрыть", welcome: "Добро пожаловать",
    welcomeText: "OXY PHARMA — спортивная фармакология с лабораторным контролем качества. Выберите язык или сразу переходите в каталог.",
    news: "Новости", more: "Подробнее", view: "Смотреть", open: "Открыть", goToSite: "Перейти на сайт",
    catalog: "Каталог", quality: "Качество", team: "Команда", questions: "Вопросы", contact: "Связаться",
    sportsPharma: "Спортивная фармакология",
    heroText: "Надёжный производитель препаратов для спортсменов: собственная лаборатория, проверка каждой партии и поддержка на всём курсе.",
    consultation: "Консультация", yearsMarket: "лет на рынке", catalogPositions: "позиций в каталоге", happyClients: "довольных клиентов",
    production: "Производство", productionText: "Собственные мощности и контроль каждой партии на всех этапах — уже более 12 лет.",
    assortment: "Ассортимент", assortmentText: "Свыше 140 позиций: от базовых курсов до узкоспециализированных пептидов.",
    anonymity: "Анонимность", anonymityText: "Дискретная упаковка, защищённая логистика и никакого хранения лишних данных.",
    support: "Поддержка", supportText: "Консультация специалиста и подбор схемы приёма в течение 15 минут, 24/7.",
    fullAssortment: "Полный ассортимент доступен после консультации с менеджером.",
    loading: "Загрузка товаров...", noProducts: "Товары пока не добавлены.", addToCart: "В корзину", outOfStock: "Нет в наличии",
    qualityTitle: "Контроль качества",
    qualityText: "Каждая партия проходит независимую хроматографию и микробиологический контроль. Протоколы публикуются открыто — сверяйте номер партии на упаковке.",
    qualityPoints: ["Сырьё только от сертифицированных поставщиков","ВЭЖХ-анализ действующего вещества по каждой партии","Уникальный код проверки подлинности на упаковке","Хранение и логистика с контролем температуры"],
    teamTitle: "Нас выбирают лучшие", faqTitle: "Частые вопросы",
    faq: [
      ["Как проверить оригинальность продукции?","На каждой упаковке есть уникальный код. Введите его в боте поддержки — система покажет дату выпуска, номер партии и протокол лабораторной проверки."],
      ["Как быстро приходит заказ?","По России — 2–5 дней, СНГ — 5–9 дней, международная доставка — от 10 дней. Трек-номер приходит в день отправки."],
      ["Можно ли получить консультацию по курсу?","Да. Специалист бесплатно подберёт схему под ваши цели, стаж и результаты анализов. Пишите менеджеру в мессенджер."],
      ["Какие способы оплаты доступны?","Перевод по СБП, банковская карта, криптовалюта. Оплата подтверждается автоматически, заказ уходит в сборку сразу."]
    ],
    courseTitle: "Нужен подбор курса?", courseText: "Оставьте контакт — специалист свяжется в течение 15 минут, задаст несколько вопросов о целях и стаже и предложит схему под вашу задачу.",
    namePlaceholder: "Ваше имя", contactPlaceholder: "Телефон или ник в Telegram", goalPlaceholder: "Цель и опыт тренировок",
    sendRequest: "Отправить заявку", submitAlert: "Заявка отправлена! Менеджер свяжется с вами в ближайшее время.",
    cart: "Корзина", cartEmpty: "Корзина пуста. Добавьте товары из каталога.", total: "Итого", checkout: "Оформить заказ", clearCart: "Очистить корзину",
    orderAlert: "Заказ оформлен! Менеджер свяжется с вами для подтверждения.", orderNamePrompt: "Введите ваше имя:", orderContactPrompt: "Введите телефон или Telegram:", orderError: "Не удалось оформить заказ. Попробуйте ещё раз.", decrease: "Уменьшить", increase: "Увеличить", top: "Наверх",
    newsItems: [
      { tag: "Новости", title: "Розыгрыш экипировки среди клиентов сентября", cta: "Подробнее" },
      { tag: "Продукт", title: "Новая линейка OXY PEPTIDES уже в каталоге", cta: "Смотреть" },
      { tag: "Качество", title: "Опубликованы протоколы лабораторных проверок партии №418", cta: "Открыть" },
    ],
    athleteAchievements: [
      ["Топ-3 Siberian Power Show 2025", "Чемпион России по классическому бодибилдингу", "Мастер спорта международного класса"],
      ["Чемпион мира по стритлифтингу до 110 кг", "Рекордсмен России в жиме лёжа"],
      ["IFBB PRO Wellness", "Победительница Кубка Европы 2025", "Финалистка Olympia Amateur"],
    ],
    contactTitle: "Нужен подбор курса?",
    contactText: "Оставьте контакт — специалист свяжется в течение 15 минут, задаст несколько вопросов о целях и опыте и обсудит ваш запрос.",
    contactTelegram: "Telegram",
    contactWhatsapp: "WhatsApp",
    contactEmail: "Почта",
    heroImageAlt: "Линейка препаратов OXY PHARMA",
    labImageAlt: "Производственная лаборатория OXY PHARMA",
    closeCart: "Закрыть корзину",
    cartButton: "Открыть корзину",
    metaTitle: "OXY PHARMA — спортивная фармакология и пептиды",
    footer: "© 2026 OXY PHARMA. Продукция предназначена для профессионального спорта."
  },
  ENG: {
    heroEyebrow: 'OXY PHARMA',
    heroTitle: 'Sports pharmacology',
    heroDescription: 'A reliable manufacturer for athletes: our own laboratory, batch testing and support throughout the course.',
    years: '12+',
    positions: '140+',
    clients: '10K+',
    productionLabel: 'Production',
    assortmentLabel: 'Assortment',
    anonymityLabel: 'Anonymity',
    supportLabel: 'Support',
    newsTitle: 'News',
    advantagesTitle: 'Why OXY',
    readMore: 'Learn more',
    request: 'Send request',
    send: 'Send',
    phone: 'Phone',
    telegram: 'Telegram',
    email: 'Email',
    copyright: '© 2026 OXY PHARMA. All rights reserved.',
    close:"Close", welcome:"Welcome", welcomeText:"OXY PHARMA — sports pharmacology with laboratory quality control. Choose a language or go straight to the catalog.",
    news:"News", more:"Learn more", view:"View", open:"Open", goToSite:"Go to website", catalog:"Catalog", quality:"Quality", team:"Team", questions:"FAQ", contact:"Contact",
    sportsPharma:"Sports pharmacology", heroText:"A reliable manufacturer of products for athletes: our own laboratory, batch testing and support throughout the course.",
    consultation:"Consultation", yearsMarket:"years on the market", catalogPositions:"catalog positions", happyClients:"happy clients",
    production:"Production", productionText:"Our own facilities and batch control at every stage — for more than 12 years.",
    assortment:"Assortment", assortmentText:"Over 140 products: from basic courses to highly specialized peptides.",
    anonymity:"Anonymity", anonymityText:"Discreet packaging, protected logistics and no storage of unnecessary data.",
    support:"Support", supportText:"Specialist consultation and intake-plan guidance within 15 minutes, 24/7.",
    fullAssortment:"The full assortment is available after consultation with a manager.", loading:"Loading products...", noProducts:"No products yet.", addToCart:"Add to cart", outOfStock:"Out of stock",
    qualityTitle:"Quality control", qualityText:"Every batch undergoes independent chromatography and microbiological testing. Protocols are published openly — verify the batch number on the package.",
    qualityPoints:["Raw materials only from certified suppliers","HPLC analysis of the active substance for every batch","Unique authenticity verification code on the package","Temperature-controlled storage and logistics"],
    teamTitle:"Chosen by the best", faqTitle:"Frequently asked questions",
    faq:[
      ["How can I verify product authenticity?","Each package has a unique code. Enter it in the support bot — the system will show the production date, batch number and laboratory test protocol."],
      ["How quickly does an order arrive?","Russia — 2–5 days, CIS — 5–9 days, international delivery — from 10 days. The tracking number is sent on the shipping day."],
      ["Can I get a consultation about a course?","Yes. A specialist can discuss your goals, experience and test results. Contact the manager via messenger."],
      ["What payment methods are available?","Bank transfer, bank card and cryptocurrency. Payment is confirmed automatically and the order moves to processing."]
    ],
    courseTitle:"Need a course consultation?", courseText:"Leave your contact details — a specialist will get in touch within 15 minutes, ask a few questions about your goals and experience, and discuss your request.",
    namePlaceholder:"Your name", contactPlaceholder:"Phone or Telegram username", goalPlaceholder:"Goals and training experience", sendRequest:"Send request", submitAlert:"Request sent! A manager will contact you shortly.",
    cart:"Cart", cartEmpty:"Your cart is empty. Add products from the catalog.", total:"Total", checkout:"Place order", clearCart:"Clear cart", orderAlert:"Order placed! A manager will contact you for confirmation.", orderNamePrompt:"Enter your name:", orderContactPrompt:"Enter your phone or Telegram:", orderError:"Could not place the order. Please try again.", decrease:"Decrease", increase:"Increase", top:"Back to top",
    newsItems: [
      { tag: "News", title: "September equipment giveaway for clients", cta: "Learn more" },
      { tag: "Product", title: "The new OXY PEPTIDES line is now in the catalog", cta: "View" },
      { tag: "Quality", title: "Laboratory test protocols for batch #418 published", cta: "Open" },
    ],
    athleteAchievements: [
      ["Top 3 at Siberian Power Show 2025", "Russian Classic Bodybuilding Champion", "International Master of Sport"],
      ["World Streetlifting Champion up to 110 kg", "Russian Bench Press Record Holder"],
      ["IFBB PRO Wellness", "European Cup 2025 Winner", "Olympia Amateur Finalist"],
    ],
    contactTitle: "Need help choosing?",
    contactText: "Leave your contact details — a specialist will get in touch within 15 minutes, ask a few questions about your goals and experience, and discuss your request.",
    contactTelegram: "Telegram",
    contactWhatsapp: "WhatsApp",
    contactEmail: "Email",
    heroImageAlt: "OXY PHARMA product line",
    labImageAlt: "OXY PHARMA production laboratory",
    closeCart: "Close cart",
    cartButton: "Open cart",
    metaTitle: "OXY PHARMA — Sports Pharmacology & Peptides",
    footer:"© 2026 OXY PHARMA. Products are intended for professional sports."
  },
  DE: {
    heroEyebrow: 'OXY PHARMA',
    heroTitle: 'Sportpharmakologie',
    heroDescription: 'Zuverlässiger Hersteller für Sportler: eigenes Labor, Prüfung jeder Charge und Unterstützung während des gesamten Kurses.',
    years: '12+',
    positions: '140+',
    clients: '10K+',
    productionLabel: 'Produktion',
    assortmentLabel: 'Sortiment',
    anonymityLabel: 'Anonymität',
    supportLabel: 'Support',
    newsTitle: 'Neuigkeiten',
    advantagesTitle: 'Warum OXY',
    readMore: 'Mehr erfahren',
    request: 'Anfrage senden',
    send: 'Senden',
    phone: 'Telefon',
    telegram: 'Telegram',
    email: 'E-Mail',
    copyright: '© 2026 OXY PHARMA. Alle Rechte vorbehalten.',
    close:"Schließen", welcome:"Willkommen", welcomeText:"OXY PHARMA — Sportpharmakologie mit laborbasierter Qualitätskontrolle. Wählen Sie eine Sprache oder gehen Sie direkt zum Katalog.",
    news:"Neuigkeiten", more:"Mehr erfahren", view:"Ansehen", open:"Öffnen", goToSite:"Zur Website", catalog:"Katalog", quality:"Qualität", team:"Team", questions:"Fragen", contact:"Kontakt",
    sportsPharma:"Sportpharmakologie", heroText:"Zuverlässiger Hersteller für Sportler: eigenes Labor, Prüfung jeder Charge und Unterstützung während des gesamten Kurses.",
    consultation:"Beratung", yearsMarket:"Jahre am Markt", catalogPositions:"Produkte im Katalog", happyClients:"zufriedene Kunden",
    production:"Produktion", productionText:"Eigene Produktionskapazitäten und Kontrolle jeder Charge in allen Phasen — seit mehr als 12 Jahren.",
    assortment:"Sortiment", assortmentText:"Über 140 Produkte: von grundlegenden Kursen bis hin zu spezialisierten Peptiden.",
    anonymity:"Anonymität", anonymityText:"Diskrete Verpackung, geschützte Logistik und keine Speicherung unnötiger Daten.",
    support:"Support", supportText:"Fachberatung und Unterstützung bei der Einnahmeplanung innerhalb von 15 Minuten, 24/7.",
    fullAssortment:"Das vollständige Sortiment ist nach einer Beratung mit einem Manager verfügbar.", loading:"Produkte werden geladen...", noProducts:"Noch keine Produkte vorhanden.", addToCart:"In den Warenkorb", outOfStock:"Nicht verfügbar",
    qualityTitle:"Qualitätskontrolle", qualityText:"Jede Charge wird einer unabhängigen Chromatografie und mikrobiologischen Kontrolle unterzogen. Die Protokolle werden offen veröffentlicht — prüfen Sie die Chargennummer auf der Verpackung.",
    qualityPoints:["Rohstoffe ausschließlich von zertifizierten Lieferanten","HPLC-Analyse des Wirkstoffs für jede Charge","Einzigartiger Code zur Echtheitsprüfung auf der Verpackung","Temperaturkontrollierte Lagerung und Logistik"],
    teamTitle:"Von den Besten gewählt", faqTitle:"Häufige Fragen",
    faq:[
      ["Wie kann ich die Echtheit des Produkts prüfen?","Jede Verpackung enthält einen einzigartigen Code. Geben Sie ihn im Support-Bot ein — das System zeigt Herstellungsdatum, Chargennummer und Laborprotokoll."],
      ["Wie schnell kommt die Bestellung an?","Russland — 2–5 Tage, GUS — 5–9 Tage, international — ab 10 Tagen. Die Sendungsnummer wird am Versandtag gesendet."],
      ["Kann ich eine Beratung zu einem Kurs erhalten?","Ja. Ein Spezialist kann Ihre Ziele, Erfahrung und Testergebnisse besprechen. Kontaktieren Sie den Manager über einen Messenger."],
      ["Welche Zahlungsmethoden sind verfügbar?","Banküberweisung, Bankkarte und Kryptowährung. Die Zahlung wird automatisch bestätigt und die Bestellung geht direkt in die Bearbeitung."]
    ],
    courseTitle:"Brauchen Sie eine Kursberatung?", courseText:"Hinterlassen Sie Ihre Kontaktdaten — ein Spezialist meldet sich innerhalb von 15 Minuten, stellt einige Fragen zu Ihren Zielen und Ihrer Erfahrung und bespricht Ihre Anfrage.",
    namePlaceholder:"Ihr Name", contactPlaceholder:"Telefon oder Telegram-Benutzername", goalPlaceholder:"Ziele und Trainingserfahrung", sendRequest:"Anfrage senden", submitAlert:"Anfrage gesendet! Ein Manager wird sich in Kürze bei Ihnen melden.",
    cart:"Warenkorb", cartEmpty:"Der Warenkorb ist leer. Fügen Sie Produkte aus dem Katalog hinzu.", total:"Gesamt", checkout:"Bestellung aufgeben", clearCart:"Warenkorb leeren", orderAlert:"Bestellung aufgegeben! Ein Manager wird Sie zur Bestätigung kontaktieren.", orderNamePrompt:"Geben Sie Ihren Namen ein:", orderContactPrompt:"Telefon oder Telegram eingeben:", orderError:"Die Bestellung konnte nicht aufgegeben werden. Bitte versuchen Sie es erneut.", decrease:"Verringern", increase:"Erhöhen", top:"Nach oben",
    newsItems: [
      { tag: "Neuigkeiten", title: "September-Verlosung von Ausrüstung für Kunden", cta: "Mehr erfahren" },
      { tag: "Produkt", title: "Die neue OXY PEPTIDES-Linie ist jetzt im Katalog", cta: "Ansehen" },
      { tag: "Qualität", title: "Laborprotokolle für Charge Nr. 418 veröffentlicht", cta: "Öffnen" },
    ],
    athleteAchievements: [
      ["Top 3 Siberian Power Show 2025", "Russischer Meister im klassischen Bodybuilding", "Internationaler Meister des Sports"],
      ["Weltmeister im Streetlifting bis 110 kg", "Russischer Rekordhalter im Bankdrücken"],
      ["IFBB PRO Wellness", "Siegerin des Europacups 2025", "Finalistin Olympia Amateur"],
    ],
    contactTitle: "Hilfe bei der Auswahl?",
    contactText: "Hinterlassen Sie Ihre Kontaktdaten — ein Spezialist meldet sich innerhalb von 15 Minuten, stellt einige Fragen zu Ihren Zielen und Ihrer Erfahrung und bespricht Ihre Anfrage.",
    contactTelegram: "Telegram",
    contactWhatsapp: "WhatsApp",
    contactEmail: "E-Mail",
    heroImageAlt: "OXY PHARMA Produktlinie",
    labImageAlt: "Produktionslabor von OXY PHARMA",
    closeCart: "Warenkorb schließen",
    cartButton: "Warenkorb öffnen",
    metaTitle: "OXY PHARMA — Sportpharmakologie & Peptide",
    footer:"© 2026 OXY PHARMA. Produkte sind für den professionellen Sport bestimmt."
  },
  FR: {
    heroEyebrow: 'OXY PHARMA',
    heroTitle: 'Pharmacologie sportive',
    heroDescription: 'Fabricant fiable pour les sportifs : laboratoire interne, contrôle de chaque lot et accompagnement tout au long du parcours.',
    years: '12+',
    positions: '140+',
    clients: '10K+',
    productionLabel: 'Production',
    assortmentLabel: 'Assortiment',
    anonymityLabel: 'Anonymat',
    supportLabel: 'Support',
    newsTitle: 'Actualités',
    advantagesTitle: 'Pourquoi OXY',
    readMore: 'En savoir plus',
    request: 'Envoyer la demande',
    send: 'Envoyer',
    phone: 'Téléphone',
    telegram: 'Telegram',
    email: 'E-mail',
    copyright: '© 2026 OXY PHARMA. Tous droits réservés.',
    close:"Fermer", welcome:"Bienvenue", welcomeText:"OXY PHARMA — pharmacologie sportive avec contrôle qualité en laboratoire. Choisissez une langue ou accédez directement au catalogue.",
    news:"Actualités", more:"En savoir plus", view:"Voir", open:"Ouvrir", goToSite:"Accéder au site", catalog:"Catalogue", quality:"Qualité", team:"Équipe", questions:"Questions", contact:"Contact",
    sportsPharma:"Pharmacologie sportive", heroText:"Fabricant fiable de produits pour sportifs : laboratoire interne, contrôle de chaque lot et accompagnement tout au long du parcours.",
    consultation:"Consultation", yearsMarket:"ans sur le marché", catalogPositions:"produits au catalogue", happyClients:"clients satisfaits",
    production:"Production", productionText:"Nos propres capacités de production et contrôle de chaque lot à toutes les étapes — depuis plus de 12 ans.",
    assortment:"Assortiment", assortmentText:"Plus de 140 produits : des cours de base aux peptides hautement spécialisés.",
    anonymity:"Anonymat", anonymityText:"Emballage discret, logistique protégée et aucune conservation de données inutiles.",
    support:"Support", supportText:"Consultation d'un spécialiste et accompagnement sous 15 minutes, 24/7.",
    fullAssortment:"L'assortiment complet est disponible après consultation avec un responsable.", loading:"Chargement des produits...", noProducts:"Aucun produit pour le moment.", addToCart:"Ajouter au panier", outOfStock:"Rupture de stock",
    qualityTitle:"Contrôle qualité", qualityText:"Chaque lot fait l'objet d'une chromatographie indépendante et d'un contrôle microbiologique. Les protocoles sont publiés ouvertement — vérifiez le numéro de lot sur l'emballage.",
    qualityPoints:["Matières premières provenant uniquement de fournisseurs certifiés","Analyse HPLC du principe actif pour chaque lot","Code unique de vérification de l'authenticité sur l'emballage","Stockage et logistique avec contrôle de la température"],
    teamTitle:"Choisi par les meilleurs", faqTitle:"Questions fréquentes",
    faq:[
      ["Comment vérifier l'authenticité d'un produit ?","Chaque emballage possède un code unique. Entrez-le dans le bot d'assistance — le système affichera la date de production, le numéro de lot et le protocole de laboratoire."],
      ["En combien de temps la commande arrive-t-elle ?","Russie — 2 à 5 jours, CEI — 5 à 9 jours, livraison internationale — à partir de 10 jours. Le numéro de suivi est envoyé le jour de l'expédition."],
      ["Puis-je obtenir une consultation sur un cours ?","Oui. Un spécialiste peut discuter de vos objectifs, de votre expérience et de vos résultats d'analyses. Contactez le responsable via messagerie."],
      ["Quels modes de paiement sont disponibles ?","Virement bancaire, carte bancaire et cryptomonnaie. Le paiement est confirmé automatiquement et la commande passe directement au traitement."]
    ],
    courseTitle:"Besoin d'une consultation ?", courseText:"Laissez vos coordonnées — un spécialiste vous contactera sous 15 minutes, posera quelques questions sur vos objectifs et votre expérience et discutera de votre demande.",
    namePlaceholder:"Votre nom", contactPlaceholder:"Téléphone ou identifiant Telegram", goalPlaceholder:"Objectifs et expérience d'entraînement", sendRequest:"Envoyer la demande", submitAlert:"Demande envoyée ! Un responsable vous contactera prochainement.",
    cart:"Panier", cartEmpty:"Votre panier est vide. Ajoutez des produits du catalogue.", total:"Total", checkout:"Passer la commande", clearCart:"Vider le panier", orderAlert:"Commande passée ! Un responsable vous contactera pour confirmation.", orderNamePrompt:"Entrez votre nom :", orderContactPrompt:"Entrez votre téléphone ou Telegram :", orderError:"Impossible de passer la commande. Réessayez.", decrease:"Diminuer", increase:"Augmenter", top:"Haut de page",
    newsItems: [
      { tag: "Actualités", title: "Tirage au sort d'équipements pour les clients en septembre", cta: "En savoir plus" },
      { tag: "Produit", title: "La nouvelle gamme OXY PEPTIDES est maintenant au catalogue", cta: "Voir" },
      { tag: "Qualité", title: "Protocoles de laboratoire de la série n°418 publiés", cta: "Ouvrir" },
    ],
    athleteAchievements: [
      ["Top 3 Siberian Power Show 2025", "Champion de Russie de bodybuilding classique", "Maître international du sport"],
      ["Champion du monde de streetlifting jusqu'à 110 kg", "Détenteur du record de Russie au développé couché"],
      ["IFBB PRO Wellness", "Gagnante de la Coupe d'Europe 2025", "Finaliste Olympia Amateur"],
    ],
    contactTitle: "Besoin d'aide pour choisir ?",
    contactText: "Laissez vos coordonnées — un spécialiste vous contactera sous 15 minutes, posera quelques questions sur vos objectifs et votre expérience et discutera de votre demande.",
    contactTelegram: "Telegram",
    contactWhatsapp: "WhatsApp",
    contactEmail: "E-mail",
    heroImageAlt: "Gamme de produits OXY PHARMA",
    labImageAlt: "Laboratoire de production OXY PHARMA",
    closeCart: "Fermer le panier",
    cartButton: "Ouvrir le panier",
    metaTitle: "OXY PHARMA — Pharmacologie sportive & peptides",
    footer:"© 2026 OXY PHARMA. Produits destinés au sport professionnel."
  }
} as const;

type Translation = (typeof translations)[Language];

const newsImages = [athlete2, heroProducts, lab];


const athletes = [
  {
    img: athlete1,
    name: "Илья Дорохов",
    handle: "@dorokhov.pro",
  },
  {
    img: athlete2,
    name: "Марат Ковалёв",
    handle: "@kovalev.strength",
  },
  {
    img: athlete3,
    name: "Алина Верещагина",
    handle: "@alina.oxy",
  },
];

type Product = {
  id: string;
  name: string;
  cat: string;
  description: string;
  price: number | string;
  image: string | null;
  stock: number;
  is_active: boolean;
};
type CartItem = { id: string; qty: number };

const formatPrice = (v: number, language: Language) => {
  const locale = {
    RUS: "ru-RU",
    ENG: "en-US",
    DE: "de-DE",
    FR: "fr-FR",
  }[language];
  return `${v.toLocaleString(locale)} ₽`;
};


function WelcomeModal({
  language,
  setLanguage,
  onClose,
}: {
  language: Language;
  setLanguage: (language: Language) => void;
  onClose: () => void;
}) {
  const t = translations[language];
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/85 p-4 backdrop-blur-md">
      <div className="surface-panel shadow-card relative max-h-[90vh] w-full max-w-3xl overflow-y-auto p-6 sm:p-10">
        <button
          onClick={onClose}
          aria-label={t.close}
          className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
        >
          ✕
        </button>
        <h2 className="text-3xl uppercase sm:text-4xl">{t.welcome}</h2>
        <p className="mt-3 max-w-lg text-sm text-muted-foreground">{t.welcomeText}</p>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          {LANGS.map((l) => (
            <button
              key={l}
              onClick={() => setLanguage(l)}
              className={`rounded-full border px-4 py-1.5 text-xs font-semibold tracking-widest transition-colors ${
                l === language
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary hover:text-foreground"
              }`}
            >
              {l}
            </button>
          ))}
        </div>

        <h3 className="mt-8 text-xl uppercase">{t.newsTitle}</h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {t.newsItems.map((n, index) => (
            <article key={n.title} className="overflow-hidden rounded-xl bg-surface-2">
              <img
                src={newsImages[index]}
                alt={n.title}
                loading="lazy"
                width={400}
                height={260}
                className="h-32 w-full object-cover"
              />
              <div className="p-4">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                  {n.tag}
                </span>
                <p className="mt-2 text-sm leading-snug">{n.title}</p>
                <button className="mt-3 w-full rounded-full border border-border py-2 text-xs font-semibold transition-colors hover:border-primary">
                  {n.cta}
                </button>
              </div>
            </article>
          ))}
        </div>

        <button
          onClick={onClose}
          className="mt-8 w-full rounded-full bg-primary py-3 text-sm font-bold uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
        >
          {t.goToSite}
        </button>
      </div>
    </div>
  );
}

function CartDrawer({
  items,
  products,
  language,
  onClose,
  setQty,
  clear,
}: {
  items: CartItem[];
  products: Product[];
  language: Language;
  onClose: () => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
}) {
  const t = translations[language];
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [customerContact, setCustomerContact] = useState("");
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [checkoutError, setCheckoutError] = useState("");

  const rows = items
    .map((i) => ({
      ...i,
      product: products.find((p) => p.id === i.id),
    }))
    .filter(
      (r): r is CartItem & { product: Product } => Boolean(r.product),
    );

  const total = rows.reduce(
    (s, r) => s + Number(r.product.price) * r.qty,
    0,
  );

  const openCheckout = () => {
    if (!rows.length) return;
    setCheckoutError("");
    setCheckoutOpen(true);
  };

  const submitOrder = async () => {
    if (!customerName.trim() || !customerContact.trim() || !rows.length) return;

    setCheckoutLoading(true);
    setCheckoutError("");

    try {
      const response = await fetch("http://127.0.0.1:8000/api/orders/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customer_name: customerName.trim(),
          customer_contact: customerContact.trim(),
          items: rows.map((r) => ({
            product_id: r.product.id,
            quantity: r.qty,
          })),
        }),
      });

      let data: any = null;
      try {
        data = await response.json();
      } catch {
        data = null;
      }

      if (!response.ok) {
        const apiError =
          data?.detail ||
          data?.items?.[0] ||
          data?.customer_name?.[0] ||
          data?.customer_contact?.[0];

        throw new Error(apiError || t.orderError);
      }

      alert(t.orderAlert);
      clear();
      setCustomerName("");
      setCustomerContact("");
      setCheckoutOpen(false);
      onClose();
    } catch (error) {
      console.error("Ошибка оформления заказа:", error);
      setCheckoutError(error instanceof Error ? error.message : t.orderError);
    } finally {
      setCheckoutLoading(false);
    }
  };

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex justify-end bg-background/70 backdrop-blur-sm"
        onClick={onClose}
      >
        <aside
          onClick={(e) => e.stopPropagation()}
          className="flex h-full w-full max-w-md flex-col border-l border-border bg-surface"
        >
          <div className="flex items-center justify-between border-b border-border p-5">
            <div>
              <h2 className="font-display text-2xl uppercase">{t.cart}</h2>
              <p className="mt-1 text-xs text-muted-foreground">
                {rows.length} {rows.length === 1 ? "товар" : "товара"}
              </p>
            </div>
            <button
              onClick={onClose}
              aria-label={t.closeCart}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
            >
              ✕
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto p-5">
            {rows.length === 0 && (
              <p className="text-sm text-muted-foreground">{t.cartEmpty}</p>
            )}

            {rows.map((r) => (
              <div
                key={r.id}
                className="surface-panel flex items-center gap-4 p-4"
              >
                <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-background">
                  {r.product.image ? (
                    <img
                      src={r.product.image}
                      alt={r.product.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-[10px] font-bold text-muted-foreground">
                      OXY
                    </div>
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                    {r.product.cat}
                  </span>
                  <p className="mt-1 truncate font-display text-sm font-bold uppercase">
                    {r.product.name}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {formatPrice(Number(r.product.price), language)}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setQty(r.id, r.qty - 1)}
                    aria-label={t.decrease}
                    className="h-8 w-8 rounded-full border border-border transition-colors hover:border-primary"
                  >
                    −
                  </button>
                  <span className="w-6 text-center text-sm font-bold">
                    {r.qty}
                  </span>
                  <button
                    onClick={() => setQty(r.id, r.qty + 1)}
                    aria-label={t.increase}
                    className="h-8 w-8 rounded-full border border-border transition-colors hover:border-primary"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-3 border-t border-border p-5">
            <div className="flex items-center justify-between">
              <span className="text-sm uppercase tracking-widest text-muted-foreground">
                {t.total}
              </span>
              <span className="font-display text-2xl font-black">
                {formatPrice(total, language)}
              </span>
            </div>

            <button
              disabled={rows.length === 0}
              onClick={openCheckout}
              className="w-full rounded-full bg-primary py-3.5 text-sm font-bold uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-40"
            >
              {t.checkout}
            </button>

            {rows.length > 0 && (
              <button
                onClick={clear}
                className="w-full rounded-full border border-border py-2.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
              >
                {t.clearCart}
              </button>
            )}
          </div>
        </aside>
      </div>

      {checkoutOpen && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/75 p-4 backdrop-blur-md"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget && !checkoutLoading) {
              setCheckoutOpen(false);
            }
          }}
        >
          <div className="w-full max-w-3xl overflow-hidden rounded-3xl border border-border bg-surface shadow-2xl">
            <div className="flex items-center justify-between border-b border-border p-6">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-accent">
                  OXY PHARMA
                </span>
                <h2 className="mt-1 font-display text-3xl uppercase">
                  {t.checkout}
                </h2>
              </div>

              <button
                type="button"
                disabled={checkoutLoading}
                onClick={() => setCheckoutOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-foreground disabled:opacity-40"
              >
                ✕
              </button>
            </div>

            <div className="max-h-[75vh] overflow-y-auto p-6">
              <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-sm font-bold uppercase tracking-widest">
                      {t.cart}
                    </h3>
                    <span className="text-xs text-muted-foreground">
                      {rows.reduce((s, r) => s + r.qty, 0)} шт.
                    </span>
                  </div>

                  <div className="space-y-3">
                    {rows.map((r) => (
                      <div
                        key={r.id}
                        className="flex gap-3 rounded-2xl border border-border bg-background/40 p-3"
                      >
                        <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-background">
                          {r.product.image ? (
                            <img
                              src={r.product.image}
                              alt={r.product.name}
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <div className="flex h-full items-center justify-center text-[10px] text-muted-foreground">
                              OXY
                            </div>
                          )}
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-bold uppercase">
                            {r.product.name}
                          </p>
                          <p className="mt-1 text-xs text-muted-foreground">
                            {r.qty} ×{" "}
                            {formatPrice(
                              Number(r.product.price),
                              language,
                            )}
                          </p>
                        </div>

                        <div className="text-right">
                          <p className="text-sm font-bold">
                            {formatPrice(
                              Number(r.product.price) * r.qty,
                              language,
                            )}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center justify-between rounded-2xl bg-primary/10 px-4 py-4">
                    <span className="text-sm uppercase tracking-widest text-muted-foreground">
                      {t.total}
                    </span>
                    <span className="font-display text-2xl font-black">
                      {formatPrice(total, language)}
                    </span>
                  </div>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    submitOrder();
                  }}
                  className="rounded-2xl border border-border bg-background/30 p-5"
                >
                  <h3 className="text-sm font-bold uppercase tracking-widest">
                    {language === "RUS"
                      ? "Контактные данные"
                      : language === "ENG"
                      ? "Contact details"
                      : language === "DE"
                      ? "Kontaktdaten"
                      : "Coordonnées"}
                  </h3>

                  <div className="mt-5 space-y-4">
                    <label className="block">
                      <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {language === "RUS"
                          ? "Имя"
                          : language === "ENG"
                          ? "Name"
                          : language === "DE"
                          ? "Name"
                          : "Nom"}
                      </span>
                      <input
                        required
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder={t.namePlaceholder}
                        className="w-full rounded-xl border border-border bg-surface px-4 py-3.5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                      />
                    </label>

                    <label className="block">
                      <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {language === "RUS"
                          ? "Телефон или Telegram"
                          : language === "ENG"
                          ? "Phone or Telegram"
                          : language === "DE"
                          ? "Telefon oder Telegram"
                          : "Téléphone ou Telegram"}
                      </span>
                      <input
                        required
                        value={customerContact}
                        onChange={(e) => setCustomerContact(e.target.value)}
                        placeholder={t.contactPlaceholder}
                        className="w-full rounded-xl border border-border bg-surface px-4 py-3.5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                      />
                    </label>
                  </div>

                  {checkoutError && (
                    <div className="mt-4 rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                      {checkoutError}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={
                      checkoutLoading ||
                      !customerName.trim() ||
                      !customerContact.trim()
                    }
                    className="mt-6 w-full rounded-xl bg-primary py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    {checkoutLoading
                      ? language === "RUS"
                        ? "Отправка..."
                        : language === "ENG"
                        ? "Sending..."
                        : language === "DE"
                        ? "Wird gesendet..."
                        : "Envoi..."
                      : t.checkout}
                  </button>

                  <p className="mt-3 text-center text-[11px] leading-relaxed text-muted-foreground">
                    {language === "RUS"
                      ? "Проверьте состав заказа перед отправкой."
                      : language === "ENG"
                      ? "Please check your order before submitting."
                      : language === "DE"
                      ? "Bitte überprüfen Sie Ihre Bestellung vor dem Absenden."
                      : "Vérifiez votre commande avant l’envoi."}
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Index() {
  const [language, setLanguage] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem("oxy-language") as Language | null;
      return saved && LANGS.includes(saved) ? saved : "RUS";
    } catch {
      return "RUS";
    }
  });

  const t = translations[language];

  useEffect(() => {
    try {
      localStorage.setItem("oxy-language", language);
    } catch {
      /* ignore */
    }
  }, [language]);

  useEffect(() => {
    document.title = t.metaTitle;
    document.documentElement.lang = language === "RUS" ? "ru" : language === "ENG" ? "en" : language === "DE" ? "de" : "fr";
  }, [language, t]);

  const [catalog, setCatalog] = useState<Product[]>([]);
const [productsLoading, setProductsLoading] = useState(true);

useEffect(() => {
  fetch("http://127.0.0.1:8000/api/products/")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Не удалось загрузить товары");
      }

      return response.json();
    })
    .then((data) => {
      setCatalog(data);
    })
    .catch((error) => {
      console.error("Ошибка загрузки товаров:", error);
    })
    .finally(() => {
      setProductsLoading(false);
    });
}, []);
  const [showModal, setShowModal] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowModal(true), 600);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("oxy-cart");
      if (raw) setCart(JSON.parse(raw));
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("oxy-cart", JSON.stringify(cart));
    } catch {
      /* ignore */
    }
  }, [cart]);

  const addToCart = (id: string) => {
    setCart((c) =>
      c.some((i) => i.id === id)
        ? c.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i))
        : [...c, { id, qty: 1 }],
    );
    setCartOpen(true);
  };

  const setQty = (id: string, qty: number) =>
    setCart((c) => (qty <= 0 ? c.filter((i) => i.id !== id) : c.map((i) => (i.id === id ? { ...i, qty } : i))));

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  const advantages = [
    { n: "01", title: t.production, text: t.productionText },
    { n: "02", title: t.assortment, text: t.assortmentText },
    { n: "03", title: t.anonymity, text: t.anonymityText },
    { n: "04", title: t.support, text: t.supportText },
  ];

  return (
    <div className="min-h-screen bg-background">
      {showModal && (
        <WelcomeModal
          language={language}
          setLanguage={setLanguage}
          onClose={() => setShowModal(false)}
        />
      )}
      {cartOpen && (
        <CartDrawer
  items={cart}
  products={catalog}
  language={language}
  onClose={() => setCartOpen(false)}
  setQty={setQty}
  clear={() => setCart([])}
/>
      )}


      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4">
          <a href="#top" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary font-display text-lg font-black text-primary-foreground">
              V
            </span>
            <span className="leading-none">
              <span className="block font-display text-lg font-black tracking-tight">OXY</span>
              <span className="block text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
                pharma
              </span>
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground lg:flex">
            <a href="#catalog" className="transition-colors hover:text-foreground">{t.catalog}</a>
            <a href="#quality" className="transition-colors hover:text-foreground">{t.quality}</a>
            <a href="#team" className="transition-colors hover:text-foreground">{t.team}</a>
            <a href="#faq" className="transition-colors hover:text-foreground">{t.questions}</a>
          </nav>
          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 text-xs font-semibold tracking-widest text-muted-foreground sm:flex">
              {LANGS.map((l) => (
                <button
                  key={l}
                  onClick={() => setLanguage(l)}
                  className={`transition-colors ${
                    l === language ? "text-foreground" : "hover:text-foreground"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
            <button
              onClick={() => setCartOpen(true)}
              aria-label={t.cartButton}
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-primary"
            >
              <ShoppingCart className="h-4 w-4" />
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-primary-foreground">
                  {cartCount}
                </span>
              )}
            </button>

            <a
              href="#contact"
              className="rounded-full bg-primary px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
            >
              {t.contact}
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="bg-hero-glow relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-accent">
              {t.sportsPharma}
            </span>
            <h1 className="mt-6 font-display text-6xl uppercase leading-[0.9] sm:text-7xl lg:text-8xl">
              Oxy
              <span className="block text-gradient">Pharma</span>
            </h1>
            <p className="mt-6 max-w-md text-base text-muted-foreground">{t.heroText}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#catalog"
                className="shadow-glow rounded-full bg-primary px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
              >
                {t.catalog}
              </a>
              <a
                href="#contact"
                className="rounded-full border border-border px-8 py-3.5 text-sm font-bold uppercase tracking-widest transition-colors hover:border-primary"
              >
                {t.consultation}
              </a>
            </div>
            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                [t.years, t.yearsMarket],
                [t.positions, t.catalogPositions],
                [t.clients, t.happyClients],
              ].map(([v, l]) => (
                <div key={l}>
                  <dt className="font-display text-3xl font-black text-foreground">{v}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{l}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative">
            <div className="shadow-glow absolute inset-8 rounded-full bg-primary/20 blur-3xl" />
            <img
              src={heroProducts}
              alt={t.heroImageAlt}
              width={1408}
              height={1200}
              className="relative w-full rounded-3xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="border-y border-border bg-surface/40">
        <div className="mx-auto grid max-w-7xl gap-px overflow-hidden px-5 py-16 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((a) => (
            <div key={a.n} className="px-2 py-6 sm:px-6">
              <span className="font-display text-4xl font-black text-primary/40">{a.n}</span>
              <h3 className="mt-4 text-xl uppercase">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Catalog */}
      <section id="catalog" className="mx-auto max-w-7xl px-5 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-4xl uppercase sm:text-5xl">{t.catalog}</h2>
          <p className="max-w-sm text-sm text-muted-foreground">
            {t.fullAssortment}
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {productsLoading ? (
  <div className="col-span-full py-10 text-center text-sm text-muted-foreground">
    {t.loading}
  </div>
) : catalog.length === 0 ? (
  <div className="col-span-full py-10 text-center text-sm text-muted-foreground">
    {t.noProducts}
  </div>
) : (
  catalog.map((p) => (
    <article
      key={p.id}
      className="surface-panel group flex flex-col justify-between overflow-hidden transition-colors hover:border-primary"
    >
      {p.image && (
        <img
          src={p.image}
          alt={p.name}
          loading="lazy"
          className="h-56 w-full object-cover object-center"
        />
      )}

      <div className="p-6">
        <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-accent">
          {p.cat}
        </span>

        <h3 className="mt-3 text-2xl uppercase leading-tight">
          {p.name}
        </h3>

        {p.description && (
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {p.description}
          </p>
        )}

        <div className="mt-8 flex items-center justify-between gap-3">
          <span className="font-display text-lg font-bold">
            {formatPrice(Number(p.price), language)}
          </span>

          <button
            onClick={() => addToCart(p.id)}
            disabled={p.stock <= 0}
            className="rounded-full border border-border px-5 py-2 text-xs font-semibold uppercase tracking-widest transition-colors group-hover:border-primary disabled:cursor-not-allowed disabled:opacity-40"
          >
            {p.stock > 0 ? t.addToCart : t.outOfStock}
          </button>
        </div>
      </div>
    </article>
   ))
)}
</div>
</section>

{/* Quality */}
      <section id="quality" className="border-y border-border bg-surface/40">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2">
          <img
            src={lab}
            alt={t.labImageAlt}
            loading="lazy"
            width={1408}
            height={912}
            className="shadow-card w-full rounded-3xl object-cover"
          />
          <div>
            <h2 className="font-display text-4xl uppercase sm:text-5xl">{t.qualityTitle}</h2>
            <p className="mt-5 text-base text-muted-foreground">{t.qualityText}</p>
            <ul className="mt-8 space-y-4">
              {t.qualityPoints.map((point) => (
                <li key={point} className="flex gap-3 text-sm">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span className="text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="mx-auto max-w-7xl px-5 py-20">
        <h2 className="font-display text-4xl uppercase sm:text-5xl">{t.teamTitle}</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {athletes.map((a, athleteIndex) => (
            <article key={a.name} className="surface-panel overflow-hidden">
              <img
                src={a.img}
                alt={a.name}
                loading="lazy"
                width={912}
                height={1104}
                className="h-80 w-full object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-2xl uppercase">{a.name}</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {(t.athleteAchievements[athleteIndex] ?? []).map((x) => (
                    <li key={x} className="border-l-2 border-primary/60 pl-3">
                      {x}
                    </li>
                  ))}
                </ul>
                <span className="mt-5 inline-block text-xs font-semibold tracking-widest text-accent">
                  {a.handle}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-y border-border bg-surface/40">
        <div className="mx-auto max-w-4xl px-5 py-20">
          <h2 className="font-display text-4xl uppercase sm:text-5xl">{t.faqTitle}</h2>
          <div className="mt-10 space-y-3">
            {t.faq.map(([question, answer], i) => (
              <div key={question} className="surface-panel overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-display text-lg font-bold">{question}</span>
                  <span className="text-xl text-primary">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && (
                  <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-5 py-20">
        <div className="surface-panel bg-hero-glow grid gap-10 p-8 sm:p-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl uppercase sm:text-5xl">{t.contactTitle}</h2>
            <p className="mt-5 max-w-md text-sm text-muted-foreground">{t.contactText}</p>
            <div className="mt-8 space-y-2 text-sm text-muted-foreground">
              <p>{t.contactTelegram}: @oxypharma_manager</p>
              <p>{t.contactWhatsapp}: +7 (900) 000-00-00</p>
              <p>{t.contactEmail}: info@oxypharma.shop</p>
            </div>
          </div>
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              alert(t.submitAlert);
            }}
          >
            <input
              required
              placeholder={t.namePlaceholder}
              className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
            />
            <input
              required
              placeholder={t.contactPlaceholder}
              className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
            />
            <textarea
              rows={4}
              placeholder={t.goalPlaceholder}
              className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
            />
            <button
              type="submit"
              className="w-full rounded-full bg-primary py-3.5 text-sm font-bold uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
            >
              {t.sendRequest}
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-5 py-10 text-xs text-muted-foreground">
          <p>{t.footer}</p>
          <div className="flex gap-5">
            <a href="#top" className="transition-colors hover:text-foreground">{t.top}</a>
            <a href="#catalog" className="transition-colors hover:text-foreground">{t.catalog}</a>
            <a href="#faq" className="transition-colors hover:text-foreground">{t.questions}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
