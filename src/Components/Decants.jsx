import React from "react";

const Decants = () => {
  return (
    <div
      className="max-w-4xl mx-auto p-10 mt-20 rounded-xl shadow-md text-center"
      style={{ backgroundColor: "rgba(255, 198, 202, 0.3)" }}>
      <h3 className="text-pink-400 font-semibold mb-4 text-xl">
        Tight on budget? Try our decants!
      </h3>
      <h1 className="text-3xl md:text-3xl font-bold leading-snug">
        Small Bottle <br />
        Big Luxury</h1>
        <h1 className="text-3xl md:text-3xl font-bold mb-6 text-pink-400 blink">Low Price
      </h1>
      <table className="mx-auto border border-gray-300 rounded-md">
        <tbody>
          <tr className="border-b border-gray-300">
            <td className="px-6 py-2 font-semibold">5ml</td>
            <td className="px-6 py-2">65+ sprays</td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="px-6 py-2 font-semibold">10ml</td>
            <td className="px-6 py-2">135+ sprays</td>
          </tr>
          <tr>
            <td className="px-6 py-2 font-semibold">15ml</td>
            <td className="px-6 py-2">205+ sprays</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Decants;
