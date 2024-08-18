import React from "react";

const styles = {
  item: { alignItems: "center", display: "inline-flex", gap: "inherit" },
  list: {
    alignItems: "center",
    display: "flex",
    gap: "inherit",
    listStyle: "none",
    wordWrap: "break-word",
  },
  separator: { alignItems: "center", display: "inline-flex" },
};

const BreadcrumbContext = React.createContext({ separator: null });
const useBreadcrumbContext = () => {
  const context = React.useContext(BreadcrumbContext);
  if (!context)
    throw new Error(
      "BreadcrumbItem, Breadcrumblink, BreadcrumbSeparator must be used within a Breadcrumb"
    );
  return context;
};

const BreadcrumbItemContext = React.createContext({
  isCurrent: false,
  isLast: false,
});
const useBreadcrumbItemContext = () => {
  const context = React.useContext(BreadcrumbItemContext);
  if (!context)
    throw new Error(
      "BreadcrumbItem, Breadcrumblink, BreadcrumbSeparator must be used within a Breadcrumb"
    );
  return context;
};

function BreadcrumbSeparator(props) {
  const { children, style, role = "presentation", ...restProps } = props;
  const { separator } = useBreadcrumbContext();
  const { isLast } = useBreadcrumbItemContext();

  if (!separator || isLast) return null;
  return (
    <span role={role} style={{ ...styles.separator, ...style }} {...restProps}>
      {children ?? separator}
    </span>
  );
}

function BreadcrumbLink(props) {
  const { as = "a", ...restProps } = props;
  const { isCurrent } = useBreadcrumbItemContext();

  const Component = isCurrent ? "span" : as;
  if (isCurrent) delete restProps.href;

  return (
    <Component {...restProps} aria-current={isCurrent ? "page" : undefined} />
  );
}

function BreadcrumbItem(props) {
  const { isCurrentPage, style, children, ...restProps } = props;

  return (
    <li style={{ ...styles.item, ...style }} {...restProps}>
      {children}
      <BreadcrumbSeparator />
    </li>
  );
}

function Breadcrumb(props) {
  const { separator, children, ...restProps } = props;
  const count = React.Children.count(children);

  return (
    <BreadcrumbContext.Provider value={{ separator }}>
      <nav aria-label="Breadcrumb" {...restProps}>
        <ol style={styles.list}>
          {React.Children.map(children, (child, index) => {
            const isCurrent =
              React.isValidElement(child) &&
              (child.props.isCurrentPage ?? false);
            const isLast = count === index + 1;

            return (
              <BreadcrumbItemContext.Provider
                value={{ isCurrent, isLast }}
                key={index}
              >
                {child}
              </BreadcrumbItemContext.Provider>
            );
          })}
        </ol>
      </nav>
    </BreadcrumbContext.Provider>
  );
}

export { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator };
