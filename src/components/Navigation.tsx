import * as React from 'react';
import { useState } from 'react';
import Hamburger from 'hamburger-react'

import './navigation.css';

const Navigation = () => {
    const [isOpen, setOpen] = useState(false);
    const handleHamburgerClick = () => {
        if (isOpen === true) {
            console.log("Hamburger is open");
        } else {
            console.log("Hamburger is closed")
        }
    }

    <nav>
        <div className="nav-widget container md:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} onClick={handleHamburgerClick()} />
            <></>
        </div>
    </nav>

    return (
        <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="/logo.png" className="h-12" alt="Logo" />
                </a>
                <button data-collapse-toggle="main-nav" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="main-nav" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div id="main-nav" className="items-center justify-between font-medium hidden w-full md:flex md:w-auto md:order-1">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Strona główna</a>
                        </li>
                        <li className="relative group">
                            <button className="flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                                Ośrodek <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" /></svg>
                            </button>
                            <div className="hidden group-hover:block absolute left-0 mt-2 md:mt-0 w-screen md:fixed md:top-[4rem] md:left-0 bg-white border-t border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-600">
                                <div className="container mx-auto px-4 py-6 grid md:grid-cols-3 gap-8 max-w-screen-xl">
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">O nas</h3>
                                        <ul className="space-y-3">
                                            <li><a href="/historia" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500">Historia ośrodka</a></li>
                                            <li><a href="/misja" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500">Misja i wizja</a></li>
                                            <li><a href="/patron" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500">Nasz patron</a></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Kadra</h3>
                                        <ul className="space-y-3">
                                            <li><a href="/dyrekcja" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500">Dyrekcja</a></li>
                                            <li><a href="/nauczyciele" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500">Nauczyciele</a></li>
                                            <li><a href="/specjalisci" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500">Specjaliści</a></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Dokumenty</h3>
                                        <ul className="space-y-3">
                                            <li><a href="/statut" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500">Statut</a></li>
                                            <li><a href="/regulamin" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500">Regulamin</a></li>
                                            <li><a href="/rodo" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500">RODO</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="/aktualnosci" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Aktualności</a>
                        </li>
                        <li>
                            <a href="/galeria" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Galeria</a>
                        </li>
                        <li>
                            <a href="/kontakt" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Kontakt</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Navigation;