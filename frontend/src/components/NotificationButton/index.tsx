import axios from 'axios';
import { toast } from 'react-toastify';
import icon from '../../assets/img/notification-icon.svg';
import { BASE_URL } from '../../utils/request';
import './styles.css';

type props = {
  saleId: number;
}

function handleClick(id : number){
  axios(`${BASE_URL}/sales/${id}/notification`)
    .then(Response => {
      toast.info("SMS enviado com sucesso");
    })
}

function NotificationButton( {saleId} : props ) {
  return (
    <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
      <img src={icon} alt="Notificar" />
    </div>
  )
}

export default NotificationButton;