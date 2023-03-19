import classNames from 'classnames/bind';
import { useState } from 'react';
import Button from '~/components/Button';
import { iconEyeHide, iconEyeShow } from '~/components/Icons/iconsNew';
import SgvIcon from '~/components/Icons/SgvIcon';

import styles from './Forms.module.scss';

const cx = classNames.bind(styles);

function LoginWithEmail() {
    const [showPass, setShowPass] = useState(false);

    //input state
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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

            <span className={cx('forgot-password')}>Quên mật khẩu?</span>

            {/* Submit */}
            <Button
                className={cx('submit-btn', { disable: !email || !password })}
                color
                large
                disabled={!email || !password}
                onClick={handleSubmit}
            >
                Đăng nhập
            </Button>
        </form>
    );
}

export default LoginWithEmail;
