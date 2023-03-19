import style from './Footer.module.scss';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(style);

function Footer({ label, className }) {
    return (
        <div className={cx('footer', className)}>
            {/* <span className={cx('label')}>{label}</span> */}
            <div className={cx('footer-container')}>
                <div className={cx('group-container')}>
                    <Link to="/" className={cx('item')}>
                        About
                    </Link>
                    <Link to="/" className={cx('item')}>
                        TikTok
                    </Link>
                    <Link to="/" className={cx('item')}>
                        Newsroom
                    </Link>
                    <Link to="/" className={cx('item')}>
                        Contact
                    </Link>
                    <Link to="/" className={cx('item')}>
                        Careers
                    </Link>
                    <Link to="/" className={cx('item')}>
                        ByteDance
                    </Link>
                </div>
                <div className={cx('group-container')}>
                    <Link to="/" className={cx('item')}>
                        TikTok for Good
                    </Link>
                    <Link to="/" className={cx('item')}>
                        Advertise
                    </Link>
                    <Link to="/" className={cx('item')}>
                        Developers
                    </Link>
                    <Link to="/" className={cx('item')}>
                        Transparency
                    </Link>
                    <Link to="/" className={cx('item')}>
                        TikTok Rewards
                    </Link>
                </div>
                <div className={cx('group-container')}>
                    <Link to="/" className={cx('item')}>
                        Help
                    </Link>
                    <Link to="/" className={cx('item')}>
                        Safety
                    </Link>
                    <Link to="/" className={cx('item')}>
                        Terms
                    </Link>
                    <Link to="/" className={cx('item')}>
                        Privacy
                    </Link>
                    <Link to="/" className={cx('item')}>
                        Creator Portal
                    </Link>
                    <Link to="/" className={cx('item')}>
                        Community Guidelines
                    </Link>
                </div>
                <div className={cx('group-container')}>
                    <Tippy
                        className={cx('end')}
                        placement="top-start"
                        interactive
                        content={
                            <div className={cx('more-end')}>
                                <Link to="/">NGUYÊN TẮC THỰC THI PHÁP LUẬT CỦA TIKTOK</Link>
                            </div>
                        }
                    >
                        <span className={cx('item', 'more')}>Thêm</span>
                    </Tippy>
                </div>
                <div className={cx('group-container')}>
                    <span className={cx('item')}>© 2022 TikTok</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;
