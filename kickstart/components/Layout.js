import React  from 'react';
import { Container } from 'semantic-ui-react';
import Header from './header';


const Layout = (props) => {
	return(
		<Container>
			<Header />
			{props.children}
		</Container>
	);
};

 
export default Layout;

/*
export default props => {
	return(
		<div>
			<h1>I'm a header</h1>
			{props.children}
			<h1>I'm a footer</h1>
		</div>
	);
};
*/