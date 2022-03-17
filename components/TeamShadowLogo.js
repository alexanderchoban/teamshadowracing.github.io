import clsx from 'clsx'

const TeamShadowLogo = ({ racing, children, white }) => (
  <div className="toggleColour no-underline hover:no-underline text-black font-bold text-2xl lg:text-4xl">
    <>
      <span className={clsx('logo-team-text', white && 'white')}>team</span>
      <span className="logo-shadow-text">Shadow</span>
      {racing && <span className="logo-racing-text">Racing</span>}
      {children && <span className="logo-children-text">{children}</span>}
    </>
  </div>
);

export default TeamShadowLogo;
