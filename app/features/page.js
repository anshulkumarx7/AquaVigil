import React from "react";
import Navbar from "../components/Navbar";

const Features = () => {
    return (
        <>
            <div className="min-h-screen py-12 bg-gradient-to-r from-white-400 to-gray-500">
                <Navbar />
                <div className="flex flex-col justify-center mt-20">
                    <div className="text-bold text-center">
                        <h1 className="text-3xl font-bold mb-6 text-center">Features</h1>
                        <div className="max-w-3xl w-full mt-10">
                            <div className="mb-8">
                                <h2 className="text-xl font-semibold mb-2">Post Classified Complaint</h2>
                                <p className="text-gray-600">With the power of enhanced Image Classification model We are able to acheive good insights into our problem.</p>
                            </div>
                            <div className="mb-8">
                                <h2 className="text-xl font-semibold mb-2"></h2>
                                <p className="text-gray-600">Description of feature 2 goes here.</p>
                            </div>
                            <div className="mb-8">
                                <h2 className="text-xl font-semibold mb-2">Chatbot</h2>
                                <p className="text-gray-600">Bring the power of Enhanced image Classification model and Large Language Model to converse with our Chatbot.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Features;