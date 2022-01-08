import React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup } from '@testing-library/react';
import App from './App';
import { combineReducers, createStore } from 'redux';
import clickReducer from './redux/reducers';
import userEvent from '@testing-library/user-event';

const renderWithRedux = (
  component,
  { initialState, store = createStore(combineReducers({ clickReducer }), initialState) } = {}) => {
    return {
      ...render(<Provider store={store}>{component}</Provider>),
      store,
    }
  }

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should has a button and a text 0', () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonAdicionar = queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(queryByText('0')).toBeInTheDocument();
  })

  test('the value of clicks on the screen must be equal to the amount of clicks of the initial state', () => {
    const { queryByText } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 } } });

    expect(queryByText('5')).toBeInTheDocument();
  });

  test('a click in a button should increment the value of clicks', () => {
    const { queryByText, getByRole } = renderWithRedux(<App />);

    userEvent.click(getByRole('button', { name: /clique aqui/i }));

    expect(queryByText('1')).toBeInTheDocument();
  });

  test('a click in a button should increment the value of clicks of the initial state', () => {
    const { queryByText, getByRole } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 10 } } });

    userEvent.click(getByRole('button', { name: /clique aqui/i }));

    expect(queryByText('11')).toBeInTheDocument();
  });
});
