import Link from 'next/link';

const portfolios = [
    {
        title: "Mentors Parlor",
        description: "Find true one-on-one mentorship from experts who can relate to you. ",
        image: "images/mentors.png",
        url: "https://www.mentorsparlor.com",
        type: "Web App"
    },
    {
        title: "CyberNeighbors",
        description: "Community for apartment buildings and tenants alike.",
        image: "images/neighbors.png",
        url: "https://www.cyberneighbors.com",
        type: "Web App"
    },
    {
        title: "Garage API",
        description: "Make decisions based on what's trending in real time.",
        image: "../images/api.png",
        url: "https://www.garage-api.com",
        type: "Web App"
    },
    {
        title: "TuberDome",
        description: "Watch movies, tv, and stream contents based on how you feel.",
        image: "../images/tuberdome.png",
        url: "https://www.tuberdome.com",
        type: "Web/Mobile"
    },
]

const Portfolio = props => {
    return (
        <>
        {portfolios.map((item, indx ) => (
                <div className="max-w-sm overflow-hidden rounded shadow-lg mt-3 mb-4" key={indx}>
                <ul  >
                    <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
                        <div className="flex-1 flex flex-col p-8">
                        <img className="w-64 h-32 flex-shrink-0 mx-auto bg-black rounded-t-lg" src={item.image} alt={item.title}/>
                        <h3 className="mt-6 text-gray-900 text-sm font-medium">{item.title}</h3>
                        <dl className="mt-1 flex-grow flex flex-col justify-between">
                            <dt className="sr-only">{item.title}</dt>
                            <dd className="text-gray-500 text-sm">{item.description}</dd>
                            <dt className="sr-only">Role</dt>
                            <dd className="mt-3">
                            <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">{item.type}</span>
                            </dd>
                        </dl>
                        </div>
                        <div>
                        <div className="-mt-px flex divide-x divide-gray-200">
                            <div className="w-0 flex-1 flex">
                            <a href={item.url} className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500">
                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clip-rule="evenodd" />
                                </svg>
                                <span className="ml-3">Website:</span>
                            </a>
                            </div>
                            <div className="-ml-px w-0 flex-1 flex">
                            <a href={item.url} className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500">
                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                                </svg>
                                <span className="ml-3" ><a href={item.url}>Visit</a></span>
                            </a>
                            </div>
                        </div>
                        </div>
                        </li>
                </ul>
            </div>
            )
        )}          
        </>
    )
}

export default Portfolio;




