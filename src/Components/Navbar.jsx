import { BsCartCheck } from "react-icons/bs";
const Navbar = () => {
    return (
        <div>
            <nav className="bg-white shadow-sm px-4 py-2 flex items-center justify-between">
                {/* Left: Logo */}
                <a
                    href="#"
                    className="flex items-center gap-2 text-xl font-semibold "
                    style={{ fontFamily: "Lora, serif" }}
                >
                    <img src="/src/assets/image/logo.png" alt="Logo" className="h-6 w-6" />
                    AROMA GHOR
                </a>
                <ul className="hidden lg:flex gap-6 text-gray-700">
                <li>
                    <a href="#" className="hover:text-gray-900">Item 1</a>
                </li>

                <li className="relative group">
                    <a href="#" className="hover:text-gray-900">Category</a>
                    <ul className="absolute left-0 mt-2 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all min-w-[150px]">
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100">Full Size Perfume</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100">Decant</a>
                    </li>
                    </ul>
                </li>

                <li>
                    <a href="#" className="hover:text-gray-900">Item 3</a>
                </li>
                </ul>



                {/* Right: Cart */}
                <a
                    href="#"
                    className="flex items-center gap-2"
                >
                    <BsCartCheck size={24} />
                    My Cart
                </a>
            </nav>
        </div>
    );
};

export default Navbar;