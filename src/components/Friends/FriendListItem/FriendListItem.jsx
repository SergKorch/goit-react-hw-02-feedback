import s from '../friends.module.css';

export const FriendListItem = ({ avatar, name, isOnline}) => {
  return (
    <li className={s.item}>
      <span
        className={s.status}
        style={{ backgroundColor: getColor(isOnline) }}
      >
        {isOnline}
      </span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

const getColor = status => {
  if (status) {
    return 'green';
  } else {
    return 'red';
  }
};

