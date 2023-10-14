import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <main className="max-w-7xl min-h-screen mx-4 md:mx-auto">{children}</main>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
