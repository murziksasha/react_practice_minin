import './alert.scss';

const Alert = ({alert}) => {
  return (
    <div className={`alert alert-${alert.type} alert-dismissible`} role="alert">
      {alert.text}
      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

export default Alert;