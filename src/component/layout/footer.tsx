import React from 'react';


export const Footer = () => {
    return (
        <div className="h-60 py-20 bg-primary w-full">
            <div className="max-w-3xl mx-auto  text-white mb-10">
                <div className="grid grid-rows-1 grid-flow-col gap-4">
                    <div>
                        <a href="http://move.is/" className=" hover:underline">
                            <h1>Move</h1>
                            <h1 style={{color: "#999"}}>our corporate site</h1>
                        </a>
                    </div>
                    <div>
                        <a href="https://class.orbi.kr/" className=" hover:underline">
                            <h1>Orbi Class</h1>
                            <h1 style={{color: "#999"}}>on-line classes</h1>
                        </a>
                    </div>
                    <div>
                        <a href="https://atom.ac/" className=" hover:underline">
                            <h1>Atom</h1>
                            <h1 style={{color: "#999"}}>educational books & resources</h1>
                        </a>
                    </div>
                    <div>
                        <a href="https://crewbi.com/" className=" hover:underline">
                            <h1>Crewbi</h1>
                            <h1 style={{color: "#999"}}>street fashion</h1>
                        </a>
                    </div>
                    <div>
                        <a href="https://gae9.com/trend/hottest" className=" hover:underline">
                            <h1>Gae9</h1>
                            <h1 style={{color: "#999"}}>humor and fun</h1>
                        </a>
                    </div>
                </div>
            </div>
            <div className="mx-auto text-white text-center text-sm bg-primary">
                <h1>© 2000-2021 Move Inc.</h1>
                <h1>orbisoptimus</h1>
            </div>
        </div>
    )
}