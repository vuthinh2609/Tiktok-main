import {
    iconApple,
    iconFacebookShare,
    iconGoogle,
    iconInstagram,
    iconKakaoTalk,
    iconLine,
    iconQR,
    iconTwitter,
    iconUser,
} from '~/components/Icons/iconsNew';
import SgvIcon from '~/components/Icons/SgvIcon';
import { LoginWithEmail, LoginWithQR } from '~/components/Modals/LoginModal/Forms';

const loginModalData = {
    title: 'Đăng nhập vào Tiktok',
    data: [
        {
            title: 'Sử dụng mã QR',
            icon: <SgvIcon icon={iconQR} />,
            children: {
                title: 'Đăng nhập bằng mã QR',
                type: 'component',
                data: LoginWithQR,
            },
        },
        {
            title: 'Số điện thoại / Email / Tiktok ID',
            icon: <SgvIcon icon={iconUser} />,
            children: {
                title: 'Đăng nhập',
                type: 'component',
                data: LoginWithEmail,
            },
        },
        {
            title: 'Tiếp tục với Facebook',
            icon: <SgvIcon icon={iconFacebookShare} />,
            disable: true,
        },
        {
            title: 'Tiếp tục với Google',
            icon: <SgvIcon icon={iconGoogle} />,
            disable: true,
        },
        {
            title: 'Tiếp tục với Twitter',
            icon: <SgvIcon icon={iconTwitter} />,
            disable: true,
        },
        {
            title: 'Tiếp tục với LINE',
            icon: <SgvIcon icon={iconLine} />,
            disable: true,
        },
        {
            title: 'Tiếp tục với KakaoTalk',
            icon: <SgvIcon icon={iconKakaoTalk} />,
            disable: true,
        },
        {
            title: 'Tiếp tục với Apple',
            icon: <SgvIcon icon={iconApple} />,
            disable: true,
        },
        {
            title: 'Tiếp tục với Instagram',
            icon: <SgvIcon icon={iconInstagram} />,
            disable: true,
        },
    ],
};
export default loginModalData;
