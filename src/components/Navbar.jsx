import {BiCameraMovie} from "react-icons/bi";
import {GiHamburgerMenu} from "react-icons/gi";
const Navbar = () => {
    return ( 
        <>
        <div className="p-6 border-2 rounded-2xl shadow-lg">
            <div className="flex items-center justify-between">
                <div className="flex items-center cursor-pointer">
                <BiCameraMovie className="text-4xl"/> 
                <p className="text-3xl ml-2 font-karla">MOV</p>
                </div>
                <button><GiHamburgerMenu className="text-3xl"/></button>
            </div>
        </div>
        </>
     );
}
 
export default Navbar;