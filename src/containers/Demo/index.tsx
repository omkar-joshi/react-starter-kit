import React from 'react';
import { connect } from 'react-redux';

import Loader from 'src/components/Loader';
import { getDemoData, getMockData } from 'src/state/demo/actions';

interface IDemoDispatchProps {
  fetchDemoData: () => void;
  fetchMockData: () => void;
}

interface IDemoStateProps {
  posts: DemoData[];
  loading: boolean;
  mockPosts: DemoData[];
}

type IDemoProps = IDemoDispatchProps & IDemoStateProps;

class Demo extends React.Component<IDemoProps> {
  componentDidMount() {
    this.props.fetchDemoData();
    this.props.fetchMockData();
  }

  render() {
    const { loading, posts, mockPosts } = this.props;
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
  }
}

const mapStateToProps = (state: ReduxStore) => ({
  posts: state.demo.data,
  loading: state.common.demoLoading,
  mockPosts: state.demo.mockData,
});

const mapDispatchToProps = (dispatch: Dispatch<ReduxAction>) => ({
  fetchDemoData: () => dispatch(getDemoData()),
  fetchMockData: () => dispatch(getMockData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Demo);
