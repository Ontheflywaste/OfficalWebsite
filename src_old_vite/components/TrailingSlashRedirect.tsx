import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function TrailingSlashRedirect() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== '/' && location.pathname.endsWith('/')) {
      const pathWithoutSlash = location.pathname.slice(0, -1);
      navigate(pathWithoutSlash + location.search + location.hash, { replace: true });
    }
  }, [location, navigate]);

  return null;
}
