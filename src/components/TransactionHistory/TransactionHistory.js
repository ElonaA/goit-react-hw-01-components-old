import PropTypes from "prop-types";
import s from "./TransactionHistory.module.css";

function TransactionHistory({ items }) {
  return (
    <table className={s.history}>
      <thead>
        <tr className={s.headerRow}>
          <th className={s.tableHeader}>Type</th>
          <th className={s.tableHeader}>Amount</th>
          <th className={s.tableHeader}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={s.row} key={id}>
            <td className={s.value}>
              {type.slice(0, 1).toUpperCase() + type.slice(1)}
            </td>
            <td className={s.value}>{amount}</td>
            <td className={s.value}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default TransactionHistory;
