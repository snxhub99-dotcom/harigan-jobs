import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = href.substring(1); // Remove '#'
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="text-text-light font-medium hover:text-accent-gold hover:border-b-2 hover:border-accent-gold pb-1 transition duration-200 ease-in-out"
      aria-label={`Scroll to ${children}`}
    >
      {children}
    </a>
  );
};

export { NavLink };
