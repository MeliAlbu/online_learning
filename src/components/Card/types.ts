import React from "react";

export interface CardProps {
	title?: string;

	subtitle?: string;
	isNew?: boolean;
	isLate?: boolean;
	isInProgress?: boolean;
	completed?: boolean;
	/**
	 * Si se aplica el componente toma estado de error
	 */
	error?: boolean;
	/**
	 * Si se aplica el componente toma estado de éxito
	 */
	success?: boolean;
	/**
	 * Si se aplica el componente se deshabilita
	 */
	disabled?: boolean;
	/**
	 * Convierte el input en un text-area multilínea que se ajusta al texto ingresado
	 */
	multiline?: boolean;
	/**
	 * En el caso que se lo quiera hacer con altura fija se puede especificar la cantidad de filas requerida (requiere que multiline esté activo)
	 */
	rows?: string | number;
	/**
	 * Por default (campo vacío/no ingresado) tiene 320px de ancho, con valor `"sm"` pasa a 128px de ancho. Overrideable al aplicar parámetro fullWidth
	 */
	size?: string | null;
	/**
	 * Hace que el componente ocupe el 100% del ancho
	 */
	noBorder?: boolean | null;
	/**
	 * Hace que el componente ocupe el 100% del ancho
	 */
	fullWidth?: boolean;
	/**
	 * Agrega ícono posicionado al final del input. Este debe ser un componente de react-feather.
	 */
	endIcon?: React.ReactElement;
	/**
	 * Agrega ícono posicionado al principio del input. Este debe ser un componente de react-feather.
	 */
	startIcon?: React.ReactElement;
	/**
	 * ID del componente (Se aplica sobre el `input`)
	 */
	id?: string;
	/**
	 * Texto para el label del Input
	 */

	value?: string | number;
}
