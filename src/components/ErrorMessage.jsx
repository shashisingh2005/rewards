// Component to display error messages
const ErrorMessage = ({ message }) => (
  <div className="text-red-600 bg-red-100 border border-red-400 rounded-md p-3 text-center mt-4">
    {message}
  </div>
);

export default ErrorMessage;
