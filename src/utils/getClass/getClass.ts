const getClass = (
  defaultClass: string,
  additionalClass: string | undefined
): string => {
  const hasAdditionalClass = additionalClass ? ` ${additionalClass}` : "";
  return `${defaultClass}${hasAdditionalClass}`;
};

export default getClass;
