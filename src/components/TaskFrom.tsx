import * as React from 'react';
import { ITask } from "./Task";
export interface TaskFormProps {
	addNewAtask: (task: ITask) => void;
}

export interface TaskFormState {
	title: string;
	description: string;
}

export default class TaskForm extends React.Component<TaskFormProps, any> {
	constructor(props: TaskFormProps) {
		super(props);
		this.state = {
			title: "",
			description: ""
		};
	}
	public handleNewTask(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
	
		const newTask: ITask = {
			id: this.getCurrentTimeStamp(),
			title: this.state.title,
			description: this.state.description,
			completed: false
		}

		this.props.addNewAtask(newTask);
		this.setState({title:"",description:""})
		console.log(newTask);
		console.log("this.handleNewTask===OK")
	}

	public getCurrentTimeStamp(): number {
		// return new Date().getTime();
		const date: Date = new Date();
		return date.getTime();

	}
	handleInputChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
		e.preventDefault();
		const { value, name } = e.target;
		this.setState({
			[name]: value
		})
		console.log(this.state);
		console.log("this.handleInputChange===OK");
	}
	public render() {
		return (
			<form onSubmit={e => this.handleNewTask(e)}>
				<input
					name="title"
					placeholder="task"
					value={this.state.title}
					onChange={e => this.handleInputChange(e)} />
				<textarea
					onChange={e => this.handleInputChange(e)}
					name="description"
					value={this.state.description}
					placeholder="description"></textarea>
				<button 
				type="submit">send</button>
			</form>
		);
	}
}
