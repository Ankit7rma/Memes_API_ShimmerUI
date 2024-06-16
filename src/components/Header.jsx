const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "22px",
      }}
    >
      <div>
        <a href="/">Header</a>
      </div>
      <a href="/about">About</a>
      <a href="/team">Team</a>
      <a href="/login">Login</a>
    </div>
  );
};
export default Header;
