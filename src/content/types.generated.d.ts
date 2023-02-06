declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		typeof entryMap[C][keyof typeof entryMap[C]] & Render;

	type BaseCollectionConfig<S extends import('astro/zod').ZodRawShape> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<import('astro/zod').ZodObject<S>>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends import('astro/zod').ZodRawShape>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	export function getEntry<C extends keyof typeof entryMap, E extends keyof typeof entryMap[C]>(
		collection: C,
		entryKey: E
	): Promise<typeof entryMap[C][E] & Render>;
	export function getCollection<
		C extends keyof typeof entryMap,
		E extends keyof typeof entryMap[C]
	>(
		collection: C,
		filter?: (data: typeof entryMap[C][E]) => boolean
	): Promise<(typeof entryMap[C][E] & Render)[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		import('astro/zod').ZodObject<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			injectedFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"blog": {

"Vegan-Smoothie-Bowl.md": {
  id: "Vegan-Smoothie-Bowl.md",
  slug: "Vegan-Smoothie-Bowl",
  body: string,
  collection: "blog",
  data: any
},
"Vegan-tofu-scramble-with-veggies.md": {
  id: "Vegan-tofu-scramble-with-veggies.md",
  slug: "Vegan-tofu-scramble-with-veggies",
  body: string,
  collection: "blog",
  data: any
},
"example-post.md": {
  id: "example-post.md",
  slug: "example-post",
  body: string,
  collection: "blog",
  data: any
},
"vegan-avocado-toast.md": {
  id: "vegan-avocado-toast.md",
  slug: "vegan-avocado-toast",
  body: string,
  collection: "blog",
  data: any
},
"vegan-lentil-soup.md": {
  id: "vegan-lentil-soup.md",
  slug: "vegan-lentil-soup",
  body: string,
  collection: "blog",
  data: any
},
"vegan-pencakes-with-Fresh-Berries.md": {
  id: "vegan-pencakes-with-Fresh-Berries.md",
  slug: "vegan-pencakes-with-Fresh-Berries",
  body: string,
  collection: "blog",
  data: any
},
},
	};

	type ContentConfig = never;
}
