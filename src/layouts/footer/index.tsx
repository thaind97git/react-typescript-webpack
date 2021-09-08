import React from 'react';
import { useSelector } from 'react-redux';
import { selectDisplayLayout } from '@/store/slices/layoutSlice';
import Github from '@/static/images/icon/github.svg';
import LinkedIn from '@/static/images/icon/linkedin.svg';
import StackOverflow from '@/static/images/icon/stack-overflow.svg';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const { footer } = useSelector(selectDisplayLayout);
  if (!footer) {
    return null;
  }
  return (
    <div id="footer">
      <div className="socials">
        <a
          href="https://github.com/thaind97git"
          rel="noreferrer"
          target="_blank"
        >
          <Github className="img github" />
        </a>
        <a
          href="https://www.linkedin.com/in/aldenn97"
          rel="noreferrer"
          target="_blank"
        >
          <LinkedIn className="img linked-in " />
        </a>
        <a
          href="https://stackoverflow.com/users/11637854/aldenn"
          rel="noreferrer"
          target="_blank"
        >
          <StackOverflow className="img stack-overflow" />
        </a>
      </div>
      <h3>{t('footer.copy_right')}</h3>
    </div>
  );
};

export default Footer;
