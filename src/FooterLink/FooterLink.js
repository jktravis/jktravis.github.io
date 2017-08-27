import React from 'react';

function FooterLink ({Icon, text, href}) {
return (
  <div>
    <a className="footer__link" href={href}>
      <span className="footer__link__key"><Icon/></span>: <span className="footer__link__value">"{text}"</span>,
    </a>
  </div>
  )
};

export default FooterLink;
