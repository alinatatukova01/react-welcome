import "./style.css";

function UserCard({ user }) {
  const {
    name: { first: firstName, last: lastName },
    email,
    picture: { medium: imageSrc },
    id: { value: id },
  } = user;

  return (
    <div className="user-card" key={id}>
      <img src={imageSrc} alt="User" />
      <h1>
        {firstName} {lastName}
      </h1>
      <p>{email}</p>
    </div>
  );
}

export default UserCard;
