import classNames from 'classnames/bind';

import dataTemp from '~/temp/data';
import style from './Discover.module.scss';
import Button from '../Button';
import SgvIcon from '../Icons/SgvIcon';
import { iconMusic, iconTag } from '../Icons/iconsNew';

const cx = classNames.bind(style);

function Discover({ label, className }) {
    const discoverList = dataTemp.discover;
    return (
        <div className={cx('wrapper', className)}>
            <p className={cx('label')}>{label}</p>
            <div className={cx('list-container')}>
                {discoverList.map((disItem, index) => {
                    const isHashtag = disItem.type === 'hashtag';
                    return (
                        <Button
                            className={cx('btn', { hashtag: isHashtag })}
                            key={index}
                            primary
                            xsmall
                            rounded
                            leftIcon={<SgvIcon icon={isHashtag ? iconTag : iconMusic} />}
                            title="suthatla"
                        >
                            {disItem.title}
                        </Button>
                    );
                })}
            </div>
        </div>
    );
}

export default Discover;
