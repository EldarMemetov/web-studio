'use client';

import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import Button from '@/shared/components/button/Button';
import Icon from '@/shared/Icon/Icon';

export default function SuccessContent({ onClose }) {
  const router = useRouter();
  const { t } = useTranslation('successContent');

  const handleClick = () => {
    onClose();
    router.push('/');
  };

  return (
    <div>
      <Icon iconName="icon-group" />
      <h2>{t('reviewAcceptedTitle')}</h2>
      <h3>{t('reviewAcceptedSubtitle')}</h3>

      <Button variant="variant3" onClick={handleClick}>
        {t('backToHome')}
      </Button>
    </div>
  );
}
