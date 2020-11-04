// React
import React, { FC } from "react";
// MUI Components
import { Button } from "@material-ui/core";
// Types
import { CardProps } from "./types";
// Icons
import Lectura from "../../assets/Lectura.svg";
import DonutLargeRoundedIcon from "@material-ui/icons/DonutLargeRounded";
import CalendarTodayOutlinedIcon from "@material-ui/icons/CalendarTodayOutlined";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
// Styles
import "./styles.scss";

/**
 * ### Nombre del componente: `<Card>`
 */

const Card: FC<CardProps> = ({
	title = "",
	subtitle = "",
	isNew = false,
	isLate = false,
	isInProgress = false,
	completed = false,
}) => {
	return (
		<>
			<div className="card">
				<div className="card__container--one">
					<img src={Lectura} alt="Imagen de libro" />
				</div>

				<div className="card__container--two">
					<div className="card__text">
						<div className="card__headers">
							<span className="card__title">{title}</span>
							<span className="card__subtitle">{subtitle}</span>
							<div className="card__tags">
								{isNew == true && <span className="card__new">NUEVA!</span>}
								{isLate == true && <span className="card__late">Estás demorad@!</span>}
							</div>
						</div>

						<div className="date">
							<CalendarTodayOutlinedIcon />
							<div className="date__information">
								<span className="date__title">Fecha de entrega:</span>
								<span className="date__content">15 de Abril</span>
							</div>
						</div>
					</div>

					<div className="card__progress">
						{isInProgress == true && (
							<div className="card__progress">
								<DonutLargeRoundedIcon />
								<span className="card__progress"> Progreso: 25% </span>
							</div>
						)}
						{completed == true && (
							<div className="completed">
								<CheckCircleIcon className="completed__icon" />
								<span className="completed__text"> Actividad completada. </span>
							</div>
						)}
					</div>
				</div>

				<div className="card__container--three">
					<Button variant="outlined" className="button">
						<span className="button__text">Continuar</span>
					</Button>
				</div>
			</div>

			<div className="tag">
				<span className="tag__button">Lengua</span>
			</div>
		</>
	);
};

export default Card;
