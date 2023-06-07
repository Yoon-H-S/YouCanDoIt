import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
	height: 24px;
	border-radius: 5px;
	border: 1px solid #b1b1b1;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	font-size: 10px;
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	background-color: ${(props) => props.color || 'white'};
	& > span {
		font-size: 10px;
		position: relative;
		top: -1px;
		color: ${(props) => (props.color ? 'white' : 'black')};
	}
`;

function Button(props) {
	const { title, onClick, width, height, color, type } = props;

	return (
		<StyledButton
			onClick={onClick}
			width={width}
			height={height}
			color={color}
			type={type}>
			<span>{title || 'button'}</span>
		</StyledButton>
	);
}

export default Button;
