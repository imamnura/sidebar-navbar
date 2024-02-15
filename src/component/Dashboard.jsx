import Navbar from "./Navbar";
import PropTypes from "prop-types";

const Dashboard = ({ sidebarToggle, setSidebarToggle }) => {
  console.log(sidebarToggle);
  return (
    <div className={`${sidebarToggle ? "" : "ml-64"} w-full`}>
      <Navbar
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
      />
    </div>
  );
};

Dashboard.propTypes = {
  sidebarToggle: PropTypes.bool.isRequired,
  setSidebarToggle: PropTypes.func.isRequired,
};

export default Dashboard;
