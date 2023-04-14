import { Typography } from '@mui/material';
import React from 'react';

interface ITitle {
	variant: any;
	align: 'center' | 'inherit' | 'justify' | 'left' | 'right';
	children: React.ReactNode;
	color?: string;
	isBlue?: boolean;
}

export const Title: React.FC<ITitle> = ({
	variant,
	align,
	children,
	color,
}) => {
	return (
		<Typography variant={variant} align={align}>
			{children}
		</Typography>
	);
};
