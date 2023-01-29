import React from "react";
import '../styles/Button.css'

function Button(props) {
	const isOperator = valor => {
		return isNaN(valor) && (valor !== '.') && (valor !== '=');
	};
	
	if (isOperator(props.children)) {
		return (
			<button
				className='button-container operator'
				onClick={() => props.managerClick(props.children)}>
					{props.children}
			</button>
		);
	} else {
		return (
			<button
				className='button-container'
				onClick={() => props.managerClick(props.children)}>
					{props.children}
				</button>
		)
	}
}

export default Button;