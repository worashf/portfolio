import { useRef } from 'react';
import MoblieNavbar from './MoblieNavbar';
import DesktopNavbar from './DesktopNavbar';
const Navbar = () => {
  const sideBarRef = useRef();

  function toogleSideBar() {
    sideBarRef.current.classList.toggle('-translate-x-full');
    // sideBarRef.current.classList.toggle('overflow-y-hidden');
  }
  return (
    <div className="max-h-screen md:sticky md:top-0  z-50 text-white overflow-y-hidden overflow-x-hidden">
      {/* MOBILE SIDEBAR */}
      <MoblieNavbar toogleSideBar={toogleSideBar} />
      {/* MAIN SIDEBAR */}
      <DesktopNavbar sideBarRef={sideBarRef} />
    </div>
  );
};

export default Navbar;
