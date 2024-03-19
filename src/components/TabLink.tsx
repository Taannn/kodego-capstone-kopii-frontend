type TabLinkProps = {
  href: string;
  label: string;
  active: boolean;
}
const TabLink: React.FC<TabLinkProps> = ({
  href,
  label,
  active
}) => {
  return (
    <li className="nav-item">
      <a className={`nav-link${active ? ' active': ''}`} data-bs-toggle="tab" href={href}>{label}</a>
    </li>
  );
};

export default TabLink;