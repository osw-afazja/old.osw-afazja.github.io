import React from 'react';

import { Button } from '../Button';
import './footer.css';

type User = {
  name: string;
};

export interface FooterProps {
  user?: User;
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
}

export const Footer = ({ user, onLogin, onLogout, onCreateAccount }: FooterProps) => (
  <footer>
    <div className="footer-container">
      <div className="box">
        <h3>Adres</h3>
        <p>Zespół Szkolno Przedszkolny dla Dzieci z Afazją Zgromadzenia Sióstr Felicjanek</p>
        <p>ul. St. Millana 15, 30-610 Kraków Tel: 12 266-34-67 E-mail: sos-w@o2.pl</p>
      </div>
      <div className="box">
        <p>Wirtualny spacer po ośrodku</p>    
      </div>
      <div className="box">
        <h3>Nasze strony</h3>
        <p>Zgromadzenie Sióstr Felicjanek</p>
        <p>Zgromadzenie Sióstr Felicjanek - prowincja krakowska</p>
      </div>            
    </div>
  </footer>
);
