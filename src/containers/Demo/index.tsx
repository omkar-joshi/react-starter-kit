import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Loader from 'src/components/Loader';
import { getDemoData, getMockData } from 'src/state/demo/actions';

const Demo: React.FC = () => {
  const { loading, posts, mockPosts } = useSelector((state: ReduxStore) => ({
    posts: state.demo.data,
    loading: state.common.demoLoading,
    mockPosts: state.demo.mockData,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDemoData());
    dispatch(getMockData());
    /* tslint:disable-next-line */
  }, []);

  if (loading) {
    return <Loader animation="border" />;
  }

  return (
    <>
      <h4>API Data - </h4>
      <div>{JSON.stringify(posts)}</div>
      <h4>Mock Data - </h4>
      <div>{JSON.stringify(mockPosts)}</div>
    </>
  );
};

export default Demo;
