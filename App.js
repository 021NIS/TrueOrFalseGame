import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// Array of background colors
const bcGround = ['red', 'yellow', 'blue', 'green'];

// Array of title colors
const title = ['red', 'yellow', 'blue', 'green'];

export default class HelloWorldApp extends Component {
	// Ставим рандомный цвет для заднего фона и текста
	state = {
		backgroundColor: bcGround[Math.floor(Math.random() * bcGround.length)],
		title: title[Math.floor(Math.random() * title.length)],
		point: 0,
		lives: 3
	};

	handleClick = answer => {
		// Переменные
		let background = this.state.backgroundColor;
		let title = this.state.title;

		// У переменной isEqual, значение либо true либо false
		const isEuqal = background === title;

		// Ecли количество жизни равно 0, то выходим из фунции
		if (this.state.lives === 0) {
			return;
		}

		// Проверяем ответ пользователя
		if ((isEuqal && answer) || (!isEuqal && !answer)) {
			this.setState({ point: ++this.state.point });
		} else {
			this.setState({ lives: --this.state.lives });
		}

		// Меняем цвет
		this.changeColors();
	};

	// Функция меняет цвет фона и текст рандомным образом
	changeColors = () => {
		let randomBackgroundColor =
			bcGround[Math.floor(Math.random() * bcGround.length)];
		let randomTitle = title[Math.floor(Math.random() * title.length)];

		this.setState({
			backgroundColor: randomBackgroundColor,
			title: randomTitle
		});
	};

	render() {
		return (
			<View style={{ flex: 1 }}>
				<View
					style={{ flex: 5, justifyContent: 'center', alignItems: 'center' }}
				>
					<Text>Your score: {this.state.point}</Text>
					<Text>Your lives: {this.state.lives}</Text>
					<View
						style={{
							backgroundColor: this.state.backgroundColor,
							width: 220,
							height: 120,
							justifyContent: 'center',
							alignItems: 'center'
						}}
					>
						<Text style={{ fontSize: 30, color: 'white' }}>
							{this.state.title}
						</Text>
					</View>
				</View>
				<View
					style={{
						flex: 5,
						justifyContent: 'center',
						alignItems: 'center'
					}}
				>
					<View
						style={{
							flexDirection: 'row'
						}}
					>
						{/* Нажатие кнопки true */}
						<TouchableOpacity
							onPress={() => this.handleClick(true)}
							style={{ margin: 15 }}
						>
							<View
								style={{
									width: 100,
									height: 45,
									backgroundColor: 'green',
									justifyContent: 'center',
									alignItems: 'center'
								}}
							>
								<Text>TRUE</Text>
							</View>
						</TouchableOpacity>
						{/* Нажатие кнопки false */}
						<TouchableOpacity
							onPress={() => this.handleClick(false)}
							style={{ margin: 15 }}
						>
							<View
								style={{
									width: 100,
									height: 45,
									backgroundColor: 'red',
									justifyContent: 'center',
									alignItems: 'center'
								}}
							>
								<Text>FALSE</Text>
							</View>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		);
	}
}
