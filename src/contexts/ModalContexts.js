import { createContext, useRef } from 'react';
import useModal from '~/hocks/useModal';
import LoginModal from '~/components/Modals/LoginModal';

export const ModalContextKey = createContext();

function ModalContext({ children }) {
    const [LoginModalComponent, loginModalShow] = useModal(LoginModal);

    const contextValue = useRef({
        loginModalShow,
    });

    return (
        <ModalContextKey.Provider value={contextValue.current}>
            {children}
            <LoginModalComponent />
        </ModalContextKey.Provider>
    );
}

export default ModalContext;
