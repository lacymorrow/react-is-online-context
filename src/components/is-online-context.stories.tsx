import { type Meta, type StoryFn } from "@storybook/react";

import React from "react";
import {
	IsOnlineContext as Context,
	IsOnlineContextProvider,
} from "./is-online-context";
import { useIsOnline } from "./use-is-online-hook";

const ComponentValues = (props: any) => {
	return (
		<>
			<h1>
				Connect/Disconnect from internet to see the values update.
			</h1>
			<div>{JSON.stringify(props, null, 2)}</div>
			<p>
				<a href="https://github.com/lacymorrow/react-is-online-context">
					Why use context over a hook?
				</a>
			</p>
			<p>
				See{" "}
				<a href="https://github.com/sindresorhus/is-online">
					is-online
				</a>{" "}
				for more information.
			</p>
		</>
	);
};

const ComponentUsingHooks = (props: any) => {
	const { isOnline, isLoading, error } = useIsOnline(props);

	return (
		<>
			<ComponentValues
				isOnline={isOnline}
				isLoading={isLoading}
				error={error}
			/>
		</>
	);
};
const ComponentUsingContext = () => {
	const { isOnline, isLoading, error } = React.useContext(Context);

	return (
		<>
			<ComponentValues
				isOnline={isOnline}
				isLoading={isLoading}
				error={error}
			/>
		</>
	);
};

const AppComponent = (props: any) => {
	return (
		<IsOnlineContextProvider {...props}>
			<ComponentUsingContext />
		</IsOnlineContextProvider>
	);
};

// More on Timeout export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "lacymorrow/react-is-online-context",
	component: AppComponent,
} as Meta<typeof AppComponent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof AppComponent> = (args: any) => (
	<AppComponent {...args} />
);

const HookTemplate: StoryFn<typeof AppComponent> = (args: any) => (
	<ComponentUsingHooks {...args} />
);

export const IsOnlineContext = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
IsOnlineContext.args = {
	timeout: 5000,
	ipVersion: 4,
};

export const useIsOnlineHook = HookTemplate.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
useIsOnlineHook.args = {
	timeout: 5000,
	ipVersion: 4,
};
