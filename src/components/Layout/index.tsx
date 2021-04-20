type LayoutProps = React.PropsWithChildren<unknown>;
const Layout = (props: LayoutProps) => {
	return (
		<main>
			<nav>menu</nav>
			{props.children}
		</main>
	);
};

export default Layout;
