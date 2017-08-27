import React from 'react';

function FooterLink ({Icon, text, href}) {
return (
  <div>
    <a className="footer__link" href={href}>
      <Icon/>: "{text}",
    </a>
  </div>
  )
};

export default FooterLink;
