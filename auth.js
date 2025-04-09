// logging in and using context to make the user logged-in on ALL pages
import { useState, useContext, createContext } from "react"

const AuthContext = createContext();

export default function Auth() {

    const { isLoggedIn, toggleLogIn } = useState(false);
    const [selected, setSelected] = useState("login");
    const [action, setAction] = useState("Login");

    return (
        <div>
            <div>
                <div className="bg-white border shadow-2xl w-[60lvh] h-[65lvh] m-auto mt-[15lvh] rounded">
                <div className=" border border-b-5">
                    <h1 className="text-2xl m-auto mt-5 flex justify-center uppercase text-aesthetic-darkgreen p-4">{action}</h1>
                </div>
                {/* user input (sign up)*/}
                <div className="mt-5 flex justify-center inline-block m-auto">
                    <div className="ml-25 bg-whitecream mb-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 inline-block text-moderngray m-2">
                         <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                        <input type="text" placeholder="name..." className="text-black bg-whitecream  m-5"/>
                    </div>
                    <div className="ml-25 bg-whitecream mb-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 inline-block text-moderngray m-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                        </svg>
                        <input type="email" placeholder="email..."className="text-black bg-whitecream m-5"/>
                    </div>
                    <div className="ml-25 bg-whitecream mb-5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 inline-block text-moderngray m-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg>
                        <input type="password" placeholder="password..."className="text-black bg-whitecream m-5"/>
                    </div>
                </div>
                {/* user input (log in)*/}
                <div className="mt-15 flex justify-center inline-block p-4 m-auto">
                    <div className="ml-25 hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 inline-block text-moderngray">
                         <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                        <input type="text" placeholder="name..." className="text-black bg-whitecream p-1 m-5"/>
                    </div>
                    <div className="ml-25 hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 inline-block text-moderngray">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg>
                        <input type="password" placeholder="password..."className="text-black bg-whitecream m-5"/>
                    </div>
                </div>
                {/* buttons */}
                <div className="inline-block">
                    <button
                        id="login" 
                        onClick={() => setSelected("login", setAction("Log In"))}
                        className={`border border-moderngray rounded-full ${selected === "login" ?  "font-bold" : ""} text-aesthetic-darkgreen text-[3lvh] cursor-pointer p-3 ml-[17lvh]`}
                        >Log In
                    </button>

                    <button
                        id="signup" 
                        onClick={() => setSelected("signup", setAction("Sign Up"))} 
                        className={`border border-moderngray rounded-full ${selected === "signup" ?  "font-bold" : ""} text-aesthetic-darkgreen text-[3lvh] cursor-pointer p-3 ml-[17lvh]`}
                        >Sign Up
                    </button>
                </div>
                </div>
            </div>
        </div>
    )
}