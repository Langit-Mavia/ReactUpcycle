import Frame_2012 from './../assets/img/Frame 2012.png';
import Frame_2050 from './../assets/img/Frame 2050.png';
import manfaat1 from './../assets/img/manfaat1.png';
import manfaat2 from './../assets/img/manfaat2.png';
import bank1 from './../assets/img/bank1.png';
import bank2 from './../assets/img//bank2.png';
import Eduvid from "./eduvid";
import Sponsor from "./sponsor";
import Yakin from "./yakin";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import Mission from './mission';

const tukarSaldo = () => {
  const [selectedMethod, setSelectedMethod] = useState('');
  const [walletNumber, setWalletNumber] = useState('');
  const [saldoAmount, setSaldoAmount] = useState('');
  const handleTukarSaldo = () => {
    toast.warning('Your transaction is being processed', { position: toast.POSITION.TOP_CENTER });
    setTimeout(() => {
      if(selectedMethod === '' || walletNumber === '' || saldoAmount === ''){
        toast.error('Please fill all the fields', { position: toast.POSITION.TOP_CENTER });
      } else if(saldoAmount < 50000){
        toast.error('Minimum amount to be withdrawn is Rp. 50.000,-', { position: toast.POSITION.TOP_CENTER });
      }
      else{
        setTimeout(() => {
        toast.success('Your transaction has been processed', { position: toast.POSITION.TOP_CENTER });
        setSelectedMethod('');
        setWalletNumber('');
        setSaldoAmount('');
        }, 3000);
      };
    }, 2000);
  }
  return (
    <>
     
       
        
       
    </>
  );
}

export default tukarSaldo;
