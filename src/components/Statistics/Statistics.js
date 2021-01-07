import PropTypes from "prop-types";
import s from "./Statistics.module.css";
import getRandomColor from "./randomColorPicker";

function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.statList}>
        {stats.map((stat) => (
          <li
            key={stat.id}
            className={s.item}
            style={{ backgroundColor: getRandomColor() }}
          >
            <span className={s.label}>{stat.label}: </span>
            <span className={s.percentage}>{stat.percentage} %</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ),
};

Statistics.defaultProps = {
  stats: {
    percentage: 0,
  },
};

export default Statistics;
