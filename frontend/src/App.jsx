import { useEffect } from 'react';
import Navbar from './components/Navbar';
import AppRoute from './routes/AuthRoute';
import { useDispatch } from 'react-redux';
import { axiosInstance } from './config/axiosInstance';
import { setUser } from './store/features/authSlice';


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        let me = await axiosInstance.get("/auth/me");
        console.log(me.data.user);
        if (me) {
          dispatch(setUser(me?.data?.user));
        }
      } catch (error) {
        console.log("errro in / me router");
      }
    })();
  }, []);

  return (
    <div>
      <Navbar />
      <AppRoute />
    </div>
  )
}

export default App