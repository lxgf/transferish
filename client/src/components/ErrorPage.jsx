import React from 'react';

const ErrorPage = () => {
    return (
        <div className="h-screen w-full flex flex-col justify-center items-center text-center">
            <h1 className="text-dark font-heading font-bold text-6xl lg:text-7xl">404</h1>
            <hr className="mt-6 mb-2 h-1 bg-dark w-32"/>
            <h1 className="text-dark font-heading font-bold text-3xl lg:text-4xl">Здесь ничего неть...</h1>
            <h1 className="mt-2 text-gray-500 text-lg lg:text-xl">беги скорее отсюда на <a className="underline" href="/">главную</a></h1>
        </div>
    );
};

export default ErrorPage;
