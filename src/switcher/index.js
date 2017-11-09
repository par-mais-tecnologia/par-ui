import React from 'react';

const styles = {
  main: {
    border: '1px solid var(--gray-04)',
    width: '48px',
    height: '20px',
    borderRadius: '13px',
    cursor: 'pointer',
    display: 'inline-block',
    float: 'left',
    background: 'var(--gray-07)'
  },
  toggle: {
    border: '1px solid var(--gray-04)',
    boxShadow: '0px 0px 2px 0px rgba(0, 0, 0, 0.3)',
    width: '28px',
    height: '28px',
    left: '0px',
    top: '-4px',
    borderRadius: '50%',
    background: 'white',
    position: 'relative',
    transition: 'left .1s ease-in-out'
  },
  on: {
    background: 'var(--jelly-01)'
  },
  toggleOn: {
    left: '20px',
    color: 'var(--jelly-01)'
  }
};

export default ({ on, onClick, onIcon, offIcon, style, labelStyle, children }) => (
  <div style={style}>
    <div style={on ? { ...styles.main, ...styles.on } : styles.main} onClick={onClick}>
      <div style={on ? { ...styles.toggle, ...styles.toggleOn } : styles.toggle }>
        { on ? onIcon : offIcon }
      </div>
    </div>
    {children ? <div style={labelStyle}>{children}</div> : null}
  </div>
);
