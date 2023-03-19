import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    children,
    to,
    href,
    primary = false,
    outline = false,
    color = false,
    small = false,
    large = false,
    xsmall = false,
    medium = false,
    upload = false,
    disabled = false,
    rounded = false,
    leftIcon,
    rightIcon,
    className,
    onClick,
    iconClassName,
    textClassName,
    ...passProps
}) {
    let Comp = 'button';

    const props = {
        onClick,
        ...passProps,
    };

    // Delete even listener when btn is disabled

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classNames = cx('btn', {
        // Custom class
        [className]: className,
        //btn type
        primary,
        color,
        outline,
        rounded,
        // btn size
        small,
        xsmall,
        medium,
        large,
        upload,
        // disabled style
        disabled,
        //
        [className]: className,
    });

    const iconClassNames = cx('icon', {
        [iconClassName]: iconClassName,
    });

    const textClassNames = cx('text', {
        [textClassName]: textClassName,
    });

    return (
        <Comp className={classNames} {...props}>
            {leftIcon && <span className={iconClassNames}>{leftIcon}</span>}
            <span className={textClassNames}>{children}</span>
            {rightIcon && <span className={iconClassNames}>{rightIcon}</span>}
        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    disabled: PropTypes.bool,
    rounded: PropTypes.bool,
    outline: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    upload: PropTypes.bool,
    children: PropTypes.node.isRequired,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    className: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
