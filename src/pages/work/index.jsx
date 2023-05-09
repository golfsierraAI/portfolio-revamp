import { useNavigate } from 'react-router-dom';
import './index.scss';
function Work() {
  const navigate = useNavigate();
  return (
    <div className="work_wrapper">
      <p>
        I recently encountered some challenges with my web projects that were deployed on Heroku.
        Due to the platform's changes to its pricing structure, my earlier deployed projects have
        become inaccessible. However, I am actively working to deploy them again on other providers.
        This process involves updating my code and configurations to ensure they work correctly with
        the new infrastructure. Although it may take some time and effort, I am determined to get my
        projects back up and running as soon as possible.
      </p>
      <p>
        This process involves updating my code and configurations to ensure they work correctly with
        the new infrastructure. Although it may take some time and effort, I am determined to get my
        projects back up and running as soon as possible.
      </p>

      <button className="button" onClick={() => navigate('/')}>
        Go Home
      </button>
    </div>
  );
}
export default Work;
