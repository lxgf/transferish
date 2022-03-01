import React, {useEffect} from 'react';

const Header = () => {
    const [menuVisible, setMenuVisible] = React.useState(false);
    useEffect(() => {
        if(window.innerWidth >= 1024)
            setMenuVisible(!menuVisible)
    }, []);
    return (
        <header className="fixed w-full bg-dark text-white z-50">
            <nav className="flex flex-col lg:flex-row lg:justify-between lg:container p-4 lg:px-24">
                <div className="flex flex-row items-center justify-between">
                    <div className="py-2 font-bold text-xl">Transferish</div>
                    <img onClick={() => setMenuVisible(!menuVisible)} src={require('../images/menu.svg').default} alt="Меню" className="h-5 lg:hidden"/>
                </div>
                {menuVisible &&
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
                    <a href="/" className="transform transition duration-150 ease-in-out hover:translate-x-2 lg:hover:translate-x-0 lg:hover:text-gray-300 lg:px-3">Загрузить файлы</a>
                    <a href="/" className="transform transition duration-150 ease-in-out hover:translate-x-2 lg:hover:translate-x-0 lg:hover:text-gray-300 lg:px-3">Поиск по ID</a>
                    <a href="/terms/" className="transform transition duration-150 ease-in-out hover:translate-x-2 lg:hover:translate-x-0 lg:hover:text-gray-300 lg:px-3">Условия использования</a>
                    <a href="/" className="transform transition duration-150 ease-in-out hover:translate-x-2 lg:hover:translate-x-0 lg:hover:text-gray-300 lg:px-3">Вход</a>
                </div>
                }
            </nav>
        </header>
    );
};

export default Header;