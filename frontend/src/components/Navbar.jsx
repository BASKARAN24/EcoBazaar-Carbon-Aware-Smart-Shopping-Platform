import React from "react";


const Navbar = ({ cartCount }) => {
return (
<nav className="flex justify-between items-center p-4 shadow-md bg-green-600 text-white">
<h1 className="text-2xl font-bold">EcoBazaar 🌱</h1>
<div className="text-lg">Cart: {cartCount}</div>
</nav>
);
};