const getClass = (
  defaultClass: string,
  additionalClass: string | undefined
): string => `${defaultClass}${additionalClass ? ` ${additionalClass}` : ""}`;

export default getClass;
