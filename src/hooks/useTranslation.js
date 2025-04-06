import { useLanguage } from '../context/LanguageContext';

const useTranslation = () => {
  const { t, language } = useLanguage();
  return { t, language };
};

export default useTranslation; 