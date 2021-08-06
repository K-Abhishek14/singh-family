import React from 'react';
import './App.css';
import OrgChart from './component/chart';

function App() {
  return (
    <div className="App">
      <OrgChart nodes={
        [{ id: 1, name: "KISUN RAI" },
        { id: 2, pid: 1, name: "SHIV RAI" },
        { id: 3, pid: 1, name: "RAJA RAI" },
        { id: 2.1, pid: 2, name: "RAMDAYAL SINGH" },
        { id: 2.2, pid: 2, name: "KAPILDEV SINGH" },
        { id: 2.3, pid: 2, name: "TUKER SINGH" },
        { id: 3.1, pid: 3, name: "RAMAGYA SINGH" },
        { id: 2.11, pid: 2.1, name: "RAGHWA SINGH" },
        { id: 2.12, pid: 2.2, name: "RAMJI SINGH" },
        { id: 2.13, pid: 2.3, name: "GAUTAM SINGH" },
        { id: 3.11, pid: 3.1, name: "PARAS SINGH" },
        { id: 3.12, pid: 3.1, name: "SUKHDEV SINGH" },
        { id: 3.13, pid: 3.1, name: "BURMA SINGH" },
        { id: 2.111, pid: 2.11, name: "KASHI SINGH" },
        { id: 2.112, pid: 2.11, name: "ASHOK SINGH" },
        { id: 2.113, pid: 2.11, name: "BIRENDRA SINGH" },
        { id: 2.114, pid: 2.11, name: "BIJENDRA SINGH" },
        { id: 2.121, pid: 2.12, name: "RAJESH SINGH" },
        { id: 2.122, pid: 2.12, name: "SAILESH SINGH" },
        { id: 2.131, pid: 2.13, name: "RAKESH SINGH" },
        { id: 2.132, pid: 2.13, name: "MANORANJAN SINGH" },
        { id: 3.111, pid: 3.11, name: "BACHA SINGH" },
        { id: 3.112, pid: 3.11, name: "SAWALIYA SINGH" },
        { id: 3.113, pid: 3.11, name: "BAGESWER SINGH" },
        { id: 3.114, pid: 3.11, name: "TRIBHUWAN SINGH" },
        { id: 3.121, pid: 3.12, name: "HARENDRA SINGH" },
        { id: 3.122, pid: 3.12, name: "KABINDRA SINGH" },
        { id: 2.1111, pid: 2.111, name: "MUKESH SINGH" },
        { id: 2.1112, pid: 2.111, name: "NIKESH SINGH" },
        { id: 2.1121, pid: 2.112, name: "ARBIND SINGH" },
        { id: 2.1122, pid: 2.112, name: "ABHINASH SINGH" },
        { id: 2.1123, pid: 2.112, name: "ABHIMANUY SINGH" },
        { id: 2.1131, pid: 2.113, name: "AMIT SINGH" },
        { id: 2.1132, pid: 2.113, name: "SUMIT SINGH" },
        { id: 3.1111, pid: 3.111, name: "VIMAL SINGH" },
        { id: 3.1112, pid: 3.111, name: "MADHUSUDAN SINGH" },
        { id: 3.1113, pid: 3.111, name: "NAWALKISHOR SINGH" },
        { id: 3.1114, pid: 3.111, name: "AWADAHKISHOR SINGH" },
        { id: 3.1129, pid: 3.112, name: "BHARGAWA SINGH" },
        { id: 3.1131, pid: 3.113, name: "DHARMENDRA SINGH" },
        { id: 3.1141, pid: 3.114, name: "RAHUL SINGH" },
        { id: 3.1211, pid: 3.121, name: "BABLU SINGH" },
        { id: 3.1212, pid: 3.121, name: "DABLU SINGH" },
        { id: 3.1221, pid: 3.122, name: "PRINCE SINGH" },
        { id: 3.1222, pid: 3.122, name: "PAPU SINGH" },
        { id: 3.11112, pid: 3.1111, name: "PAPU SINGH" },
        { id: 3.11113, pid: 3.1111, name: "SONU SINGH" },
        { id: 3.11123, pid: 3.1112, name: "PANKAJ SINGH" },
        { id: 3.11124, pid: 3.1112, name: "RAJAN SINGH" },
        { id: 3.1121, pid: 3.1129, name: "ABHISHEK SINGH" },
        { id: 3.11412, pid: 3.1141, name: "DARSH SINGH" },
        { id: 3.11413, pid: 3.1141, name: "ANSH SINGH" },
        ]}
      />
    </div>
  );
}

export default App;
