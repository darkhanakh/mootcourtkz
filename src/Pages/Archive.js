import './../Style/Archive.css';
import ArchiveSlider from '../Components/ArchiveSlider';
import { useTranslation } from 'react-i18next';

const Archive = () => {
  const { t } = useTranslation();
  return (
    <div className="archive">
      <h4>{t('archive-title')}</h4>
      <p>{t('archive-introduction')}</p>
      <p>
        <h5 className="archive-title">{t('judges-title')}</h5>
        <ul>
          <li>{t('judges-1')}</li>
          <li>{t('judges-2')}</li>
          <li>{t('judges-3')}</li>
          <li>{t('judges-4')}</li>
        </ul>
      </p>
      <p>
        <h5 className="archive-title">{t('winners-title')}</h5>
        <ol>
          <li>{t('winners-1')}</li>
          <li>{t('winners-2')}</li>
          <li>{t('winners-3')}</li>
        </ol>
      </p>
      <p>
        <h5 className="archive-title">{t('nominees-title')}</h5>
        <ol>
          <li>{t('nominees-1')}</li>
          <li>{t('nominees-2')}</li>
          <li>{t('nominees-3')}</li>
          <li>{t('nominees-4')}</li>
        </ol>
      </p>
      <p>{t('archive-tip')}</p>
      <ArchiveSlider />
    </div>
  );
};

export default Archive;
