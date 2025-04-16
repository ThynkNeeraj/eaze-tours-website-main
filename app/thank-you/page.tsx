'use client';

import React from "react";

export default function ThankYouPage() {
    return (
        <div className="mt-[135px] sm:mt-[165px] p-12 text-center">
            <h1 className="text-4xl font-bold text-green-500">Thank You!</h1>
            <p className="mt-4 text-xl text-gray-700">
                Your submission has been received. We appreciate your interest!
            </p>
            <p className="mt-4 text-lg text-gray-500">
                We'll get back to you soon with more details. In the meantime, feel free to explore our other offerings.
            </p>
            <div className="mt-8">
                <a href="/" className="text-lg text-blue-500 hover:underline">
                    Go back to the homepage
                </a>
            </div>
        </div>
    );
}