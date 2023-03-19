import {
    iconKeyboard,
    iconLanguge,
    iconLive,
    iconLogout,
    iconMoon,
    iconProfile,
    iconQuestion,
    iconSetting,
    iconTiktokCoin,
} from '~/components/Icons/iconsNew';
import SgvIcon from '~/components/Icons/SgvIcon';

export const PUBLIC_MENU = [
    {
        icon: <SgvIcon icon={iconLanguge} />,
        title: 'Tiếng việt',
        children: {
            title: 'Ngôn ngữ',
            data: [
                {
                    title: 'Tiếng Việt (Việt Nam)',
                },
                {
                    title: 'English',
                },
                {
                    title: 'العربية',
                },
                {
                    title: 'বাঙ্গালি (ভারত)',
                },
                {
                    title: 'Cebuano (Pilipinas)',
                },
                {
                    title: 'Čeština (Česká republika)',
                },
                {
                    title: 'Deutsch',
                },
                {
                    title: 'Ελληνικά (Ελλάδα)',
                },
                {
                    title: 'Español',
                },
                {
                    title: 'Suomi (Suomi)',
                },
                {
                    title: 'Filipino (Pilipinas)',
                },
                {
                    title: 'Français',
                },
                {
                    title: 'हिंदी',
                },
                {
                    title: 'Magyar (Magyarország)',
                },
                {
                    title: 'Bahasa Indonesia (Indonesia)',
                },
                {
                    title: 'Italiano (Italia)',
                },
                {
                    title: '日本語（日本）',
                },
                {
                    title: 'Basa Jawa (Indonesia)',
                },
                {
                    title: 'ខ្មែរ (កម្ពុជា)',
                },
            ],
        },
    },
    {
        icon: <SgvIcon icon={iconQuestion} />,
        title: 'Phản hồi và trợ giúp',
        href: 'https://www.tiktok.com/feedback',
    },
    {
        type: 'keyboard-modal',
        icon: <SgvIcon icon={iconKeyboard} />,
        title: 'Phím tắt trên bàn phím',
    },
    {
        icon: <SgvIcon icon={iconMoon} />,
        title: 'Chế độ tối',
        // rightIcon: 'làm sau',
    },
];
export const PRIVATE_MENU = [
    {
        icon: <SgvIcon icon={iconProfile} />,
        title: 'Xem hồ sơ',
    },
    {
        icon: <SgvIcon icon={iconTiktokCoin} />,
        title: 'Nhận xu',
    },
    {
        icon: <SgvIcon icon={iconLive} />,
        title: 'Live studio',
    },
    {
        icon: <SgvIcon icon={iconSetting} />,
        title: 'Cài đặt',
    },
    ...PUBLIC_MENU,
    {
        icon: <SgvIcon icon={iconLogout} />,
        title: 'Đăng xuất',
        // separate: true,
    },
];
