import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

import config from '~/config';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import { MessageIcon, InboxIcon } from '~/components/Icons';
import Search from '../Search';
import dataTemp from '~/temp/data';
import { iconPlus, iconSeeMore } from '~/components/Icons/iconsNew';
import SgvIcon from '~/components/Icons/SgvIcon';
import { ModalContextKey } from '~/contexts/ModalContexts';

const cx = classNames.bind(styles);

function Header() {
    // get modal context value
    const { loginModalShow } = useContext(ModalContextKey);
    // handle logic
    let currentUser = false;
    const menuInfo = currentUser ? dataTemp.menus.PRIVATE_MENU : dataTemp.menus.PUBLIC_MENU;
    // console.log(menuInfo);

    const handleMenuChange = (MenuItem) => {
        console.log(MenuItem);
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* logo container */}
                <div className={cx('logo')}>
                    <Link to={config.routes.home} className={cx('logo-link')}>
                        <img src={images.logo} alt="Tiktok" />
                    </Link>
                </div>
                {/* Share container */}
                <Search />
                {/* action container */}
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Button
                                primary
                                to={currentUser ? config.routes.upload : null}
                                leftIcon={<SgvIcon icon={iconPlus} size={20} />}
                                onClick={currentUser ? null : null}
                            >
                                <span>Tải lên</span>
                            </Button>
                            <Tippy delay={[0, 200]} content="Tin nhắn" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Hộp thư" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button
                                primary
                                to={currentUser ? config.routes.upload : null}
                                leftIcon={<SgvIcon icon={iconPlus} size={20} />}
                                onClick={currentUser ? null : loginModalShow}
                            >
                                <span>Tải lên</span>
                            </Button>
                            <Button
                                className={cx('btn-login')}
                                onClick={currentUser ? null : loginModalShow}
                                color
                                primary
                            >
                                <span>Đăng nhập</span>
                            </Button>
                        </>
                    )}

                    <Menu items={menuInfo} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://toplist.vn/images/800px/anh-vien-ban-trang-studio-675656.jpg"
                                alt="Nguyen van A"
                            />
                        ) : (
                            <button className={cx('more-wrapper')}>
                                <SgvIcon icon={iconSeeMore} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
