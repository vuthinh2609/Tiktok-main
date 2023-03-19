import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import config from '~/config';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
import * as userService from '~/services/usersService';
import Discover from '~/components/Discover';
import Footer from '~/components/Footer';
import Button from '~/components/Button';
// import { fa0 } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
const PER_PAGE = 5;

function Sidebar() {
    const [suggestedUser, setSuggestedUser] = useState([]);

    useEffect(() => {
        userService
            .getSuggested({ page: 1, perPage: PER_PAGE })
            .then((data) => {
                setSuggestedUser((privUsers) => [...privUsers, ...data]);
            })
            .catch((error) => console(error));
    }, []);

    return (
        <aside className={cx('wrapper')}>
            <div className={cx('inner-fixed')}>
                <Menu>
                    <MenuItem
                        title="For You"
                        to={config.routes.home}
                        icon={<HomeIcon />}
                        activeIcon={<HomeActiveIcon />}
                    />
                    <MenuItem
                        title="Following"
                        to={config.routes.following}
                        icon={<UserGroupIcon />}
                        activeIcon={<UserGroupActiveIcon />}
                    />
                    <MenuItem
                        title="LIVE"
                        to={config.routes.live}
                        icon={<LiveIcon />}
                        activeIcon={<LiveActiveIcon />}
                    />
                </Menu>

                <div className={cx('login-container')}>
                    <p>Đăng nhập để follow các tác giả, thích video và xem bình luận.</p>
                    <Button outline large className={cx('btn')}>
                        Đăng nhập
                    </Button>
                </div>

                <SuggestedAccounts label="Suggested accounts" data={suggestedUser} />
                <SuggestedAccounts label="Following" />
                <Discover label={'Discover'} className={cx('w-1071')} />
                <Footer className={cx('w-1071')} />
            </div>
        </aside>
    );
}

export default Sidebar;
