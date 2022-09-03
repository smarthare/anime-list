export const today = () => {
  const date = new Date();
  return `Today is the ${date.getDate()}th of ${date.toLocaleString("default", {
    month: "long",
  })}`;
};

export const todayMobile = () =>
  `${new Date().toLocaleString("default", {
    month: "short",
    day: "numeric",
  })}th`;
