import { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PropTypes from 'prop-types';
import {
  SearchBar,
  SearchForm,
  Input,
  SearchBtn,
  StyledIcon,
  SearchFormBtnLabel,
} from './SearchBarStyled';
export default class SearhBar extends Component {
  state = {
    searchQuery: '',
  };

  handleChange = evt => {
    this.setState({ searchQuery: evt.currentTarget.value.toLowerCase() });
  };
  handleSubmit = evt => {
    evt.preventDefault();
    if (this.state.searchQuery.trim() === '') {
      toast.error('Please enter something');
      return;
    }
    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };
  render() {
    return (
      <SearchBar>
        <SearchForm onSubmit={this.handleSubmit}>
        <SearchBtn type="submit">
          <StyledIcon />
            <SearchFormBtnLabel>Search</SearchFormBtnLabel>
          </SearchBtn>
          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="serchQuery"
            value={this.state.searchQuery}
            onChange={this.handleChange}
          />
          
        </SearchForm>
      </SearchBar>
    );
  }
}
SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};