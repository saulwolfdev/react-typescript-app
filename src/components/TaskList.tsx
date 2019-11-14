import * as React from 'react';
import { Component } from 'react';
import { ITask } from './Task';

export interface TaskListProps {
	tasks:ITask[];
	deleteATask:(id:number)=>void;
}
 
export interface TaskListState {
	
}
 
class TaskList extends React.Component<TaskListProps, any> {
	constructor(props: TaskListProps) {
		super(props);
		// this.state = { :  };
	}
	render():JSX.Element[] { 
		return this.props.tasks.map((task:ITask,i:number)=>{
			return(
				<ul key={task.id}>
					<li>{task.title}</li>
					<li>{task.description}</li>
					<button
						onClick={()=>this.props.deleteATask(task.id)}
					>delete</button>
				</ul>
			)
		})
	}
}
 
export default TaskList;