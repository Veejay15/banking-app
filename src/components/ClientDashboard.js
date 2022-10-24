import React, {useState} from 'react';
import { Sidebar } from './Sidebar';
import { findAccount } from './Utils';
import { BudgetApp } from './BudgetApp';

export const ClientDashboard = (props) => {
    const { logout, client, setClient } = props;
   
    const [ page, setPage ] = useState('home');

  
    const changePageHandler = (pageName) => {
      setPage(pageName);
      const currentUser = findAccount(client.number);
      setClient(currentUser);
    }
  
    if(page === 'home') {
      
      return (
        <main>
        <Sidebar changePage={changePageHandler} page={page} user={client} logoutHandler={props.logout} />
        <BudgetApp client={client} />
      </main>
    )
      
    }
  

}
