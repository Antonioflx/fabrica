export default function fixString(string) {
	return string.length > 6 ? `${string.substring(0, 6)}.` : string;
}
