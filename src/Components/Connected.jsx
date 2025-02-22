import React from "react";
import { contractAddress , reportsdata} from "../Constant/constant";

const Connected = (props) => {

    // console.log(props.candidates);

    return (
        <div className="p-8">
        < h1 class="flex justify-center align-middle p-5 items-center text-2xl font-bold text-black">Decentralized Voting Blockchain Application<span class="bg-blue-100 text-blue-800 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-2">DAPP</span></h1>
            <div className="connected-container gap-6 ">
            <div className="flex justify-between w-full space-x-6">
    {/* Left Table - Account Details */}
    <div className="w-1/2 p-4 bg-white shadow-md rounded-lg">
        <h1 className="text-xl font-medium mb-4">Account</h1>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border-collapse">
            <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                        Connection Status
                    </th>
                    <td className="px-6 py-4">
                        <span className="flex items-center text-sm font-medium text-gray-900 dark:text-white">
                            <span className="flex w-2.5 h-2.5 bg-teal-500 rounded-full mr-1.5"></span> 
                            <h1 className="ml-2">
                                Online
                                </h1> 
                        </span>
                    </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                        AccountID
                    </th>
                    <td className="px-6 py-4">{props.account}</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                        Account Source
                    </th>
                    <td className="px-6 py-4">Metamask</td>
                </tr>
            </tbody>
        </table>
    </div>

    {/* Right Table - Voting Details */}
    <div className="w-1/2 p-4 bg-white shadow-md rounded-lg">
        <h1 className="text-xl font-medium mb-4">Voting Details</h1>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border-collapse">
            <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                        Contract Address
                    </th>
                    <td className="px-6 py-4">{contractAddress}</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                        Remaining Time
                    </th>
                    <td className="px-6 py-4">{props.remainingTime}</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                        Status
                    </th>
                    <td className="px-6 py-4">
                        {props.showButton ? "You have already Voted" : "You Haven't Voted"}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
            </div>


            {!props.showButton && (
    <div className="max-w-md mx-auto bg-white p-5 rounded-lg shadow-md dark:bg-gray-800">
        <label htmlFor="number-input" className="block mb-2 text-lg font-semibold text-gray-900 dark:text-white">
            Enter Candidate Index:
        </label>
        <form className="flex items-center space-x-3">
            <input
                type="number"
                id="number-input"
                value={props.number}
                onChange={props.handleNumberChange}
                placeholder="Enter Index"
                className="w-full sm:w-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 
                dark:focus:border-blue-500"
                required
            />
            <button
                type="button"
                onClick={props.voteFunction}
                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 
                font-medium rounded-lg text-lg px-6 py-3 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 
                dark:border-gray-700"
            >
                Vote
            </button>
        </form>
    </div>
            )}

            
            <div className="relative overflow-x-auto p-6 bg-white shadow-lg rounded-lg">
    <h1 className="text-2xl font-semibold text-gray-900 mb-4">Standings</h1>

    <table className="w-full text-sm text-left text-gray-700 dark:text-gray-400 border-collapse">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-300">
            <tr>
                {["Index",
                 "Name",
                 "votes",
                  "Age", "Party", "District", "Alliance", "Symbol", "Ward"].map((heading) => (
                    <th key={heading} className="px-6 py-3 text-center">
                        {heading}
                    </th>
                ))}
            </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
            {props.candidates.map((candidate, index) => {
                const report = reportsdata.find(report => report.key === index);

                return (
                    <tr key={index} className="odd:bg-gray-50 even:bg-white hover:bg-gray-100 transition-all">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center">
                            {index}
                        </th>
                        <td className="px-6 py-4 text-center">{candidate.name}</td>
                        <td className="px-6 py-4 text-center">{candidate.voteCount}</td>
                        <td className="px-6 py-4 text-center">{report ? report.Age : "--"}</td>
                        <td className="px-6 py-4 text-center">{report ? report.Party : "--"}</td>
                        <td className="px-6 py-4 text-center">{report ? report.Location : "--"}</td>
                        <td className="px-6 py-4 text-center">{report ? report.Alliance : "--"}</td>
                        <td className="px-6 py-4 text-center">{report ? report.Symbol : "--"}</td>
                        <td className="px-6 py-4 text-center">{report ? report.Ward : "--"}</td>
                    </tr>
                );
            })}
        </tbody>
    </table>
            </div>


        

            </div>
        </div>
    )
}

export default Connected;