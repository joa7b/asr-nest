export function validationError(error: any) {
  const isArrayOfErrors = Array.isArray(error);

  if (isArrayOfErrors) {
    const message = error.map((validationError) =>
      Object.values(validationError.constraints),
    );

    throw new Error(message.toString());
  } else {
    throw new Error(error);
  }
}
