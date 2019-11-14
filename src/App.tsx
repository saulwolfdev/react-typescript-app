
import * as React from 'react';
import TaskForm from './components/TaskFrom';
import { ITask } from "./components/Task";
import TaskList from './components/TaskList';

export default class App extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {
			tasks: []
		};
		this.deleteATask = this.deleteATask.bind(this);
	}

	public addNewAtask(task: ITask): void {
		this.setState({
			tasks: [...this.state.tasks, task]
		}, () => console.log("ESTADO ACTUALIZADO", this.state));
	}
	public deleteATask(id: number) {
		const tasks: ITask[] = this.state.tasks.filter((task: ITask) => task.id !== id);
		console.log(tasks)
		this.setState({tasks})
	}
	public render() {
		return (
			<div>
				<TaskForm addNewAtask={this.addNewAtask.bind(this)} />
				<TaskList tasks={this.state.tasks}
					deleteATask={this.deleteATask.bind(this)}
				/>
			</div>
		);
	}
}
export interface IProps {
	title: string;
}
export interface IState {
	tasks: ITask[];
}
