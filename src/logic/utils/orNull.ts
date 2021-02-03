import ternary from 'logic/utils/ternary';

const orNull = <T>(condition: boolean, truthy: T): T | null =>
	ternary(condition, truthy, null);

export default orNull;
