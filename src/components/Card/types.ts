import React from "react";

export interface CardProps {
	title?: string;
	subtitle?: string;
	isNew?: boolean;
	isLate?: boolean;
	isInProgress?: boolean;
	completed?: boolean;
}
