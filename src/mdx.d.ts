/**
 * In order to import .mdx file without eslint error.
 */
declare module '*.mdx' {
	import { ComponentType } from 'react';
	const MDXComponent: ComponentType;
	export default MDXComponent;
}
