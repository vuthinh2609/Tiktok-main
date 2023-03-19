import {
    iconUser,
    iconFacebookShare,
    iconGoogle,
    iconTwitter,
    iconLine,
    iconKakaoTalk,
} from '~/components/Icons/iconsNew';
import SgvIcon from '~/components/Icons/SgvIcon';
import { registerWithEmail } from '~/components/Modals/LoginModal/Forms';

const registerModalData = {
    title: 'Đăng ký Tiktok',
    data: [
        {
            title: 'Số điện thoại hoặc Email',
            icon: <SgvIcon icon={iconUser} />,
            children: {
                title: 'Đăng ký',
                type: 'component',
                data: registerWithEmail,
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
    ],
};
export default registerModalData;
