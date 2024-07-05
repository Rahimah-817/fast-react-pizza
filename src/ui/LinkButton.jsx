import { Link, useNavigate } from 'react-router-dom';

function LinkButton({ Children, to }) {
  const navigate = useNavigate();
  const className = 'hover:text-blue-650 text-sm text-blue-500 hover:underline';

  if (to === '-1')
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {Children}
      </button>
    );

  return (
    <Link to={to} className={className}>
      {Children}
    </Link>
  );
}

export default LinkButton;
