interface DirectorInterface {
	WorkForHome(): string;
	getCoffeeBreak(): string;
	workDirectorTasks(): string;
}

interface TeacherInterface {
	WorkForHome(): string;
	getCoffeeBreak(): string;
	workTeacherTasks(): string;
}

export const Director = class Director implements DirectorInterface {
	WorkForHome(): string {
		return "Director: Working from home";
	}
	getCoffeeBreak(): string {
		return "Director: Taking a coffee break";
	}
	workDirectorTasks(): string {
		return "Director: Working on director tasks";
	}
}

export const Teacher = class Teacher implements TeacherInterface {
	WorkForHome(): string {
		return "Teacher: Working from home";
	}
	getCoffeeBreak(): string {
		return "Teacher: Taking a coffee break";
	}
	workTeacherTasks(): string {
		return "Teacher: Working on teacher tasks";
	}
}

export function createEmployee(salary: number | string): DirectorInterface | TeacherInterface {
	if (typeof salary === 'number' && salary < 500) {
		return new Teacher();
	}
	return new Director();
}

export function isDirector(employee: DirectorInterface | TeacherInterface): employee is DirectorInterface {
	return (employee as DirectorInterface).workDirectorTasks !== undefined;
  }

export function executeWork(employee: DirectorInterface | TeacherInterface): string {
	if(isDirector(employee)) {
	  return employee.workDirectorTasks();
	} else {
	  return employee.workTeacherTasks();
	}
  }

  export type Subjects = 'Math' | 'History';

  export function teachClass(todayClass:Subjects): string {
	if (todayClass === 'Math') {
	  return 'Teaching Math'
	} else if (todayClass === 'History') {
	  return 'Teaching History'
	}
  }
