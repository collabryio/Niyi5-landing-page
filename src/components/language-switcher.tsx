"use client";

import React from 'react';
import { Button } from '@material-tailwind/react';
import { useLanguage } from '../contexts/LanguageContext';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'tr' : 'en');
  };

  return (
    <Button
      variant="text"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-1 text-white hover:bg-white/10"
    >
      <span className="text-sm font-medium">
        {language === 'en' ? '🇺🇸 EN' : '🇹🇷 TR'}
      </span>
    </Button>
  );
}

export default LanguageSwitcher; 