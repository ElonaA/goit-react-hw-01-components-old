import PropTypes from "prop-types";
import styled from "styled-components";
import s from "./FriendListItem.module.css";

const StatusButton = styled.span`
  display: block;
  background: ${(props) => (props.status ? "green" : "red")};
  width: 20px;
  height: 20px;
  margin: 10px;
  border-radius: 100%;
`;

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={s.item}>
      <StatusButton status={isOnline}></StatusButton>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};

FriendListItem.defaultProps = {
  isOnline: false,
};

export default FriendListItem;
