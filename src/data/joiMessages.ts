interface joiStringMessageProps {
    name: string,
    isRequired?: boolean,
    patternText?: string,
}

export const joiStringMessage = ({name, isRequired, patternText}: joiStringMessageProps) => {
	const obj = {
		'string.base': `"${name}" needs to be a string. `,
		'string.max': `"${name}" cannot be longer than {#limit} characters. `,
		'string.min': `"${name}" cannot be shorter than {#limit} characters`,
	};
	if (isRequired) {
		obj['any.required'] = `"${name}" is required`;
	}
    if(patternText) {
		obj['string.pattern.base'] = `"${name}" ${patternText}`;
    }
	return obj;
};