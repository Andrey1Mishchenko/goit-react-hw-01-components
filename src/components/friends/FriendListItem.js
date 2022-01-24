import PropTypes from "prop-types";

import s from "./friends.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusClass = isOnline ? s.statusOnline : s.statusOffline;

  return (
    <li className={s.item}>
      <span className={statusClass}>{isOnline}</span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
