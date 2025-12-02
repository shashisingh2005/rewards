// RewardsTable component to display rewards data in a table
const RewardsTable = ({ rewards, months }) => {
  if (!rewards || Object.keys(rewards).length === 0)
    return <p className="text-center text-gray-500 mt-4">No rewards data.</p>;

  return (
    <div className="overflow-x-auto shadow rounded-md">
      <table className="min-w-full border-collapse bg-white border border-gray-200 rounded-md">
        <thead>
          <tr className="bg-gray-400 text-white">
            <th className="p-2 border">Customer</th>
            {months.map((m) => (
              <th key={m} className="p-2 border">
                {m}
              </th>
            ))}
            <th className="p-2 border">Total</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(rewards).map(
            ([customer, { months: mData, total }]) => (
              <tr key={customer} className="hover:bg-blue-50">
                <td className="p-2 border border-gray-300">{customer}</td>
                {months.map((m) => (
                  <td
                    key={m}
                    className="p-2 border text-center border border-gray-300"
                  >
                    {mData[m] || 0}
                  </td>
                ))}
                <td className="p-2 border font-semibold text-center border border-gray-300">
                  {total}
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default RewardsTable;
