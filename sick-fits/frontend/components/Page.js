import PropTypes from 'prop-types';
import Header from "./Header";

export default function Page(props) {
  return (
    <div>
      <Header></Header>
      <h2>I am the page component</h2>
      {props.children}
    </div>
  )
}

Page.PropTypes = {
  cool: PropTypes.string,
  children: PropTypes.any,
}