import PropTypes from 'prop-types';
import { useState } from 'react';
import classNames from 'classnames/bind';
import style from './LoginModal.module.scss';
import ModalWrapper from '../ModalWrapper';
import SgvIcon from '~/components/Icons/SgvIcon';
import { iconArrowLeft, iconArrowToBot2, iconCloseX } from '~/components/Icons/iconsNew';
import loginModalData from '~/temp/data/modals/loginModal';
import registerModalData from '~/temp/data/modals/registerModals';
import Button from '~/components/Button';

const cx = classNames.bind(style);

function LoginModal({ handleClose }) {
    const [isClose, setIsClose] = useState(false);
    const [tabList, setTabList] = useState([loginModalData]);
    const [registering, setRegistering] = useState(false);
    const [fullRegisterList, setFullRegisterList] = useState(false);

    let currentTab = tabList[tabList.length - 1];

    // handle when click btn close
    const handleCloseModal = () => {
        setIsClose(true);
    };

    // handle data of currentTab while registration status

    if (registering && !fullRegisterList) {
        const isArray = Array.isArray(currentTab.data);
        if (isArray) {
            currentTab = { ...currentTab };
            currentTab.data = currentTab.data.slice(0, 3);
        }
    }

    const handleGoChildrenTab = (loginItem) => {
        const hasChildren = !!loginItem.children;

        if (hasChildren) {
            setTabList([...tabList, loginItem.children]);
        }
    };

    const handleBackChildrenTab = () => {
        const newTabList = [...tabList];
        newTabList.pop();
        setTabList(newTabList);
    };

    const handleGoToRegister = () => {
        setTabList([registerModalData]);
        setRegistering(true);
    };

    const handleGotoLogin = () => {
        setTabList([loginModalData]);
        setFullRegisterList(false);
        setRegistering(false);
    };

    return (
        <ModalWrapper className={cx('modal-wrapper')} isClose={isClose} onClose={handleClose}>
            {/* Close btn */}
            <button onClick={handleCloseModal}>
                <SgvIcon className={cx('close-btn')} icon={iconCloseX} />
            </button>

            {/* back btn */}
            {tabList.length > 1 && (
                <button onClick={handleBackChildrenTab}>
                    <SgvIcon className={cx('back-btn')} icon={iconArrowLeft} />
                </button>
            )}

            {/* Body */}
            <div className={cx('body')}>
                <h1 className={cx('login-title')}> {currentTab.title} </h1>
                {currentTab.type === 'component' ? (
                    <currentTab.data />
                ) : (
                    currentTab.data.map((loginItem, index) => (
                        <Button
                            key={index}
                            className={cx('login-item', { disabled: loginItem.disable })}
                            iconClassName={cx('icon')}
                            textClassName={cx('text')}
                            primary
                            leftIcon={loginItem.icon}
                            disabled={loginItem.disable}
                            onClick={() => handleGoChildrenTab(loginItem)}
                        >
                            {loginItem.title}
                        </Button>
                    ))
                )}
                {registering && !fullRegisterList && tabList.length === 1 && (
                    <div className={cx('show-full-register-list')} onClick={() => setFullRegisterList(true)}>
                        <SgvIcon icon={iconArrowToBot2} />
                    </div>
                )}
            </div>
            {/* terms of registration */}
            {registering && (
                <div className={cx('term-registration')}>
                    <p>
                        Bằng cách tiếp tục, bạn đồng ý với
                        <a href="#" target={'_blank'} rel="noreferrer">
                            Điều khoản Sử dụng
                        </a>
                        của TikTok và xác nhận rằng bạn đã đọc hiểu
                        <a href="#" target={'_blank'} rel="noreferrer">
                            Chính sách Quyền riêng tư
                        </a>
                        tư của TikTok.
                    </p>
                </div>
            )}
            {/* Footer */}
            <footer className={cx('footer')}>
                {registering ? 'Bạn đã có tài khoản?' : 'Bạn không có tài khoản?'}
                <span className={cx('register-btn')} onClick={registering ? handleGotoLogin : handleGoToRegister}>
                    {registering ? 'Đăng nhập' : 'Đăng ký'}
                </span>
            </footer>
        </ModalWrapper>
    );
}

LoginModal.propTypes = {
    handClose: PropTypes.func,
};

export default LoginModal;
