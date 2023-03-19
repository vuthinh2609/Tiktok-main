import classNames from 'classnames/bind';

import style from './Discover.module.scss';

const cx = classNames.bind(style);

function ItemContainer({ icon, title }) {
    return (
        <div className={cx('hashtag')}>
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('text')}>{title}</span>
        </div>
    );
}

export default ItemContainer;
