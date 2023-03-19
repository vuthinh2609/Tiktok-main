import classNames from 'classnames/bind';
import { useState } from 'react';
import Button from '~/components/Button';
import { iconEyeHide, iconEyeShow, iconTickBox } from '~/components/Icons/iconsNew';
import SgvIcon from '~/components/Icons/SgvIcon';

import styles from './Forms.module.scss';

const cx = classNames.bind(styles);

function RegisterWithEmail() {
    const [showPass, setShowPass] = useState(false);

    //input state
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');

    const handleToggleShowPass = () => {
        setShowPass(!showPass);
    };

    const handleChangePass = (e) => {
        const value = e.target.value;
        const invalidValue = value.includes(' ');
        invalidValue || setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form>
            {/* Header */}
            <div className={cx('form-header')}>
                <label className={cx('title')}>Email hoặc Tiktok ID</label>
            </div>

            {/* Email */}
            <div className={cx('form-input')}>
                <input
                    type="text"
                    value={email}
                    placeholder="Email hoặc Tiktok ID"
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
            </div>

            {/* Password */}
            <div className={cx('form-input')}>
                <input
                    type={showPass ? 'text' : 'password'}
                    value={password}
                    placeholder="Mật khẩu"
                    onChange={handleChangePass}
                />
                <span className={cx('show-password-btn')} onClick={handleToggleShowPass}>
                    {showPass ? <SgvIcon icon={iconEyeShow} /> : <SgvIcon icon={iconEyeHide} />}
                </span>
            </div>
            {/* Re - Password */}
            <div className={cx('form-input')}>
                <input
                    type={showPass ? 'text' : 'password'}
                    value={rePassword}
                    placeholder="Nhập lại mật khẩu"
                    onChange={(e) => {
                        setRePassword(e.target.value);
                    }}
                />
            </div>

            <div className={cx('email-consent')}>
                <div>
                    <input id="box" type="checkbox" hidden />
                    <label htmlFor="box">
                        <SgvIcon icon={iconTickBox} />
                    </label>
                </div>
                <p>
                    Nhận nội dung thịnh hành, bản tin, khuyến mại, đề xuất và thông tin cập nhật tài khoản được gửi đến
                    email của bạn
                </p>
            </div>

            {/* Submit */}

            <Button
                className={cx('submit-btn', { disable: !email || !password || !rePassword })}
                color
                large
                disabled={!email || !password}
                onClick={handleSubmit}
            >
                Tiếp
            </Button>
        </form>
    );
}

export default RegisterWithEmail;
