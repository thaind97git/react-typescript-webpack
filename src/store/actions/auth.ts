import { Dispatch } from 'redux';
import { getCurrentUser } from '@/apis/auth';
import { history } from '@/store';
import { getToken } from '@/helpers/local-storage';
import { setLoading } from '../slices/appSlice';
import { setCurrentUser, setAuthenticated } from '../slices/authSlice';

export const verifyToken =
  () =>
  async (dispatch: Dispatch): Promise<void> => {
    if (!getToken()) {
      history.push('/login');
    }
    try {
      dispatch(setLoading(true));

      dispatch(setCurrentUser(null));
      dispatch(setAuthenticated(false));

      const { data } = await getCurrentUser();

      if (data) {
        dispatch(setCurrentUser({ ...(data as object) }));
        dispatch(setAuthenticated(true));
      }
    } catch (error) {
      history.push('/login');
    } finally {
      dispatch(setLoading(false));
    }
  };
