import PropTypes from 'prop-types';

function SgvIcon({ icon, size, style = {}, className, onClick }) {
    return (
        <i className={className} style={{ lineHeight: 0, fontSize: size, ...style }}>
            {icon}
        </i>
    );
}

SgvIcon.propTypes = {
    icon: PropTypes.element,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    style: PropTypes.object,
    className: PropTypes.string,
    onClick: PropTypes.func,
};

export default SgvIcon;
