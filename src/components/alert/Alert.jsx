import './alert.scss';
import { useContext } from 'react';
import { AlertContext } from '../../context/alert/alertContext';


const Alert = () => {

  const {alert, hide} = useContext(AlertContext);
  if(!alert) return null;

  return (
    <div className={`alert alert-${alert.type} alert-dismissible`} role="alert">
      {alert.text}
      <button type="button" className="close" data-dismiss="alert" aria-label="Close"
      onClick={hide}>
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

export default Alert;