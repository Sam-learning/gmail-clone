import React from 'react';
import './App.css';
import Header from './header/header';
import Sidebar from './sidebar/sidebar';
import MailList from './MailList/MailList';
import Mail from './Mail/Mail'
import SendMail from './SendMail/SendMail';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import { selectSendMessageIsOpen } from './features/mailSlice'
//useSelector 接收redux state，並取出state中的值
import { useSelector } from 'react-redux'

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  {console.log(sendMessageIsOpen)}

  return (
    <Router>
      <div className="App">
        <Header />
        <div className='app-contain'>
          <Sidebar />
          <Switch>
            <Route path="/mail">
              <Mail />
            </Route>
            <Route path="/">
              <MailList />
            </Route>
          </Switch>
        </div>
        
        {sendMessageIsOpen && <SendMail />}
        
      </div>
    </Router>
  );
}

export default App;
