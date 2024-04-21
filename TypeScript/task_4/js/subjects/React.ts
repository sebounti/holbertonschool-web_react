namespace Subjects {
	export interface Teacher {
	  experienceTeachingReact?: number;
	}

	export class React extends Subject {
		getRequirements(): string {
			return "Here is the list of requirements for React subjects";
		}

		getAvailableTeacher() {
			if (this.teacher && this.teacher.experienceTeachingReact > 0) {
			  return 'Available Teacher: ' + this.teacher.FirstName;
			} else {
			  return 'No available teacher';
			}
		}
	}
}
