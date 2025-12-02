// Dropwdown for selecting months range
const Dropdown = ({ value, onChange }) => (
  <div className="flex justify-end mb-4">
    <select
      value={value}
      onChange={onChange}
      className="border border-gray-300 rounded-md p-2"
    >
      <option value="3">Last 3 Months</option>
      <option value="6">Last 6 Months</option>
      <option value="12">Last 12 Months</option>
    </select>
  </div>
);

export default Dropdown;
