import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import BankSampah from './banksampah';
import Home from './home';
import Layout from './layout';
import { getDataFromLocal } from './../container/localstorage/localstorages';
import SetorSampah from './setorsampah';
import Profile from './profile';
import Saldo from './saldo';
import TrashLocation from './trashlocation';
import TukarSaldo from './tukarsaldo';
import UpChallenge from './upchallenge';
import UpForest from './upforest';

function Index() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedData = getDataFromLocal();

    if (storedData) {
      setUser(storedData);
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout user={user} setUser={setUser} />}>
          <Route index element={<Home user={user} setUser={setUser} />} />
          <Route path="banksampah" element={<BankSampah />} />
          <Route path="setorsampah" element={<SetorSampah />} />
          <Route path="profile" element={<Profile user={user} setUser={setUser}/>} />
          <Route path="saldo" element={<Saldo />} />
          <Route path="trashlocation" element={<TrashLocation />} />
          <Route path="tukarsaldo" element={<TukarSaldo />} />
          <Route path="upchallenge" element={<UpChallenge />} />
          <Route path="upforest" element={<UpForest />} />
          {/* <Route path="sampah" element={user ? <Sampah /> : <Navigate to="/" />} */}
        </Route>
      </Routes>
    </>
  );
}

export default Index;
