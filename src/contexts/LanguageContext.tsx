"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'tr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.features': 'Features',
    'nav.platform': 'Platform',
    'nav.github': 'GitHub',
    'nav.liveDemo': 'Live Demo',
    
    // Hero Section
    'hero.title': 'Niyi5 - Rank &',
    'hero.titleSecond': 'Discover the Best!',
    'hero.description': 'A fun and interactive platform where users rank items in various categories, bringing together community preferences to determine the top 5 choices. From movies to books, restaurants to tech products—rank your favorites!',
    'hero.downloadText': 'Download & Start Ranking',
    'hero.appStore': 'App Store',
    'hero.googlePlay': 'Google Play',
    'hero.bottomTitle': 'Discover the Best with Community Power',
    'hero.bottomDescription': 'Join a vibrant community where everyone\'s opinion matters! Rank your favorites, discover new gems, and see what the community loves most. Whether it\'s movies, books, restaurants, or tech gadgets - find the top 5 in every category.',
    
    // Features Section
    'features.subtitle': 'Why Choose Niyi5?',
    'features.title': 'Fun & Interactive Features',
    'features.description': 'A community-driven platform where everyone\'s opinion matters. Rank your favorites, discover new choices, and have fun with rankings and discussions. Compare your preferences with the most popular choices in the community!',
    'features.rankTitle': 'Rank Your Favorites',
    'features.rankDescription': 'Choose the items you love and create your own rankings. Express your preferences across movies, books, restaurants, tech products, and more!',
    'features.communityTitle': 'Community Rankings',
    'features.communityDescription': 'Explore the rankings of other users and discover their top picks. See how your taste compares with the community preferences.',
    'features.discoverTitle': 'Discover Top 5',
    'features.discoverDescription': 'Find out the top 5 most preferred items in each category based on community votes. Let the wisdom of the crowd guide your choices.',
    'features.ideasTitle': 'Find New Ideas',
    'features.ideasDescription': 'Wondering what movie to watch or which meal to try? Niyi5 helps you discover new gems through community recommendations and rankings.',
    
    // Mobile Section
    'mobile.title': 'Rank & Discover On-the-Go',
    'mobile.description': 'Take the fun of ranking everywhere! Whether you\'re at a coffee shop thinking about your favorite books or at home deciding what movie to watch, Niyi5 is always at your fingertips.',
    'mobile.quickTitle': 'Quick Rankings:',
    'mobile.quickDescription': 'Easily rank your favorites with our intuitive mobile interface. Swipe, tap, and discover!',
    'mobile.insightsTitle': 'Community Insights:',
    'mobile.insightsDescription': 'See real-time community rankings and discover what\'s trending in your favorite categories.',
    'mobile.personalizedTitle': 'Personalized Discovery:',
    'mobile.personalizedDescription': 'Get recommendations based on your ranking patterns and find your next favorite thing!',
    
    // Footer
    'footer.address': 'Address:',
    'footer.contact': 'Contact:',
    'footer.email': 'Email: app@collabry.io',
    'footer.downloadNiyi5': 'Download Niyi5',
    'footer.copyright': 'Copyright © 2025 Collabry Software and Information Inc.',
    
    // Contact Form
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Have questions about Niyi5? We\'d love to hear from you. Send us a message and we\'ll respond as soon as possible.',
    'contact.getInTouch': 'Get in Touch',
    'contact.email': 'Email',
    'contact.address': 'Address',
    'contact.linkedin': 'LinkedIn',
    'contact.name': 'Name',
    'contact.namePlaceholder': 'Your full name',
    'contact.emailPlaceholder': 'your.email@example.com',
    'contact.subject': 'Subject',
    'contact.subjectPlaceholder': 'What is this about?',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Tell us more about your inquiry...',
    'contact.sendMessage': 'Send Message',
  },
  tr: {
    // Navbar
    'nav.home': 'Ana Sayfa',
    'nav.features': 'Özellikler',
    'nav.platform': 'Platform',
    'nav.github': 'GitHub',
    'nav.liveDemo': 'Canlı Demo',
    
    // Hero Section
    'hero.title': 'Niyi5 - Sırala ve',
    'hero.titleSecond': 'En İyiyi Keşfet!',
    'hero.description': 'Kullanıcıların çeşitli kategorilerdeki öğeleri sıraladığı eğlenceli ve interaktif bir platform. Topluluk tercihlerini bir araya getirerek en iyi 5 seçimi belirliyoruz. Filmlerden kitaplara, restoranlardan teknoloji ürünlerine—favorilerinizi sıralayın!',
    'hero.downloadText': 'İndir ve Sıralamaya Başla',
    'hero.appStore': 'App Store',
    'hero.googlePlay': 'Google Play',
    'hero.bottomTitle': 'Topluluk Gücüyle En İyiyi Keşfedin',
    'hero.bottomDescription': 'Herkesin görüşünün önemli olduğu canlı bir topluluğa katılın! Favorilerinizi sıralayın, yeni hazineler keşfedin ve topluluğun en çok sevdiklerini görün. İster filmler, kitaplar, restoranlar ya da teknoloji ürünleri olsun - her kategoride en iyi 5\'i bulun.',
    
    // Features Section
    'features.subtitle': 'Neden Niyi5?',
    'features.title': 'Eğlenceli ve İnteraktif Özellikler',
    'features.description': 'Herkesin görüşünün önemli olduğu topluluk odaklı bir platform. Favorilerinizi sıralayın, yeni seçenekler keşfedin ve sıralamalar ile tartışmalarla eğlenin. Tercihlerinizi topluluktaki en popüler seçimlerle karşılaştırın!',
    'features.rankTitle': 'Favorilerinizi Sıralayın',
    'features.rankDescription': 'Sevdiğiniz öğeleri seçin ve kendi sıralamalarınızı oluşturun. Filmler, kitaplar, restoranlar, teknoloji ürünleri ve daha fazlasında tercihlerinizi ifade edin!',
    'features.communityTitle': 'Topluluk Sıralamaları',
    'features.communityDescription': 'Diğer kullanıcıların sıralamalarını keşfedin ve en iyi seçimlerini görün. Zevkinizin topluluk tercihleriyle nasıl karşılaştırıldığını görün.',
    'features.discoverTitle': 'En İyi 5\'i Keşfedin',
    'features.discoverDescription': 'Topluluk oylarına dayalı olarak her kategoride en çok tercih edilen ilk 5 öğeyi öğrenin. Kalabalığın bilgeliğinin seçimlerinize rehberlik etmesine izin verin.',
    'features.ideasTitle': 'Yeni Fikirler Bulun',
    'features.ideasDescription': 'Hangi filmi izleyeceğinizi veya hangi yemeği deneyeceğinizi mi merak ediyorsunuz? Niyi5, topluluk önerileri ve sıralamaları aracılığıyla yeni hazineler keşfetmenize yardımcı olur.',
    
    // Mobile Section
    'mobile.title': 'Hareket Halindeyken Sırala ve Keşfet',
    'mobile.description': 'Sıralama eğlencesini her yere taşıyın! İster bir kafede favori kitaplarınızı düşünürken ister evde hangi filmi izleyeceğinize karar verirken, Niyi5 her zaman parmaklarınızın ucunda.',
    'mobile.quickTitle': 'Hızlı Sıralamalar:',
    'mobile.quickDescription': 'Sezgisel mobil arayüzümüzle favorilerinizi kolayca sıralayın. Kaydırın, dokunun ve keşfedin!',
    'mobile.insightsTitle': 'Topluluk İçgörüleri:',
    'mobile.insightsDescription': 'Gerçek zamanlı topluluk sıralamalarını görün ve favori kategorilerinizde neyin trend olduğunu keşfedin.',
    'mobile.personalizedTitle': 'Kişiselleştirilmiş Keşif:',
    'mobile.personalizedDescription': 'Sıralama kalıplarınıza dayalı öneriler alın ve bir sonraki favori şeyinizi bulun!',
    
    // Footer
    'footer.address': 'Adres:',
    'footer.contact': 'İletişim:',
    'footer.email': 'E-posta: app@collabry.io',
    'footer.downloadNiyi5': 'Niyi5\'i İndir',
    'footer.copyright': 'Telif Hakkı © 2025 Collabry Yazılım ve Bilgi A.Ş.',
    
    // Contact Form
    'contact.title': 'İletişim',
    'contact.subtitle': 'Niyi5 hakkında sorularınız mı var? Sizden haber almayı çok isteriz. Bize mesaj gönderin, en kısa sürede size geri döneceğiz.',
    'contact.getInTouch': 'İletişime Geçin',
    'contact.email': 'E-posta',
    'contact.address': 'Adres',
    'contact.linkedin': 'LinkedIn',
    'contact.name': 'İsim',
    'contact.namePlaceholder': 'Adınız ve soyadınız',
    'contact.emailPlaceholder': 'e-posta@ornek.com',
    'contact.subject': 'Konu',
    'contact.subjectPlaceholder': 'Bu ne hakkında?',
    'contact.message': 'Mesaj',
    'contact.messagePlaceholder': 'Sorgunuz hakkında daha fazla bilgi verin...',
    'contact.sendMessage': 'Mesaj Gönder',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 