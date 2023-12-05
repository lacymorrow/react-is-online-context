import { type Meta, type StoryFn } from "@storybook/react";
import React from "react";
import { useIsOnline } from "./use-is-online-hook";

export const DefaultComponent = (props: any) => {
	const { isOnline, isLoading, error } = useIsOnline(props);
	return (
		<div>
			<a href="https://github.com/sindresorhus/is-online">
				See is-online on GitHub for more information.
			</a>
			<p>isOnline: {isOnline ? "true" : "false"}</p>
			<p>isLoading: {isLoading ? "true" : "false"}</p>
			<p>error: {error && String(error)}</p>
		</div>
	);
};

// More on Timeout export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "lacymorrow/react-is-online-context",
	component: DefaultComponent,
} as Meta<typeof DefaultComponent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof DefaultComponent> = (args) => (
	<DefaultComponent {...args} />
);

export const Options = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Options.args = {
	timeout: 5000,
	ipVersion: 4,
};

export const Timeout = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Timeout.args = {
	timeout: 5000,
};

export const IP_Version = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
IP_Version.args = {
	ipVersion: 6,
};
