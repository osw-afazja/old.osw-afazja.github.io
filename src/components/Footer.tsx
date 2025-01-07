import React from 'react';

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

const Footer = (footerProps: FooterProps) => (
    <footer>

        <div className="footer-widget container mx-auto md:columns-3 overflow-hidden">
            <div>
                <h3 className="footer-title">Adres</h3>
                <p>Zespół Szkolno Przedszkolny<br />dla Dzieci z Afazją<br />Zgromadzenia Sióstr Felicjanek</p>
                <p>ul. St. Millana 15, 30-610 Kraków<br />Tel: 12 266-34-67<br />E-mail: sos-w@o2.pl</p>
            </div>
            <div className='quotation-widget'>
                <p className="quotation">Wirtualny spacer po ośrodku</p>
            </div>
            <div>
                <h3 className="footer-title">Nasze strony</h3>
                <p>Zgromadzenie Sióstr Felicjanek</p>
                <p>Zgromadzenie Sióstr Felicjanek - prowincja krakowska</p>
            </div>
        </div>

    </footer >
);

export default Footer;