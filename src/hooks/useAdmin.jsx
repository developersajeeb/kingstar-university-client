import { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useAdmin = () => {
    const { user, loading } = useAuth();
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true);

    useEffect(() => {
        if (!loading && user) {
          setIsAdminLoading(true);
    
          fetch(`http://localhost:5000/user/admin/${user.email}`)
            .then((response) => response.json())
            .then((data) => {
              setIsAdmin(data.admin);
              setIsAdminLoading(false);
            })
            .catch((error) => {
              console.error('Error while fetching admin status:', error);
              setIsAdmin(false);
              setIsAdminLoading(false);
            });
        }
      }, [user, loading]);

      return [isAdmin, isAdminLoading];
};

export default useAdmin;