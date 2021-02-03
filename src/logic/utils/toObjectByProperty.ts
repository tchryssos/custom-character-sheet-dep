type ObjWithSharedValue = {
	[key: string]: string;
} & {
	[key: string]: unknown;
};

type KeyedSharedValueObj = {
	[key: string]: ObjWithSharedValue;
};

const toObjectByProperty = (
	objArray: ObjWithSharedValue[],
	sharedKey: string,
): KeyedSharedValueObj =>
	objArray.reduce(
		(acc: KeyedSharedValueObj, currentObj: ObjWithSharedValue) => ({
			...acc,
			[currentObj[sharedKey]]: currentObj,
		}),
		{},
	);

export default toObjectByProperty;
