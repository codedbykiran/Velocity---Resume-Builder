import Draggable from 'react-draggable';

const Window = ({ title, children, onClose, color }) => {
  return (
    <Draggable handle=".window-header">
      <div className="window-box" style={{ border: `1px solid ${color}` }}>
        <div className="window-header" style={{ backgroundColor: color }}>
          <span>{title}</span>
          <div className="window-controls">
            <button onClick={onClose}>x</button>
          </div>
        </div>
        <div className="window-content">
          {children}
        </div>
      </div>
    </Draggable>
  );
};

export default Window;