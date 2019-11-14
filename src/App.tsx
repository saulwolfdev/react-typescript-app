
import * as React from 'react';
import TaskForm from './components/TaskFrom';
import {ITask} from "./components/Task";

export default class App extends React.Component<IProps,IState> {
	constructor(props:IProps){
		super(props);
		this.state={
			tasks:[]
		};
	}

	public addNewAtask(task:ITask):void{
			this.setState({
				tasks:[...this.state.tasks,task]
			});
			console.log(this.state)
	}
	public render() {
		return (
			<div>
				<TaskForm addNewAtask={this.addNewAtask.bind(this)}/>
			</div>
		);
	}
}
export interface IProps{ 
		title: string;
}
export interface IState{
	tasks:ITask[];
}
