import { useEffect, useState } from "react";
import RewardsTable from "../components/RewardsTable";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import Dropdown from "../components/Dropdown";
import { fetchTransactions } from "../apis/rewardsService";
import { calculateCustomerRewards } from "../utils/calculateRewards";

const RewardsContainer = () => {
  const [rewards, setRewards] = useState({});
  const [months, setMonths] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [monthRange, setMonthRange] = useState(
    () => localStorage.getItem("monthRange") || "3"
  );

  useEffect(() => {
    const loadData = async () => {
      try {
        const transactions = await fetchTransactions();
        const { rewards, months } = calculateCustomerRewards(
          transactions,
          Number(monthRange)
        );
        setRewards(rewards);
        setMonths(months);
        setError("");
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [monthRange]);

  const handleRangeChange = e => {
    setMonthRange(e.target.value);
    localStorage.setItem("monthRange", e.target.value);
  };

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div>
      <Dropdown value={monthRange} onChange={handleRangeChange} />
      <RewardsTable rewards={rewards} months={months} />
    </div>
  );
};

export default RewardsContainer;
