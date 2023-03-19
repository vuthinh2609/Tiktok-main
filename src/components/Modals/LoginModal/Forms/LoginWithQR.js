import classNames from 'classnames/bind';
import { iconFollow, iconScanQR } from '~/components/Icons/iconsNew';
import SgvIcon from '~/components/Icons/SgvIcon';
import images from '~/assets/images';

import style from './Forms.module.scss';
const cx = classNames.bind(style);

function LoginWithQR() {
    return (
        <div className={cx('loginQR-container')}>
            <div className={cx('left-space')}>
                <div className={cx('QR')}>
                    <img src={images.exampleQR} alt="QR" />
                </div>
                <div className={cx('step-list')}>
                    <p className={cx('step-item')}>1. Mở ứng dụng TikTok trên thiết bị di động của bạn</p>
                    <p className={cx('step-item')}>
                        2. Trên Hồ sơ, nhấn vào <SgvIcon className={cx('icon')} icon={iconFollow} />
                    </p>
                    <p className={cx('step-item')}>
                        3. Nhấn vào <SgvIcon className={cx('icon')} icon={iconScanQR} /> rồi quét mã QR để xác nhận
                        thông tin đăng nhập của bạn
                    </p>
                </div>
            </div>
            <div className={cx('right-space')}>
                <img src={images.LoginWithQRGuide} alt="Guide" />
            </div>
        </div>
    );
}

export default LoginWithQR;
