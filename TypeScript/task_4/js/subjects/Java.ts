namespace Subjects {
	export interface Teacher {
		experienceTeachingJava?: number;
	}

	export class Java extends Subject {
		getRequirements(): string {
			return "Here is the list of requirements for Java subjects";
		}

		getAvailableTeacher() {
			if (this.teacher && this.teacher.experienceTeachingJava > 0) {
				return 'Available Teacher: ' + this.teacher.FirstName;
			} else {
				return 'No available teacher';
			}
		}
	}
}
