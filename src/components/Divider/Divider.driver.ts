export const dividerDriverFactory = ({element, eventTrigger}) => {
  return {
    exists: () => !!element
  };
};
