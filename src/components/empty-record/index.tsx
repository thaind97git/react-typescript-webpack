import React from 'react';
import EmptyIcon from '@/static/images/icon/broke.svg';

interface IProps {
  icon?: string;
  title: string;
  description?: string;
}

const EmptyRecord: React.FC<IProps> = ({
  icon: Icon = EmptyIcon,
  title = 'Empty record',
  description = '',
}) => {
  return (
    <div className="empty-record">
      <div className="empty-record__icon">
        <Icon style={{ width: 80, height: 80 }} />
      </div>
      <div className="empty-record__title">{title}</div>
      {description && <div className="empty-record__desc">{description}</div>}
    </div>
  );
};

export default EmptyRecord;
