module.exports.templateTags = [
	{
		name: 'encode_uri',
		displayName: 'encode_uri',
		description: 'Encode a URI component that is either a literal or a variable',
		args: [
			{
				displayName: 'Literal or variable value',
				description: 'A plain string that will be encoded',
				type: 'string'
			}
		],
		async run (context, literal) {
			return encodeURIComponent(literal);
		}
	}
]
