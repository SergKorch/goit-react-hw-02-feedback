import PropTypes from 'prop-types';
import s from './transactions.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={s.transactionHistorys}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} style={{ backgroundColor: getColor(type) }}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

function getColor(type) {
  if (type === 'invoice') {
    return 'green';
  } else if (type === 'payment') {
    return 'yellow';
  } else if (type === 'deposit') {
    return 'brown';
  }
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
